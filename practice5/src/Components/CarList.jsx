export function CarList() {
  const cars = [
    {
      id: 1,
      name: "BMW",
      price: 700000,
      fuel: "Diesel",
    },
    {
      id: 2,
      name: "Innova",
      price: 800000,
      fuel: "CNG",
    },
    {
      id: 3,
      name: "Mercedes",
      price: 900000,
      fuel: "Petrol",
    },
  ];

  return (
    <div>
      {cars.map((car) => (
        <div key={car.id}>
          <h1>{car.name}</h1>
          <h3>Price: ₹{car.price}</h3>
          <h4>Fuel: {car.fuel}</h4>
        </div>
      ))}
    </div>
  );
}