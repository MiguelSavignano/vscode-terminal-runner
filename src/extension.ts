'use strict';
import * as vscode from 'vscode';
import terminalRunner from './terminal'

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "terminal-runner" is now active!');
  let disposable = vscode.commands.registerCommand('extension.sayHello', () => {
    terminalRunner.executeInTerminal("echo 'hola'")
  });
  context.subscriptions.push(disposable);
}

export function deactivate() {
}