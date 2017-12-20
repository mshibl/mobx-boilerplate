/* GLOBALS */
// Anything defined under globals will be available in the app as a global variable (note: must be wrapped in JSON.stringify)
// NOTE: DO NOT pass any senstive data through Globals

const GLOBALS = {
    APP_VERSION: JSON.stringify(require("../package.json").version),
}

module.exports = GLOBALS;