<template>
  <div class="game">
    <div class="board">
      <div v-for="piece in boardPieces" :key="piece" class="tile" @click="piece.clicked = !piece.clicked; boardClick()">
        <Chip v-show="piece.clicked"/>
        <img :src="piece.img" :alt="piece.alt" />
        <br/>
        {{piece.title}}
      </div>
    </div>
    <div>
      <button @click="newGame(); $emit('newGame')">New Game</button>
      <DifficultySelect @selectDifficulty="changeDifficulty"/>
    </div>
  </div>
</template>

<script>
import Chip from './Chip.vue'
import DifficultySelect from './DifficultySelect'

import easyTiles from '../assets/board/data/easyTiles.js'
import hardTiles from '../assets/board/data/hardTiles.js'
import impossibleTiles from '../assets/board/data/impossibleTiles.js'

export default {
  name: "Board",
  components: {
    Chip,
    DifficultySelect
  },
  props: ['goForBlackout'],
  emits: ['bingo'],
  data(){
    return{
      boardPieces: hardTiles
    }
  },
  created(){
    if(localStorage.getItem('difficulty')){
      let difficulty = JSON.parse(localStorage.getItem('board-impossible'))
      if(difficulty == 'Easy'){
        this.boardPieces = JSON.parse(localStorage.getItem("board-easy"))
      }else if(difficulty == 'Impossible'){
        this.boardPieces = JSON.parse(localStorage.getItem("board-impossible"))
      }
    }else{
      localStorage.setItem("difficulty", 'Easy')
    }
  },
  updated(){
    this.checkWin(5)
    localStorage.setItem("Boardv3", JSON.stringify(this.boardPieces))
  },
  methods: {
    boardClick() {//google analytics
      this.$gtag.event('board-click', {
        'event_category' : 'Playing Game',
        'event_label' : 'Added a chip to the board',
        'value': 1
      })
    },
    checkWin(chipsInARow){
      if(this.goForBlackout == false){
        let chips = 0
        //*Check horizontal win
        for (var i = 0; i < this.boardPieces.length; i+=chipsInARow) {
          for (var j = i; j < i+chipsInARow; j++) {
            //checking the row
            if (this.boardPieces[j].clicked == true) {
              chips++;
            }
          }
          if (chips == chipsInARow) {
            //checking for horizonal win
            this.$emit('bingo')
          }
          chips = 0;
        }
        //*Check vertical win
        for (i = 0; i < chipsInARow; i++) {
          for (j = i; j < this.boardPieces.length; j+=chipsInARow) {
            if (this.boardPieces[j].clicked == true) {
              chips++;
            }
          }
          if (chips == chipsInARow) {//checking for vertical win
            this.$emit('bingo')
          }
          chips = 0;
        }
        //*Check top-left to bottom-right diagonal win
        for (i = 0; i < this.boardPieces.length; i+=chipsInARow+1) {
          if (this.boardPieces[i].clicked == true) {
            chips++;
          }
        }
        if (chips == chipsInARow) {//checking for diagonal win
          this.$emit('bingo')
        }
        chips = 0;
        //*Check top-right to bottom-left diagonal win
        for (i = chipsInARow-1; i < this.boardPieces.length-1; i+=chipsInARow-1) {
          if (this.boardPieces[i].clicked == true) {
            
            chips++;
          }
        }
        if (chips == chipsInARow) {//checking for diagonal win
          this.$emit('bingo')
        }
        chips = 0;
      }
      else{
        let counter = 0
        for(let i=0; i < this.boardPieces.length; i++){
          if(this.boardPieces[i].clicked == true){
            counter++
          }
        }
        if(counter == this.boardPieces.length){
          this.$emit('blackout')
        }
      }
    },
    newGame(){
      //google analytics and restarting the game
      this.$gtag.event('restart-click', {
        'event_category' : 'Playing Game',
        'event_label' : 'Restarting the Game',
        'value': 1
      })

      for(var i=0; i<this.boardPieces.length; i++){
          this.boardPieces[i].clicked=false;
      }
      this.randomizeBoard()
      localStorage.setItem("Boardv3", JSON.stringify(this.boardPieces))
    },
    randomizeBoard(){
      for (let i = this.boardPieces.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * i)
        let temp = this.boardPieces[i]
        this.boardPieces[i] = this.boardPieces[randomIndex]
        this.boardPieces[randomIndex] = temp
      }
    },
    changeDifficulty(difficulty){
      if(difficulty == "Easy"){
        if(localStorage.getItem('difficulty') && localStorage.getItem('board-easy')){
          this.boardPieces = JSON.parse(localStorage.getItem('board-easy'))
        }else{
          this.boardPieces = easyTiles
        }
      }else if(difficulty == "Impossible"){
        if(localStorage.getItem('board-impossible') && localStorage.getItem('board-impossible')){
          this.boardPieces = JSON.parse(localStorage.getItem('board-impossible'))
        }else{
          this.boardPieces = impossibleTiles
        }
      }
    }
  }
};
</script>

<style scoped>
.game{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.board{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 20px;
  width: 600px;
}
button{
  background: white;
  border: none;
  font-size: large;
  box-shadow: 0 3px 2px #6f6f6f;

  padding: 10px;
  margin: 10px;
  width: 120px;
}
button:hover{
  cursor: pointer;
}
button:active{
  box-shadow: 0 1px 4px #6f6f6f;
}

.tile{
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 5px;
  margin: 1px;
  font-size: small;
  text-align: center;
}
.tile:hover{
  background: #f0a759;
  cursor: pointer;
}
@media (max-width: 620px){
  .board{
    width: 90vw;
  }
}
@media (max-width: 450px){
  .tile{
    font-size: x-small;
  }
  img{
    width: 30px;
  }
}
</style>
