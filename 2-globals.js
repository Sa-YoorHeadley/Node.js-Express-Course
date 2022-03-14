//__dirname     - path to current directory
//__filename    - file name
//require       - functions to use modules
//module        - info about current module (file)
//process       - info about the environment where the program is being executed

console.log(__dirname)
console.log(__filename)
console.log(require)
console.log(module)
console.log(process)

setInterval(() =>{
    console.log('Hello world!')
}, 1000)