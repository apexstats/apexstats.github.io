$(document).ready(function(){
var cookieVal = Cookies.get('darkmode-Status');
                if(cookieVal == null){
                    Cookies.set("darkmode-Status","false");
                }
                if(cookieVal == "true"){
                    $('.toggle').toggleClass('active')
                    $('body').toggleClass('night')
                    $('.svgStats').toggleClass('night')
                }

})
