const prompt = require("prompt-sync")({ sigint: true });
const students = [
    { name: "Jean-Luc Garza", score: 24 },
    { name: "Teddy Munoz", score: 79 },
    { name: "Georgia Ali", score: 17 },
    { name: "Vicky Calhoun", score: 8 },
    { name: "Awais Weaver", score: 65 },
    { name: "Athena Kline", score: 52 },
    { name: "Zacharia Whitaker", score: 38 },
    { name: "Clarice Davenport", score: 99 },
    { name: "Viktoria Flynn", score: 84 },
    { name: "Ianis Crossley", score: 20 },
    { name: "Johnnie Owens", score: 74 },
    { name: "Emily-Rose Erickson", score: 33 },
    { name: "Adeel Nieves", score: 100 },
    { name: "Dustin Villegas", score: 98 },
    { name: "Maxine Hughes", score: 65 },
    { name: "Bilaal Harding", score: 79 },
    { name: "Maddie Ventura", score: 71 },
    { name: "Leroy Rees", score: 44 },
    { name: "Wanda Frank", score: 73 },
    { name: "Margaux Herbert", score: 80 },
    { name: "Ali Rios", score: 70 },
    { name: "Nigel Santiago", score: 25 },
    { name: "Markus Greene", score: 78 },
    { name: "Harlan Parrish", score: 97 },
    { name: "Baran Davidson", score: 43 },
    { name: "Seth Rodriguezh", score: 67 },
    { name: "Diego Mayer", score: 100 },
]

class HashTable {
    constructor(classSize) {
      this.classSize = classSize;
      this.classes = {A: [], B: [], C: [], D: [], Other: []};
    }
hash = (score) => {
     if(score >= 90)
      return "A";
     else if(score < 90 && score >=80)
      return "B";
     else if (score < 80 && score >= 70)
      return "C";
     else if (score < 70 && score >= 60)
      return "D";
     else if (score < 60)
      return "won’t be joining any class"

}
insert = (name, score) => {
    let letter = this.hash(score)
    if(letter === "A"){
    if(this.classes.A.length < maxStudent){
      this.classes.A.push([name, score])
    }
  }
    else if(letter === "B"){
    if(this.classes.B.length < maxStudent){
       this.classes.B.push([name, score])
    }
  }
    else if(letter === "C"){
    if(this.classes.C.length < maxStudent){
        this.classes.C.push([name, score])
    }
  }
    else if(letter === "D"){
    if(this.classes.D.length < maxStudent){
     this.classes.D.push([name, score])
    }
  }
    else{
      if(this.classes.Other.length < maxStudent){
        this.classes.Other.push([name, score])
       }
    }
  }
};
const maxStudent = prompt("Enter the maximum number of students in class:")

const newClass = new HashTable(maxStudent)
students.map(student => newClass.insert(student.name, student.score))

console.log(newClass.classes)


