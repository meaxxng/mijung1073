window.onload = pageLoad;

function pageLoad(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "cloth.json");
    xhr.onload = function(){
        var jsdata = JSON.parse(xhr.responseText);
        console.log(jsdata);
        showData(jsdata);
    };
    xhr.onerror =  function() { alert("ERROR!"); };
	xhr.send();
}

function showData(data){
    var showdiv = document.getElementById("layer")
	var key = Object.keys(data);
    
    for(var i =0; i< key.length;i++){
        var item = data[key[i]]
        var temp = showdiv.children[i];
        var picture = document.createElement("img");
        picture.src="pic/"+ item.pic;
        var p = document.createElement("p");
        var n = document.createElement("p")
       
        picture.alt = item.brandname;
        picture.style.width = "150px"
        p.innerHTML = item.brandname + " ";
        n.innerHTML = item.price + " ";
        temp.appendChild(picture);
        temp.appendChild(p);
        temp.appendChild(n);
    }
}

