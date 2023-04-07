

const books = [
    { title: "The Catcher in the Rye", author: "j.d. salinger", year: 1951 },
    { title: "The Hunger Games", author: "suzanne collins", year: 2008 },
    { title: "The Girl with the Dragon Tattoo", author: "stieg larsson", year: 2005 },
    {title: "Divergent", author: "veronica roth", year: 2011},
    {title: "Fifty Shades of Grey", author: "E.L james", year: 2011},
    {title: "Steve Jobs", author: "walter isaacson", year: 2011},
  ];
  
  const filteredBooks = books.filter(book => book.year >= 2010);
  
  const capitalizedAuthorNames = filteredBooks.map(book => {
    return {
      title: book.title,
      author: book.author.split(' ').map(name => name.toUpperCase()).join(' '),
      year: book.year
    };
  });
  
  console.log(capitalizedAuthorNames);
  