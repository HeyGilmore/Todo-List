import editImage from "../img/pencil.png";
import deleteImage from "../img/delete.png";

function creationList(task) {
  return `
        <div class="card  mainCards">
            <div class="card-body">
            <h5 class="card-title text-capitalize w-75">${task.title}</h5>
            <span class="card-subtitle mb-2 text-muted text-capitalize">${
              task.subject
            }</span>
            <span class="ms-1 position-absolute top-0 end-0 m-2 ">${
              task.date
            }</span>
            <br/>
            <h6 class="pt-3">Notes:</h6>
            <p class="card-text pb-5">${task.notes}</p>
            <span class="position-absolute bottom-0 start-0 ms-2 mb-2 btn btn-outline-info edit-btn" id="editBTN" data-id="${
              task.id
            }">
              <img src="${editImage}" alt="edit button" width="15" height="20" style="" class=""> 
             </span>
             <span class="position-absolute bottom-0 start-10 ms-5 mb-2 btn btn-outline-danger delete-btn" id="deleteBTN" data-id="${
               task.id
             }">
              <img src="${deleteImage}" alt="delete button" width="15" height="20" style="" class=""> 
             </span>
            <button class="position-absolute bottom-0 my-2 mx-2 end-0 badge bg-${
              task.completed ? "success" : "secondary"
            }">
            ${task.completed ? "Completed" : "Pending"}
          </button>
        </div>
      </div>
    `;
}

export default creationList;
