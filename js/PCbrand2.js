function toggle2(){
    var choice2=document.getElementById("smartphone").value;
    var option1= '<div class="choices">'+
    '<input type="checkbox" name="samsung" id="samsung" value="1">Samsung'+   
     '</div>'+
     '<div class="choices">'+
     '<input type="checkbox" name="iphone" id="iphone" value="2">IPhone'+   
     '</div>'+
     '<div class="choices">'+
     '<input type="checkbox" name="itel"  id="itel" value="3">Itel'+  
     '</div>'+
     '<div class="choices">'+
     '<input type="checkbox" name="tecno"  id="tecno" value="4">Tecno'+  
     '</div>';

      if(choice2 === "on"){
        electronic1 = document.querySelector("#choices-container").innerHTML = option1;
    }
}