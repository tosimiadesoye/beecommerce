module.exports = app => { 
    app.use("/product", productRoutes); 
    app.use("/cart", cartRoutes); 
}