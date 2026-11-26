i=0;
while(i<10)
{
console.log(i)
i++

}
console.log("shashi")

j=0
do
{
console.log(j)
j++
} while(j<10);

console.log("******************And ******************")

for(k=1;k<=10;k++)
{
        if(k%2 == 0 && k%5 == 0)
        {
        console.log(k);
        }

}
console.log(typeof(k))

// 1 to 10 give me a common multiple value of 2 and 5

console.log("******************OR******************")

n=0
for(k=1;k<=100;k++)
{
        if(k%2 == 0 && k%5 == 0)
        {
            n++
        console.log(k);
        //console.log(n);
        if(n==3)
           
            break;
        }

}
console.log(typeof(k))
