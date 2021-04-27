const usersMock = Array(10)
  .fill({
    firstName: 'Daniel',
    lastName: 'Kaneman',
    email: 'daniel.kaneman@mailinator.com',
    phone: '+1111111111',
  })
  .map((book) => ({ ...book, id: Math.floor(Math.random() * 1000) }));

export default usersMock;
