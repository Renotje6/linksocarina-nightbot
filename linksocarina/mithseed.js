//!mithseed command
// Version 2.0.0

//copy the line below for the nightbot command
let fls=[{c:'red',p:14.08,},{c:'blue',p:15.3,},{c:'yellow',p:14.65,},{c:'purple',p:14.85,},{c:'orange',p:15.39,},{c:'mixed',p:14.66,},{c:'assorted',p:10.78,},{c:'black',p:0.2,},{c:'white',p:0.1,}];let pF=chooseWeighted(fls.map(fl=>fl.c),fls.map(fl=>fl.p));console.log(`You picked a ${pF} flower!`);
function chooseWeighted(items,chances){var sum=chances.reduce((acc,el)=>acc+el,0);var acc=0;chances=chances.map(el=>(acc=el+acc));var rand=Math.random()*sum;return items[chances.filter(el=>el<=rand).length]}

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

let pF = chooseWeighted(fls.map(fl => fl.c), fls.map(fl => fl.p));
console.log(`You picked a ${pF} flower!`);

function chooseWeighted(items, chances) {
    var sum = chances.reduce((acc, el) => acc + el, 0);
    var acc = 0;
    chances = chances.map(el => (acc = el + acc));
    var rand = Math.random() * sum;
    return items[chances.filter(el => el <= rand).length];
}