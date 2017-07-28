cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {
        var collider = cc.director.getCollisionManager();
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
        cc.director.getCollisionManager().enabledDrawBoundingBox = true;

        this.touchingNumber = 0;
        console.log(collider._colliders);
    },
    
    onCollisionEnter: function (other) {
        this.node.color = cc.Color.RED;
        this.touchingNumber ++;
        cc.log(this.touchingNumber);
        // console.log('碰撞产生时调用');
    },

    onCollisionStay: function (other) {
        // console.log('on collision stay');
        // console.log('碰撞保持时调用');
    },

    onCollisionExit: function () {
        this.touchingNumber --;
        cc.log(this.touchingNumber);
        if (this.touchingNumber === 0) {
            this.node.color = cc.Color.WHITE;
        }
        // console.log('碰撞结束时调用');
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
