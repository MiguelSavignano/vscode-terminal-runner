'use strict';
import * as vscode from 'vscode';
import terminalRunner from './terminal'

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "terminal-runner" is now active!');
  let disposable = vscode.commands.registerCommand('extension.sayHello', () => {
    terminalRunner.executeInTerminal(getCommandText())
  });
  context.subscriptions.push(disposable);
}
function getCommandText(){
  const commandText = vscode.workspace.getConfiguration("terminalRunner").get('runCommand')
  return commandText || "echo 'Hello you can run any command in the terminal'"
}

export function deactivate() {
}