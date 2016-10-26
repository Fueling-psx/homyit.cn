define(function(require, exports, module){

    exports._init = function(){
        console.log(messageToos/_init);
    };
   
    exports.getMessageByField = function(message, field, value, cb){
        if(0 == message.length){
            cb([]);
        } else if(field.length || value.length){
            var arr = new Array();
            message.forEach(function(item){
                item[field] == value&&arr.push(item);
            });
            cb(arr);
        } else {
            cb(message);
        }
    }
});
