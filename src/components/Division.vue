<template>
  <div class="division">
    <div class="yarrow-stalks" :class="{'completed': isCompleted}" v-show="isInitialized">
      <div class="yarrow-stalk"
           :class="[stalk.role, stalk.role === 'reserve' ? `reserve-${stalk.value}` : null]"
           v-for="(stalk, index) in yarrowStalks"
           :key="index">
      </div>
    </div>
    <div id="nav">
      <a @click="divideYarrowStalks">Divide</a>
    </div>
  </div>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: 'iChingDivision',
        computed: {
            ...mapGetters([
                'isInitialized',
                'isDividing',
                'isCompleted',
                'stalks',
                'line'
            ]),
            yarrowStalks () {
                return Array.from(this.stalks)
            }
        },
        methods: {
            ...mapActions([
                'addLine'
            ]),
            divideYarrowStalks () {
                if (!this.isDividing) this.addLine()
            }
        }
    }

</script>

<style lang="scss" scoped>
  @import './../style.scss';
  $square: calc(100vmin - 5vmax);
  $ease: ease-out;
  .yarrow-stalks {
    z-index: -1;
    display: flex;
    justify-content: space-between;
    max-width: calc(100% - 2vmax);
    height: calc(100vh - 5vmax);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto 1vmax;
    padding-bottom: 2vmax;
    overflow: visible;
  }
  .yarrow-stalk {
    float: left;
    position: relative;
    display: block;
    flex: 1;
    width: 0.5vmax;
    height: calc(100vh - 5vmax);
    margin: 0 0.667vmin;
    background: transparent;
    &:before {
      content: '';
      display: block;
      position: absolute;
      width: 0.5vmax;
      height: 100%;
      background: blue;
      background: color(main);
      transition: transform 0.33s $ease,
                  background 0.33s $ease;
    }

    &.observer:before {
      z-index: 2;
      background: blue;
      background: color(main);
      height: calc(100vw - 5vmax);
      transform-origin: bottom left;
      box-shadow: 0 0 0 0.5vmax white;
      bottom: 0;
      transform: rotate(-93deg) translate(12vmax, 2vw);
    }
    &.LH:before,
    &.RH:before {
      background: fade_out(blue, 0.618);
      background: color(main);
      opacity: 0.618;
    }
    &.LH:before {
      transform: translate(-0.5vmax, -0.5vmax);
      transform-origin: bottom left;
    }
    &.RH:before {
      transform: translate(0.5vmax, 0.5vmax);
      transform-origin: top right;
    }
    &.reserve:before {
      z-index: 1;
      background: blue;
      background: color(main);
      transition: transform 0.24s $ease,
                  order 0.33s $ease;
    }
    &.reserve-1:before {
      transform: rotate(-3deg);
      transform-origin: bottom right;
    }
    &.reserve-3:before {
      transform: rotate(3deg);
      transform-origin: top left;
    }
  }
</style>
