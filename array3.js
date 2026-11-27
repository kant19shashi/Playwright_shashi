var marks =[10,20,30,40,60,80,100]
console.log(marks);
slice=marks.slice(2,5)
console.log(slice)

for(i=0; i<marks.length;i++ )
{

    console.log(marks[i])

}
var sum=0
for(j=0; j<marks.length;j++ )
{

    sum = sum + marks[j]
    
}
console.log("sum of array = "  +sum) 