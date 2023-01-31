<template>
  <transition-group tag="div" class="hexagram" name="hexagram-line" :class="{'completed': isCompleted}">
    <i-ching-line v-for="(line, index) in lines"
                  :key="line.id"
                  :line="line"
                  :class="{'is-held': changingLineIndex === index}"
                  @changing-line-select="changingLineSelect({index})">
    </i-ching-line>
  </transition-group>
</template>
<script>
    import iChingLine from '@/components/Line'
    import { mapGetters } from 'vuex'
  export default {
      name: 'Hexagram',
      components: {
        iChingLine
      },
      data () {
        return {
            changingLineToggled: Array(6).fill(false),
            changingLineIndex: undefined
        }
      },
      computed: {
          ...mapGetters([
              'isCompleted',
              'lines'
          ])
      },
      methods: {
          changingLineSelect ({ index }) {
              if (this.changingLineToggled[index] && this.changingLineIndex === index) {
                  this.changingLineToggled[index] = false
                  this.changingLineIndex = undefined
              } else {
                  if (this.changingLineToggled[index] && this.changingLineIndex !== index) {
                      this.changingLineToggled[this.changingLineIndex] = false
                  }
                  this.changingLineToggled[index] = !this.changingLineToggled[index]
                  this.changingLineIndex = index
              }
              this.$emit('changing-select', { index })
          }
      }
  }
</script>
<style lang="scss" scoped>
  .hexagram {
    z-index: 5;
    width: 20vmax;
    height: auto;
    display: flex;
    flex-flow: column-reverse nowrap;
    justify-content: flex-end;
    align-items: stretch;
    .line + .line {
      margin-bottom: 1.667vmax;
    }
  }
  .hexagram-line-leave-active,
  .hexagram-line-enter-active {
    transition: all 1s;
  }
  .hexagram-line-enter {
    opacity: 0;
    transform: translateY(30px);
  }
  .hexagram-line-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }
  .hexagram >>> .line.changing:last-of-type:before {
    content: '';
    position: absolute;
    display: block;
    /*top: 0;*/
    /*translate(0, -100%);*/
  }
</style>
