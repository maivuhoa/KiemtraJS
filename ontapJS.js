var vToday = new Date();
let taskArray=[];
class TaskItem{
    constructor(title,deadline,isNormalLevel,intermediate){
        this.title=title;
        this.deadline=deadline;
        this.isNormalLevel=isNormalLevel;
        this.intermediate=intermediate;
    }
}
const getEl = (el) => {
    return document.querySelector(el);
};
const compareDate =(value)=>{
    const year= parseInt(value.substring(0,4));
    const month=parseInt(value.substring(5,7));
    const day=parseInt(value.substring(8,10));
    if(vToday.getFullYear()>year) return alert("Year must be bigger than current year !");  
    if(vToday.getMonth() + 1 >month) return alert("Month must be bigger than current month !");  
    if(vToday.getDate()>day) return alert("Day must be bigger than current day !");  
}
const submitValue=()=>{
    const taskValue=getEl('#task').value.trim();
    console.log("task",taskValue);
    const dateValue=getEl('#date').value;
    console.log("date",dateValue);
    const levelValue=getEl('#levelTask').value;
    console.log("levelValue",levelValue);
    const intermediateValue=getEl('#intermediate').value;

   const task=new TaskItem(taskValue,dateValue,levelValue==='normal',intermediateValue);

    if(!taskValue) return alert("Vui long nhap title!");
    
    const year= parseInt(dateValue.substring(0,4));
    const month=parseInt(dateValue.substring(5,7));
    const day=parseInt(dateValue.substring(8,10));
    if(vToday.getFullYear()>year) return alert("Year must be bigger than current year !");  
    if(vToday.getMonth() + 1 >month) return alert("Month must be bigger than current month !");  
    if(vToday.getDate()>day) return alert("Day must be bigger than current day !");  
    taskArray=[...taskArray,task];
    displayTask(taskArray);
    localStorage.setItem('taskArrayinLocalStorage', JSON.stringify(taskArray));



};
const displayTask=(levelTask)=>{
    let listTaskElement='';
        for(let task of taskArray){
            let isDisplay=false;
            switch(levelTask){
                case 'normal':
                    isDisplay=task.isNormalLevel;
                break;    
                case 'urgent':
                    isDisplay= !task.isNormalLevel;
                break;
                case 'intermediate':
                    isDisplay= task.intermediateValue;
                break;
                default :
                    isDisplay=true;
            }
            if(isDisplay){
                listTaskElement= listTaskElement+`<div class="taskCard">Title:${task.title}
                <br> Deadline:${task.deadline}
                <br>Level Task:${task.isNormalLevel ? 'NORMAL' : 'URGENT'}
                </div>`+`<div class="deleteTask">X`
                
            }
        }
        getEl('#taskList').innerHTML=listTaskElement;
};
getEl('#submit').onclick=submitValue;
getEl('ul > li:first-child').onclick=displayTask;
getEl('ul > li:nth-child(2)').onclick= () =>displayTask('normal');
getEl('ul > li:nth-child(3)').onclick= () =>displayTask('urgent');
getEl('ul > li:last-child').onclick= () =>displayTask('intermediate');

