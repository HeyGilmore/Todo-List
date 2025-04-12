import data from "./premadeTask";

export default function deletionButtonPushed() {
  const contentList = document.getElementById("content-list");

  contentList.addEventListener("click", function (e) {
    const deleteButton = e.target.closest(".delete-btn"); // Find the nearest parent with 'delete-btn'
    if (deleteButton) {
      const taskId = parseInt(deleteButton.getAttribute("data-id"), 10);
      // Remove from DOM
      e.target.closest(".mainCards").remove();

      // Remove from data array
      const index = data.findIndex((task) => task.id === taskId);
      if (index !== -1) {
        data.splice(index, 1);
      }
    }
  });
}
