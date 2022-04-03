const Query = {
  mainCards: (parent, args, { mainCards }) => mainCards,
  products: (parent, args, { products }) => products,
  product: (parent, args, { products }) => {
    const product = products.find((product) => {
      return product.slug === args.slug;
    });
    return product;
  },
  productSearch: (parent, args, { products }) => {
    const matchingProducts = products.filter((product) =>
      product.title.toLowerCase().includes(args.searchTerm.toLowerCase())
    );

    return matchingProducts;
  },
  categories: (parents, args, { categories }) => categories,
  category: (parent, args, { categories }) => {
    const category = categories.find((category) => {
      return category.slug === args.slug;
    });
    return category;
  },
};

module.exports = Query;
