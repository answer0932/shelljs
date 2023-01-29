#!/usr/bin/env node
const shell = require("shelljs")
var name = process.argv[2] || 'Auto-commit';
var exec = shell.exec;

if (exec('git add .').code !== 0) {
    shell.echo('Error: Git add failed 没有git文件');
    shell.exit(1);
}

shell.echo('Success: Git add 执行成功');

if (exec(`git commit -am "${name}"`).code !== 0) {
    shell.echo('Error: Git commit failed');
    shell.exit(1);
}

shell.echo('Success: Git Commit 执行成功');

if (exec('git push').code !== 0) {
    shell.echo('Error: Git push failed');
    exit(1);
}

shell.echo('Success: Git Push 执行成功');

exec(`echo git success ${name}`);

console.time(1)

try {
    throw new Error()
} catch (e) {
    for (var i = 0; i < 1000000000; i++) {
        var p = i % 2
    }
}
console.timeEnd(1)

// 取出来放在外面
console.time(2)
try {
    throw new Error()
} catch (e) {
    run()
}
console.timeEnd(2)
function run() {
    for (var i = 0; i < 1000000000; i++) {
        var p = i % 2
    }
}

// const express = require('express')
// const app = express()
// var router = express.Router()
// // 1.多个写在一起
// app.use((req, res, next) => {
//     console.log(1)
//     next()
//     console.log(6)
// })
// app.use((req, res, next) => {
//     console.log(2)
//     next()
//     console.log(5)
// })
// app.use((req, res, next) => {
//     console.log(3)
//     next()
//     console.log(4)
// })

// app.get('/', (req, res, next) => {
//     console.log('middleware 1 start')
//     next()
//     console.log('middleware 1 end')
// }, (req, res, next) => {
//     console.log('middleware 2 start')
//     next()
//     console.log('middleware 2 end')
// })
// // 2.一个个单独写
// app.get('/', (req, res, next) => {
//     console.log('middleware 3 start')
//     next()
//     console.log('middleware 3 end')
// })
// app.get('/', (req, res) => {
//     res.end('home')
// })

// //以下是产生泄漏的代码
// let theThing = null;
// let replaceThing = function () {
//     let leak = theThing;
//     let unused = function () {
//         if (leak)
//             console.log("hi")
//     };

//     // 不断修改theThing的引用
//     theThing = {
//         longStr: new Array(1000000),
//         someMethod: function () {
//             console.log('a');
//         }
//     };
// };

// app.get('/leak', function closureLeak(req, res, next) {
//     replaceThing();
//     res.send('Hello Node');
// });

// app.route('/book').get(function (req, res) {
//     res.send('Get a random book')
// })

// app.listen(3000, () => {
//     console.log('http://localhost:3000')
// }) 