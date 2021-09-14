<template>
  <nav>
    <img src="../assets/logo.svg" alt="SuprTF Emote">
    <h1>SuperTF Bingo</h1>
  </nav>
</template>

<script>
export default {
    name: 'Nav'
}
</script>

<style scoped>
  nav{
    background: #fc4f03;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  nav h1{
    color: white;
    font-size: xx-large;
  }
  nav img{
    margin-right: 10px;
  }
</style>