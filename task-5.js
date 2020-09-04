let delivery = prompt('Укажите страну получателя').toLowerCase();

switch(delivery){
  case 'Китай':
    cost = 100;
    console.log(`Доставка в 'китай' будет стоить 100' кредитов`);
    break;

    case 'Чили':
      cost = 250 ;
      console.log(`Доставка в 'чили' будет стоить 250 кредитов`);
      break;
  
      case 'Австралия':
        cost = 170;
        console.log(`Доставка в 'австралия' будет стоить 170 кредитов`);
        break;

        case 'Индия':
          cost = 80;
          console.log(`Доставка в 'индия' будет стоить 80 кредитов`);
          break;
      
          case 'Ямайка':
            cost = 120;
            console.log(`Доставка в 'ямайка' будет стоить 120 кредитов`);
            break;
    
  default:
    console.log(`В вашей стране доставка не доступна`);
}

