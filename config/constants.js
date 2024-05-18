let config = {
    Name: "水元希子kiko", // 主页名字
  
    BiliLiveRoomID: "31011385", // 直播间id
  
    NetEaseMusicId: "", // 网易云音乐id
    QQMusicId: "", // QQ音乐id
    Footer: "Github",
  
    Cursor: false, // 使用自定义光标图片
  
    LanguageCategories: ["日语", "英语"], // 语言分类
    RemarkCategories: ["粤语", "古风"], // 标签分类
  
    BannerTitle: "一键直达", // banner 标题
  
    BannerContent: [
    ],
  
    // 自定义按钮 （可以复制生成更多）
    CustomButtons: [
      {
        link: "https://space.bilibili.com/3546385072785575",
        name: "主页",
        image: "/assets/icon/bilibili.png",
      },
      {
        link: "https://live.bilibili.com/31011385",
        name: "直播间",
        image: "/assets/icon/bilibili.png",
      },
    ],
};


module.exports = {
    config
}