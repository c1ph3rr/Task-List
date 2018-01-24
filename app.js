const form=document.querySelector('#task-form');
const taskList=document.querySelector('.collection');
const taskInput=document.querySelector('#task');
const clearBtn=document.querySelector('#clrBtn');
const main=document.querySelector('#main');
const header=document.querySelector('#h5');
const body=document.querySelector('#body');
const list=document.querySelector('#list');



taskEvent();

function taskEvent(){
    form.addEventListener('submit',addList);

    taskList.addEventListener('click',removeTask);

    clearBtn.addEventListener('click',clearTask);

    document.addEventListener('DOMContentLoaded',getLocal);
}


function addList(e){
    if(taskInput.value==='') {
        alert('Add a task!!');
    }
    else {
        const li=document.createElement('li');

        // if(flag===1)
        //     li.className='collection-item blue-grey darken-1';
        // else {
        //     li.className='collection-item ';
        // }
         li.className='collection-item';
        li.appendChild(document.createTextNode(taskInput.value));

        const link=document.createElement('a');
        link.className='delete-item secondary-content';
        link.innerHTML='<i class="fa fa-remove"></i>';
        li.appendChild(link);

        taskList.appendChild(li);

        storeTask(taskInput.value);
        
        taskInput.value='';

        e.preventDefault();
    }
}


function storeTask(tk){
    let tasks;
    if(localStorage.getItem('tasks')===null) //check if local storage has some value
        tasks=[];
    else
        tasks=JSON.parse(localStorage.getItem('tasks')); //if so append the next value 

    tasks.push(tk);

    localStorage.setItem('tasks',JSON.stringify(tasks));
    
}


function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm("Are you sure?"))
    
        e.target.parentElement.parentElement.remove();

        removeLocal(e.target.parentElement.parentElement);
    }
}


function clearTask(){
    taskList.innerHTML='';

    clearLocal();
}

function clearLocal(){
    localStorage.clear();
}


function getLocal(){
    let tasks;
    if(localStorage.getItem('tasks')===null)
        tasks=[];
    else
        tasks=JSON.parse(localStorage.getItem('tasks'));

    tasks.forEach(function(task) {
        const li=document.createElement('li');
        li.className='collection-item';
        li.appendChild(document.createTextNode(task));

        const link=document.createElement('a');
        link.className='delete-item secondary-content';
        link.innerHTML='<i class="fa fa-remove"></i>';
        li.appendChild(link);

        taskList.appendChild(li);
    });
}


function removeLocal(taskItem){
    let tasks;
    if(localStorage.getItem('tasks')===null)
        tasks=[];
    else
        tasks=JSON.parse(localStorage.getItem('tasks'));

    tasks.forEach(function(task,index){
        if(taskItem.textContent===task){
            tasks.splice(index,1);
        }
    });

    localStorage.setItem('tasks',JSON.stringify(tasks));
}

var flag=0;

function toggle(){
    if(main.className==="card opacity"){
        flag=1;
        main.className+=" blue-grey darken-1";
        main.firstElementChild.className+=" white-text";
        header.className="white-text";
        body.className="changeWall";
        // list.className+=" white-text";
        
    }
    else{
        flag=0;
        main.className="card opacity";
        main.firstElementChild.className="card-content";
        header.className="card-title";
        body.className="";
        // list.className="collection";
    }
}

