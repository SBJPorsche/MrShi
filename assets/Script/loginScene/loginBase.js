var User = require('User')
var labelText
cc.Class({
    extends: cc.Component,

    properties: {
        label : {
            default : null,
            type : cc.Label
        },
        
        editName : {
            default : null,
            type : cc.EditBox
        },  
        
        editPassword : {
            default : null,
            type : cc.EditBox
        },        
    },

    // use this for initialization
    onLoad: function () {
        labelText = this.label
    },
    
    registUser : function(){
        socket.emit('regist',new User(this.editName.string,this.editPassword.string)); 
        socket.on('regist',function(msg){
            labelText.string = msg;
        });        
    },

    loginUser : function(){
        socket.emit('login',new User(this.editName.string,this.editPassword.string)); 
        socket.on('login',function(msg){
            labelText.string = msg;
            if (msg == 'ok') {
                cc.director.loadScene('mainScene');
            };
        });        
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
