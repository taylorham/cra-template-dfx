const stubbedInterface = {
  getValue: () =>
    new Promise((resolve, reject) => {
      resolve("test value");
    }),
};

export default stubbedInterface;
