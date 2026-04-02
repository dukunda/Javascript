

var studentName = "Alice";
var courseName = "Frontend Development";
var year = 2025;

function runPart1() {
    var message = "Welcome " + studentName + " to the " + courseName + " course.";

    console.log(message);
    console.log("Year: " + year);

    var output = document.getElementById("output1");
    output.innerHTML = message + "<br>Year: " + year;
    output.classList.add("show");
}



function changeHeading() {
    var heading = document.getElementById("domHeading");
    heading.textContent = "JavaScript is controlling this page!";
}


window.onload = function () {
    var btn = document.getElementById("eventBtn");
    var message = document.getElementById("eventMessage");

    btn.addEventListener("click", function () {
        message.textContent = "You clicked the button!";
    });
};



function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter two valid numbers.");
        return;
    }

    var addition = num1 + num2;
    var subtraction = num1 - num2;
    var multiplication = num1 * num2;

    var division;
    if (num2 === 0) {
        division = "Can't divide by zero";
    } else {
        division = num1 / num2;
    }

    var result = document.getElementById("calcResult");
    result.innerHTML =
        "Addition = " + addition + "<br>" +
        "Subtraction = " + subtraction + "<br>" +
        "Multiplication = " + multiplication + "<br>" +
        "Division = " + division;

    result.classList.add("show");
}



function addTask() {
    var input = document.getElementById("taskInput");
    var taskText = input.value.trim();

    if (taskText === "") {
        alert("Please type a task first.");
        return;
    }

    var list = document.getElementById("taskList");

    var li = document.createElement("li");

    var span = document.createElement("span");
    span.textContent = taskText;

    var buttons = document.createElement("div");
    buttons.className = "task-buttons";

    var doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.className = "btn-done";
    doneBtn.addEventListener("click", function () {
        li.classList.toggle("done");
    });

    var removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "btn-remove";
    removeBtn.addEventListener("click", function () {
        list.removeChild(li);
    });

    buttons.appendChild(doneBtn);
    buttons.appendChild(removeBtn);
    li.appendChild(span);
    li.appendChild(buttons);
    list.appendChild(li);

    input.value = "";
    input.focus();
}

document.addEventListener("DOMContentLoaded", function () {
    var input = document.getElementById("taskInput");
    input.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            addTask();
        }
    });
});
