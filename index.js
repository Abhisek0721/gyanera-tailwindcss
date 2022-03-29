function runJs(){
    let Toggle = document.getElementById("toggle");
    let mobileMenus = document.getElementById("menus");

    let switchToggle = false;

    Toggle.addEventListener("click", function(){
        // mobileMenus.classList.toggle("hidden");
        if(switchToggle == true){
            mobileMenus.classList.add("hidden");
            switchToggle = false;
            // console.log("Off");
        }else{
            mobileMenus.classList.remove("hidden");
            switchToggle = true;
            // console.log("On");
        };
    });
};