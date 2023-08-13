function toggle1(){
    var choice1=document.getElementById("laptop").value;
    var text = '<div class="choices">'+
    '<input type="checkbox" name="samsung" id="samsung" value="1">Dell'+   
    '</div>'+
    '<div class="choices">'+
    '<input type="checkbox" name="iphone" id="iphone" value="2">Apple'+   
    '</div>'+
    '<div class="choices">'+
    '<input type="checkbox" name="itel"  id="itel" value="3">HP'+  
    '</div>'+
    '<div class="choices">'+
    '<input type="checkbox" name="tecno"  id="tecno" value="4">Acer'+  
    '</div>';

    if(choice1 === "on"){
        electronic = document.querySelector("#choices-container").innerHTML = text;
    }
}
