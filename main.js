const inputan = document.getElementById("input-box");
const list = document.getElementById("list-container");
function addTask(){
   if(inputan.value === ''){
      alert("Tuliskan Sesuatu")
   }else{
      let li = document.createElement("li");
      li.innerHTML = inputan.value;
      list.appendChild(li);
      let span = document.createElement("span")
      span.innerHTML = "\u00d7";
      li.appendChild(span);
   }
   inputan.value = "";
   saveData();
}

list.addEventListener("click", function(e){
   if(e.target.tagName === "LI"){
      e.target.classList.toggle("cek");
      saveData();
   }else if(e.target.tagName === "SPAN"){
      e.target.parentElement.remove();
      saveData();
   }
}, false);

function saveData(){
   localStorage.setItem("data", list.innerHTML);
}

function showList(){
   list.innerHTML = localStorage.getItem("data")
}
showList();