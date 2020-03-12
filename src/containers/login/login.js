import React from "react";

class Login extends React.Component {
  render() {
    return (
      <main class="login-page">
        <h1 class="visually-hidden">BaseballCloud app</h1>

        <div class="modal-signIn hide">
          <header class="modal-signIn__header">
            <h2 class="modal-signIn__title">Welcome to BaseballCloud</h2>
            <p class="modal-signIn__desc">Sign into your account here:</p>
          </header>

          <form action="#" method="POST" class="modal-signIn__form">
            <div class="modal-signIn__input-wrap input-wrap">
              <i class="fa fa-user input-user" aria-hidden="true"></i>
              <input
                type="email"
                class="modal-signIn__input modal-input"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div class="modal-signIn__input-wrap input-wrap">
              <i class="fa fa-lock input-lock" aria-hidden="true"></i>
              <input
                type="password"
                class="modal-signIn__input modal-input"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <button type="submit" class="modal-submit">
              Sign In
            </button>
          </form>

          <a href="#" class="modal-signIn__help-link page-link">
            Forgotten password?
          </a>
          <p class="modal-signIn__desc">
            Dont have an account?
            <a href="#" class="modal-signIn__signUp-link">
              Sign Up
            </a>
          </p>
        </div>

        <div class="modal-signUp">
          <header class="modal-signUp__header">
            <div class="modal-signUp__toggle-block">
              <button class="modal-signUp__btn modal-signUp__btn--player modal-btn-checked">
                <span class="modal-signUp__check-img">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="15"
                    viewbox="0 0 14 15"
                  >
                    <path
                      fill="#FFF"
                      fill-rule="evenodd"
                      d="M6.116 10.884l5.482-5.482a.566.566 0 0 0 0-.804l-.91-.91a.566.566 0 0 0-.804 0l-4.17 4.17L3.83 5.972a.566.566 0 0 0-.803 0l-.91.91a.566.566 0 0 0 0 .804l3.196 3.197c.223.223.58.223.803 0zM13.714 3v8.571a2.572 2.572 0 0 1-2.571 2.572H2.57A2.572 2.572 0 0 1 0 11.57V3A2.572 2.572 0 0 1 2.571.429h8.572A2.572 2.572 0 0 1 13.714 3z"
                    ></path>
                  </svg>
                </span>
                <span class="modal-signUp__btn-label">Sign Up as Player</span>
              </button>
              <button class="modal-signUp__btn modal-signUp__btn--scout">
                <span class="modal-signUp__check-img hide">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="15"
                    viewbox="0 0 14 15"
                  >
                    <path
                      fill="#FFF"
                      fill-rule="evenodd"
                      d="M6.116 10.884l5.482-5.482a.566.566 0 0 0 0-.804l-.91-.91a.566.566 0 0 0-.804 0l-4.17 4.17L3.83 5.972a.566.566 0 0 0-.803 0l-.91.91a.566.566 0 0 0 0 .804l3.196 3.197c.223.223.58.223.803 0zM13.714 3v8.571a2.572 2.572 0 0 1-2.571 2.572H2.57A2.572 2.572 0 0 1 0 11.57V3A2.572 2.572 0 0 1 2.571.429h8.572A2.572 2.572 0 0 1 13.714 3z"
                    ></path>
                  </svg>
                </span>
                <span class="modal-signUp__btn-label">Sign Up as Scout</span>
              </button>
            </div>

            <div class="modal-signUp__toggle-info modal-signUp__toggle-info--player">
              <div class="modal-signUp__toggle-title">Players</div>
              <p class="modal-signUp__toggle-desc">
                Players have their own profile within the system and plan on
                having data collected.
              </p>
            </div>

            <div class="modal-signUp__toggle-info modal-signUp__toggle-info--scout hide">
              <div class="modal-signUp__toggle-title">Scouts</div>
              <p class="modal-signUp__toggle-desc">
                Coaches and scouts can view players in the system but do not
                have their own profile.
              </p>
            </div>
          </header>

          <form action="#" method="POST" class="modal-signUp__form">
            <div class="modal-signUp__input-wrap input-wrap">
              <i class="fa fa-user input-user" aria-hidden="true"></i>
              <input
                type="email"
                class="modal-signIn__input modal-input"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div class="modal-signUp__input-wrap input-wrap">
              <i class="fa fa-lock input-lock" aria-hidden="true"></i>
              <input
                type="password"
                class="modal-signIn__input modal-input"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <div class="modal-signUp__input-wrap input-wrap">
              <i class="fa fa-check input-check" aria-hidden="true"></i>
              <input
                type="password"
                class="modal-signIn__input modal-input"
                placeholder="Confirm Password"
                required
              />
            </div>
            <p class="modal-signUp__desc">
              By clicking Sign Up, you agree to our
              <a href="#" class="page-link">
                Terms of Service
              </a>{" "}
              and
              <a href="#" class="page-link">
                Privacy Policy
              </a>
              .
            </p>
            <button type="submit" class="modal-submit">
              Sign Up
            </button>
          </form>

          <p class="modal-signUp__singIn-desc">
            Already registered?
            <a href="#" class="modal-signUp__signIn-link">
              Sign In
            </a>
          </p>
        </div>
      </main>
    );
  }
}

export default Login;
