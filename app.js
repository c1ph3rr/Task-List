const form=document.querySelector('#task-form');
const taskList=document.querySelector('.collection');
const taskInput=document.querySelector('#task');
const clearBtn=document.querySelector('#clrBtn')

taskEvent();

function taskEvent(){
    form.addEventListener('submit',addList);

    taskList.addEventListener('click',removeTask);

    clearBtn.addEventListener('click',clearTask);
}

function addList(e){
    if(taskInput.value==='')
        alert('Add a task');
    
    const li=document.createElement('li');
    li.className='collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    const link=document.createElement('a');
    link.className='delete-item secondary-content';
    link.innerHTML='<i class="fa fa-remove"></i>';
    li.appendChild(link);

    taskList.appendChild(li);
    
    taskInput.value='';

    e.preventDefault();
}

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm("Are you sure?"))
    
        e.target.parentElement.parentElement.remove();
    }
}

function clearTask(){
    taskList.innerHTML='';
}

