// =============================================
// Part 1 - JavaScript Basics
// =============================================

var studentName = "Alice";
var courseName = "Frontend Development";
var year = 2025;

function runPart1() {
    var message = "Welcome " + studentName + " to the " + courseName + " course.";

    // Print to console
    console.log(message);
    console.log("Year: " + year);

    // Also show it on the page so it's visible
    var output = document.getElementById("output1");
    output.innerHTML = message + "<br>Year: " + year;
    output.classList.add("show");
}


// =============================================
// Part 2 - DOM Manipulation
// =============================================

function changeHeading() {
    var heading = document.getElementById("domHeading");
    heading.textContent = "JavaScript is controlling this page!";
}


// =============================================
// Part 3 - Event Handling
// =============================================

// Wait for the page to load before adding the event listener
window.onload = function () {
    var btn = document.getElementById("eventBtn");
    var message = document.getElementById("eventMessage");

    btn.addEventListener("click", function () {
        message.textContent = "You clicked the button!";
    });
};


// =============================================
// Part 4 - Simple Calculator
// =============================================

function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    // Check that the user actually typed numbers
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter two valid numbers.");
        return;
    }

    var addition = num1 + num2;
    var subtraction = num1 - num2;
    var multiplication = num1 * num2;

    // Avoid dividing by zero
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


// =============================================
// Part 5 - To-Do List
// =============================================

function addTask() {
    var input = document.getElementById("taskInput");
    var taskText = input.value.trim();

    if (taskText === "") {
        alert("Please type a task first.");
        return;
    }

    var list = document.getElementById("taskList");

    // Create a new list item
    var li = document.createElement("li");

    // Task text
    var span = document.createElement("span");
    span.textContent = taskText;

    // Buttons container
    var buttons = document.createElement("div");
    buttons.className = "task-buttons";

    // Mark as done button
    var doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.className = "btn-done";
    doneBtn.addEventListener("click", function () {
        li.classList.toggle("done");
    });

    // Remove button
    var removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "btn-remove";
    removeBtn.addEventListener("click", function () {
        list.removeChild(li);
    });

    // Put it all together
    buttons.appendChild(doneBtn);
    buttons.appendChild(removeBtn);
    li.appendChild(span);
    li.appendChild(buttons);
    list.appendChild(li);

    // Clear the input field
    input.value = "";
    input.focus();
}

// Also let the user press Enter to add a task
document.addEventListener("DOMContentLoaded", function () {
    var input = document.getElementById("taskInput");
    input.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            addTask();
        }
    });
});
