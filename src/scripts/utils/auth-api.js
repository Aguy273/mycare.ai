import CONFIG from "../config.js";

const AuthApi = {
    async register({ name, email, password }) {
        try {
            const response = await fetch(
                `${CONFIG.API_BASE_URL}${CONFIG.AUTH_API.REGISTER_URL}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, password }),
                }
            );

            // Baca respons sebagai teks terlebih dahulu
            const responseText = await response.text();

            // Coba parse sebagai JSON jika memungkinkan
            try {
                const jsonData = JSON.parse(responseText);
                return jsonData;
            } catch (e) {
                // Jika bukan JSON, kembalikan format yang konsisten
                return {
                    error: !response.ok,
                    message: responseText,
                    success: response.ok, // Tambahkan flag success
                    data: null, // Tidak ada data token atau user
                };
            }
        } catch (error) {
            return {
                error: true,
                message:
                    "Gagal terhubung ke server. Periksa koneksi internet Anda.",
                success: false,
                data: null,
            };
        }
    },

    async login({ email, password }) {
        try {
            const response = await fetch(
                `${CONFIG.API_BASE_URL}${CONFIG.AUTH_API.LOGIN_URL}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password }),
                }
            );

            // Baca respons sebagai teks terlebih dahulu
            const responseText = await response.text();

            // Coba parse sebagai JSON jika memungkinkan
            try {
                const jsonData = JSON.parse(responseText);
                return jsonData;
            } catch (e) {
                // Jika bukan JSON, kembalikan format yang konsisten
                return {
                    error: !response.ok,
                    message: responseText,
                    success: response.ok, // Tambahkan flag success
                    data: response.ok
                        ? { token: "dummy-token", user: { email } }
                        : null,
                };
            }
        } catch (error) {
            return {
                error: true,
                message:
                    "Gagal terhubung ke server. Periksa koneksi internet Anda.",
                success: false,
                data: null,
            };
        }
    },

    async googleLogin(tokenID) {
        const response = await fetch(
            `${CONFIG.API_BASE_URL}${CONFIG.AUTH_API.GOOGLE_AUTH_URL}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token: tokenID }),
            }
        );
        return response.json();
    },

    async logout(token) {
        const response = await fetch(
            `${CONFIG.API_BASE_URL}${CONFIG.AUTH_API.LOGOUT_URL}`,
            {
                method: "POST",
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        return response.json();
    },

    loginWithGoogle() {
        // Simpan URL saat ini sebagai redirect_uri setelah login
        const currentUrl = window.location.href.split("#")[0];
        localStorage.setItem("login_redirect", currentUrl);

        // Tambahkan parameter untuk menangani error
        window.location.href = `${CONFIG.API_BASE_URL}${CONFIG.AUTH_API.GOOGLE_AUTH_URL
            }?redirect_uri=${encodeURIComponent(currentUrl)}`;
    },

    // Tambahkan metode untuk menangani callback Google
    handleGoogleCallback() {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get("token");  // Ambil token dari URL
        const userData = urlParams.get("user");  // Ambil data user dari URL

        if (token) {
            try {
                const user = userData
                    ? JSON.parse(decodeURIComponent(userData))
                    : { email: "user@example.com" };  // Default jika tidak ada data user

                // Simpan token dan user ke localStorage dan setAuth
                setAuth({
                    token: token,
                    user: user,
                });

                // Redirect ke halaman utama setelah login berhasil
                window.location.href = '/home';
            } catch (e) {
                console.error("Error parsing user data:", e);
                // Redirect ke halaman login jika terjadi error
                window.location.href = '/login';
            }
        } else {
            // Jika token tidak ada di URL, redirect ke halaman login
            window.location.href = '/login';
        }
    }
};

export default AuthAPI;
