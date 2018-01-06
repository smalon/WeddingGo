//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false
  },
  onLoad: function () {
    if (this.hasUserInfo){

    }else{
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    }
      
  },
  signIn: function(){
    wx.showToast({
      title: '已经签到',
      icon: 'success',
      duration: 2000
    })
    //此处用来处理签到逻辑
  }
})
