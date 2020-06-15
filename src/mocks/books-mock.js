const booksMock = Array(10)
  .fill({
    title: 'Thinking fast and slow',
    isbn: 1234,
    description: 'a wonderful book about human brain behaviors',
    price: {
      amount: 20,
      currency: '$',
    },
    author: {
      firstName: 'Daniel',
      lastName: 'Kaneman',
    },
  })
  .map((book) => ({ ...book, id: Math.floor(Math.random() * 1000) }));

export default booksMock;
