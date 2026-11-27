var empname =["shashi","Manoj","Dinesh","Sanjay","Mihika"];
console.log(empname[1]);
console.log(empname.indexOf("Manoj"))
empname.push("mahesh")
console.log(empname)
empname.unshift("Naveen")
console.log(empname)
console.log(empname.includes("Mihika"));
var a=empname.includes("shashi")
if (a==true)
{
    console.log("shashi is present") 
}else
{
    console.log("shahsi is not prest in array")
}