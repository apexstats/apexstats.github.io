$(document).ready(function(){
        $('.toggle').click(function(){
                var cookieVal = Cookies.get('darkmode-Status');
                if(cookieVal == null){
                    Cookies.set("darkmode-Status","false");
                }
                if(cookieVal == "true"){
                    Cookies.set("darkmode-Status","false");
                    return;
                }
                if(cookieVal == "false"){
                    Cookies.set("darkmode-Status","true");
                    return;
                }
        })
    })
