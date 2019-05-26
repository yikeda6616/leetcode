new Promise((resolve, reject) => {
  setTimeout(() => reject(1), 10);
  setTimeout(() => resolve(0), 0);
}).then(
  // fulfilled
  fulfill => {
    console.log('fulfilled:' + fulfill);
  },
  // rejected
  rejected => {
    console.log('rejected:' + rejected);
  }
);
