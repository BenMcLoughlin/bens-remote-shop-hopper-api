const url = "https://www.healinghollow.com/products.json";
// const url = "https://www.funktional.ca/products.json";

const fetchProducts = () =>
  new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        // TODO: handle errors
        if (res.statusCode) {
          const error = {
            verbiage: res.message,
            code: "INTERNAL_ERROR",
          };

          if (Number(res.statusCode) === 404) {
            error.verbiage = "Request failed: request url was NOT_FOUND (404).";
            error.code = "NOT_FOUND";
          }

          reject(error);
          return;
        }

        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });

export { fetchProducts };
