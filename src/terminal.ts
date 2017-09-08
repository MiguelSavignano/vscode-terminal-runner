'use strict';
import * as vscode from 'vscode'
const TERMINAL_NAME = 'Terminal Runner'

// vscode.window.onDidCloseTerminal((terminal: vscode.Terminal) => {
//   if (activeTerminals[terminal.name]) {
//     delete activeTerminals[terminal.name];
//   }
// });
class TerminalRunner{
  getTerminal(){
    return vscode.window.createTerminal(TERMINAL_NAME)
  }

  executeInTerminal(commandText, options = {}) {
    const terminal = this.getTerminal()
    terminal.show(true)
    terminal.sendText(commandText)
  }
}
const terminalRunner = new TerminalRunner()
export default terminalRunner
