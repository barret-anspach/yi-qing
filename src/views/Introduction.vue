<template>
  <div class="introduction">
    <h1>I Ching</h1>
    <h1>Find a question to ask the oracle.</h1>
    <div id="nav">
      <router-link :to="{name: 'consult'}">Begin</router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  p {
    max-width: 60ex;
    margin: 0 5ex;
  }
</style>
