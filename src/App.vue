<template>
  <WinModal 
    v-show="bingo" 
    @newGame="restart()" 
    @goForBlackout="goForBlackout()"
  />
  <BlackoutModal v-show="blackout" @newGame="restart()"/>
  <Nav/>
  <main class="container">
    <Description/>
    <Board ref="board" 
      :goForBlackout="this.goingForBlackout" 
      @bingo="gotBingo()" 
      @blackout="gotBlackout()"
    />
  </main>
  <Footer/>
</template>

<script>
import WinModal from './components/WinModal.vue'
import BlackoutModal from './components/BlackoutModal.vue'
import Nav from './components/Nav.vue'
import Description from './components/Description.vue'
import Board from './components/Board.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    WinModal,
    BlackoutModal,
    Nav,
    Description,
    Board,
    Footer
  },
  data(){
    return{
      bingo: false, //used to display the modal
      blackout: false,
      goingForBlackout: false
    }
  },
  created(){
    this.bingo = JSON.parse(localStorage.getItem('bingo'))
    this.blackout = JSON.parse(localStorage.getItem('blackout'))
    this.goingForBlackout = JSON.parse(localStorage.getItem('goingForBlackout'))
  },
  methods:{
    restart(){
      this.bingo=false
      this.$refs.board.newGame()

      this.blackout = false
      this.goingForBlackout = false

      localStorage.setItem('bingo', JSON.stringify(this.bingo))
      localStorage.setItem('blackout', JSON.stringify(this.blackout))
      localStorage.setItem('goingForBlackout', JSON.stringify(this.goingForBlackout))
    },
    gotBingo(){
      this.bingo=true

      localStorage.setItem('bingo', JSON.stringify(this.bingo))
    },
    goForBlackout(){
      this.bingo = false
      this.goingForBlackout = true

      localStorage.setItem('bingo', JSON.stringify(this.bingo))
      localStorage.setItem('goingForBlackout', JSON.stringify(this.goingForBlackout))
    },
    gotBlackout(){
      this.blackout=true

      localStorage.setItem('blackout', JSON.stringify(this.blackout))
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
