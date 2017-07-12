cc.Class({
    extends: cc.Component,

    properties: {
        personName:{
            default:null,
            type:cc.Label
        },
        headImg:{
            default:null,
            type:cc.Sprite
        }
    },

    // use this for initialization
    onLoad: function () {
        
        var self = this;
        // 远程 url 不带图片后缀名，此时必须指定远程图片文件的类型
        var remoteUrl1 = "https://dn-mhke0kuv.qbox.me/YkW4MdGQdswVCIDaiikABZB?imageView2/1/w/100/h/100/q/85/interlace/1";
        cc.loader.load({url: remoteUrl1, type: 'png'}, function (err,texture) {
        
            var spriteFrame = new cc.SpriteFrame(texture, cc.Rect(0,0,texture.width, texture.height));
            // self.node.getComponent(cc.Sprite).headImg = spriteFrame;
            self.headImg.spriteFrame = spriteFrame;
            self.personName.string = '康桑思密达';
        });
    },
    
    onEnable:function(){
        console.log('show hide!');
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
