import path from 'path';

//let path = 'D:\\java prajwal\\express\\all files\\${path.basename(__filename)}';

import fs from 'fs';
//console.log(fs);
//console.log(path);
let names = fs.readdir('D:\\java prajwal\\express\\all files', (err, s) => {
    if (err) {
        console.error(err);
    } else {
        for (let i = 0; i < s.length; i++) {
            //jpg ka codeee
            if (path.extname(s[i]) == '.jpg') {
                fs.rename('D:\\java prajwal\\express\\all files\\' + s[i], 'D:\\java prajwal\\express\\jpg\\' + s[i], (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log("\njpg joined" + s[i]);
                    }
                });
            }
            //jpg ka codeee
            else if (path.extname(s[i]) == '.pdf') {
                fs.rename('D:\\java prajwal\\express\\all files\\' + s[i], 'D:\\java prajwal\\express\\pdf\\' + s[i], (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log("\npdf joined" + s[i]);
                    }
                });
            }
            //jpg ka codeee
            else if (path.extname(s[i]) == '.txt') {
                fs.rename('D:\\java prajwal\\express\\all files\\' + s[i], 'D:\\java prajwal\\express\\txt\\' + s[i], (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log("\ntxt joined" + s[i]);
                    }
                });
            }

            //jpg ka codeee
            else {
                console.log("\nkuch aur hai " + s[i] + "\n");
            }
        }
    }
});

//console.log(names);