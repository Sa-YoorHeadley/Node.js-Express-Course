const os = require('os')
const user = os.userInfo()
const uptime = os.uptime()
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(user)
console.log(currentOS)
console.log(`System Uptime is ${uptime} seconds`)