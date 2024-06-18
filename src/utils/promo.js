export const promo = (cart, productType, discountPercentage) => {
    let totalRegularPrice = 0;
  
    cart.forEach(item => {
      if (item.product === productType) {
        const originalPrice = parseFloat(item.price.regular * item.quantity);
        const discountAmount = (originalPrice * discountPercentage) / 100;
  
        totalRegularPrice += discountAmount;
      }
    });
  
    // Возвращаем общую сумму
    return totalRegularPrice.toFixed(2);
}

export const promoOn = (promo) =>{
    if(promo === 'coffee'){
        return 'каву'
    }
    if(promo === 'merch'){
        return 'аксессуари'
    }
    if(promo === 'lemonade'){
        return 'напої'
    }
    if(promo === 'drip'){
        return 'drip'
    }
}

