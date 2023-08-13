function checkForm(){
    var formElements = document.querySelectorAll("input, textarea");
    var isFilled = true;

    formElements.forEach(function(element){
        if(element.value.trim() === ""){
            isFilled = false;
        } 
    });
    if(!isFilled){
        window.alert("Please fill in all fields.");
        }else{
            window.alert("Sent Successfully");
            window.location.href="conclusion.html";
            setTimeout(function(){window.location.href="conclusion.html"}, 2000); //2s timout before navigating to next page
        }
}
