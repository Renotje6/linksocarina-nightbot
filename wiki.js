// !wiki command
// Version: 1.0.0
// ================

// Copy the line BELOW this line for the Nightbot command
$(eval let q="$(querystring)",q=q.split(" ").join("_"),url="https://oldschool.runescape.wiki/w/";url+q)



// JavaScript code
let query = "black demon";
let adjustedQ = query.split(" ").join("_");
let url = "https://oldschool.runescape.wiki/w/";

console.log(url + adjustedQ);
