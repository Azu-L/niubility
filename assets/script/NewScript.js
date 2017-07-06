cc.Class({
    extends: cc.Component,
    properties: {

        // textureURL: {
        //     default: "",
        //     url: cc.Texture2D
        // },

        spriteFrame: {
            default: null,
            type: cc.SpriteFrame
        },
    },
    
    onLoad: function () {
        console.log('--wtf?');
        var self = this;
        cc.loader.loadRes("img/defaultHead",cc.SpriteFrame,function (err, val) {
            // self.node.getComponent(cc.Sprite).spriteFrame = val;
        });
        
        // 加载 test assets 目录下所有资源
        cc.loader.loadResDir("img", function (err, assets) {
            // console.log(assets);
        });
        
        // 加载 sheep.plist 图集中的所有 SpriteFrame
        cc.loader.loadResDir("img/sheep", cc.SpriteFrame, function (err, assets) {
            // console.log(assets);
            // assets 是一个 SpriteFrame 数组，已经包含了图集中的所有 SpriteFrame。
            // 而 loadRes('test assets/sheep', cc.SpriteAtlas, function (err, atlas) {...}) 获得的则是整个 SpriteAtlas 对象。
        });
        
        // var remoteUrl = "http://www.baidu.com/img/bd_logo1.png";
        // cc.loader.load(remoteUrl, function (err, texture) {
        //     console.log(texture);
        //     //有跨域问题有
        //     // Use texture to create sprite frame
        // });
        
        // 远程 url 不带图片后缀名，此时必须指定远程图片文件的类型
        var remoteUrl1 = "https://dn-mhke0kuv.qbox.me/YkW4MdGQdswVCIDaiikABZB?imageView2/1/w/100/h/100/q/85/interlace/1";
        cc.loader.load({url: remoteUrl1, type: 'png'}, function (err,texture) {
          
            // var spriteFrame = new cc.SpriteFrame(texture, cc.Rect(0,0,texture.width, texture.height));
            // self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
    }
});















