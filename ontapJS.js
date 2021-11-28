var vToday=new Date();
console.log("Today",vToday);
let taskArr = [];
const submitTask = () => {
    let taskValue = document.getElementById("task").value.trim();
    let dateValue=document.getElementById("date").value;
    let isNormalLevel =document.getElementById("idSelect").value;  
    console.log(taskValue,dateValue,isNormalLevel);
    if(!taskValue){
        alert("Vui Lòng nhập Tasks !")
        return ;
    }
    if(dateValue<vToday){
        alert("Deadline phải lớn hơn hoặc bằng ngày hôm nay !")
        return ;
    }
    let tasks = {
        taskValue: taskValue,
        dateValue:dateValue,
        isNormalLevel:isNormalLevel,
    }
    taskArr = [...taskArr, tasks];
    console.log("taskArr", taskArr);

    let taskTable = '';

    for (const task of taskArr) {
        taskRow = `<p> ${task.taskValue} </p>`+
        `<p> ${task.dateValue} </p>`+
        `<p> ${task.isNormalLevel} </p>`
        ;
        taskTable = taskTable + taskRow;
        console.log("userRow", taskRow)
        document.querySelector("#listTableChild").innerHTML = taskTable;

       //   width: 250px;
    //height: 100px;
   // border: 1px solid black;
    }
}


document.getElementById("submit").onclick = submitTask;
