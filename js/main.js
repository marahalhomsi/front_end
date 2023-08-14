// let arr = [15,60,"mmm",99,88];
// let divs = document.getElementsByTagName("div");

// document.getElementById("container").innerHTML = arr.length;
// console.log(arr);
// let s="";


// for (let i = 0; i < arr.length; i++){
//     divs[i].innerHTML = arr[i]+ "<br>";
// }
// document.getElementById("container").innerHTML = s;
// console.log(s);

// divs[0].innerHTML = "hello";
// let arr = ["mmm","eee",8,4,44,4,3];
// let x ="" ;
// for (let i = 0;i < arr.length ;i++){
// x += arr[i]+ "<br>";
// }
// document.getElementById("container").innerHTML = x;
// console.log(divs);
let list = [2,4,7,1,5,3];
let res = "<table border=\"1\" width=\"100%\">";
res += "<tr>";
for ( let i =0 ; i < list.length ; i++){
    res += "<td>" + list[i] +"</td>";
}

res += "</tr>";
res += "</table>";
document.getElementById("table").innerHTML = res;

let min = list[0];
let index_min = 0;
for(let i = 1;i<list.length;i++){
    if (list[i] < min){
        min = list[i];
        index_min=i;
    }
}
// document.getElementById("min").innerHTML = "min is "+ min + "in :"+index_min;

function list_min(l){
    let min = l[0];
let index_min = 0;
for(let i = 1;i<l.length;i++){
    if (l[i] < min){
        min = l[i];
        index_min=i;
    }
}
return min;

}

ll1 = [10,66,44,34,122,3,33,4,5,6,7,8,8,85];
document.getElementById("sum").innerHTML = list_min(ll1);




