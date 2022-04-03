const { v4 } = require("uuid");

const Mutation = {
  addProduct: (
    parent,
    { image, title, rating, price, description, slug, stock, onSale, category },
    { products }
  ) => {
    let newProduct = {
      id: v4(),
      image,
      title,
      rating,
      price,
      description,
      slug,
      stock,
      onSale,
      category,
    };

    products.push(newProduct);
    return newProduct;
  },
  removeProduct: (parent, { id }, { products }) => {
    let indexToDelete = products.findIndex((product) => product.id === id);
    products.splice(indexToDelete, 1);
    return true;
  },
  updateProduct: (
    parent,
    {
      id,
      image,
      title,
      rating,
      price,
      description,
      slug,
      stock,
      onSale,
      category,
    },
    { products }
  ) => {
    const indexToUpdate = products.findIndex((product) => product.id === id);
    const oldProduct = product[indexToUpdate];
    const newProduct = {
      image: image === undefined ? oldProduct["image"] : image,
      title: title === undefined ? oldProduct["title"] : title,
      rating: rating === undefined ? oldProduct["rating"] : rating,
      price: price === undefined ? oldProduct["price"] : price,
      description:
        description === undefined ? oldProduct["description"] : description,
      slug: slug === undefined ? oldProduct["slug"] : slug,
      stock: stock === undefined ? oldProduct["stock"] : stock,
      onSale: onSale === undefined ? oldProduct["onSale"] : onSale,
      category: category === undefined ? oldProduct["category"] : category,
    };

    const updatedProduct = { ...oldProduct, ...newProduct };
    animals[indexToUpdate] = updatedProduct;
    return updatedProduct;
  },
};

module.exports = Mutation;
