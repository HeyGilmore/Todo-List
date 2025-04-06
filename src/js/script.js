import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../css/stylesheet.css";

// Javascript imports
import formCreation from "./form";

// javascript saved data
import data from "./premadeTask";
// javascript showcase data
import creationList from "./showList";

// div#content
const content = document.getElementById("content");
content.innerHTML = formCreation();

const contentList = document.getElementById("content-list");

// Use map + join to convert the array into a big HTML string
contentList.innerHTML = data.reverse().map(creationList).join("");

// Capture value from form.
document.getElementById("todoForm").addEventListener("submit", function (e) {
  e.preventDefault();
  // Capturing the values of inputs
  let nextID = data.length + 1;
  const titleValue = document.getElementById("title").value;
  const subjectValue = document.getElementById("subject").value;
  const priorityValue = document.getElementById("priority").value;
  const dataValue = document.getElementById("date").value;
  const noteValue = document.getElementById("anyNotes").value;

  // Making a new task
  const newTask = {
    id: nextID++,
    title: titleValue.trim(),
    subject: subjectValue.trim(),
    priority: priorityValue,
    date: dataValue,
    notes: noteValue,
    completed: false,
  };

  // Adding to the data list
  data.push(newTask);
  // Add to front end
  contentList.innerHTML = creationList(newTask) + contentList.innerHTML; // Adds to top
  //-- Clear Form
  this.reset();
});
