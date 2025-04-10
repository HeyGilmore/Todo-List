import creationList from "./showList";
import data from "./premadeTask";
// Note: Do not use formCreation here to access the form element!

export default function handleFormSubmission() {
  const contentList = document.getElementById("content-list");
  const form = document.getElementById("todoForm"); // Get the actual form element

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Check if the form is valid
    if (!this.checkValidity()) {
      e.stopPropagation();
      this.classList.add("was-validated");
      return; // Stop further execution if the form is invalid
    }

    const titleValue = document.getElementById("title").value.trim();
    const subjectValue = document.getElementById("subject").value.trim();
    const priorityValue = document.getElementById("priority").value;
    const dateValue = document.getElementById("date").value;
    const noteValue = document.getElementById("anyNotes").value;

    // Get editID from the actual form element
    const editID = form.getAttribute("data-edit-id");

    if (editID) {
      // Edit existing task
      const taskId = parseInt(editID);
      const index = data.findIndex((task) => task.id === taskId);

      //--- Is there any task
      if (index !== -1) {
        // Update values
        data[index] = {
          ...data[index],
          title: titleValue,
          subject: subjectValue,
          priority: priorityValue,
          date: dateValue,
          notes: noteValue,
        };

        // Re-render full list
        contentList.innerHTML = data.map(creationList).join("");

        // Clear edit mode by removing the attribute
        form.removeAttribute("data-edit-id");
      }
    } else {
      // Add new task
      const nextID = data.length + 1;

      const newTask = {
        id: nextID,
        title: titleValue,
        subject: subjectValue,
        priority: priorityValue,
        date: dateValue,
        notes: noteValue,
        completed: false,
      };

      data.push(newTask);
      // Add new task to the top of the list
      contentList.innerHTML = creationList(newTask) + contentList.innerHTML;
    }

    // Reset the form
    form.reset();
    this.classList.remove("was-validated");
  });
}
