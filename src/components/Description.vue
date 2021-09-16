<template>
  <div class="instructions">
    <h2>Description:</h2>
    <p>
      This is a website where you can play a bingo game about the Twitch streamer SuperTF.
    </p>
    <h2>Instructions:</h2>
    <p>
      <a href="https://www.twitch.tv/supertf" target="_blank">
        Watch Super's stream.
      </a> 
      If any of the actions stated on the board happens during his stream, add a 
      chip on the action committed.
    </p>
    <h3>How to add/remove a chip:</h3>
    <p>
      Click on the tile that contains the thing that occurred to add the chip. 
      Click again to remove the chip
    </p>
    <h3>How to win (Bingo!):</h3>
    <p>
      You win if you have a full row, column, or diagonal filled with chips.
    </p>
    <h3 style="color: red">Note:</h3>
    <p>
      Progress is not saved. Refreshing will cause the board to reset.
    </p>
  </div>
</template>

<script>
export default {
    name: 'Description'
}
</script>

<style scoped>
  .instructions{
    background: white;
    padding: 20px;
    margin: 20px;
    max-width: 55ch;
  }
  p{
    margin-bottom: 10px;
  }
</style>