import React, { useEffect, useState } from "react";
import { fetchBooks } from "../../Data/js/main";
import Card from "../../Components/Card/Card";
import styles from "./CardList.module.scss";
import loadingGif from "../../img/loading.gif";
import noCover from "../../img/no-book-cover.jpeg";

const CardList = ({ searchTerm }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [module, setModule] = useState(false);

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
        {!loading && books.length === 0 && <p>No results found.</p>}
      </div>
      <div className={styles.container}>
        {books.map((book) => (
          <Card
            setModule={setModule}
            key={book.id}
            image={book.imageLinks ? book.imageLinks.thumbnail : noCover}
            title={book.title}
            authors={
              book.authors && book.authors.length > 1
                ? book.authors.join(", ")
                : book.authors
            }
            description={book.description}
            averageRating={averageRating}
            categories={categories}
            language={language}
            publishedDate={publishedDate}
          />
        ))}
      </div>
    </section>
  );
};

export default CardList;
