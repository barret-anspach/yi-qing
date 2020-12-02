import * as types from '../mutation-types'
import * as mutators from '../state-mutators'
import Color from 'color'
import {includes, random, sum, take, takeRight, uniqueId} from 'lodash'

function delay(fn, t) {
    // private instance variables
    var queue = [], self, timer;

    function schedule(fn, t) {
        timer = setTimeout(function() {
            timer = null;
            fn();
            if (queue.length) {
                var item = queue.shift();
                schedule(item.fn, item.t);
            }
        }, t);
    }
    self = {
        delay: function(fn, t) {
            // if already queuing things or running a timer,
            //   then just add to the queue
            if (queue.length || timer) {
                queue.push({fn: fn, t: t});
            } else {
                // no queue or timer yet, so schedule the timer
                schedule(fn, t);
            }
            return self;
        },
        cancel: function() {
            clearTimeout(timer);
            queue = [];
            return self;
        }
    };
    return self.delay(fn, t);
}

let _yarrowStalksCount = 50
const _initialState = {
    color: '#000000',
    initialized: false,
    dividing: false,
    sequence: [],
    lines: [],
    lineIndex: 0,
    stalksCount: _yarrowStalksCount,
    stalks: new Array(_yarrowStalksCount)
        .fill()
        .map((item, index) => {
            return {
                id: index,
                role: null,
                value: 0
            }
        }),
    divisionCount: 0,
    thrice: new Array(0),
    count: 0
}

const state = Object.assign({}, _initialState)
const getters = {
    color: (state) => state.color,
    isInitialized: (state) => state.initialized,
    isDividing: (state) => state.dividing,
    isCompleted: (state) => state.lines.length === 6,
    lines: (state) => state.lines,
    line: (state) => state.lines[state.lineIndex],
    stalks: (state) => state.stalks,
    observedStalks: (state) => state.stalks.filter(s => !includes(['observer', 'reserve'], s.role)),
    LH: (state) => state.stalks.filter(s => s.role === 'LH'),
    RH: (state) => state.stalks.filter(s => s.role === 'RH'),
    sequence: (state) => state.sequence
}
const actions = {
    setColor({getters, commit}) {
        // Need :root element to setProperty('--color-main')
        let _root = document.getElementById('app')
        let _color = Color(getters.color)
        let _weight = getters.lines.length / 6 || 1
        // Just set the color of the trigram if you already have it
        if (getters.sequence.length === 3) {
            _color = Color(getters.trigramLower.color).mix(_color, _weight)
        } else if (getters.sequence.length === 6) {
            _color = Color(getters.trigramUpper.color).mix(_color, _weight)
        } else {
            let _seqStart = getters.sequence.length <= 3 ? 0 : 3
            let _seqEnd = getters.sequence.length <= 3 ? 3 : 6
            let _seqString = getters.sequence.slice(_seqStart, _seqEnd).toString()
            let _matchTrigrams = getters.trigrams
                .filter(t => {
                    // return trigram if it contains the same sequence as getters.sequence
                    return t.sequence.toString().startsWith(_seqString)
                })
                .map(t => Color(t.color))
            _color = _matchTrigrams.reduce((acc, c) => acc.mix(c, 1 / _matchTrigrams.length), _color)
        }
        _root.style.setProperty('--color-main', _color.hex())
        return commit('SET_COLOR', _color.hex())
    },
    resetStalks({commit}) {
        commit('SET_COLOR', {color: _initialState.color})
        return commit('RESET_STALKS')
    },
    removeObserver({commit}) {
        return commit('LINE_OBSERVER', {id: 49, role: 'observer'})
    },
    updateLineCount({commit}, count) {
        return commit('LINE_STALKS_COUNT', count)
    },
    divideLH({getters, commit}, {rangeOfError}) {
        const LH = take(
            getters.observedStalks,
            Math.round((Math.floor(getters.observedStalks.length + Math.round(Math.random())) / 2) + rangeOfError) - 1
        )
        for (let i = 0; i < LH.length; i++) {
            commit('LINE_LH', {id: LH[i].id, role: 'LH'})
        }
        return LH
    },
    divideRH({getters, commit}) {
        const RH = takeRight(getters.observedStalks, getters.observedStalks.length - getters.LH.length)
        for (let i = 0; i < RH.length; i++) {
            commit('LINE_RH', {id: RH[i].id, role: 'RH'})
        }
        return RH
    },
    reserveSecondStalk({state, getters, commit}) {
        const second = getters.RH[0]
        // const second = getters.RH[getters.RH.length - 1]
        return commit('LINE_RESERVE', {id: second.id, role: 'reserve', value: state.divisionCount})
    },
    reserve({state, getters, commit}) {
        // Starting with LINE_LH, group stalks by four.
        // Reserve remainder stalks in LINE_LH between
        // ring and middle fingers.
        // Repeat above with LINE_RH. then place remaining
        // stalks from LINE_RH between middle and index
        // fingers of LINE_LH.
        const LHmod4 = getters.LH.length % 4 === 0 ? 4 : getters.LH.length % 4
        const RHmod4 = getters.RH.length % 4 === 0 ? 4 : getters.RH.length % 4
        commit('LINE_COUNT', LHmod4 + RHmod4 + 1)
        return delay(() => {
            const reservedLH = take(getters.LH, LHmod4)
            for (let i = 0; i < reservedLH.length; i++) {
                commit('LINE_RESERVE', {id: reservedLH[i].id, role: 'reserve', value: state.divisionCount})
            }
        }, 0)
            .delay(() => {
                const reservedRH = takeRight(getters.RH, RHmod4)
                for (let i = 0; i < reservedRH.length; i++) {
                    commit('LINE_RESERVE', {id: reservedRH[i].id, role: 'reserve', value: state.divisionCount})
                }
            }, 50)
            .delay(() => {
                // Set reserve aside in a bundle.
                commit('LINE_THRICE', state.count)
                // Gather unreserved stalks together.
                commit('LINE_STALKS_COUNT', getters.observedStalks.length - state.count)
            }, 50)
    },
    divide({getters, dispatch, commit}, init = false) {
        commit('LINE_DIVISION_INCREMENT', state.divisionCount + 1)
        // Inexact division is the source of diversity.
        // N.B. Based on a small sample of trials,
        // the range of accurate division of 49 stalks
        // to their hypothetical midpoint, 24.5,
        // is ±1.8 (really, 1.8)
        const rangeOfError = random(-2.5, 2.5) // Previously, 2.5. Possibly we should randomly assign value within range 0 to 3
        // First, divide stalks roughly into two piles.
        delay(() => init ? dispatch('updateLineCount', getters.observedStalks.length) : null, 0)
            .delay(() => dispatch('divideLH', {rangeOfError}), 150)
            .delay(() => dispatch('divideRH'), 150)
            // Then take 1 stalk from LINE_RH, reserve it between
            // LINE_LH pinky and ring finger (the "second stalk").
            .delay(() => dispatch('reserveSecondStalk'), 150)
            // TODO: We take mod4 of LINE_LH and LINE_RH here,
            // get the sum of reserved stalks, and finally
            // 'nullify' roles of remaining LINE_LH/LINE_RH stalks
            .delay(() => dispatch('reserve'), 150)
    },
    addLine({state, dispatch, commit}) {
        // A hexagram has six lines.
        if (state.lines.length === 6) return
        else if (state.lines.length === 0) commit('RESET_STALKS')
        // Disable "divide" button when adding a line
        commit('LINE_DIVIDING')
        // Set one of your 50 yarrow stalks aside:
        // the observer ("the unchanging ground of being").
        delay(() => {
            // The observer should be left in place for the duration.
            if (!state.initialized) {
                commit('LINE_INITIALIZED', true)
                _yarrowStalksCount = 49
            }
            dispatch('removeObserver')
        }, 0)
            // Repeat stalk division three times.
            .delay(() => dispatch('divide', true), 0)
            .delay(() => dispatch('divide'), 750)
            .delay(() => dispatch('divide'), 750)
            .delay(() => {
                let _line = {id: uniqueId('line_'), value: 1, changing: false}
                // Determine line by counting reserved stalks.
                switch (sum(state.thrice)) {
                    case 13:
                        // Changing yang: solid becomes broken
                        _line.value = 1;
                        _line.changing = true
                        break
                    case 17:
                        // Yin: broken
                        _line.value = 0
                        break
                    case 21:
                        // Yang: solid
                        _line.value = 1
                        break
                    case 25:
                        // Changing yin: broken becomes solid
                        _line.value = 0
                        _line.changing = true
                        break
                }
                commit('LINE_ADD', _line)
                commit('SEQUENCE_ADD', _line.value)
                commit('LINE_INCREMENT')
            }, 1000)
            .delay(() => {
                dispatch('setColor')
                commit('RESET_STALKS_CONTINUING')
                commit('LINE_DIVIDING')
            }, 250)
    },
    resolveHexagramQuery ({state, commit, dispatch}, lines) {
        if (state.lines.length === 6) return
        lines.forEach(line => {
            commit('LINE_ADD', line)
            commit('SEQUENCE_ADD', line.value)
            dispatch('setColor')
        })
    }
}
const mutations = {
    [types.SET_COLOR]: mutators.set('color'),
    [types.SEQUENCE_ADD]: mutators.pushTo('sequence'),
    [types.LINE_ADD]: mutators.pushTo('lines'),
    [types.LINE_INITIALIZED]: mutators.set('initialized'),
    [types.LINE_DIVIDING]: mutators.toggle('dividing'),
    [types.LINE_DIVISION_INCREMENT]: mutators.set('divisionCount'),
    [types.LINE_STALKS_COUNT]: mutators.set('stalksCount'),
    [types.LINE_OBSERVER]: mutators.extendRecordInList('stalks', 'id'),
    [types.LINE_LH]: mutators.extendRecordInList('stalks', 'id'),
    [types.LINE_RH]: mutators.extendRecordInList('stalks', 'id'),
    [types.LINE_RESERVE]: mutators.extendRecordInList('stalks', 'id'),
    [types.LINE_COUNT]: mutators.set('count'),
    [types.LINE_THRICE]: mutators.pushTo('thrice'),
    [types.LINE_INCREMENT]: mutators.incrementListIndex('lineIndex', state.lines),
    [types.RESET_STALKS]: (state) => {
        return Object.assign(state, {
            ..._initialState,
            sequence: [],
            lines: [],
            stalks: [..._initialState.stalks],
            thrice: []
        })
    },
    [types.RESET_STALKS_CONTINUING]: (state) => {
        let observer = state.stalks
            .find(s => s.role === 'observer')
        let newStalks = state.stalks
            .filter(s => s.role !== 'observer')
            .map((item, index) => {
                return {
                    id: index,
                    role: null,
                    value: 0
                }
            })
        newStalks.push(observer)
        return Object.assign(state, {
            initialized: true,
            stalks: newStalks,
            stalksCount: _yarrowStalksCount,
            divisionCount: 0,
            thrice: new Array(0),
            count: 0
        })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
