let a = `The fat cat ran down the street.
It was searchinG for 54 mices to eat.`;

//searches if cat is present
let matches = a.match(/(cat)/g);
console.log(`/(cat)/g pattern : ` + matches)

//To fetch all the words 
matches = a.match(/\w+/g);
console.log(`/\\w+/g pattern : ` + matches)

//To find the words starting with capital letters from A-Z
matches = a.match(/([A-Z])\w+/g);
console.log(`/([A-Z])\\w+/g pattern : ` + matches)

//To find the words starting with small letters from a-z
matches = a.match(/([a-z])\w+/g);
console.log(`/([a-z])\\w+/g pattern :`+ matches)

//To find the words starting with capital and small letters from A-Z
matches = a.match(/([A-Za-z])\w+/g);
console.log(`/([A-Za-z])\\w+/g pattern : ` + matches)

//To find the words starting with capital letters from T
matches = a.match(/(T)\w+/g);
console.log(`/(T)\\w+/g pattern :`+ matches)

//To fetch numbers
matches = a.match(/\d+/g)
console.log("/\\d+/g pattern :"+ matches)

//To fetch word starting with S or s followed by earching
matches = a.match(/([Ss])earchin([Gg])+/g)
console.log(`/([Ss])earchin([Gg])+/g pattern :` + matches)

//To find a word that starts with space and has space at end
matches = a.match(/\ssearchin([gG])\s+/g)
console.log(`/\\ssearchin([gG])\\s+/g pattern :` + matches)

//To fetch a word that is 4 chars long
matches = a.match(/\w{4}/g);
console.log(`/\\w{4}/g pattern :` + matches)

//To fetch a word that is 4 to 6 chars long
matches = a.match(/\w{4,6}/g);
console.log(`/\\w{4,6}/g pattern :` + matches)

//To fetch a integer that is 1 to 2 \d long
matches = a.match(/\d{1,2}/g);
console.log(`/\\d{1,2}/g pattern :` + matches)

//Used to fetch a word with either t|T grouping
matches = a.match(/(t|T)he/g);
console.log(`/(t|T)he/g pattern :` + matches)

//Check if line starts with T
matches = a.match(/^T\w+/g);
console.log(`/^T/g pattern :` + matches)

// Checks if t. is in the string
matches = a.match(/street\.$/gm);
console.log(`/t\.$/g pattern :` + matches)

//T is mandat and h is optional
matches = a.match(/^Th?\w+/g);
console.log(`/^Th?\w+/g pattern :` + matches)


let mobile;
// mobile = `900 304 5843`;
mobile = `900-304-5843`;
// mobile = `9003045843`

matches = mobile.match(/\d{3}[ -]?\d{3}[ -]?\d{4}/g)

//Display
console.log(matches)
