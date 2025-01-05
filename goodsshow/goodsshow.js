const { getSearch } = require("../../api/index.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    getSearch({search:options.search}).then(res=>{
      console.log(res.data.data);
      if(!res.data.msg)
      {this.setData({goodsData:res.data.data.result})}
      else{
          wx.showToast({
            title:res.data.msg,
          })
      }
    })

  },

  
})