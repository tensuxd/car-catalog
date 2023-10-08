import styles from "./Home.module.css";
import { cars } from "./cars.data";

function Home() {
  return (
    <div>
      <h1>Car catalog</h1>
      <div>
        {cars.map((cars) => (
          <div key={cars.id} className={styles.item}>
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(${cars.image})`,
              }}
            />
            <div className={styles.info}>
              <h2>{cars.name}</h2>
              <p>{cars.price}</p>
              <button>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
