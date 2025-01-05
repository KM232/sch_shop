const { getBuy } = require("../../api/index.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsData:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options.id)
    getBuy({id:options.id}).then(res=>{
      console.log(res.data);
      this.setData({
        goodsData:res.data.data.result[0]
      })
      
    })
  },

  
})