
let args=process.argv.slice(2);

let sum=0;
for(let i=0;i<args.length;i++){


    let num=Number(args[i]);
if (num%2==0)
{
    sum=sum+num;
}
}
console.log("sum of even numbers:",sum);
