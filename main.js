1.
const button = document.getElementById("buttChange");

button.addEventListener("click", function () {
    button.innerText = "click me";
});

2.
const firstButton = document.getElementById("firstMessage");
const secondButton = document.getElementById("secondMessage");
const thirdButton = document.getElementById("thirdMessage");
const fourthButton = document.getElementById("fourthMessage");
firstButton.addEventListener("click", function(){
    alert("2pac");
});
secondButton.addEventListener("click", function(){
    alert("is");
});
thirdButton.addEventListener("click", function(){
    alert("still");
});
fourthButton.addEventListener("click", function(){
    alert("alive!");
});

3.
const List = document.getElementsByClassName("list");
for(let i = 0; i < List.length; i++){
    List[i].addEventListener("click", function(){
        console.log(List[i].innerText);
    });
}

4.
let num = 0;
const p = document.getElementById("p");
const addButton = document.getElementById("add");
addButton.addEventListener("click", function () {
    num++;
    p.innerText = num;
});

5.
// let num = 0;
const p2 = document.getElementById("p");
const omitButton = document.getElementById("omit");
omitButton.addEventListener("click", function () {
    num--;
    p.innerText = num;
});

7.
let items = [
    {name: "laptop", price: 3000, Description:"is a small, portable personal computer (PC) with a screen and alphanumeric keyboard."}, 
    {name: "tv", price: 2000, Description:" is a telecommunication medium used for transmitting moving images in monochrome (black and white), or in color."},
    {name: "pingpong", price: 1000, Description:"is a sport in which two or four players hit a lightweight ball, also known as the ping-pong ball, back and forth across a table using small rackets."}
];
let max = 0;
for(let i = 0; i < items.length; i++){
    if(max < items[i].price){
        max = items[i].price;
    }
}
console.log(max);

let min = items[0].price;
for(let i = 0; i < items.length; i++){
    if(min > items[i].price){
        min = items[i].price;
    }
}
console.log(min);