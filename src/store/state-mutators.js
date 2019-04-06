// state-mutators.js
// https://itnext.io/reusable-vuex-mutation-functions-9b4920aa737b
// polyfill Array.prototype.findIndex and Object.assign
// if supporting IE
// *******************************************************************
// Helpers
// *******************************************************************
const last = xs => xs[xs.length -1]

// *******************************************************************
// Mutators
// *******************************************************************
// Set property on state
// setUser: set('user')
// commit('setUser', { name: 'foo' })
export const set = key => (state, val) => { state[key] = val }

// Set a value at a path within state
// Create objects and arrays as needed
// Path is an array, and array indices are numbers (not string numbers)
// setUserName: setPath(['user', 'name'])
// commit('setUserName', 'foo')
export const setPath = path => (state, val) => {
    const obj = path.slice(0, -1).reduce((acc, x, i) => {
        if (!(x in acc)) {
            acc[x] = typeof path[i + 1] === 'number' ? [] : {}
        }
        return acc[x]
    }, state)
    obj[last(path)] = val
}

// Toggle boolean in state
// toggleOpen: toggle('open')
// commit('toggleOpen')
export const toggle = key => state => { state[key] = !state[key] }

// For all key/value in propMap, state[key] = data[propMap[value]]
// Useful for picking error message
// setErrorA: pick({ errorA: 'message' })
// commit('setErrorA', new Error('foo'))
export const pick = propMap => (state, data) => {
    Object.keys(propMap).forEach(x => { state[x] = data[propMap[x]] })
}

// push an item onto a list
// addItem: pushTo('items')
export const pushTo = key => (state, val) => state[key].push(val)

// copy all key/values from data to state
// useful for resetting state to default values
// resetState: assignConstant(initialState)
// commit('resetState')
export const assignConstant = data => state =>
    Object.assign(state, data)

// remove item from list
export const omitFromList = key => (state, item) => {
    window.console.log('omitFromList key\t%s,\nitem:\n', key, item)
    const index = state[key].indexOf(item)
    window.console.log('omitFromList index:\n', index)
    if (index > -1) state[key].splice(index, 1)
}

// remove item from list by idKey
export const omitFromListById = (key, idKey = 'id') => (state, item) => {
    const index = state[key].findIndex(x => x[idKey] === item[idKey])
    if (index > -1) state[key].splice(index, 1)
}

// increment the index of a list argument or a list in state
export const incrementListIndex = (key, listOrKey) => state => {
    const list = Array.isArray(listOrKey)
        ? listOrKey
        : state[listOrKey]
    state[key] = (state[key] + 1) % list.length
}

// decrement the index of a list argument or a list in state
export const decrementListIndex = (key, listOrKey) => state => {
    const list = Array.isArray(listOrKey)
        ? listOrKey
        : state[listOrKey]
    state[key] = (((state[key] - 1) % list.length) + list.length) % list.length
}

// add or extend a record in a list
export const extendRecordInList = (key, idKey = 'id', valKey) =>
    (state, data) => {
        const id = data[idKey]
        const val = valKey ? data[valKey] : data
        const index = state[key].findIndex(x => x[idKey] === id)
        return index < 0
            ? state[key].push(val)
            : state[key].splice(
                index,
                1,
                Object.assign({}, state[key][index], val)
            )
    }

// add or replace a record in a list
export const replaceRecordInList = (key, idKey = 'id', valKey) =>
    (state, data) => {
        console.log('data', data)
        const id = data[idKey]
        const val = valKey ? data[valKey] : data
        const index = state[key].findIndex(x => x[idKey] === id)
        return index < 0
            ? state[key].push(val)
            : state[key].splice(index, 1, val)
    }
