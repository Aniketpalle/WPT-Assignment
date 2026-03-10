 var arr=[];
function additem(){
   

  var value=  document.getElementById("txt").value ;
  if(value!==""){
    arr.push(value);

      document.getElementById("txt").value="";
  }
}

function showitem(){
    var output="";
    
    for (var i=0;i<arr.length;i++){

        output=output+arr[i];
        document.getElementById("result").innerHTML=output;
    }
}


