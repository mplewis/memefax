<template>
  <div id="app">
    <main>
      <h1 class="title">
        <a href="/">memefax.website</a>
      </h1>
      <p>Unicode was a mistake.</p>
      <router-view />
      <div class="credits">
        <p>
          <span>
            Made by
            <a href="http://mplewis.com">Matt Lewis</a>
          </span>
          <span>
            Fork this on
            <a href="https://github.com/mplewis/memefax">GitHub</a>
          </span>
        </p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
@import './assets/global.styl'
@import url('https://fonts.googleapis.com/css?family=Lato|Rokkitt:400,800|Space+Mono')

*
  box-sizing: border-box

body
  max-width: app-width
  margin: 0 auto
  background: black-pearl
  font-family: core-font
  color: white

#app
  background: good-night
  padding: horiz-padding
  @media (min-width: app-width)
    margin-top: app-vert-margin
    margin-bottom: app-vert-margin

h1, h2, h3, h4, h5, h6
  margin-top: section-spacing
  font-family: emph-font
  text-shadow: light-shadow

h1
  font-size: lg-text-size

p
  font-size: med-text-size
  margin-top: 0

h1, p
  margin-bottom: 0

a
  color: inherit

input
  border-radius: 0

.title
  margin-top: 0
  a
    text-decoration: inherit

.credits
  margin-top: section-spacing
  margin-bottom: section-spacing
  opacity: 0.7
  text-align: center
  p
    font-size: sm-text-size
  *+*
    padding-left: 20px
</style>
