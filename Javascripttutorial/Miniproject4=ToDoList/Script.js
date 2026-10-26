// // Get from the form:
// let task = document.querySelector("#task");
// let date = document.querySelector("#date");
// let submitBtn = document.querySelector("#submitBtn");
// let tableBody = document.querySelector("table tbody");

// let count = parseInt(localStorage.getItem("count")) || 0;
// let arr = JSON.parse(localStorage.getItem("arr")) || new Array();

// if (count > 0) {
//     document.querySelector("#temp").remove();
// }

// setAllTask();

// function setAllTask() {

//     for (let i = 0; i < arr.length; i++) {
//         let obj = JSON.parse(localStorage.getItem(arr[i]));

//         let tableRow = document.createElement("tr");
//         tableRow.innerHTML = `<td>${obj.srNo}</td>
//         <td>${obj.taskName}</td>
//         <td>${obj.taskCompletionDate}</td>
//         <td><button onclick="deleteBtn(this)">Delete</button></td>`;

//         tableRow.classList.add("task");
//         tableBody.append(tableRow);
//     }
// }

// function setTask(taskData, taskDate, count) {
//     if (count == 1) {
//         document.querySelector("#temp").remove();
//     }

//     let tableRow = document.createElement("tr");
//     tableRow.innerHTML = `<td>${count}</td>
//         <td>${taskData}</td>
//         <td>${taskDate}</td>
//         <td><button>Delete</button></td>`;

//     tableRow.classList.add("task");
//     tableBody.append(tableRow);
// }

// function setLocalStorage(taskData, taskDate, count) {
//     let obj = {
//         taskName: taskData,
//         taskCompletionDate: taskDate,
//         srNo: count
//     }

//     localStorage.setItem("data" + count, JSON.stringify(obj));
//     arr.push("data" + count);

//     localStorage.setItem("arr", JSON.stringify(arr));
//     localStorage.setItem("count", JSON.stringify(count));
// }


// submitBtn.addEventListener("click", (evt) => {
//     evt.preventDefault();
//     count++;
//     let taskData = task.value;
//     task.value = "";
//     let taskDate = date.value;
//     date.value = "";

//     setLocalStorage(taskData, taskDate, count);

//     setTask(taskData, taskDate, count);

// })


function setAllTask() {
    let arr = JSON.parse(localStorage.getItem("arr")) || new Array();
    let tableContent = document.querySelector("table tbody");

    if (arr.length == 0) {
        let html = `<tr id="temp">
        <td colspan="4" id="tempRow">No More Tasks...</td>
        </tr>`;
        tableContent.innerHTML = html;
    }
    else {
        let html = "";
        for (let i = 0; i < arr.length; i++) {
            let obj = arr[i];
            html += `<tr class="task">
                <td>${i+1}</td>
                <td>${obj.taskName}</td>
                <td>${obj.taskDate}</td>
                <td><button id =${i} onclick = "deleteBtn(this.id)">Delete</button></td>
            </tr>`
        }
        tableContent.innerHTML=html;
    }
}

// Delete Button Function:
function deleteBtn(deleteIndex){
    let arr = JSON.parse(localStorage.getItem("arr"));

    arr.splice(deleteBtn,1);
    localStorage.setItem("arr",JSON.stringify(arr));
    setAllTask();
}

// Function to handle the add items via click:
let submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    let taskInput = document.querySelector("#task");
    let taskDate = document.querySelector("#date");

    if (taskInput.value != "" && taskDate.value != "") {
        let task = taskInput.value;
        taskInput.value = "";
        let date = taskDate.value;
        taskDate.value = "";

        let obj = {
            taskName: task,
            taskDate: date
        }

        let arr = JSON.parse(localStorage.getItem("arr")) || new Array();
        arr.push(obj);
        localStorage.setItem("arr", JSON.stringify(arr));

        setAllTask();

    } else {
        window.alert("Please Enter Some Task and Completion Date.");
    }
})

// localStorage.clear();
// Function that set all task after reload:
setAllTask();
