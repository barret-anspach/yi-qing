<template>
  <div class="result" v-if="hexagram">
    <div class="number">&numero;{{hexagram.number}}.</div>
    <i-ching-hexagram @changing-select="doSomethingWithChangingValue"></i-ching-hexagram>
    <div class="title">
      <h5>{{hexagram.name}}&ensp;<span class="divider">/</span>&emsp;&emsp;{{hexagram.nameChinese}}</h5>
    </div>
    <transition-group tag="div" class="book-group" name="book-group">
      <div class="book" v-if="!changingLineToggled" key="saysSeesSuggests">
        <p v-html="hexagram.book.says"></p>
        <p><b>Sees</b>&emsp;<span v-html="hexagram.book.sees"></span></p>
        <p><b>Suggests</b>&emsp;<span v-html="hexagram.book.suggests"></span></p>
      </div>
      <div class="book" v-else :key="`changingLineMeaning${changingLineIndex}`">
        <p><b>Line {{changingLineIndex + 1}}.</b></p>
        <p v-html="changingLineText"></p>
      </div>
    </transition-group>

    <div id="nav">
      <router-link :to="{name: 'consult', params: {reset: true}}">Ask again</router-link>
    </div>
  </div>
</template>
<script>
  import iChingHexagram from '@/components/Hexagram'
  import { uniqueId } from 'lodash'
  import { mapGetters, mapActions } from 'vuex'
  export default {
      name: 'result',
      props: ['q'],
      components: {
        iChingHexagram
      },
      data () {
        return {
            changingLineIndex: undefined,
            changingLineToggled: false
        }
      },
      computed: {
          ...mapGetters([
              'color',
              'hexagram',
              'lines'
          ]),
          changingLineText () {
              if (this.changingLineToggled === false) return false
              return this.hexagram.changing.find(c => c.line === this.changingLineIndex).meaning
          }
      },
      methods: {
          ...mapActions([
              'resolveHexagramQuery'
          ]),
          doSomethingWithChangingValue ({ index }) {
              if (this.changingLineToggled && this.changingLineIndex === index) {
                  this.changingLineToggled = !this.changingLineToggled
                  this.changingLineIndex = undefined
              } else {
                  if (this.changingLineIndex === undefined) {
                      this.changingLineToggled = !this.changingLineToggled
                  }
                  this.changingLineIndex = index
              }
          }
      },
      beforeRouteEnter (to, from, next) {
          return next(vm => {
              // TODO: if route has query, we'll pull up the reading in question (if possible)
              if (vm.$route.query.q !== undefined) {
                  // Follows convention 0,1,1,0,1,0.
                  //    . for changing, comma-separated 1s (yang/solid) and 0s (yin/broken)
                  let qA = vm.$route.query.q.split(",")
                  return vm.resolveHexagramQuery(qA.map((l) => {
                      let _l = {
                          id: uniqueId('line_'),
                          changing: l.endsWith('.')
                      }
                      _l.value = parseInt(_l.changing ? l.slice(0, -1) : l)
                      return _l
                  }))
              }
              if (vm.hexagram === undefined) return vm.$router.push({name: 'introduction'})
              else {
                  return vm.$router.replace({
                      name: 'result',
                      query: {
                          q: vm.lines.map(line => {
                              return line.changing
                                  ? line.value + '.'
                                  : line.value.toString().join(',')
                          }),
                          color: vm.color
                      }
                  })
              }
          })
      }
  }
</script>
<style lang="scss" scoped>
  .result {
    margin: 12.5vmax 5vmax;
    display: grid;
    grid-template-columns: [hexagram-start title-start body-start] 1fr [body-end title-end hexagram-end];
    grid-template-rows: [hexagram-start] auto [hexagram-end title-start] auto [title-end body-start] 1fr [body-end];
    grid-column-gap: 10vmax;
    grid-row-gap: 1vmax;
    @media all and (min-width: 600px) {
      margin: 12.5vmax 5vmax 5vmax;
      grid-template-columns: [hexagram-start title-start] auto [title-end hexagram-end body-start] 1fr [body-end];
      grid-template-rows: [hexagram-start body-start] auto [hexagram-end title-start] 1fr [body-end title-end];
    }
  }
  .hexagram, .title, .book {
    transition: all 0.24s ease-in-out;
  }
  .hexagram {
    grid-area: hexagram;
    align-self: start;
    justify-self: center;
    margin: 1vmax auto 5vmax;
  }
  .title {
    grid-area: title;
    align-items: start;
    text-align: center;
    margin-bottom: 5vmax;
    .divider {
      font-weight: 400;
    }
    @media all and (min-width: 600px) {
      text-align: left;
    }
  }
  h5,
  h6 {
    font-size: 1em;
    margin: 0;
  }
  .book-group {
    display: contents;
  }
  .book {
    grid-area: body;
    //min-width: 100%;
    max-width: 60ex;
    text-align: left;
    p:first-child {
      margin-top: 0;
    }
  }
  .book-enter-active,
  .book-group-enter-active {
    transition: opacity 0.33s ease-in;
  }
  .book-leave-active,
  .book-group-leave-active {
    transition: opacity 0.33s ease-out;
  }
  .book-enter, .book-leave-to,
  .book-group-enter, .book-group-leave-to {
    opacity: 0;
  }
  .number {
    position: absolute;
    top: 5vmax;
    left: 5vmax;
    font-weight: 800;
  }
</style>
