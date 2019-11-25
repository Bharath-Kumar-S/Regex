# Regex

##searches if cat is present
let matches = a.match(/(cat)/g);


##To fetch all the words 
matches = a.match(/\w+/g);


##To find the words starting with capital letters from A-Z
matches = a.match(/([A-Z])\w+/g);


##To find the words starting with small letters from a-z
matches = a.match(/([a-z])\w+/g);


##To find the words starting with capital and small letters from A-Z
matches = a.match(/([A-Za-z])\w+/g);


##To find the words starting with capital letters from T
matches = a.match(/(T)\w+/g);


##To fetch numbers
matches = a.match(/\d+/g)


##To fetch word starting with S or s followed by earching
matches = a.match(/([Ss])earchin([Gg])+/g)


##To find a word that starts with space and has space at end
matches = a.match(/\ssearchin([gG])\s+/g)


##To fetch a word that is 4 chars long
matches = a.match(/\w{4}/g);


##To fetch a word that is 4 to 6 chars long
matches = a.match(/\w{4,6}/g);


##To fetch a integer that is 1 to 2 \d long
matches = a.match(/\d{1,2}/g);


##Used to fetch a word with either t|T grouping
matches = a.match(/(t|T)he/g);


##Check if line starts with T
matches = a.match(/^T\w+/g);


##Checks if t. is in the string
matches = a.match(/street\.$/gm);


##T is required and h is optional
matches = a.match(/^Th?\w+/g);

##Mobile patterns
let mobile;
// mobile = `900 304 5843`;
mobile = `900-304-5843`;
// mobile = `9003045843`

matches = mobile.match(/\d{3}[ -]?\d{3}[ -]?\d{4}/g)
