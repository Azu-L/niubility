cc.Class({
    extends: cc.Component,
    properties: {

        spriteFrame: {
            default: null,
            type: cc.SpriteFrame
        },
    },
    
    onLoad: function () {
        var self = this;
        cc.loader.loadRes("img/defaultHead",cc.SpriteFrame,function (err, val) {
            // self.node.getComponent(cc.Sprite).spriteFrame = val;
        });
        
        
        
        // 远程 url 不带图片后缀名，此时必须指定远程图片文件的类型
        var remoteUrl1 = "https://dn-mhke0kuv.qbox.me/YkW4MdGQdswVCIDaiikABZB?imageView2/1/w/100/h/100/q/85/interlace/1";
        cc.loader.load({url: remoteUrl1, type: 'png'}, function (err,texture) {
          
            var spriteFrame = new cc.SpriteFrame(texture, cc.Rect(0,0,texture.width, texture.height));
            self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
    }
});















