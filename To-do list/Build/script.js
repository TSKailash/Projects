const input=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");

function AddTask(){
    if(input.value===''){
        alert("Write something!!..")
    }    
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        li.style.paddingLeft="10px";
        li.style.marginBottom="20px";
        li.style.cursor="pointer";
        li.style.fontSize="20px";
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        span.style.position="absolute";
        span.style.right="620px";
        span.style.width="40px";
        span.style.height="40px";
        span.style.color="#555";
        span.style.textAlign="center";
        span.style.fontSize="22px";
        li.appendChild(span);
    }
    input.value="";
    saveData();
}
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showList(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showList();