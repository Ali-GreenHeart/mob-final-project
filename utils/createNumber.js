 export const createNumber = (size) => {
    const numbers = [];
    while(numbers.length != size){
  
      const num = Math.floor(Math.random() * Math.floor(10));
      if(!numbers.includes(num))
      {
        numbers.push(num);
      }
    }        
    return numbers;
  }