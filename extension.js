const vscode = require("vscode");

function activate() {
    vscode.window.showInformationMessage("Плагин работает");
}

function deactivate() {}

module.exports = { activate, deactivate };
