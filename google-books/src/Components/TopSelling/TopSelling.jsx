import React, { useEffect, useState } from "react";
import { fetchBooks } from "../../Data/js/main";
import Card from "../Card/Card";
import noCover from "../../img/no-book-cover.jpeg";
import styles from "./TopSelling.module.scss";
import loadingGif from "../../img/loading.gif";

const TopSelling = ({ data, linkClicked }) => {
  const [topBooks, setTopBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopSelling = async () => {
      try {
        setLoading(true);

        const fetchPromises = data[1].map(async (title) => {
          const results = await fetchBooks(title);
          return results[0] || [];
        });

        const booksData = await Promise.all(fetchPromises);

        setLoading(false);
        setTopBooks(booksData.flat());
      } catch (error) {
        console.error("Error fetching books:", error);
        setTopBooks([]);
        setLoading(false);
      }
    };

    fetchTopSelling();
  }, [linkClicked]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{data[0]}</h1>
      <p className={styles.text}> {data[1].length} results </p>
      {loading && <img src={loadingGif} alt="Loading" />}
      {!loading && topBooks.length === 0 && <p>No results found.</p>}
      {topBooks.length > 0 &&
        topBooks.map((book) => (
          <Card
            key={book.id}
            image={book.imageLinks ? book.imageLinks.thumbnail : noCover}
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
  );
};

export default TopSelling;
