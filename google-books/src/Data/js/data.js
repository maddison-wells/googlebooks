export const bestSellingBooks = [
  "Best Selling Books",
  [
    "The Da Vinci Code by Dan Brown",
    "Harry Potter and the Philosopher's Stone - 25th Anniversary Edition by J.K. Rowling",
    "To Kill a Mockingbird by Harper Lee",
    "The Lord of the Rings by J.R.R. Tolkien",
    "The Catcher in the Rye by J.D. Salinger",
    "The Great Gatsby F. Scott Fitzgerald",
    "1984 by George Orwell",
    "The Hobbit book J.R.R. Tolkien",
    "The Hunger Games series Suzanne Collins",
    "The Bible",
    "The Alchemist by Paulo Coelho",
    "The Chronicles of Narnia by C.S. Lewis",
    "The Girl with the Dragon Tattoo by Stieg Larsson",
    "Gone with the Wind  Margaret Mitchell",
    "The Kite Runner by Khaled Hosseini",
    "The Shining by Stephen King",
    "The Fault in Our Stars by John Green",
    "A Tale of Two Cities by Charles Dickens",
    "The Outsiders by S.E. Hinton",
    "The Road by Cormac McCarthy",
  ],
];

export const topFantasyBooks = [
  "Top Fantasy Books",
  [
    "aWZzLPhY4o0C",
    "A Game of Thrones 4 book bundle",
    "Harry Potter and the Philosopher's Stone - 25th Anniversary Edition by J.K. Rowling",
    "The Hobbit by J.R.R. Tolkien",
    "The Chronicles of Narnia by C.S. Lewis",
    "the eye of the world",
    "Kingkiller chronicles by Patrick Rothfuss",
    "Mistborn series by Brandon Sanderson",
    "The Earthsea Cycle by Ursula K. Le Guin",
    "The Stormlight Archive series by Brandon Sanderson",
    "The Malazan series by Steven Erikson",
    "The Witcher series by Andrzej Sapkowski",
    "Good Omens by Neil Gaiman and Terry Pratchett",
    "The Belgariad series by David Eddings",
    "The Dresden Files series by Jim Butcher",
    "The Lies of Locke Lamora by Scott Lynch",
    "The Dark Tower by Stephen King",
    "The Broken Empire Trilogy by Mark Lawrence",
    "The Inheritance Trilogy by N.K. Jemisin",
  ],
];

export const topChildrensBooks = [
  "Top Children's Books",
  [
    "Where the Wild Things Are by Maurice Sendak",
    "Harry Potter and the Philosopher's Stone - 25th Anniversary Edition by J.K. Rowling",
    "The Very Hungry Caterpillar",
    "Charlotte's Web by E.B. White",
    "Matilda by Roald Dahl",
    "The Gruffalo by Julia Donaldson",
    "Winnie-the-Pooh by A.A. Milne",
    "Green Eggs and Ham by Dr. Seuss",
    "Alice's Adventures in Wonderland by Lewis Carroll",
    "The Chronicles of Narnia by C.S. Lewis",
    "Goodnight Moon by Margaret Wise Brown",
    "The Cat in the Hat Book and Jigsaw Pack",
    "Charlie and the Chocolate Factory by Roald Dahl",
    "Peter Pan by J.M. Barrie",
    "The Secret Garden by Frances Hodgson Burnett",
    "Oh, the Places You'll Go! by Dr. Seuss",
    "The Tale of Peter Rabbit by Beatrix Potter",
    "Anne of Green Gables by L.M. Montgomery",
    "The Little Prince by Antoine de Saint-Exupéry",
    "James and the Giant Peach by Roald Dahl",
  ],
];

export const topGraphicNovels = [
  "Top Graphic Novels",
  [
    "Maus by Art Spiegelman",
    "Persepolis",
    "Watchmen by Alan Moore and Dave Gibbons",
    "Saga by Brian K. Vaughan and Fiona Staples",
    "Fun Home by Alison Bechdel",
    "Blankets by Craig Thompson",
    "Sandman by Neil Gaiman",
    "Batman: The Dark Knight Returns by Frank Miller",
    "Astro City Metrobook Vol. 1 by Kurt Busiek and Brent Anderson",
    "Batman: The Killing Joke",
    "Jimmy Corrigan: The Smartest Kid on Earth by Chris Ware",
    "Ghost World by Daniel Clowes",
    "Daytripper deluxe edition by Fábio Moon and Gabriel Bá",
    "Black Hole by Charles Burns",
    "Asterios Polyp by David Mazzucchelli",
    "Fun with Milk & Cheese by Evan Dorkin",
    "Akira by Katsuhiro Otomo",
    "Bone by Jeff Smith",
  ],
];

export const languageCodeToName = (code) => {
  const languageMap = {
    en: "English",
    es: "Spanish",
    fr: "French",
    de: "German",
    it: "Italian",
    zh: "Chinese",
    ja: "Japanese",
    ko: "Korean",
    ru: "Russian",
    ar: "Arabic",
    pt: "Portuguese",
    hi: "Hindi",
    tr: "Turkish",
    nl: "Dutch",
    sv: "Swedish",
    pl: "Polish",
    vi: "Vietnamese",
    th: "Thai",
    id: "Indonesian",
    he: "Hebrew",
    el: "Greek",
  };

  return languageMap[code] || "Unknown";
};
