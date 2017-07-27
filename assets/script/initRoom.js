var io = require('socket.io-client');
var socket = io.connect('http://127.0.0.1:3000');

var roomList = [];


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
        console.log('socket?');
        
        socket.on('get room',function(data){
            roomList = data.data;
            for(let i=0; i<roomList.length; i++){
                let item = cc.instantiate(self.itemPrefab);
                item.getComponent('roomItem').init(roomList[i].roomName);
                self.node.addChild(item);
            }
        });
        
        
        
        setTimeout(function(){
            console.log('----');
            socket.emit('fapai',function(){});
        },5000);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
