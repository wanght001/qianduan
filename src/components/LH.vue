<template>
  <div>
    <div class="top">
      <div style="margin-left: 27%" @click=home v-bind:class = "{change: flag1}"><p>Home</p></div>
      <div @click=about v-bind:class = "{change: flag2}"><p>About Me</p></div>
      <div @click=diary v-bind:class = "{change: flag3}"><p>My Diary</p></div>
      <div @click=contact v-bind:class = "{change: flag4}">
        <p>Contact Me</p>
        <Modal
          v-model="modal4"
          title="Modal Title"
          ok-text="OK"
          cancel-text="Cancel">
          <p>Something...</p>
          <p>Something...</p>
          <p>Something...</p>
        </Modal>
      </div>
    </div>
    <div class="body">
      <div v-if="flag1===true">
      <Home></Home>
      </div>
      <div v-if="flag2===true">
        <About></About>
      </div>
      <div v-if="flag3===true">
        <Diary></Diary>
      </div>
    </div>
    </div>
</template>

<script>
import Home from './Home'
import About from './About'
import Diary from './Diary'
export default {
  name: 'LH',
  components: {Diary, About, Home},
  data () {
    return {
      modal4: false,
      flag1: true,
      flag2: false,
      flag3: false,
      flag4: false
    }
  },
  methods: {
    about () {
      this.flag1 = false
      this.flag2 = true
      this.flag3 = false
      this.flag4 = false
    },
    home () {
      this.flag1 = true
      this.flag2 = false
      this.flag3 = false
      this.flag4 = false
    },
    diary () {
      this.flag1 = false
      this.flag2 = false
      this.flag3 = true
      this.flag4 = false
    },
    contact () {
      this.modal4 = true
      this.flag1 = false
      this.flag2 = false
      this.flag3 = false
      this.flag4 = true
    }
  },
  mounted () {}
}
</script>

<style scoped>
  .top{
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    height:50px;
    background-color: #668D94;
    float: left;
  }
  .change{
    background-color: #3D4C4D !important;
  }
  .top div{
    height: 50px;
    color: #ffffff;
    width: 180px;
    text-align: center;
    float: left;
  }
  .top div p{
    font-size: 16px;
    margin-top: 11px;
    cursor:default;
  }
  .body {
    width: 100%;
    height: 758px;
    background: #0f3854;
    background: -webkit-radial-gradient(ellipse at center, #0a2e38 0%, #000000 70%);
    background: radial-gradient(ellipse at center, #0a2e38 0%, #000000 70%);
    background-size: 100%;
  }
</style>
