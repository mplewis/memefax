<template>
  <div id="app">
    <main>
      <h1 class="title">memefax.website</h1>
      <p>Unicode was a mistake.</p>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Lato|Rokkitt:400,800')

// https://flatuicolors.com/palette/se
minty-green = #0be881
green-teal = #05c46b

html, body, #app, main
  height: 100%
  box-sizing: border-box

body
  font-family: 'Lato', sans-serif
  max-width: 800px
  margin: 0 auto
  background: minty-green
  color: white

main
  background: green-teal
  padding: 20px

h1, h2, h3, h4, h5, h6
  font-family: 'Rokkitt', sans-serif
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 1)

.title
  margin-top: 0

h1
  font-size: 48px

p
  font-size: 28px
  margin-top: 0

h1, p
  margin-bottom: 0
</style>
