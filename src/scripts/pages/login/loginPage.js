import loginForm from "../../components/loginForm.js";
import googleLogin from "../../components/googleLogin.js";
import LoginPresenter from "../presenter/login-presenter.js";
import {
  createPageLoadingTemplate,
  handlePageTransition,
} from "../../utils/index.js";
import AuthAPI from "../../utils/auth-api.js";
import { setAuth } from "../../utils/auth-utils.js";

export default class LoginPage {
  /**
   * Mengembalikan HTML untuk halaman login (form & status).
   * @returns {string}
   */
  async render() {
    return `
      <section class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
          <!-- Left Section -->
          <div class="bg-[#1146c5] text-white flex-1.2 flex flex-col items-center justify-center rounded-tr-[80px] rounded-br-[80px] p-10">
            <img src="../../../public/images/login-2.png" alt="Logo-login" class="w-[500px] select-none" />
            <h2 class="text-3xl font-semibold mb-2">Halo, Selamat Datang!</h2>
            <p class="text-2xl font-light mb-4">Belum Punya Akun?</p>
            <button class="w-[201px] h-[56px] mt-5 p-[10px_41px] rounded-[15px] border-2 border-white bg-transparent text-white text-1.5xl cursor-pointer transition-colors duration-200 hover:bg-white hover:text-[#1146c5]" id="btn-register">Buat Akun</button>
          </div>

          <!-- Right Section -->
          <div class="flex-1 flex flex-col items-center justify-center p-10">
            <h2 class="text-2.2xl font-semibold mb-6">Login</h2>
            <login-form></login-form>
            <div class="relative my-6">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white text-gray-500">Atau</span>
              </div>
            </div>
            <google-login></google-login>
          </div>
        </div>
      </section>
    `;
  }

  /**
   * Setelah render, kita pasang event listener untuk form submit, register link, dan Google button.
   */
  async afterRender() {
    await handlePageTransition(async () => {
      // Hapus page loading jika ada
      const loadingEl = document.querySelector(".page-loading");
      if (loadingEl) loadingEl.remove();

      const loginForm = document.querySelector("#login-form");
      const statusContainer = document.querySelector("#status-container");
      const registerLink = document.querySelector("#register-link");
      const googleButton = document.querySelector("#btn-google");

      // Jika klik "Register" → tampilkan page loading dan ganti rute
      if (registerLink) {
        registerLink.addEventListener("click", async (e) => {
          e.preventDefault();
          document.body.insertAdjacentHTML(
            "beforeend",
            createPageLoadingTemplate()
          );
          window.location.hash = "#/register";
        });
      }

      // Animasi saat klik Register
      this.querySelector('#register-link').addEventListener('click', () => {
        const blueBg = document.createElement('div');
        blueBg.className = 'blue-bg-animate';
        this.appendChild(blueBg);
        setTimeout(() => {
          blueBg.classList.add('expand');
        }, 10);
        setTimeout(() => {
          this.querySelector('#login-content').classList.add('slide-left');
        }, 400);
        setTimeout(() => {
          document.body.innerHTML = '<register-page></register-page>';
          import('../RegisterPage/RegisterPage.js');
        }, 1000);
      });

      // Animasi saat klik Login
      this.querySelector('#btn-login').addEventListener('click', () => {
        const blueBg = document.createElement('div');
        blueBg.className = 'blue-bg-animate left';
        this.appendChild(blueBg);
        setTimeout(() => {
          blueBg.classList.add('expand-left');
        }, 10);
        setTimeout(() => {
          this.querySelector('#register-content').classList.add('slide-right');
        }, 400);
        setTimeout(() => {
          document.body.innerHTML = '<login-page></login-page>';
          import('../loginPage/loginPage.js');
        }, 1000);
      });

      // Jika klik tombol Google → langsung redirect ke endpoint Google
      if (googleButton) {
        googleButton.addEventListener("click", (e) => {
          e.preventDefault();
          AuthAPI.loginWithGoogle();
        });
      }

      // Inisialisasi presenter
      const presenter = new LoginPresenter({
        view: {
          showLoading: () => {
            statusContainer.innerHTML = `
                        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                          <div class="flex items-center">
                            <div class="flex-shrink-0">
                              <svg class="animate-spin h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                            </div>
                            <div class="ml-3">
                              <p class="text-sm text-blue-700">Memproses...</p>
                            </div>
                          </div>
                        </div>`;
            loginForm.querySelector(
              'button[type="submit"]'
            ).disabled = true;
          },
          showError: (message) => {
            statusContainer.innerHTML = `<div class="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                          <div class="flex items-center">
                            <div class="flex-shrink-0">
                              <svg class="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                              </svg>
                            </div>
                            <div class="ml-3">
                              <p class="text-sm text-red-700">${message}</p>
                            </div>
                          </div>
                        </div>`;
            loginForm.querySelector(
              'button[type="submit"]'
            ).disabled = false;
          },
          showSuccess: () => {
            statusContainer.innerHTML = ` 
                        <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                          <div class="flex items-center">
                            <div class="flex-shrink-0">
                              <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                              </svg>
                            </div>
                            <div class="ml-3">
                              <p class="text-sm text-green-700">Login berhasil! Mengalihkan ke halaman utama...</p>
                            </div>
                          </div>
                        </div>
                        `;
            loginForm.reset();
            loginForm.querySelector(
              'button[type="submit"]'
            ).disabled = true;

            // Beri tahu aplikasi bahwa status auth berubah
            document.dispatchEvent(new Event("authChanged"));

            // Tampilkan page loading sebelum pindah ke home
            document.body.insertAdjacentHTML(
              "beforeend",
              createPageLoadingTemplate()
            );
            setTimeout(() => {
              window.history.replaceState(
                {},
                "",
                window.location.pathname
              );
              window.location.hash = "#/"; // Arahkan ke halaman utama
            }, 1000);
          },
        },
        authAPI: AuthAPI,
        authUtils: { setAuth },
      });

      // Pasang event listener form submit
      if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
          event.preventDefault();

          const email = document.querySelector("#email").value.trim();
          const password = document
            .querySelector("#password")
            .value.trim();

          // Validasi sederhana
          if (!email || !password) {
            statusContainer.innerHTML = ` 
                        <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                          <div class="flex">
                            <div class="ml-3">
                              <p class="text-sm text-red-700">Email dan password harus diisi.</p>
                            </div>
                          </div>
                        </div>`;
            return;
          }

          const formData = { email, password };
          presenter.login(formData);
        });
      }
    });
  }
}