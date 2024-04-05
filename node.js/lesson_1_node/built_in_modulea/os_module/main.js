const os = require("os")

// info about currnet user
const user = os.userInfo();
console.log(user)

// method return the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

