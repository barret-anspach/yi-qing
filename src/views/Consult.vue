<template>
  <div class="consult">
    <transition name="message">
      <h1 class="message" v-show="!isInitialized && !isCompleted">Consider your question, then divide the yarrow stalks.</h1>
    </transition>
    <i-ching-hexagram></i-ching-hexagram>
    <transition name="stalks">
      <i-ching-division v-show="!isCompleted"></i-ching-division>
    </transition>
    <div id="nav" :class="{'completed': isCompleted}" v-if="isCompleted">
      <router-link :to="{name: 'result'}">Your reading</router-link>
    </div>
  </div>
</template>
<script>
  import iChingDivision from '@/components/Division'
  import iChingHexagram from '@/components/Hexagram'
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'Consult',
        components: {
            iChingDivision,
            iChingHexagram
        },
        computed: {
            ...mapGetters([
                'lines',
                'isInitialized',
                'isCompleted'
            ])
        },
        methods: {
            ...mapActions([
                'resetStalks'
            ])
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                if (to.params && to.params.reset) vm.resetStalks()
            })
        }
    }
</script>
<style lang="scss" scoped>
  @import './../style.scss';
  .message {
    z-index: 5;
    mix-blend-mode: color;
    color: color(main);
    margin: 5vmax;
    line-height: 1;
  }
  .message-enter-active {
    transition: opacity 1s ease-in 1s;
  }
  .message-leave-active {
    transition: opacity 1s;
  }
  .message-enter, .message-leave-to {
    opacity: 0;
  }
  .stalks-enter-active, .stalks-leave-active {
    transition: opacity 1s;
  }
  .stalks-enter, .stalks-leave-to {
    opacity: 0;
  }
</style>
