//!mithseed command
// Version 1.0.0

//copy the line below for the nightbot command
let fls=[{c:'red',p:14.08,},{c:'blue',p:15.3,},{c:'yellow',p:14.65,},{c:'purple',p:14.85,},{c:'orange',p:15.39,},{c:'mixed',p:14.66,},{c:'assorted',p:10.78,},{c:'black',p:0.2,},{c:'white',p:0.1,},];let wA=[];for(let i=0;i<fls.length;i++){for(let n=0;n<fls[i].p;n++){wA.push(i)}};let pF=fls[wA[Math.floor(Math.random()*wA.length)]].c;`You picked a ${pF} flower`

//Javascript Code
let fls = [
    { 
        c: 'red',
        p: 14.08,
    },
    {
        c: 'blue',
        p: 15.3,
    },
    {
        c: 'yellow',
        p: 14.65,
    },
    {
        c: 'purple',
        p: 14.85,
    },
    {
        c: 'orange',
        p: 15.39,
    },
    {
        c: 'mixed',
        p: 14.66,
    },
    {
        c: 'assorted',
        p: 10.78,
    },
    {
        c: 'black',
        p: 0.2,
    },{
        c: 'white',
        p: 0.1,
    },
];

let wA = [];

for(let i = 0; i < fls.length; i++) {
    for(let n = 0; n < fls[i].p; n++) {
        wA.push(i);
    }
};

let pF = fls[wA[Math.floor(Math.random() * wA.length)]].c;
return `You picked a ${pF} flower`;