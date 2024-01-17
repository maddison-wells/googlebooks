export const fetchBooks = async (searchTerm) => {
  const key = "AIzaSyAOxvj0vhDEKy_sgNqNyijutb9RbuwFeDc";
  console.log(searchTerm);

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
      const { title, authors, description, imageLinks, id } = book.volumeInfo;
      return {
        title,
        authors,
        description,
        imageLinks,
        id,
      };
    });

    return cleanedData;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

// intitle: Returns results where the text following this keyword is found in the title.
// inauthor: Returns results where the text following this keyword is found in the author.
// inpublisher: Returns results where the text following this keyword is found in the publisher.
// subject: Returns results where the text following this keyword is listed in the category list of the volume.
// isbn: Returns results where the text following this keyword is the ISBN number.
// lccn: Returns results where the text following this keyword is the Library of Congress Control Number.
// oclc: Returns results where the text following this keyword is the Online Computer Library Center number
