

document.querySelectorAll("button").forEach(function(item){

    item.onclick = function(){
    
        document.querySelector("#result2").innerHTML= item.dataset.age;
    
        document.querySelector("#result2").style.color= item.dataset.color;
    
    }
    
    });