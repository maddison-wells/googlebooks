import Button from "../Button/Button";
import { useRef } from "react";
import styles from "./Searchbar.module.scss";

const Searchbar = ({ setSearchTerm }) => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.search}
        type="text"
        placeholder="Search title, author, series ..."
        ref={inputRef}
      />
      <Button name={"Search"}></Button>
    </form>
  );
};

export default Searchbar;
