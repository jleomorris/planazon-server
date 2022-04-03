const Product = {
  category: (parent, args, { categories }) => {
    console.log(parent);
    return categories.find((category) => category.id === parent.category);
    // return animals.filter((animal) => animal.category === parent.id);
  },
};

module.exports = Product;
