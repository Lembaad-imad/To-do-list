let mysub = document.getElementById("sub")
let mylist = document.getElementById("list")
let myform = document.querySelector("form");
mysub.addEventListener("click", function(){
    var myadd = document.getElementById("add").value;
    if(myadd == ""){
        alert("Please enter")
    }else{
    console.log(myadd);
    let myli = document.createElement("li");
    let myp = document.createElement("span");
    myp.innerHTML = myadd;
    myli.appendChild(myp);
    myli.setAttribute("class", "list-group-item d-flex align-items-center border-0 mb-2 rounded d-flex justify-content-between lis ")
    myli.style.backgroundColor ="#f4f6f7"
    let myinput = document.createElement("input")
    myinput.setAttribute("class","form-check-input me-2 lis")
    myinput.setAttribute("type","checkbox")
    myli.prepend(myinput)
    mylist.appendChild(myli);
    let myx = document.createElement("i")
    myx.setAttribute("class","fas fa-times text-primary marg")
    myli.appendChild(myx)
    document.getElementById("add").value = ""
    myx.onclick = function(){
        mylist.removeChild(myli)
    }
    myinput.onclick = function(){
       if (myinput.checked == true){
        myp.style.textDecoration ="line-through"
    } else{
        myp.style.textDecoration ="none"
    }
    }
}
})
