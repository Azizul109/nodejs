const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(`What is your name ?`, (name) => {
    console.log(`Hi ${name}`);
    rl.close();
});

// npm command
// npm init
// npm install
// npm install <package_name> [-g, --save-dev, --no-save, --save-optional, --no-optional]
// npm install <package_name>@<version>
// npm update
// npm update <package_name>
// npm run <task-name>
// npm list
// npm view <package_name> version
// npm uninstall <package_name>
// npm help