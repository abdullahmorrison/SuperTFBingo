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
    <button @click="newGame()">New Game</button>
  </div>
</template>

<script>
import Chip from './Chip.vue'

import amongS from '../assets/board/amongS.svg'
import TwoByTwo from '../assets/board/2by2.svg'
import MODS from '../assets/board/MODS.svg'
import suprChad from '../assets/board/suprChad.svg'
import sJerk from '../assets/board/sJerk.svg'

import COPIUM from '../assets/board/COPIUM.svg'
import Bedge from '../assets/board/Bedge.svg'
import PepeW from '../assets/board/PepeW.svg'
import NOOO from '../assets/board/NOOO.svg'
import DANKIES from '../assets/board/DANKIES.svg'

import suprJOY from '../assets/board/suprJOY.svg'
import PepegaAim from '../assets/board/PepegaAim.svg'
import discordHoodie from '../assets/board/discordHoodie.svg'
import ChugU from '../assets/board/ChugU.svg'
import VeryCool from '../assets/board/VeryCool.svg'

import suprOMEGALUL from '../assets/board/suprOMEGALUL.svg'
import FourWeirdBuff from '../assets/board/4WeirdBuff.svg'
import MYEYES from '../assets/board/MYEYES.svg'
import pepeCD from '../assets/board/pepeCD.svg'
import peePoo from '../assets/board/peePoo.svg'

import borpaSpin from '../assets/board/borpaSpin.svg'
import MTD from '../assets/board/MTD.svg'
import suprWTF from '../assets/board/suprWTF.svg'
import FourGitte from '../assets/board/4Gitte.svg'
import Wokeage from '../assets/board/Wokeage.svg'

export default {
  name: "Board",
  components: {
    Chip
  },
  created(){
    if(localStorage.getItem("Boardv2")){
      this.boardPieces = JSON.parse(localStorage.getItem("Boardv2"))
    }
  },
  updated(){
    this.checkWin(5)
    localStorage.setItem("Boardv2", JSON.stringify(this.boardPieces))
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
      localStorage.setItem("Boardv2", JSON.stringify(this.boardPieces))
    },
    randomizeBoard(){
      for (let i = this.boardPieces.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * i)
        let temp = this.boardPieces[i]
        this.boardPieces[i] = this.boardPieces[randomIndex]
        this.boardPieces[randomIndex] = temp
      }
    }
  },
  emits: ['bingo'],
  data(){
    return{
      boardPieces: [
        {
          clicked: false,
          img: amongS,
          alt: "amongS Emote",
          title: "Among Us Reference"
        },
        {
          clicked: false,
          img: TwoByTwo,
          alt: "Super 2x2",
          title: "2x2 in Chat"
        },
        {
          clicked: false,
          img: MODS,
          alt: "MODS Emote",
          title: "\"Shoot That Guy\""
        },
        {
          clicked: false,
          img: suprChad,
          alt: "suprChad Emote",
          title: "Chad Moment"
        },
        {
          clicked: false,
          img: sJerk,
          alt: "sJerk Emote",
          title: "Jerking Self Off"
        },
        {
          clicked: false,
          img: COPIUM,
          alt: "COPIUM Emote",
          title: "Coping"
        },
        {
          clicked: false,
          img: Bedge,
          alt: "Bedge Emote",
          title: "Orisa Gameplay"
        },
        {
          clicked: false,
          img: PepeW,
          alt: "PepeW Emote",
          title: "Volskaya"
        },
        {
          clicked: false,
          img: NOOO,
          alt: "NOOO Emote",
          title: "\"NOOOOO\""
        },
        {
          clicked: false,
          img: DANKIES,
          alt: "DANKIES Emote",
          title: "Mumbling Words"
        },
        {
          clicked: false,
          img: suprJOY,
          alt: "suprJOY Emote",
          title: "\"Just Kidding Suck My Balls\""
        },
        {
          clicked: false,
          img: PepegaAim,
          alt: "PepegaAim Emote",
          title: "Trash Aim"
        },
        {
          clicked: false,
          img: discordHoodie,
          alt: "Discord Hoodie",
          title: "Wearing Discord Hoodie"
        },
        {
          clicked: false,
          img: ChugU,
          alt: "ChugU Emote",
          title: "New Chug"
        },
        {
          clicked: false,
          img: VeryCool,
          alt: "VeryCool Emote",
          title: "Eating On Stream"
        },
        {
          clicked: false,
          img: suprOMEGALUL,
          alt: "suprOMEGALUL Emote",
          title: "Good One Dono"
        },
        {
          clicked: false,
          img: FourWeirdBuff,
          alt: "4WeirdBuff Emote",
          title: "\"DAAAPHNEE\""
        },
        {
          clicked: false,
          img: MYEYES,
          alt: "MYEYES Emote",
          title: "Wiffed Shatter"
        },
        {
          clicked: false,
          img: pepeCD,
          alt: "pepeCD Emote",
          title: "Doc Song Playing"
        },
        {
          clicked: false,
          img: peePoo,
          alt: "peePoo Emote",
          title: "Bathroom Break"
        },
        {
          clicked: false,
          img: borpaSpin,
          alt: "borpaSpin Emote",
          title: "\"Cum\""
        },
        {
          clicked: false,
          img: MTD,
          alt: "MTD Emote",
          title: "Main Tank Difference"
        },
        {
          clicked: false,
          img: suprWTF,
          alt: "suprWTF Emote",
          title: "WTF Dono"
        },
        {
          clicked: false,
          img: FourGitte,
          alt: "4Gitte Emote",
          title: "Unstoppable Brig"
        },
        {
          clicked: false,
          img: Wokeage,
          alt: "Wokeage Emote",
          title: "Variety Time"
        }
      ]
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
  box-shadow: 0 3px 4px #4f4f4f;

  padding: 10px;
  margin: 10px;
  width: 120px;
}
button:hover{
  cursor: pointer;
}
button:active{
  box-shadow: 0 1px 4px #4f4f4f;
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
