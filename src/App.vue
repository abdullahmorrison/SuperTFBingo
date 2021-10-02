<template>
  <WinModal v-show="bingo" @newGame="bingo=false; this.$refs.board.newGame()"/>
  <Nav/>
  <main class="container">
    <Description/>
    <Board ref="board" @bingo="bingo=true"/>
  </main>
  <Footer/>
</template>

<script>
import WinModal from './components/WinModal.vue'
import Nav from './components/Nav.vue'
import Description from './components/Description.vue'
import Board from './components/Board.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    WinModal,
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
.container{
  min-height: 95vh;

  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 2fr 1fr;
}

@media (max-width: 1200px){
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
