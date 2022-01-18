class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "kolimunnesa School";
    }
    
}

const student1 =new Student(1,'amir');

const student2 =new Student(2,'habib');

console.log(student1, student2);