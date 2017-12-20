module.exports = {
    // Welcome message thats shows up in the terminal
    WELCOME_MESSAGE: "Mobx Boilerplate",

    // Name of the app directory where all of the app logic is stored
    APP_DIR: "src",

    // Target defins how webpack compiles the files (ex. Web vs. Electron). Defaults to web
    TARGET: process.env.TARGET || "web",

    // Name of the output directory for production build
    OUTPUT_DIR: "dist",

    // Dev Server port
    PORT: 8888,

    // This option specifies the public URL of the output directory when referenced in a browser.
    // example: www.example.com/index.js Vs. www.example.com/public_path/index.js
    PUBLIC_PATH: "",

    // Enviroment mode
    DEV_ENV: process.env.NODE_ENV === "development",
    PROD_ENV: process.env.NODE_ENV === "production",
    TEST_ENV: process.env.NODE_ENV === "test",
}