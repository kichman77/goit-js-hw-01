let input = confirm("хотите сыграть ?");
// console.log(input);
let total = 0;

while (input) {
  // console.log("loop is started");
  input = prompt("введите число");
  if (isNaN(input)) {
    alert("введите число");
    continue;
  }
    total = total + +input; //total += input;
    //console.log(total);

}
alert(`Общая сумма чисел равна ${total}`);



