import data from "./premadeTask";
import creationList from "./showList";

export default function sortByDataButton() {
  const sortButton = document.getElementById("sort-date-btn"); // Button to trigger sorting
  const contentList = document.getElementById("content-list"); // Where tasks are displayed

  // Order Buttons
  sortButton.addEventListener("click", () => {
    // Sorting data in your array of tasks
    const sortData = data.sort((a, b) => new Date(a.date) - new Date(b.date));
    // Re-render the sorted tasks using creationList
    contentList.innerHTML = sortData.map(creationList).join(""); // Ensure creationList outputs HTML strings
  });
}
