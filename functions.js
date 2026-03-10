function add()
{
    console.log();
}
function add(a1,a2)
{
    console.log(a1+a2);
}
function add(a1,a2,a3)
{
    console.log(a1+a2+a3);
}
function add(a1,a2,a3,a4)
{
    console.log(a1+a2+a3+a4);
    console.log("thuis is my function");
}
// function add1(...a)
// {
//     console.log("inside add1 function");
// }


add();
add(1,2);
add(1,2,3);
add(1,28,30,4);


function square(n){
    console.log("in square");
    return(n*n);
}
let ans=square(3);
console.log(ans);
console.log(square(5));

// let a=sqaure1;
// console.log(typeof(a));
// console.log(a);
// console.log(sqaure1(a(5)));


// function add(...a)
// {
//     console.log(a[1]);
//     var sum=0;
//     for(var i=0; i<a.length; i++)
//     {
//         sum += a[i];
//     }
//     console.log("inside add function sum", +sum);
// }


