export default function getRegisterForm() {
  let registerForm = `
    <div class="row h-100 my-5">
      <div class="col-md-2 col-lg-2"></div>

      <div class="col-md-8 col-lg-8 mx-3 d-flex flex-column align-items-center">
        <div class="card w-50">
          <div class="card-header w-100 bg-light d-flex justify-content-center">
            <h5 class="mt-2">Registration</h5>
          </div>

          <div class="card-body w-100">
            <div class="row">
              <div class="col-lg-12">
                <div class="form-group">
                  <input type="text"
                    class="form-control"
                    id="registerFirstName"
                    placeholder="First name" />
                </div>

                <div class="form-group">
                  <input type="text"
                    class="form-control"
                    id="registerLastName"
                    placeholder="Last name" />
                </div>

                <div class="form-group">
                  <input type="email"
                    class="form-control"
                    id="registerEmail"
                    placeholder="Email" />
                </div>

                <div class="form-group">
                  <input type="password"
                    class="form-control"
                    id="registerPassword"
                    placeholder="Password" />
                </div>

                <div class="form-group">
                  <input type="password"
                    class="form-control"
                    id="registerConfirmPassword"
                    placeholder="Confirm password" />
                </div>
              </div>
            </div>

            <div id="spinner"></div>

            <div class="row">
              <div class="col-lg-6 text-center">
                <button
                  id="registerSignIn"
                  class="btn btn-info form-control">
                  Go Back
                </button>
              </div>

              <div class="col-lg-6 text-center">
                <button
                  id="registerSignUp"
                  class="btn btn-primary form-control">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-2 col-lg-2">
    </div>
  `;

  return registerForm;
}
