import * as vscode from 'vscode';


export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "branch-deterrence" is now active!');
	let disposable = vscode.commands.registerCommand('branch-deterrence.updateTheme', () => {
		const gitExtension = vscode.extensions.getExtension('vscode.git');
		const gitAPI = gitExtension?.exports.getAPI(1);
		const repo = gitAPI.repositories[0];
		const currentBranch = repo.state.HEAD?.name;

		if (currentBranch === 'master') {
			vscode.workspace.getConfiguration().update('workbench.colorTheme', 'Red theme', true);
		}
		else {
			vscode.workspace.getConfiguration().update('workbench.colorTheme', '', true);
		}
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
