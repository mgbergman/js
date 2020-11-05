"option strict"

class Student {
   
    name;
    favcolor;
    favnumber;

    constructor(name, favcolor, favnumber) {
        this.name = name;
        this.favcolor = favcolor;
        this.favnumber = favnumber;
    }

    log() {
        console.log(this.name, this.favcolor, this.favnumber)
    }

}

let students =[
    new Student("fred", "green", 8),
    new Student ("wilma", "red", 89),
    new Student ("barney", "blue", 89),
    new Student ("pebbles", "pink", 89),
    new Student ("betty", "orange", 89),
];
const addStudent = () => {
    let name = document.getElementById("newName").value;
    let color= document.getElementById("newFavColor").value;
    let number= document.getElementById("newNumber").value;
    let student= new Student (name, color, +number);
    students.push(student);
    console.log(students);
  
}

const output = () => {
    let tbody = document.getElementById ("tbody")
    tbody.innerHTML = "" ;
    for (let stu of students) {
        let tr = "<tr>";
        tr += `<td>${stu.name}</td>`;
        tr += `<td>${stu.favcolor}</td>`;
        tr += `<td>${stu.favnumber}</td>`;
        tr += "<tr>"
       tbody.innerHTML += tr;

}



}

