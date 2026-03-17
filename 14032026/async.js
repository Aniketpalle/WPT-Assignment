const getData=async()=>
{
let y=await "hello";
console.log(y);
}
async function getData1()
{
    let y=await "helloworldd";
    console.log(y);
    return y;
}

console.log(1);
getData();
getData1();
console.log(2);