function formCreation() {
  return `
      <div class="container row pt-5 mx-auto">
        <form id="todoForm" novalidate class="needs-validation mainForm row bg-light mx-auto rounded py-3">
            <!--- Title --->
            <div class="col-12 py-3">
                <label for="title" class="form-label">Title:</label>
                <div class="input-group has-validation">
                    <input type="text" class="form-control" id="title" required aria-describedby="inputGroupPrepend">
                    <div class="invalid-feedback">
                        Please provide a title.
                    </div>
                </div>
            </div>
            <!-- Subject --->
            <div class="col-12 col-sm-6 col-md-4">
                <label for="subject" class="form-label">Subject:</label>
                <div class="input-group has-validation">
                    <input type="text" class="form-control" id="subject"  required aria-describedby="inputGroupPrepend">
                    <div class="invalid-feedback">
                        Please provide a Subject.
                    </div>
                </div>
            </div>
            <!-- Priority --->
            <div class="col-12 col-sm-6 col-md-4">
                <label for="priority" class="form-label">Priority:</label>
                <div class="input-group has-validation">
                    <select class="form-select" id="priority" required aria-label="Default select" aria-describedby="inputGroupPrepend">
                        <option value="" selected disabled>Choose...</option>
                        <option value="high">Highest</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                    <div class="invalid-feedback">
                        Please provide a Priority.
                    </div>
                </div>
            </div>
            <!--- Date --->
            <div class="col-12 col-md-4">
                <label for="date" class="form-label">Due Date</label>
                <div class="input-group has-validation">
                    <input type="date" class="form-control" id="date" name="date"  required aria-describedby="inputGroupPrepend">
                    <div class="invalid-feedback">
                            Please provide a Due Date.
                    </div>
                </div>
            </div>
            <!--- Notes --->
            <div class="mb-3 py-3">
                <label for="anyNotes" class="form-label">Notes:</label>
                <textarea class="form-control" style="resize: none;" id="anyNotes" rows="3"></textarea>
            </div>
            <!---- Cancel Button : Edit --->
            <div class="d-grid gap-2 mb-3 d-none" id="cancel-btn-container">
                <button class="btn btn-secondary" id="btn-cancel" type="button">Cancel</button>
            </div>
            <!---- Button --->
            <div class="d-grid gap-2">
                <button class="btn btn-primary" type="submit">Submit</button>
            </div>
        </form>
      </div>
      <hr class="border border-5 container rounded my-5">
    `;
}

export default formCreation;
