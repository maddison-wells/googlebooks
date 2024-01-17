import React, { useEffect, useState } from "react";
import { fetchBooks } from "../../Data/js/main";
import Card from "../../Components/Card/Card";
import styles from "./CardList.module.scss";
import loadingGif from "../../img/loading.gif";

const CardList = ({ searchTerm }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setTimeout(async () => {
          const results = await fetchBooks(searchTerm);
          setLoading(false);
          setBooks(results || []);
        }, 2000);
      } catch (error) {
        console.error("Error fetching books:", error);
        setBooks([]);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <section>
      <div className={styles.container}>
        {loading && <img src={loadingGif} alt="Loading" />}
      </div>
      <div className={styles.container}>
        {books.map((book) => (
          <Card
            key={book.id}
            image={
              book.imageLinks
                ? book.imageLinks.thumbnail
                : "defaultThumbnailURL"
            }
            title={book.title}
            authors={
              book.authors && book.authors.length > 1
                ? book.authors.join(", ")
                : book.authors
            }
            description={
              book.description && book.description.length > 130
                ? book.description.substring(0, 130) + "..."
                : book.description
            }
          />
        ))}
      </div>
    </section>
  );
};

export default CardList;
