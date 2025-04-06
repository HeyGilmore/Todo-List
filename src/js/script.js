import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../css/stylesheet.css";

// Javascript imports
import formCreation from "./form";

// div#content
const content = document.getElementById("content");
content.innerHTML = formCreation();
