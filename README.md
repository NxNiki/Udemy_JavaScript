# Udemy_JavaScript
codes of Udemy course on javascript and software engineering basic prep

Udemy course:
https://www.udemy.com/course/beginning-javascript/

Software Engineering Basic:
https://learn-2.galvanize.com/cohorts/888

HTML and CSS (module2.2):
https://learn.shayhowe.com/html-css/

## issues for vs code:

I get this error when debugging vscode:
`Can't find Node.js binary "node": path does not exist. Make sure Node.js is installed and in your PATH, or set the "runtimeExecutable" in your launch.json.`

Solutions: https://github.com/microsoft/vscode-js-debug/issues/1150

adding to settings.json (`cmd` + `shift` + `p` and select Open User Settings):
get the path by `which node`:
```
"debug.javascript.defaultRuntimeExecutable": {
"pwa-node": "/path/to/.nvm/versions/node/vX.X.X/bin/node" 
},
```

