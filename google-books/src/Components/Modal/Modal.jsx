import React from "react";
import styles from "./Modal.module.scss";

const Modal = ({
  closeModal,
  title = "Unknown",
  authors = "Unknown",
  description = "Not available",
  image,
  averageRating,
  categories,
  language,
  publishedDate,
}) => {
  return (
    <article className={styles.card}>
      <img className={styles.card__img} src={image} alt="book image" />

      <div className={styles.card__container}>
        <button onClick={closeModal} className={styles.card__button}>
          Close
        </button>
        <h1 className={styles.card__heading}>{title}</h1>
        <h4 className={styles.card__subheading}>{authors}</h4>
        <p>{language}</p>
        <p>{averageRating}</p>
        <p>{publishedDate}</p>
        <p>{categories}</p>
        <p className={styles.card__description}>{description}</p>
      </div>
    </article>
  );
};

export default Modal;
