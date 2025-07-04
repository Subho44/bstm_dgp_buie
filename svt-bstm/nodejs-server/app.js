const fs = require('fs');
const os = require('os');

//get os/user information
const userinfo = os.userInfo();
const systeminfo = {
    username:userinfo.username,
    homedir:userinfo.homedir,
    platform:os.platform(),
    arch:os.arch(),
    cpus:os.cpus().length
    
};
 
const systemdata = `
system information:

username:${systeminfo.username}
home directory:${systeminfo.homedir}
platform:${systeminfo.platform}
architechture:${systeminfo.arch}
cpu cores:${systeminfo.cpus}
`;
//write file
fs.writeFileSync('info.txt',"node js is js libeary ");
//append file
fs.appendFileSync('info.txt',systemdata);
//read file
const data = fs.readFileSync('info.txt','utf-8');
console.log(data);