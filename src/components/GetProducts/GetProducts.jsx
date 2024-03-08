/**
   * Получение товаров из базы данных.
   */
const getProductsFromServer = (setProducts) => {
    fetch("https://65d386d8522627d501091517.mockapi.io/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка при получении данных");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error(error);
      });
  };
  
  export default getProductsFromServer;
  