function formCreation() {
  return `
        <div class="container row pt-5 mx-auto">
            <form class=" mainForm row bg-light w-75 mx-auto rounded py-3">
                <!--- Title --->
                <div class="col-12 py-3">
                    <label for="title" class="form-label">Title:</label>
                    <input type="text" class="form-control" id="title">
                </div>
                <!-- Subject --->
                <div class="col-4">
                    <label for="subject" class="form-label">Subject:</label>
                    <input type="text" class="form-control" id="subject">
                </div>
                <!-- Priority --->
                <div class="col-4">
                    <label for="subject" class="form-label">Priority:</label>
                    <select class="form-select" aria-label="Default select">
                        <option selected></option>
                        <option value="high">Highest</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <!--- Date --->
                 <div class="col-4">
                    <label for="date" class="form-label">Date</label>
                    <input type="date" class="form-control" id="date" name="date">
                </div>
                <!--- Notes --->
                <div class="mb-3 py-3">
                    <label for="anyNotes" class="form-label">Notes:</label>
                    <textarea class="form-control" style="resize: none;" id="anyNotes" rows="3"></textarea>
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
