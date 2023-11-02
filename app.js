let items = document.querySelector('#item');
let toDoText = document.querySelector('#to-do-text');
items.addEventListener("keyup", function (event){
    if(event.key == "Enter"){
        addToDo(this.value);
        this.value = ""
    }
});

const addToDo = (data)=>{
   const listItem = document.createElement("li");
listItem.innerHTML = `
${data}
<i class="fa fa-times"></i>
`;
listItem.addEventListener("click", function(){
    this.classList.toggle("done")
})
toDoText.appendChild(listItem)
listItem.querySelector("i").addEventListener("click" ,function(){
    listItem.remove()
});
};