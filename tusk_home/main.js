// Объявляем объект "product" с основными полями товара
let product = {
    name: 'Телевизор',
    price: 1000,
    inStock: true,
    brand: 'Samsung',
    // Объект "specifications" с техническими характеристиками товара
    specifications: {
      screenSize: 50,
      resolution: '4K',
      refreshRate: 60
    },
    // Объект "discount" с информацией о скидке
    discount: {
      percentage: 10,
      expirationDate: '2022-12-31'
    }
  };
  
  // Объявляем объект "customer" с основными полями покупателя
  let customer = {
    name: 'Иван',
    budget: 1500
  };
  
  // Проверяем бюджет покупателя и выводим соответствующее сообщение
  if (customer.budget < product.price) {
    console.log('У вас недостаточно средств для покупки данного товара.');
  } else {
    console.log('У вас достаточно средств для покупки данного товара.');
    // Выводим информацию о покупке
    console.log(`Вы приобретаете ${product.name} бренда ${product.brand} по цене ${product.price} рублей.`);
    // Выводим технические характеристики товара
    console.log('Технические характеристики товара:');
    console.log(`Размер экрана: ${product.specifications.screenSize} дюймов`);
    console.log(`Разрешение: ${product.specifications.resolution}`);
    console.log(`Частота обновления: ${product.specifications.refreshRate} Гц`);
    
    // Проверяем наличие скидки
    if (product.discount) {
      console.log('Действует скидка!');
      // Расчет цены со скидкой
      let discountedPrice = product.price - (product.price * product.discount.percentage / 100);
      console.log(`Цена со скидкой: ${discountedPrice} рублей`);
      // Проверяем срок окончания скидки и выводим сообщение, если скидка скоро истекает
      if (product.discount.expirationDate) {
        let expirationDate = new Date(product.discount.expirationDate);
        let currentDate = new Date();
        if (expirationDate < currentDate) {
          console.log('Скидка скоро истекает! Успейте сделать покупку!');
        }
      }
    } else {
      console.log('Скидка не предусмотрена для данного товара.');
    }
  }
  