// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search:"",
    value:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  //获取搜索框内内容
  onChange(e){
    this.setData({
      value:e.detail
    })
  },
  //回车搜索
  onSearch(){
    wx.navigateTo({
      url: '/pages/goodsshow/goodsshow?search='+ this.data.value,
    })
  },
  //点击搜索按钮进行搜索
  onSearchClick(){
    wx.navigateTo({
      url: '/pages/goodsshow/goodsshow?search='+ this.data.value,
    })
  }
  
})