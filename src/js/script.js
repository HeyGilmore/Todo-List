import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../css/stylesheet.css";

// Javascript imports
import formCreation from "./form";
// javascript saved data
import data from "./premadeTask";
// javascript showcase data
import creationList from "./showList";
// import handling for submissions
import handleFormSubmission from "./formSubmission";
// Import Deletion Function
import deletionButtonPushed from "./deletionButton";

// div#content for form
const content = document.getElementById("content");
content.innerHTML = formCreation();

// Grab list div
const contentList = document.getElementById("content-list");
// Use map + join to convert the array into a big HTML string
contentList.innerHTML = data.reverse().map(creationList).join("");

// Call the function that attaches the form handler
handleFormSubmission();

// Delete task when delete btn is used
deletionButtonPushed();
