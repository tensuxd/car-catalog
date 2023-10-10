import styles from "./CarItem.module.css";


function CarItem({cars}) {  
    return (
    <div key={cars.id} className={styles.item}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${cars.image})`,
        }}
      />
      <div className={styles.info}>
        <h2>{cars.name}</h2>
        <p>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            currencyDisplay: "narrowSymbol",
          }).format(cars.price)}
        </p>
        <button>Read more</button>
      </div>
    </div>
  );
}

export default CarItem;
