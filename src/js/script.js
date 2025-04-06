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
contentList.innerHTML = data.map(creationList).join("");
