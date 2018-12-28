export default function getLoginForm() {
  let loginForm = `
    <div class="row h-100 my-5">
      <div class="col-md-2 col-lg-2"></div>

      <div class="col-md-8 col-lg-8 mx-3 d-flex flex-column align-items-center">
        <div class="card w-50">
          <div class="card-header w-100 bg-light d-flex flex-column align-items-center">
            <h5 class="mt-2">Welcome to Justina's Project</h5>
          </div>

          <div class="card-body w-100">
            <div class="row">
              <div class="col-lg-12">
                <div class="form-group">
                  <input type="email"
                    class="form-control"
                    id="loginEmail"
                    placeholder="Email" />
                </div>

                <div class="form-group">
                  <input type="password"
                    class="form-control"
                    id="loginPassword"
                    placeholder="Password" />
                </div>
              </div>
            </div>

            <div id="spinner"></div>

            <div class="row">
              <div class="col-lg-12 text-center">
                <button id="loginSignInBtn" class="btn btn-info form-control">Sign in</button>
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-lg-12 text-center">
                <p>Not a user yet? <a href="javascript:void(0)" id="loginSignUpBtn">Sign up now!</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-2 col-lg-2">
    </div>
  `;

  return loginForm;
}
