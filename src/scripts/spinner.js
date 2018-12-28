export function showSpinner() {
  const spinnerDiv = document.getElementById("spinner");
  spinnerDiv.innerHTML = `
    <div class="row">
      <div class="col-lg-12 text-center">
        <img src="images/spinner.gif" width="40%"/>
      </div>
    </div>
  `;
}

export function hideSpinner() {
  const spinnerDiv = document.getElementById("spinner");
  spinnerDiv.innerHTML = "";
}
