<template>
  <select name="Difficulty" @change="$emit('selectDifficulty', $event.target.value)">
      <option value="Easy">Easy</option>
      <option value="Impossible">Impossible</option>
  </select>
</template>

<script>
export default {
    name: 'DifficultySelect'
}
</script>

<style scoped>
select{
    box-shadow: 0 3px 2px #6f6f6f;
    font-size: large;
    padding: 10px;
}
select:hover{
  cursor: pointer;
}
</style>