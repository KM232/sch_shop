const { getGoodsDetails,addGoodsCart } = require("../../api/index.js")
const db=wx.cloud.database()
const _=db.command
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsDetails:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    getGoodsDetails({id:options.id}).then(res =>{
      console.log(res.data);
      this.setData({goodsDetails:res.data.data.result[0]})
  })
  },
    /**
     * 客服
     */
    onClickKF(){},
    /**
     * 购物车
     */
    onClickCart(){
        wx.switchTab({
          url: '/pages/cart/cart',
        })
    },
    /**
     * 加入购物车
     */
  onClickAddCart(){
        db.collection('cartgood').add({
          data:{
            title:this.data.goodsDetails.title,
            price:this.data.goodsDetails.price,
            image:this.data.goodsDetails.topimage,
            currentID:this.data.goodsDetails.id
          }  
        }).then(res =>{
                wx.showToast({
                  title: '加入成功',
                })
        })
    },
   
    /**
     * 立即购买
     */
    onClickBuy(e){
        wx.navigateTo({
          url: '/pages/buy/buy?id='+e.currentTarget.dataset.id,
        })
    }
  
})