<template>
  <div class="introduction">
    <h1>I Ching</h1>
    <p>Find a question to ask the oracle.</p>
    <div id="nav">
      <router-link :to="{name: 'consult'}">Begin</router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  p {
    max-width: 60ex;
    margin: 0 5ex;
    line-height: 1;
  }
</style>
