let input = document.querySelector('input');
let addButton = document.querySelector('.list-btn');
let taskSection = document.querySelector('.task-section')
let task = document.querySelector('.task');
let circleIcon = document.querySelector('i .fa-regular.fa-circle');
let crossIcon = document.querySelector('.fa-xmark');

let taskContent = document.querySelector('.task-content');
let container = document.querySelector('.container')


// A funciton that applies classes to the created elements
function applyClass(element, className){
    element.classList.add(className);
}

// Preventing default form behaviour
let form = document.querySelector('form');
form.addEventListener('submit', (evt)=>{
    evt.preventDefault();
})


//Adding new list item button click
addButton.addEventListener('click', ()=>{

    let taskText = input.value;
    if(taskText.trim() !== ""){

        // create a task content <p>
        taskContent = document.createElement('p');
        taskContent.appendChild(document.createTextNode(taskText));

        //Clearing the input after button click
        input.value = "";
        
        // create  task icons
        circleIcon = document.createElement('i');
        crossIcon = document.createElement('i');

        // create task div
        task = document.createElement('div');

        // created a task div so that we can append it to the taskSection
        task.appendChild(circleIcon);       
        task.appendChild(taskContent);       
        task.appendChild(crossIcon); 

        // Now we append this task to the parent section
        taskSection.appendChild(task);

        // applying classes to all created elements for styling
        applyClass(circleIcon, "fa-regular")
        applyClass(circleIcon, "fa-circle")
        applyClass(crossIcon, "fa-solid")
        applyClass(crossIcon, "fa-xmark")
        applyClass(taskContent, "task-content")
        applyClass(task, "task")
        
        
        

        
        
      
        // adding event listeners on the list items now, IK its bad to do it here
        circleIcon.addEventListener('click', (evt)=>{
            evt.stopPropagation(); // to stop event bubbling
            // to toggle class on the targeted circle and not the last circle everytime
            let delCircle = evt.target;
            delCircle.classList.toggle('fa-solid')

            // first got the parent container using event object
            // then from the parent container selected the child with .task-content class
            let delTask = evt.target.closest('.task');
            let delContent = delTask.querySelector('.task-content')
            delContent.classList.toggle('checked')
            
            //this makes sure that exactly the targeted item is toggled
    
        })

      
        task.addEventListener('click', (evt)=>{
            // obtained parent tag, then selected childs using class and toggled class on them
            let delTask = evt.target;

            let delContent = delTask.querySelector('.task-content')
            let delCircle = delTask.querySelector('.fa-circle')
            
            delContent.classList.toggle('checked')
            delCircle.classList.toggle('fa-solid')
        })


         //removing the targeted task item
         crossIcon.addEventListener('click', (evt)=>{
            evt.stopPropagation();

            let delTask = evt.target.closest('.task')
            delTask.remove();
         })
        

    }else{
        alert("Enter a task")
    }
    

})

