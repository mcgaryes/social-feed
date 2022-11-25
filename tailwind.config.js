/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cred: {
                    100: "rgba(244, 73, 0, 0.3)",
                    200: "#F44900"
                },
                cblue: {
                    100: "rgba(0, 108, 250, 0.3)",
                    200: "#006CFA"
                },
                cgray: {
                    100: "rgba(18, 21, 29, 0.3)",
                    200: "rgba(18, 21, 29, 0.87)"
                }
            }
        },
    },
    plugins: [],
}
