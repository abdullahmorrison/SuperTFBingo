<template>
  <footer>
    <a @click="email()" href="mailto:abdullahmorrison@gmail.com" class="link" target="_blank">
      <img src="../assets/footer/emailIcon.svg" alt="Email Icon">
      Contact Dev
    </a>
    <a @click="github()" href="https://github.com/abdullahmorrison/SuperTFBingo" class="link" target="_blank">
      <img src="../assets/footer/gitHubLogo.svg" alt="GitHub Logo">
      View Git Repo
    </a>
    <a @click="kofi()" href="https://ko-fi.com/abdullahmorrison" class="link" target="_blank">
      <img src="../assets/footer/coffeeIcon.svg" alt="Coffee Icon">
      Buy Me a Coffee :)
    </a>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    email() {//google analytics
      this.$gtag.event('email-link-click', {
        'event_category' : 'Developer Links',
        'event_label' : 'Email Button Clicked',
        'value': 1
      })
    },
    github() {//google analytics
      this.$gtag.event('github-link-click', {
        'event_category' : 'Developer Links',
        'event_label' : 'GitHub Button Clicked',
        'value': 1
      })
    },
    kofi(){//google analytics
      this.$gtag.event('kofi-link-click', {
        'event_category' : 'Developer Links',
        'event_label' : 'Kofi Button Clicked',
        'value': 1
      })
    }
  }
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
    text-align: center;
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