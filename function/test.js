const car = {
  name: 'Audi',
  drive: () => {
  console.log(this);
  }
  };
  car.drive();