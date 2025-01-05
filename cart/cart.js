const { getCart,delGoodsCart } = require("../../api/index.js")
const db=wx.cloud.database()
const _=db.command

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartgood:[]
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onShow(options) {
    db.collection('cartgood')  // 指定要查询的集合  
    .get()  
    .then(res => {  
        // 成功回调，设置页面数据  
        this.setData({  
            cartgood: res.data  // 将查询到的数据保存到  
        });  
    }) 
},
/**
   * 购物车删除
 */
delCartHandle(event){
  const docId = event.currentTarget.dataset.id;  
  console.log(docId);
  db.collection('cartgood').doc(docId).remove()  
      .then(res => {  
        wx.showToast({  
          title: '删除成功',  
          icon: 'success'  
        }); 
      })  
    db.collection('cartgood').get()  
    .then(res => {  
        this.setData({  
            cartgood: res.data // 更新数据源  
        });  
    })  
    .catch(err => {  
        console.error('加载数据失败', err);  
    });  
},
  
})