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
//Import Edit Function
import editButtonPushed from "./editButtonPushed";
// Import validation for Bootstrap
import setupValidation from "./validation-bootstrap.js";
// Import if completed or Not
import completedOrNotCompletedBTN from "./completedOrNotCompletedBTN.js";
// Order the task by date
import sortByDataButton from "./order-buttons.js";
import buttons from "./buttons.js";

// div#content for form
const content = document.getElementById("content");
content.innerHTML = formCreation() + buttons();

// Grab list div
const contentList = document.getElementById("content-list");
// Use map + join to convert the array into a big HTML string
contentList.innerHTML = data.reverse().map(creationList).join("");

// Validation the form
setupValidation();
// Call the function that attaches the form handler
handleFormSubmission();
// Delete task when delete btn is used
deletionButtonPushed();
// edit Button
editButtonPushed();
// Completed or not completed button
completedOrNotCompletedBTN();
// Sort Button by Date
sortByDataButton();
