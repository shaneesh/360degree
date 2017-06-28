$(document).ready(function() {
            $(document).scroll(function(){
                
                var scrollTop=$(document).scrollTop();
//                alert(scrollTop);
                    if(scrollTop>0){
                        $('.navbar').addClass("sticky");
//                        $('.row0').fadeOut(1000);
                    }else{
                        $('.navbar').removeClass("sticky");
                    }
            });
            $('.close').click(function(){
                $('#enhancedtextwidget-33').fadeOut(1000);
            });
            $('#showLeft').click(function(){
//                alert($('.cbp-spmenu').find('.classList').length);
//                if($('.cbp-spmenu').width()>0){
////                alert($(document).width());
//                $('#showLeft').css("left","57%");
//                }else{
//                    $('#showLeft').css("left","97%");
//                }
            });
            
});
