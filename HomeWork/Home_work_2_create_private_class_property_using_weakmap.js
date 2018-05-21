let Car = (function () {
    let privateProperties = new WeakMap();
  
    class Car {
      constructor(name) {
        this.name = name; // public
        privateProperties.set(this, {color: 'White'}); // private
        privateProperties.set(this, {changeColor: (newColor) => {
            privateProperties.get(this).color = newColor;
        }}); // private
      }
  
      showCar() {
        console.log(`name: ${this.name}, color: ${privateProperties.get(this).color}`);
      }
      changeCarColor(newColor) {
        privateProperties.get(this).changeColor(newColor);
        console.log(`Car color changed to ${newColor}`);
      }
    }
  
    return Car;
  })();
  
  let myCar = new Car('Toyota');
  myCar.showCar();
  myCar.changeCarColor("Black");
  myCar.showCar();