import styles from "./Card.module.scss";

const Card = ({
  title = "Unknown",
  authors = "Unknown",
  description = "Not available",
  image,
}) => {
  return (
    <article className={styles.card}>
      {/* <div className={styles.card__container}> */}
      <img className={styles.card__img} src={image} alt="book image" />
      {/* </div> */}
      <div className={styles.card__container}>
        <h1 className={styles.card__heading}>{title}</h1>
        <h4 className={styles.card__subheading}>{authors}</h4>
        <p className={styles.card__description}>{description}</p>
      </div>
    </article>
  );
};

export default Card;
