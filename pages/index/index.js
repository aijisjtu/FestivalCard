// index.js
Page({
  data: {
    renderer: 'webview'
},
  login() {
    wx.login({
        success: (res) => {
            console.log(res)
            var code = res.code //获取code
            wx.request({ //调用后端接口
                url: 'http://localhost:8080/login', 
                method: 'POST',
                header: {
                    'content-type': 'application/json'
                },
                data: {
                    code: code, //请求体中封装code
                },
                success(res)
                {
                    console.log(res)
                    //页面跳转
                    wx.navigateTo({
                        //携带用户头像信息和用户昵称信息
                      url: '/index/index?userAvatarUrl=' + res.data.data.userAvatarUrl + '&userName=' + res.data.data.userName,
                    })
                  }
              })
          },
      })
  },

    data:{
      checked: false,
        isMe:true,
        toName:'元宵佳节',
        mainText:'祝您月圆梦圆人团圆',
        fromName:'艾骥',
    },

    onLoad(option){
        const{toname:toName,maintext:mainText,fromname:fromName,receiver}=option;
        this.setData({
          isMe:receiver!=='1',
          renderer: this.renderer,
        })
        if(toName){
          this.setData({
            toName,
          });
         }
        if(mainText){
          this.setData({
            mainText,
          });
        }
        if(fromName){
          this.setData({
            fromName,
          });
        }
        this.player(wx.getBackgroundAudioManager())
    },

    toNameInput(e){
        const {value}=e.detail;
        this.setData({
            toName:value,
        });
    },

    mainTextInput(e){
        const {value}=e.detail;
        this.setData({
            mainText:value,
        });
    },
    fromNameInput(e){
        const {value}=e.detail;
        this.setData({
            fromName:value,
        });
    },

  
  checkMusic() {
    this.setData({
      checked: !this.data.checked
    })
    if (this.data.checked) {
      wx.getBackgroundAudioManager().pause();
    } else {
      this.player(wx.getBackgroundAudioManager())
    }
  },



  player(e) {
    e.title = '彩云追月'
    e.src = "http://ws.stream.qqmusic.qq.com/C4000014ZmIz1lnKHm.m4a?guid=929219239&vkey=7F5305468D08A782E8D9BAB65DF8FB4D24F90BD2E6A1E2F0E5B9FAEC477FE729B1B4B2BA0400CC3B33955A4A2DA4A02BD814CC204AD74F97&uin=&fromtag=120032"
    //音乐播放结束后继续播放此音乐，循环不停的播放
    e.onEnded(() => {
      this.player(wx.getBackgroundAudioManager())
    })
  },

  // 页面卸载时候暂停播放（不加页面将一直播放）
  onUnload: function () {
    wx.getBackgroundAudioManager().stop();
  },
  // 小程序隐藏时候暂停播放（不加页面将一直播放）
  onHide() {
    wx.getBackgroundAudioManager().stop();
  },

    onShareAppMessage(){
        const{ toName, mainText, fromName }=this.data;
        return{
            title:"电子贺卡-元宵",
            imageUrl:'https://mmbiz.qpic.cn/mmbiz_png/R0b2UA2kvZj98FwnQpDsP4OTiaVHoOWNV4Wz8R9XNJHll1XAVgkUbsPfZfEJhC47iaWJbagM34Kyv9icryaXd9Ggw/640?wx_fmt=png&amp;from=appmsg',
            path: `pages/index/index?receiver=1&toname=${toName}&maintext=${mainText}&fromname=${fromName}`,
        }
    }

})
