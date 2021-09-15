<template>
  <Nav/>
  <main class="game">
    <Description/>
    <Board/>
  </main>
  <Footer/>
</template>

<script>
import Nav from './components/Nav.vue'
import Description from './components/Description.vue'
import Board from './components/Board.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Description,
    Board,
    Footer
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
body{
  background:#a0a7aa;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.game{
  min-height: 90vh;
  display: flex;
  justify-content: center;
    flex-wrap: wrap;
}
</style>
