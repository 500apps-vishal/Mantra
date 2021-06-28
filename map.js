const info = [
    { name:"vishal", lastname:"chindam"},        
   { name:"ishu", lastname:"puli"},
    {name:"vaishu", lastname:"matla"},
   { name:"puppy", lastname:"pitla"},
    {name:"jyo", lastname:"md"},
    {name:"vinnu", lastname:"chinnu"},
];
const infoname = info.map((demo)=> demo.lastname); //using map method and display the particuler values
console.log(infoname);