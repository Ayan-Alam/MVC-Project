const product = require("../Models/project")
exports.getaddproduct = (req, res, next) => {

    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
}

exports.postaddproduct = (req, res, next) => {
    let newproduct = new product(req.body.title);
    newproduct.save();
    res.redirect('/');
}

exports.getshop =  (req, res, next) => {
  const products = product.fetchAll((products)=>{
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  }); 
} 

exports.errorpage = (req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found',path:'/404'});
}