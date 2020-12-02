<template>
  <div id="app" :class="{'completed': isCompletelyCompleted}">
    <router-view/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
      name: 'App',
      computed: {
          ...mapGetters([
              'isCompleted',
              'color'
          ]),
          isCompletelyCompleted() {
              return this.isCompleted && this.$route.name === "result"
          },
          orientation() {
              return window.matchMedia("(orientation: portrait)")
          }
      },
      methods: {
          setAppHeight() {
              this.$el.style.setProperty('height', `calc(${window.innerHeight}px - 2vmax)`);
          }
      },
      watch: {
          color(val) {
              this.$el.style.setProperty('--main-color', val)
          },
          orientation(n, o) {
              if (n !== o) this.setAppHeight()
          }
      },
      mounted() {
          this.setAppHeight();
          window.addEventListener('resize', this.setAppHeight, false);
          window.addEventListener('orientationchange', this.setAppHeight, false);
      },
      beforeDestroy() {
          window.removeEventListener('resize', this.setAppHeight, false);
          window.removeEventListener('orientationchange', this.setAppHeight, false);
      }
  }
</script>

<style lang="scss">
  @import './style.scss';

  html, body {
    margin: 0;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  #app {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    border: 0.5vmax solid color(main);
    margin: 1vmax;
    height: calc(100vh - 2vmax); // Overridden by js
    min-height: 100%;
    font-family: 'Brandon Grotesque', brandon-grotesque, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 3vh;
    text-align: center;
    color: color(main);
    will-change: border-color, color;
    overflow-y: scroll;
  }
  #app.completed {
    border-color: color(main);
    color: color(main);
    justify-content: flex-start;
    align-items: flex-start;
    #nav.completed {
      border-color: color(main);
    }
    #nav {
      a {
        border-color: color(main);
        color: color(main);
        &:hover,
        &:focus,
        &.router-link-exact-active {
          color: white;
          background: color(main);
        }
      }
    }
  }
  #nav {
    position: fixed;
    display: flex;
    flex-flow: row-reverse;
    bottom: 1.5vmax;
    right: 1.5vmax;
    a {
      cursor: pointer;
      position: relative;
      display: block;
      padding: 3vmin;
      border: 0.5vmax solid color(main);
      margin: 0 -0.5vmax -0.5vmax 0;
      font-weight: bold;
      text-decoration: none;
      color: color(main);
      background: white;
      transition: background 0.33s ease-in-out,
                  color 0.16s 0.16s ease-in;
      &:hover,
      &:focus,
      &.router-link-exact-active {
        color: white;
        background: color(main);
      }
    }
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: 1.414em;
  }
</style>
