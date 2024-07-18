/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./src/**/*.{html,js}"],
 theme: {
  extend: {
   fontFamily: {
    Quicksand: "Quicksand",
    Shadows: "Shadows Into Light",
    Caveat: "Merienda",
   },
   maxWidth: {
    "1250px": "1250px",
    "550px": "550px",
    "570px": "570px",
    "500px": "400px",
    "520px": "520px",
   },
   fontSize: {
    "26px": "26px",
   },
   screens: {
    "970px": "970px",
    "815px": "815px",
    "360px": "360px",
    "900px": "900px",
    "440px": "440px",
    "500px": "500px",
    "230px": "230px",
    "300px": "300px",
    "1500px": "1500px",
   },
   colors: {
    black1: "#0A0505",
    black2: "#0F0808",
    black3: "#0C0A0A",
    black4: "#0f0a09",
   },
   width: {
    "99p": "98%",
   },
   height: {
    "40dvh": "40dvh",
    "35dvh": "35dvh",
    "60dvh": "60dvh",
   },
   maxHeight: {
    "500px": "500px",
    "600px": "600px",
   },
  },
 },
 plugins: [],
};
