import data from "./premadeTask";

export default function editButtonPushed() {
  const contentList = document.getElementById("content-list");

  if (!contentList) {
    console.error("contentList not found. Ensure the element exists.");
    return;
  }

  contentList.addEventListener("click", function (e) {
    // Use closest to target the parent element with the 'edit-btn' class
    const editBtn = e.target.closest(".edit-btn");
    if (!editBtn) return; // If click wasn't on or inside an edit-btn, exit.

    // Capture the task ID from the clicked button
    const taskId = parseInt(editBtn.getAttribute("data-id"));
    console.log("Edit button clicked for task ID:", taskId);

    const item = data.find((task) => task.id === taskId);

    if (item) {
      console.log("Task found:", item);

      // Populate the form fields
      document.getElementById("title").value = item.title;
      document.getElementById("subject").value = item.subject;
      document.getElementById("priority").value = item.priority;

      // If your date isn't already in YYYY-MM-DD, ensure it's formatted correctly.
      const formattedDate = formatDateForInput(item.date);
      document.getElementById("date").value = formattedDate;

      document.getElementById("anyNotes").value = item.notes;

      // Mark the form with the edit ID so your submit handler knows to update
      document.getElementById("todoForm").setAttribute("data-edit-id", taskId);

      console.log("Form pre-filled with task data and set to edit mode.");
    } else {
      console.error("Task not found with ID:", taskId);
    }
  });
}

function formatDateForInput(date) {
  // Convert to a date object
  const parsedDate = new Date(date);

  if (isNaN(parsedDate)) {
    console.error("Invalid date format:", date);
    return "";
  }

  const year = parsedDate.getFullYear();
  const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
  const day = String(parsedDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
