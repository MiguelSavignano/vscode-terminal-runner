'use strict';
import * as vscode from 'vscode'
const TERMINAL_NAME = 'Terminal Runner'

class TerminalRunner{
  activeTerminal;
  constructor(){
    this.activeTerminal = undefined;
    vscode.window.onDidCloseTerminal(this.deleteTerminal.bind(this))
  }

  getTerminal(){
    this.activeTerminal = this.activeTerminal || vscode.window.createTerminal(TERMINAL_NAME)
    return this.activeTerminal
  }

  deleteTerminal(terminalInstance: vscode.Terminal){
    if (terminalInstance.name == TERMINAL_NAME) {
      this.activeTerminal = undefined
    }
  }

  executeInTerminal(commandText, options = {}) {
    const terminal = this.getTerminal()
    terminal.show(true)
    terminal.sendText(commandText)
  }
}
const terminalRunner = new TerminalRunner()
export default terminalRunner
