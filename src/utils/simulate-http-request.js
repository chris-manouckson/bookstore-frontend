const simulateHttpRequest = (payload, delay = 200) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(payload);
  }, delay);
});

export default simulateHttpRequest;
