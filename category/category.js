import { getCategory,getSearch } from "../../api/index.js"

// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeKey:0,
    categoryData:[],
    sliderData:[
        {
            "id":0,
            "text":"教材"
        },
        {
            "id":1,
            "text":"考试"
        },
        {
            "id":2,
            "text":"杂志"
        },
        {
            "id":3,
            "text":"课外阅读"
        },
        {
            "id":4,
            "text":"漫画"
        },
        {
          "id":5,
          "text":"小说"
        },
        {
          "id":6,
          "text":"儿童文学"
        },
        {
          "id":7,
          "text":"英语"
        },
        {
          "id":8,
          "text":"收书"
        },
        {
          "id":9,
          "text":"言情"
        }
    ],
    currentTag:"教材"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.http(this.data.currentTag);
  },
  clickItemNav(e){
    this.http(e.currentTarget.dataset.title)
},
http(tag){
    getCategory({category:tag}).then(res =>{
        if(res.data.status === 200){
            this.setData({
                categoryData:res.data.data.result
            })
            console.log(this.data.categoryData)
        }else{
            wx.showToast({
              title: '暂无数据',
              icon:"success"
            })
        }
    })
},
clickItem(e){
  wx.navigateTo({
    url: '/pages/goodsshow/goodsshow?search='+ e.currentTarget.dataset.tag,
  })

}
  
})