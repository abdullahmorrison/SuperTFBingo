<template>
  <Modal v-show="bingo" @newGame="bingo=false; this.$refs.board.newGame()"/>
  <Nav/>
  <main class="game">
    <Description/>
    <Board ref="board" @bingo="bingo=true"/>
  </main>
  <Footer/>
</template>

<script>
import Modal from './components/Modal.vue'
import Nav from './components/Nav.vue'
import Description from './components/Description.vue'
import Board from './components/Board.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Modal,
    Nav,
    Description,
    Board,
    Footer
  },
  data(){
    return{
      bingo: false //used to display the modal
    }
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
  min-height: 650px;

  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 2fr 1fr;
}

@media (max-width: 1280px){
  .game{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
@media (min-width: 1280px){
  .game{
    height: 95vh;
  }
}
</style>
