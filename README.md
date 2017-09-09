# Terminal runner README

Terminal runner help you to run a command in the visual code terminal.

This extension it's you need run the same command in the terminal repeatedly like run specs, linters, build or any script.

## Usage

### Add default command
Open you visual code settings and add this line
```json
"terminalRunner.runCommand": "",
```
Examples:
```json
"terminalRunner.runCommand": "npm build",
```
```json
"terminalRunner.runCommand": "rails test && rubocop -a",
```
```json
"terminalRunner.runCommand": "crystal spec",
```
```json
"terminalRunner.runCommand": "git push origin master",
```
```json
"terminalRunner.runCommand": "./my-custom-script.sh",
```
### Run default command
```json
Terminal: run command
```

## Default keybinding

* mac: cmd+shift+r
* window-linux: ctrl+shift+r

## Features
* Run command in the same terminal, use settings to set the command that will be run


## Release Notes

### 0.0.1
Run command in the same terminal, use settings to set the command that will be run
