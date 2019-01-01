export default function getNavBar() {
  let navBar = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand"
        href="javascript:void(0)">
        DevLocale
      </a>

      <button class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse"
        id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link"
              id="navBarSearchEventOption"
              href="javascript:void(0)">
              Search events
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link"
              id="navBarAddNewEventOption"
              href="javascript:void(0)">
              Add new event
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link"
              id="navBarListEventsOption"
              href="javascript:void(0)">
              My events
            </a>
          </li>
        </ul>

        <form class="form-inline my-2 my-lg-0">
          <a href="javascript:void(0)" id="navBarLogoutOption">Sign out</a>
        </form>
      </div>
    </nav>
  `;

  return navBar;
}
