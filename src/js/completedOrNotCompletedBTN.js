import data from "./premadeTask"; // Ensure this is your task data array
import creationList from "./showList";

export default function completedOrNotCompletedBTN() {
  // Grab the list
  const contentList = document.getElementById("content-list");

  // Listening for a click with toggle-btn
  contentList.addEventListener("click", (e) => {
    const isToggleButton = e.target.classList.contains("toggle-btn");
    if (!isToggleButton) return;

    //-- if button has a toggle btn
    const taskID = parseInt(e.target.getAttribute("data-id"), 10);
    const task = data.find((task) => task.id === taskID);

    if (task) {
      // Toggle the completed state
      task.completed = !task.completed;
      // Re-render the task list
      contentList.innerHTML = data.map(creationList).join("");
    }
  });
}
