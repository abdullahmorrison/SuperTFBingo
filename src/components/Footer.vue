<template>
  <footer>
    <a href="mailto:abdullahmorrison@gmail.com" class="link" target="_blank">
      <img src="../assets/footer/emailIcon.svg" alt="Email Icon">
      Contact Dev
    </a>
    <a href="https://github.com/abdullahmorrison/SuperTFBingo" class="link" target="_blank">
      <img src="../assets/footer/gitHubLogo.svg" alt="GitHub Logo">
      View Git Repo
    </a>
    <a href="https://ko-fi.com/abdullahmorrison" class="link" target="_blank">
      <img src="../assets/footer/coffeeIcon.svg" alt="Coffee Icon">
      Buy Me a Coffee :)
    </a>
  </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
  footer{
    background: white;
    display: flex;
    justify-content: center;
    padding: 20px;
  }
  .link{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 

    margin: 0 20px;
  }
  img{
    width: 35px
  }
  a{
    color: black;
    font-weight: bold;
    text-decoration: none;
  }
</style>