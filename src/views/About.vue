<template>
  <div class="about">
    <div class="submit-btn"
         @click="onShowPay">点击显示支付弹窗</div>
    <vpay ref="pays"
          v-model="show"
          @close="close"
          @forget="forget"
          @input-end="inputEnd"></vpay>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    onShowPay () {
      this.show = true
    },
    // 取消支付弹窗关闭的回调
    close () {
      console.log('取消支付弹窗关闭')
    },
    // 忘记密码跳转
    forget () {
      console.log('忘记密码')
    },
    inputEnd (val) { // 密码输入完成回调
      setTimeout(() => {
        // 模拟支付成功的结果
        if (val === 111111) {
          // 调用插件的$success方法告知插件支付成功
          // 并且在then方法里面可以写支付成功的回调
          this.$refs.pays.$success().then(res => {
            console.log('支付成功')
          })
          // 模拟支付失败的结果
        } else {
          this.$refs.pays.$fail()
        }
      }, 1000)
    }
  }
}
</script>

<style lang="less">
  .submit-btn {
      width: 50%;
      height: 50px;
      margin: 100px auto 0;
      line-height: 50px;
      text-align: center;
      border-radius: 10px;
      background: #f00;
      color: #fff;
      cursor: pointer;
  }
</style>
