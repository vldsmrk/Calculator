let arr = [ , 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '+' , '/' , '*' , '=']


let input = document.getElementById("vod");
let pusto = "";

one.addEventListener('click' , function(){
    let one = (arr[1]);
    pusto+=one;
    console.log(one);
        input.value += one;
})

two.addEventListener('click' , function(){
    let two = (arr[2]);
    pusto+=two;
    
        input.value += two;
})
   