// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    list:[
        {
            text:"待付款",
            icon:"like",
            color:"#ff0000"
        },
        {
            text:"待收货",
            icon:"star",
            color:"#2a83fe"
        },
        {
            text:"待评价",
            icon:"fire",
            color:"#fd6012"
        },
        {
            text:"退货",
            icon:"gem",
            color:"#fd4d72"
        },
        {
            text:"售后",
            icon:"gift",
            color:"#00b478"
        },
        {
            text:"全部订单",
            icon:"shop",
            color:"#fe391f"
        }
    ]
},

  onLoad(options) {

  },
  getUserProfile() {
    wx.getUserProfile({
        desc: "展示用户信息",
        success: res => {
            this.setData({
                userInfo:res.userInfo
            })
        },
        fail(err) {
            console.log(err);
        },
        complete() {
            console.log("获取完成");
        }
    })
},
loginHandle(){
  wx.login({
      success(response){
          // code:在发送给接口
          /**
           * 如果大家使用此登录接口，使用外网服务器的情况下，必须使用我的AppID
           * 如果大家使用此登录接口，使用自己的服务器的情况下，需要修改服务器
           */
          getLogin({code:response.code}).then(res =>{
              wx.setStorageSync('loginID', res.data.data)
          })
      },
      fail(err){
          console.log(err);
      }
  })
}
})