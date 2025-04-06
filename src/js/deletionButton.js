import data from "./premadeTask";

export default function deletionButtonPushed() {
  const contentList = document.getElementById("content-list");

  contentList.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
      const taskId = parseInt(e.target.getAttribute("data-id"));

      // REMOVE FROM DOM
      e.target.closest(".mainCards").remove();

      // Remove from data array
      const index = data.findIndex((task) => task.id === taskId);
      if (index !== -1) {
        data.splice(index, 1);
      }
    }
  });
}
