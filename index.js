debugger
var list =[];
function savedata(){
    let element = document.querySelector(".inner").value;
    list.push(element);
    let raw = document.createElement("div");
    let raw1 = document.createElement('spam');
    let raw2 = document.createElement('input');
    raw1.innerText = list[list.length-1];
    raw2.type="checkbox" ;
    raw.appendChild(raw1) ;
    raw.appendChild(raw2) ;
    var data = document.querySelector(".list");
    data.appendChild(raw);
   raw.classList.add('box');
   document.querySelector(".inner").value = "";
}

