<template>
  <div id="app" :class="{'completed': isCompleted}">
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
          ])
      },
      watch: {
          color(val) {
              this.$el.style.setProperty('--main-color', val)
          }
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
    height: 100%;
    min-height: calc(100vh - 2vmax);
    font-family: 'Brandon Grotesque', brandon-grotesque, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 3vh;
    text-align: center;
    color: color(main);
    will-change: border-color, color;
  }
  #app.completed {
    border-color: color(main);
    color: color(main);
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
    position: absolute;
    display: flex;
    flex-flow: row-reverse;
    bottom: 0;
    right: 0;
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
</style>
