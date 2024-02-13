const ListTask = document.querySelector("form");
let Tasks= [];      
ListTask.onsubmit = addTask;
const input1=document.querySelector(".test");

function addTask(ele) 
{
    
    ele.preventDefault();
    const x = document.querySelector(".test").value;
    let task = {};
    task.value= x;
    Tasks.push(task);
   print();
 input1.value=" ";
 }

 function print()
  {
        const result =  Tasks.map(function(ele)
        {
        return `
        <div class="">
        <input type="checkbox" onchange="updateTask(this)">
        <span class="in">${ele.value}</span>
        </div>
        `;
        }).join(" ");

document.querySelector(".Tist").innerHTML=result;

   }

 function updateTask(checkbox) 
 {
    const taskText = checkbox.nextElementSibling;
    taskText.style.textDecoration = checkbox.checked ? "line-through" : "none";
 }
 