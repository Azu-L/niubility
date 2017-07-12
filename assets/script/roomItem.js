cc.Class({
    extends: cc.Component,

    properties: {
        roomName:{
            default:null,
            type:cc.Label
        },
        roomIcon:{
            default:null,
            type:cc.Sprite
        },
        roomIcons:{
            default:[],
            type:cc.SpriteFrame
        }
    },
    
    
    init:function(val){
        console.log('simida = '+val);
         this.roomName.string = val;
    },

    // use this for initialization
    onLoad: function () {
     
        this.roomIcon.spriteFrame = this.roomIcons[parseInt(4*Math.random())];
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
