export const fetchBooks = async (searchTerm) => {
  const key = "AIzaSyAOxvj0vhDEKy_sgNqNyijutb9RbuwFeDc";
  // console.log(searchTerm);

  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q="${searchTerm}"&key=${key}&maxResults=40`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const fetchedData = await response.json();
    console.log(fetchedData);

    const cleanedData = fetchedData.items.map((book) => {
      const {
        title,
        authors,
        description,
        imageLinks,
        id,
        averageRating,
        categories,
        language,
        publishedDate,
      } = book.volumeInfo;
      return {
        title,
        authors,
        description,
        imageLinks,
        id,
        averageRating,
        categories,
        language,
        publishedDate,
      };
    });

    return cleanedData;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};
