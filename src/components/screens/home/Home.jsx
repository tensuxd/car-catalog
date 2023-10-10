import { useState } from "react";
import CarItem from "./car-item/CarItem";
import { cars as carsData } from "./cars.data";
import CreateCarForm from "./create-car-form/CreateCarFrom";
import styles from './Home.module.css'

function Home() {
  const [cars, setCars] = useState(carsData)

  console.log(cars);


  return (
    <div style={styles.form}>
      <h1>Car catalog</h1>
      <CreateCarForm setCars={setCars} />
      <div>
        {cars.length ? (
          cars.map((cars) => <CarItem key={cars.id} cars={cars} />)
        ) : (
          <p> There are no cars</p>
        )}
      </div>
    </div>
  );
}

export default Home;
