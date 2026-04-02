import { useState, useEffect } from "react";

// ── Styles injected once ──────────────────────────────────────────────────────
const css = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700&family=DM+Sans:wght@400;500&display=swap');

*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }

body {
  font-family: 'DM Sans', sans-serif;
  background: #f0f2f5;
  color: #333;
  padding: 20px;
}

.app-header {
  text-align: center;
  margin-bottom: 30px;
  padding: 24px 20px;
  background: #2c3e50;
  color: white;
  border-radius: 12px;
}
.app-header h1 {
  font-family: 'Syne', sans-serif;
  font-size: 2rem;
  margin-bottom: 4px;
}
.app-header p { font-size: 0.95rem; opacity: 0.7; }

main {
  max-width: 750px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.card h2 {
  font-family: 'Syne', sans-serif;
  font-size: 1.15rem;
  color: #2c3e50;
  border-bottom: 2px solid #e8ecf0;
  padding-bottom: 8px;
  margin-bottom: 16px;
}
.card h3 { font-size: 1.25rem; margin-bottom: 14px; color: #444; }

.note { font-size: 0.85rem; color: #999; margin-bottom: 12px; }

button {
  background: #3498db;
  color: white;
  border: none;
  padding: 9px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.95rem;
  font-family: 'DM Sans', sans-serif;
  margin-top: 5px;
  transition: background 0.2s;
}
button:hover { background: #2980b9; }

input[type="text"],
input[type="number"] {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.95rem;
  font-family: 'DM Sans', sans-serif;
  outline: none;
  width: 100%;
  transition: border-color 0.2s;
}
input:focus { border-color: #3498db; }

.output {
  margin-top: 15px;
  background: #f8f9fa;
  border-left: 4px solid #3498db;
  padding: 12px 15px;
  border-radius: 4px;
  font-size: 0.9rem;
  line-height: 1.8;
}

.calc-inputs { display: flex; gap: 10px; margin-bottom: 10px; }
.calc-inputs input { width: 50%; }

.todo-input { display: flex; gap: 10px; margin-bottom: 15px; }
.todo-input input { flex: 1; }
.todo-input button { margin-top: 0; }

.task-list { list-style: none; display: flex; flex-direction: column; gap: 8px; }
.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fa;
  padding: 10px 14px;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  font-size: 0.95rem;
}
.task-item.done span { text-decoration: line-through; color: #aaa; }

.task-buttons { display: flex; gap: 6px; }
.task-buttons button { padding: 5px 10px; font-size: 0.8rem; margin-top: 0; }
.btn-done { background: #27ae60; }
.btn-done:hover { background: #219a52; }
.btn-remove { background: #e74c3c; }
.btn-remove:hover { background: #c0392b; }

.event-message {
  margin-top: 12px;
  font-size: 1rem;
  color: #27ae60;
  font-weight: 500;
  min-height: 24px;
}
`;

// ── Inject CSS ────────────────────────────────────────────────────────────────
function StyleTag() {
  useEffect(() => {
    const tag = document.createElement("style");
    tag.textContent = css;
    document.head.appendChild(tag);
    return () => document.head.removeChild(tag);
  }, []);
  return null;
}

// ── Part 1 – JavaScript Basics ────────────────────────────────────────────────
function Part1() {
  const studentName = "Alice";
  const courseName = "Frontend Development";
  const year = 2025;
  const [output, setOutput] = useState(null);

  function runPart1() {
    const message = `Welcome ${studentName} to the ${courseName} course.`;
    console.log(message);
    console.log("Year: " + year);
    setOutput({ message, year });
  }

  return (
    <section className="card" id="part1">
      <h2>Part 1 – JavaScript Basics</h2>
      <p className="note">Output is also shown in the browser console (F12)</p>
      <button onClick={runPart1}>Run Console Output</button>
      {output && (
        <div className="output">
          {output.message}<br />Year: {output.year}
        </div>
      )}
    </section>
  );
}

// ── Part 2 – DOM Manipulation ─────────────────────────────────────────────────
function Part2() {
  const [heading, setHeading] = useState("Welcome to my website");

  return (
    <section className="card" id="part2">
      <h2>Part 2 – DOM Manipulation</h2>
      <h3>{heading}</h3>
      <button onClick={() => setHeading("JavaScript is controlling this page!")}>
        Change Heading
      </button>
    </section>
  );
}

// ── Part 3 – Event Handling ───────────────────────────────────────────────────
function Part3() {
  const [clicked, setClicked] = useState(false);

  return (
    <section className="card" id="part3">
      <h2>Part 3 – Event Handling</h2>
      <button onClick={() => setClicked(true)}>Click me!</button>
      <p className="event-message">{clicked ? "You clicked the button!" : ""}</p>
    </section>
  );
}

// ── Part 4 – Simple Calculator ────────────────────────────────────────────────
function Part4() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  function calculate() {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
      alert("Please enter two valid numbers.");
      return;
    }
    setResult({
      addition: a + b,
      subtraction: a - b,
      multiplication: a * b,
      division: b === 0 ? "Can't divide by zero" : a / b,
    });
  }

  return (
    <section className="card" id="part4">
      <h2>Part 4 – Simple Calculator</h2>
      <div className="calc-inputs">
        <input
          type="number"
          placeholder="Number 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Number 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <button onClick={calculate}>Calculate</button>
      {result && (
        <div className="output">
          Addition = {result.addition}<br />
          Subtraction = {result.subtraction}<br />
          Multiplication = {result.multiplication}<br />
          Division = {result.division}
        </div>
      )}
    </section>
  );
}

// ── Part 5 – To-Do List ───────────────────────────────────────────────────────
function Part5() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    const text = taskInput.trim();
    if (!text) { alert("Please type a task first."); return; }
    setTasks([...tasks, { id: Date.now(), text, done: false }]);
    setTaskInput("");
  }

  function toggleDone(id) {
    setTasks(tasks.map((t) => t.id === id ? { ...t, done: !t.done } : t));
  }

  function removeTask(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") addTask();
  }

  return (
    <section className="card" id="part5">
      <h2>Part 5 – To-Do List</h2>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Enter a task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={`task-item${task.done ? " done" : ""}`}>
            <span>{task.text}</span>
            <div className="task-buttons">
              <button className="btn-done" onClick={() => toggleDone(task.id)}>
                Done
              </button>
              <button className="btn-remove" onClick={() => removeTask(task.id)}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

// ── Root App ──────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <StyleTag />
      <header className="app-header">
        <h1>JavaScript Assignment</h1>
        <p>Parts 1 – 5</p>
      </header>
      <main>
        <Part1 />
        <Part2 />
        <Part3 />
        <Part4 />
        <Part5 />
      </main>
    </>
  );
}
