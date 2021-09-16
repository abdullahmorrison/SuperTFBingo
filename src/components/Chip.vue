<template>
  <div class="chip">
    <img src="../assets/chip/chipLogo.svg" alt="">
  </div>
</template>

<script>
export default {
    name: 'Chip'
}
</script>

<style scoped>
  .chip{
    background: #fc4f03;
    border: solid black 2px;
    border-radius: 100%;

    height: 75px;
    width: 75px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute; /**overlapping the chip on each board tile */
    margin-left: 10px /**centering the chip in the middle of the board tile */
}
@media (max-width: 620px){
  .chip{
    width: 50px;
    height: 50px;
    margin: 0;
  }
  .chip img{
    width: 35px;
  }
}
</style>