cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // use this for initialization
    onLoad: function () {
        var obj = this.getComponent(cc.AudioSource);
        obj.play();
        console.log(obj);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
