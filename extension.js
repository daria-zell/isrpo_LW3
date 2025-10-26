const vscode = require("vscode");

function activate() {
    vscode.window.showInformationMessage("Какое-то напоминание по проекту");
}

function deactivate() {}

module.exports = { activate, deactivate };
