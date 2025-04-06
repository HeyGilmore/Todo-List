import creationList from "./showList";
import data from "./premadeTask";

export default function handleFormSubmission() {
  const contentList = document.getElementById("content-list");

  document.getElementById("todoForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let nextID = data.length + 1;
    const titleValue = document.getElementById("title").value;
    const subjectValue = document.getElementById("subject").value;
    const priorityValue = document.getElementById("priority").value;
    const dateValue = document.getElementById("date").value;
    const noteValue = document.getElementById("anyNotes").value;

    const newTask = {
      id: nextID++,
      title: titleValue.trim(),
      subject: subjectValue.trim(),
      priority: priorityValue,
      date: dateValue,
      notes: noteValue,
      completed: false,
    };

    data.push(newTask);
    contentList.innerHTML = creationList(newTask) + contentList.innerHTML;

    this.reset();
  });
}
