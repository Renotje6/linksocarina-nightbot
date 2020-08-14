// !flowers command
// Version: 1.0.0
// ================

// Copy the line BELOW this line for the Nightbot command
$(eval(let q="$(querystring)",let rs="",fls=[{fl:"red",fr:"double next flower"},{fl:"blue",fr:"suits"},{fl:"yellow",fr:"marbles"},{fl:"purple",fr:"100 likes double"},{fl:"orange",fr:"sip"},{fl:"mixed",fr:"choose (no black/white/red)"},{fl:"assorted",fr:"down against the clock"},{fl:"black",fr:"5 shots"},{fl:"white",fr:"quarter bottle"}],adjustedQ=q.toLowerCase(),s=fls.find(f=>f.fl==adjustedQ);s?rs=`[${s.fl}] => ${s.fr}`:fls.forEach(f=>{rs+=`[${f.fl}] => ${f.fr} \n`});rs)



// JavaScript code
let rs = "";
let fls = [
  {
    fl: "red",
    fr: "double next flower",
  },
  {
    fl: "blue",
    fr: "suits",
  },
  {
    fl: "yellow",
    fr: "marbles",
  },
  {
    fl: "purple",
    fr: "100 likes double",
  },
  {
    fl: "orange",
    fr: "sip",
  },
  {
    fl: "mixed",
    fr: "choose (no black/white/red)",
  },
  {
    fl: "assorted",
    fr: "down against the clock",
  },
  {
    fl: "black",
    fr: "5 shots",
  },
  {
    fl: "white",
    fr: "quarter bottle",
  },
];

let adjustedQ = q.toLowerCase(); 
let s = fls.find((fl) => fl.fl == adjustedQ);
if (s) {
  rs = `[${s.fl}] => ${s.fr}`;
} else {
  fls.forEach((fl) => {
    rs += `[${fl.fl}] => ${fl.fr} \n`;
  });
}
console.log(rs);
