cc.Class({
    extends: cc.Component,

    properties: {
        itemPrefab:{
            default:null,
            type:cc.Prefab
        }
    },
    

    // use this for initialization
    onLoad: function () {
        var self = this;
        for(let i=0; i<10; i++){
            let item = cc.instantiate(this.itemPrefab);
            item.getComponent('roomItem').init('房间'+i);
            self.node.addChild(item);
        }
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
