<template>
  <table>
    <tr v-for="row in boardPieces" :key="row">
      <td v-for="piece in row" :key="piece" :id="piece" @click="piece.clicked = !piece.clicked; checkWin()">
        <Chip v-show="piece.clicked"/>
        <img :src="piece.img" :alt="piece.alt">
        <br/>
        {{piece.title}}
      </td>
    </tr>
  </table>
</template>

<script>
import Chip from './Chip.vue'

import amongS from '../assets/board/amongS.svg'
import TwoByTwo from '../assets/board/2by2.svg'
import MODS from '../assets/board/MODS.svg'
import suprChad from '../assets/board/suprChad.svg'
import suprTroll from '../assets/board/suprTroll.svg'

import COPIUM from '../assets/board/COPIUM.svg'
import Bedge from '../assets/board/Bedge.svg'
import PepeW from '../assets/board/PepeW.svg'
import NOOO from '../assets/board/NOOO.svg'
import DANKIES from '../assets/board/DANKIES.svg'

import suprJOY from '../assets/board/suprJOY.svg'
import lebronJAM from '../assets/board/lebronJAM.svg'
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
  methods: {
    checkWin(){
      let chips = 0
      //*Check horizontal win
      for (var i = 0; i < this.boardPieces.length; i++) {
        for (var j = 0; j < this.boardPieces[i].length; j++) {
          //checking the row
          //console.log(this.boardPieces[i][j])
          if (this.boardPieces[i][j].clicked == true) {
            chips++;
          }
        }
        if (chips == this.boardPieces.length) {
          //checking for horizonal win
          this.$emit('bingo')
          setTimeout(() => {
            //so it shows the win before reseting
            this.newGame()
          }, 500);
        }
        chips = 0;
      }
      //*Check vertical win
      for (i = 0; i < this.boardPieces.length; i++) {
        for (j = 0; j < this.boardPieces.length; j++) {
          if (this.boardPieces[j][i].clicked == true) {
            chips++;
          }
        }
        if (chips == this.boardPieces.length) {//checking for vertical win
          this.$emit('bingo')
          setTimeout(() => {
            //so it shows the win before reseting
            this.newGame()
          }, 500);
        }
        chips = 0;
      }
      //*Check top-left to bottom-right diagonal win
      for (i = 0; i < this.boardPieces.length; i++) {
        if (this.boardPieces[i][i].clicked == true) {
          chips++;
        }
      }
      if (chips == this.boardPieces.length) {//checking for diagonal win
        this.$emit('bingo')
        setTimeout(() => {
            //so it shows the win before reseting
            this.newGame()
          }, 500);
      }
      chips = 0;
      //*Check top-right to bottom-left diagonal win
      for (i = 0; i < this.boardPieces.length; i++) {
        if (this.boardPieces[i][this.boardPieces.length-1-i].clicked == true) {
          
          chips++;
        }
      }
      if (chips == this.boardPieces.length) {//checking for diagonal win
        this.$emit('bingo')
        setTimeout(() => {
            //so it shows the win before reseting
            this.newGame()
          }, 500);
      }
      chips = 0;
    },
    newGame(){
      for(var i=0; i<this.boardPieces.length; i++){
        for(var j=0; j<this.boardPieces[i].length; j++){
          this.boardPieces[i][j].clicked=false;
        }
      }
    }
  },
  emits: ['bingo'],
  data(){
    return{
      boardPieces: [
        [
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
            img: suprTroll,
            alt: "suprTroll Emote",
            title: "Doing a Little Trolling"
          }
        ],
         [
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
            title: "Volskya"
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
          }
        ],
         [
          {
            clicked: false,
            img: suprJOY,
            alt: "suprJOY Emote",
            title: "\"Just Kidding Suck My Balls\""
          },
          {
            clicked: false,
            img: lebronJAM,
            alt: "lebronJAM Emote",
            title: "Jammer is Playing"
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
          }
        ],
         [
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
          }
        ],
         [
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
        ],
      ]
    }
  }
};
</script>

<style scoped>
table{
  margin: 20px;
  width: 600px;
}
td{
  background: white;
  width: 100px;
  height: 100px;
  padding: 5px;
  font-size: small;
  text-align: center;
}
td:hover{
  background: #f0a759;
  cursor: pointer;
}
@media (max-width: 620px){
  table{
    width: 90vw;
  }
  td{
    height: 50px;
    width: 50px;
  }
}
@media (max-width: 450px){
  td{
    font-size: x-small;
  }
  img{
    width: 30px;
  }
}
</style>
