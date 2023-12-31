class Car {
	constructor(public name: string) {}
}
class ElectroCar extends Car {}
class PetrolCar extends Car {}
class HybridCar extends Car {}

class BYD  extends ElectroCar{}
class Tesla  extends ElectroCar{}

class MERS extends PetrolCar{}
class BMW extends PetrolCar{}

class JETOUR extends HybridCar{}


interface Capacity {
	electroCar: number;
	petrolCar: number;
	HybridCar: number;
}

interface Pricing {
	electroCarPricePerMinute: number;
	petrolCarPricePerMinute: number;
	HybridCarPricePerMinute: number;
}

class Parking<T extends Car> {
	public cars: T[];
	public capacity = {} as Capacity;
	public pricing = {} as Pricing;
}


//  props:   (public)name, (public)capacity, (public)pricing
//  methods:  Methods enterCar(car: T), logoutCar(), calculateTotalPricePerCar(carID: string), calculateTotalProfit


 

//  const parking = new Parking("Sebzor", capacity, pricing)
//   const car1 = new BYD("BYD Sons")
//   console.log(car1)
//   parking.enterCar(car1) // { minutes: 5 }
//   parking.logout(car1) // { totalPrice: 50 }
 
 
  const capacity: Capacity = {
   electroCar: 4,
   petrolCar: 12,
   HybridCar: 3,
  }
 
  const pricing = {
   electroCarPricePerMinute: 10,
   petrolCarPricePerMinute: 4,
   HybridCarPricePerMinute: 20,
  }
 
 

/**
 * Rules:
 *  ✅ Internetdan foydalansa boladi
 *  ✅ Repo yaratish kerak
 *  ✅ UI shart emas
 *  ✅ Loyiha TS da bolishi kerak
 *
 */
