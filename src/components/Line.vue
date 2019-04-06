<template>
  <div class="line"
       :class="{
        'yin': isYin,
        'yang': !isYin,
        'changing': isChanging
       }"
       @click="changingLineSelect">
    <span class="dash"></span>
    <span class="changing-dash"
          v-if="isChanging"
          :class="{
            'changing-yin': isChanging && !isYin,
            'changing-yang': isChanging && isYin
          }"></span>
    <span class="dash" v-if="isYin"></span>
    <span class="dit" v-if="isChanging"></span>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
      name: 'iChingLine',
      props: ['line'],
      computed: {
          ...mapGetters(['isCompleted']),
          isYin () {
              return this.line.value === 0
          },
          isChanging () {
              return this.line.changing
          }
      },
      methods: {
          changingLineSelect () {
              if (this.isCompleted) this.$emit('changing-line-select')
          }
      }
  }
</script>
<style lang="scss" scoped>
  @import './../style.scss';
  .line {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    &.changing {
      cursor: pointer;
    }
    &.changing:hover .dash {
      transform: scaleY(0.875);
      background: lighten(goldenrod, 20%);
      background: color(main);
      opacity: 0.8;
    }
    &.changing:hover .dit {
      transform: scale(1.167);
      background: lighten(goldenrod, 20%);
      background: color(main);
      opacity: 0.8;
    }
  }
  .main .dash,
  .main .dit {
    background: goldenrod;
    background: color(main);
    opacity: 1;
  }
  .dash,
  .dit {
    height: 1.5vmax;
    background: fade_out(blue, 0.8);
    background: color(main);
    opacity: 0.8;
    transition: background 0.33s ease-in,
                opacity 0.33s ease-in,
                transform 0.24s ease-in-out,
                flex 0.33s ease-in-out;
  }
  .dash {
    flex: 1;
    &:nth-of-type(2) {
      margin-left: 3vmax;
    }
  }
  .changing-dash {
    opacity: 0;
    position: absolute;
    transition: opacity 0.24s ease-in,
                background 0.33s ease-in,
                width 0.24s ease-in,
                transform 0.24s ease-in-out;
    top: 0;
    left: 0;
    right: 0;
    height: 1.5vmax;
    background: goldenrod;
    background: color(main);
    &.changing-yin {
      width: 1vmax;
      margin: 0 auto;
      transform: rotateY(-90deg);
    }
    &.changing-yang {
      position: relative;
      width: 3vmax;
      margin: 0;
    }
  }
  .line.changing:hover .changing-dash.changing-yin,
  .line.changing.is-held .changing-dash.changing-yin {
    opacity: 1;
    width: 3vmax;
    background: fade_out(white, 0);
    transform: rotateY(0deg);
  }
  .line.changing:hover .changing-dash.changing-yang,
  .line.changing.is-held .changing-dash.changing-yang {
    opacity: 1;
    width: 0;
    background: fade_out(lighten(goldenrod, 20%), 0.5);
    background: color(main);
    opacity: 0.5;
    transform: rotateY(0deg);
  }
  .line.changing.is-held {
    .dash, .changing-dash, .dit {
      background: lighten(goldenrod, 20%);
      background: color(main);
      opacity: 0.8;
    }
  }
  .dit {
    position: absolute;
    top: 0;
    left: 100%;
    width: 1.5vmax;
    margin-left: 1.5vmax;
    clip-path: circle();
    &:after {
      content: '';
      z-index: 2;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0.5vmax;
      height: 0.5vmax;
      clip-path: circle();
      background: white;
      opacity: 0;
      transform: translate(-50%, -50%);
      transition: opacity 0.24s ease-out;
    }
  }
  .line.changing.is-held .dit {
    background: goldenrod;
    background: color(main);
  }
  .line.changing.is-held:hover .dit {
    background: lighten(goldenrod, 20%);
    background: color(main);
    opacity: 0.8;
  }
  .line.changing.is-held .dit:after {
    opacity: 1;
  }
</style>
