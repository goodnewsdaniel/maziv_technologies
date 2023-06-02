( function (){
        "use strict"

        // Set cookie according to you
        let cookieName = "Maziv";
        let cookieValue ="Maziv Software Limited";
        let cookieExpireDays = 30;

        // When users click accept button
        const acceptCookie = document.getElementById("acceptCookie");
        acceptCookie.onclick= function(){
            createCookie(cookieName, cookieValue, cookieExpireDays);
        }

        // function to set cookie in web browser
        const createCookie = function(cookieName, cookieValue, cookieExpireDays){
            let currentDate = new Date();
            currentDate.setTime(currentDate.getTime() + (cookieExpireDays*24*60*60*1000));
            let expires = "expires=" + currentDate.toGMTString();
            document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
            if(document.cookie){
                document.getElementById("cookiePopup").style.display = "none";
            }else{
                alert("Unable to set cookie. Please allow all cookies site from cookie setting of your browser");
            }

        }

        // Get cookie from the web browser
        const getCookie= function(cookieName){
            let name = cookieName + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for(let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
                }
            }
        return "";
        }
        // check cookie is set or not
        const checkCookie = ()=>{
            let check = getCookie(cookieName);
            if(check==""){
                document.getElementById("cookiePopup").style.display = "block";
            }else{
                
                document.getElementById("cookiePopup").style.display = "none";
            }
        }
    
    checkCookie();

})();
    
    
    
    
    