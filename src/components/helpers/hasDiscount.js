const calcukateTotallWeightCoffee = (cart)=>{
    let totalWeight = 0;
    for(const item of cart) {
        if(item.product === 'coffee'){
            totalWeight += item.packing * item.quantity;
        }
    }  
    return totalWeight;
}

export const hasDiscount = (cart)=>{
    const totalWeight = calcukateTotallWeightCoffee(cart);    
    return totalWeight >=6000;
}



export const hasDiscountDrip = (cart) =>{    
  let totalQuantity = 0;
    for(const item of cart) {            
      if(item.product === 'drip'){
        totalQuantity += +item.quantity;
      }
    }    
    return totalQuantity >=3
}

export const hasDiscountLemon = (cart) =>{
  let totalQuantity = 0;
    for(const item of cart) {            
        if(item.product === 'lemonade'){
            totalQuantity += +item.quantity;
        }
    }    
  return totalQuantity >=24
}

export const calculateTotalUsual = (cart) => {
    let totalReg = 0;
    let totalDisc = 0;
  
    const hasCoffeeDiscount = hasDiscount(cart);
    const hasDripDiscount = hasDiscountDrip(cart);
    const hasLemonadeDiscount = hasDiscountLemon(cart);
  
    for (const item of cart) {
      if (item.product === 'coffee' && hasCoffeeDiscount) {
        totalDisc += item.price.opt * item.quantity;
        totalReg += item.price.regular * item.quantity;
      } else if (item.product === 'drip' && (hasDripDiscount || hasCoffeeDiscount)) {
        totalDisc += item.price.opt * item.quantity;
        totalReg += item.price.regular * item.quantity;
      } else if (item.product === 'lemonade' && hasLemonadeDiscount) {
        totalDisc += item.price.opt * item.quantity;
        totalReg += item.price.regular * item.quantity;
      } else {
        totalReg += item.price.regular * item.quantity;
        totalDisc += item.price.regular * item.quantity;
      }
    }
  
    return { totalDisc, totalReg };
  }