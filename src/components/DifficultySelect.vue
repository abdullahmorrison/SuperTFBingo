<template>
  <select name="Difficulty" v-model="difficulty" @change="difficulty = $event.target.value; $emit('selectDifficulty', $event.target.value)">
      <option value="Easy">Easy</option>
      <option value="Hard">Hard</option>
      <option value="Impossible">Impossible</option>
  </select>
</template>

<script>
export default {
    name: 'DifficultySelect',
    beforeMount(){
      if(localStorage.getItem('difficulty')){
        this.difficulty = localStorage.getItem('difficulty')
      }
    },
    data(){
      return{
        difficulty: "Easy"
      }
    }
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