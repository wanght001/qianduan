<template>
  <div>
  <div id="clock">
    <p class="date">{{ date }}</p>
    <p class="time">{{ time }}</p>
  </div>
  <div class="card">
    <Row>
      <Col span="12">
        <Card dis-hover class="card1">
          <p slot="title" class="card1-top">
            <Icon type="ios-paper-outline" color="#FFFFFF" size=24></Icon>&nbsp;&nbsp;&nbsp;new papers here
          </p>
        </Card>
      </Col>
      <Col span="12">
        <Card dis-hover class="card2">
        </Card>
      </Col>
    </Row>
  </div>
  </div>
</template>

<script>
let week = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
export default {
  name: 'firstshow',
  data () {
    return {
      time: '',
      date: ''
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
    }
  },
  mounted () {
    setInterval(this.updateTime, 1000)
  }
}
</script>

<style scoped>
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
  .card{
    position: absolute;
    top: 45%;
  }
  .card1{
    left:20%;
    padding-left: 40px;
    padding-right: 40px;
    width: 400px;
    height: 400px;
    background-color: #382a27
  }
  .card2 {
    width: 400px;
    height: 400px;
    left: 164%;
    right:0;
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
  .ivu-row:after, .ivu-row:before{
    content: none;
    display: none;
  }
</style>
