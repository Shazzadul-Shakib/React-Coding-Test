export default function ModalB() {
  return (
    <div
      class="modal fade"
      id="modalB"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5 " id="exampleModalLabel">
              Modal B
            </h1>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer d-flex justify-content-between">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Only even
              </label>
            </div>
            <div>
              <button
                type="button"
                class="btn custom-primary-bg text-white  "
                data-bs-toggle="modal"
                data-bs-target="#modalA"
              >
                All Contacts
              </button>
              <button
                type="button"
                class="btn custom-secondary-bg text-white mx-1"
              >
                US Contacts
              </button>
              <button
                type="button"
                class="btn custom-border"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
