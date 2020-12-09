const fs = require('fs');

const args = process.argv.slice(2);

if (args.length) {
    fs.copyFile('index.t.html', 'pages/' + args[0] + '.html', (err) => {
        if (err) throw err;
        console.log('Created new page ' + args[0] + '.html');
    })
}
