define(function(require,exports,module) {
      exports.showFond = function(){
                var love = $(".myLove")
                var loveNum = $(".myLove b");
               
                var timer = null;
                
                love.attr("data-disabled",false);
             
                var isDisabled = false;
                
                
                love.on('click',function(){
                   
                     clearTimeout(timer);
                     
                     if(!isDisabled){
                           console.log(isDisabled)
                            var self = $(this);
                            loveNum.text(parseInt(loveNum.text())+1);
                            self.attr("data-disabled",true);
                            isDisabled = true;
                            timer = setTimeout(function(){
                                  love.css("color","#999");
                            },1000)
                            return false;
                          
                     }else{
                        return false;
                     }
                })            
     }
})