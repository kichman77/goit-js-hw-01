const credits = 23580;
const pricePerDroid = 3000;
let quantityDroid = prompt('Количество дроидов');
let totalPrice = pricePerDroid * quantityDroid;
console.log(typeof quantityDroid);
console.log(quantityDroid);
// console.log(totalPrice);
console.log(isNaN(quantityDroid));
if(quantityDroid === null ){
  console.log('Отменено пользователем!');
}else if(isNaN(quantityDroid)||quantityDroid === ''){
  console.log('укажите числовое значение');
}
else { 
  // if(credits<totalPrice) {
  // console.log('Недостаточно средств на счету!');
  // }
  // else{
  //   console.log(`Вы купили ${quantityDroid} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
  // }
  (credits<totalPrice) ?  console.log('Недостаточно средств на счету!'): console.log(`Вы купили ${quantityDroid} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);

} 