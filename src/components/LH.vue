<template>
  <div>
    <div class="top">
      <div style="margin-left: 710px" @click=home v-bind:class = "{change: flag1}"><p>Home</p></div>
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
      <div id="clock">
        <p class="date">{{ date }}</p>
        <p class="time">{{ time }}</p>
      </div>
      <div class="card">
        <Row>
          <Col span="11">
            <Card dis-hover class="card1">
              <p slot="title" class="card1-top">
                <Icon type="ios-paper-outline" color="#FFFFFF" size=24></Icon>&nbsp;&nbsp;&nbsp;new papers here
              </p>
            </Card>
          </Col>
          <Col span="11" offset="2">
            <Card dis-hover class="card2">
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
let week = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
export default {
  name: 'LH',
  data () {
    return {
      time: '',
      date: '',
      modal4: false,
      flag1: false,
      flag2: false,
      flag3: false,
      flag4: false
    }
  },
  methods: {
    zeroPadding (num, digit) {
      let zero = ''
      for (let i = 0; i < digit; i++) {
        zero += '0'
      }
      return (zero + num).slice(-digit)
    },
    updateTime () {
      let cd = new Date()
      this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2)
      this.date = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth() + 1, 2) + '-' + this.zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()]
    },
    del () {
      this.modal_loading = true
      setTimeout(() => {
        this.modal_loading = false
        this.modal2 = false
        this.$Message.success('Successfully delete')
      }, 2000)
    },
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
  mounted () {
    setInterval(this.updateTime, 1000)
  }
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
  #clock {
    font-family: 'Share Tech Mono', monospace;
    color: #ffffff;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 30%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    color: #daf6ff;
    text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);
  }
  #clock .time {
    letter-spacing: 0.05em;
    font-size: 80px;
    padding: 5px 0;
  }
  #clock .date {
    letter-spacing: 0.1em;
    font-size: 24px;
  }
  .body {
    width: 100%;
    height: 1053px;
    background: #0f3854;
    background: -webkit-radial-gradient(ellipse at center, #0a2e38 0%, #000000 70%);
    background: radial-gradient(ellipse at center, #0a2e38 0%, #000000 70%);
    background-size: 100%;
  }
  .card{
    position: relative;
    top: 45%;
  }
  .card1{
    padding-left: 40px;
    padding-right: 40px;
    height: 477px;
    margin-left: 120px;
    margin-right: 240px;
    background-color: #382a27
  }
  .card2 {
    height: 477px;
    margin-left: 240px;
    margin-right: 120px;
    background-color: #382a27
  }
  .card .ivu-card-bordered{
    border: none;
  }
  .card1-top{
    height: 30px;
    font-size: 16px;
    color: white;
    font-family: "Microsoft YaHei";
  }
</style>
