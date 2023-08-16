class stu{
    constructor(id, fname , lname){

    this.id=id;
    this.fname=fname;
    this.lname=lname;
    this.year=0;
    }
    setYear(year){
this.year=year;
return this;
    }
    setFname(fname){
        this.fname=fname;
        return this;

    }
    getYear(){
return this.year;
    }
    getFullname(){
        return "mr. " +this.fname+" "+this.lname + "   in year : "+this.year;
    }
}

let s1 = new stu(2,"emad ","mmm");
let s2=new stu(3,"rateb","alhomsi")
s1.setYear(2);

s2.setFname("ayah");
s2.setYear(3);

document.getElementById("stu").innerHTML = s2.setFname("ammar").setYear(5).getFullname();