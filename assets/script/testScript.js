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
        console.log(this.node);
        var node = this.node;
        // 创建一个移动动作
        // var action = cc.moveTo(10, 100, 200);
        // 执行动作
        // node.runAction(action);
        // var ACTION_TAG = 1;
        // action.setTag(ACTION_TAG);
        
        // 让节点左右来回移动
        var seq = cc.sequence(cc.moveBy(0.5, 200, 0), cc.moveBy(0.5, -200, 0));
        node.runAction(seq);
        
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
