let {readFileSync} = require('fs');
let path = require('path');

let str = `
<div>
    <div><include path="./partialHtml/sub1.tmpl" /></div>
    <div><include path='./partialHtml/sub2.tmpl' /></div>
    <div>3</div>
</div>
`;
/*
* 获取字符串全局匹配所有的复合某种条件的内容数组可以通过：字符串的match方面，str.match(/正则表达式/g)
* 提取匹配的分组内容:/正则表达式/.exec(str)。分组按照正则中括号的顺序从1开始，即使是或关系的的括号都会算入的
* */
function parseTemplate(str, dir = __dirname) {
    let matches = str.match(/<include .*path=((".*\.tmpl")|('.*\.tmpl')).*\/>/g);
    if (matches) {
        for (let item of matches) {
            let pathMatches = /path=("((.*\/).*\.tmpl)")|('((.*\/).*\.tmpl)')/.exec(item);
            let filePath = pathMatches[2] || pathMatches[5];
            let directoryPath = pathMatches[3] || pathMatches[6];


            let tmplStr = readFileSync(path.join(dir, filePath)).toString();
            str = str.replace(item, parseTemplate(tmplStr, path.join(dir, directoryPath)));
        }
    }

    return str;
}


console.log(parseTemplate(str));


