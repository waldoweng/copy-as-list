// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('extension "copy-as-list" is now active!');

	let copyAsList = vscode.commands.registerCommand('copy-as-list.copyAsList', () => {
		const editor = vscode.window.activeTextEditor!;
		const text = editor.document.getText(editor.selection)!;
		let out = JSON.stringify(text.split('\n').map(Function.prototype.call, String.prototype.trim));
		vscode.env.clipboard.writeText(out);

	});

	context.subscriptions.push(copyAsList);
}

// this method is called when your extension is deactivated
export function deactivate() {}
