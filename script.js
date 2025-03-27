var _overlayBox=document.querySelector(".overlayBox")
var _popupBox=document.querySelector(".popupBox")

function show(){
    _overlayBox.style.display="block"
    _popupBox.style.display="block"
}
function cancel(){
    _overlayBox.style.display="none"
    _popupBox.style.display="none"
}
function add(){
    var _body=document.querySelector(".body")
    var _ititle=document.getElementById("ititle")
    var _iauthor=document.getElementById("iauthor")
    var _idescription=document.getElementById("idescription")

    if(!_ititle.value||!_iauthor.value||!_idescription.value){
        alert("Fill All Details")
        return
    }

    var box=document.createElement("div")
    box.className="box1"

    box.innerHTML=`<h2 class="h2tag">${_ititle.value}</h2>
                    <small class="smalltag">${_iauthor.value}</small>
                    <hr>
                    <p class="ptag">${_idescription.value}</p>
                    <button onclick="this.parentElement.remove()">Delete</button>`
    _body.append(box)

    _ititle.value= ""
    _iauthor.value = ""
    _idescription.value = ""

    cancel()
}

function delete_example() {
    var exampleBox = document.querySelector(".box1");
    exampleBox.remove()
}
