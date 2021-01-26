const productRepo = require("../repository/app");
const Product = require("../models/app");

exports.createNewProduct = async (req, res) => {
  try {
    const payLoad = {
      brand: req.body.brand,
      name: req.body.name,
      price: req.body.price,
      image_link: req.body.image_link,
      product_link: req.body.product_link,
      website_link: req.body.website_link,
      description: req.body.description,
      rating: req.body.rating,
      category: req.body.category,
      product_type: req.body.product_type,
      tag_list: req.body.tag_list,
      product_api_url: req.body.product_api_url,
      api_featured_image: req.body.api_featured_image,
      product_colors: req.body.product_colors,
      item_available: req.body.item_available,
    };

    let product = await Product.insertMany({
      ...payLoad,
    });

    res.status(201).json({
      status: true,
      product: product,
    });
  } catch (err) {
    console.log(err);
    //internal server error
    res.status(400).json({
      error: err,
      status: false,
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    let product = await productRepo.findAllProducts();

    res.status(200).json({
      status: true,
      product: product,
    });
  } catch (err) {
    // bad request
    res.status(400).json({
      error: err.message,
      status: false,
    });
  }
};

exports.productById = async (req, res) => {
  try {
    let _id = req.params.id;
    let productDetails = await productRepo.findProductById(_id);

    res.status(200).json({
      status: true,
      product: productDetails,
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      error: err,
    });
  }
};

exports.getProductByIdAndDelete = async (req, res) => {
  try {
    let _id = req.params.id;
    let productDetails = await productRepo.deleteProductById(_id);

    res.status(200).json({
      status: true,
      product: productDetails,
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      error: err,
    });
  }
};

exports.getProductByIdAndUpdate = async (req, res) => {
  try {
    let _id = req.params._id;

    let productDetails = await productRepo.updateProductById(_id, req.body, {
      new: true,
    });

    res.status(200).json({
      status: true,
      product: productDetails,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      error: err,
    });
  }
};

//not working
exports.updateManyProducts = async (req, res) => {
  try {
    const query = { doc: req.body.doc };
    let product = await productRepo.updateALotOfProducts(
      {
        created: false,
      },
      {
        $set: { created: true },
      },
      { multi: true }
    );

    res.status(200).json({
      status: true,
      data: product,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      error: err,
    });
  }
};

exports.deleteManyProducts = async (req, res) => {
  try {
    let product = await productRepo.deleteALotOfProducts();

    res.status(200).json({
      status: true,
      product: product,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      error: err,
    });
  }
};

//product type, brand and category api
exports.getProductType = async (req, res) => {
  const keyword = req.query.keyword;
  try {
    const product = await Product.find({
      product_type: {
        $regex: keyword,
        $options: "i",
      },
    });
    res.status(200).json({ product: product });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

//search api
exports.getDescription = async (req, res) => {
  const keyword = req.query.keyword;
  //* matches any character
  //. matches any number
  // db.makeups.find({"description" : /.*liner.*/}, {name:1, category:1, description:1} )
  try {
    const product = await Product.find({
      description: { $regex: keyword, $options: "" },
      //was gonna check 3 of these products ...category, name , description, but the above works
    });
    res.status(200).json({ product: product });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

//homepage api
exports.getHomeProductsType = async (req, res) => {
  const { page = req.params.pId, limit = 3 } = parseInt(req.query);
  const keyword = req.query.keyword;
  try {
    const product = await Product.find({
      product_type: {
        $regex: keyword,

        $options: "",
      },
    })

      .limit(limit)
      .skip(page * limit)
      .exec();

    res.status(200).json({
      product: product,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      err: error.message,
    });
  }
};

//similar product api
exports.getSimilarProductForType = async (req, res) => {
  const { page = req.params.pId, limit = 7 } = parseInt(req.query);
  const keyword = req.query.keyword;

  try {
    let product = await Product.find({
      $or: [
        {
          product_type: {
            $regex: keyword,
            $options: "i",
          },
        },
        {
          category: {
            $regex: keyword,
            $options: "i",
          },
        },
        {
          brand: {
            $regex: keyword,
            $options: "i",
          },
        },
      ],
    })
      .limit(limit)
      .skip(page * limit)
      .exec();

    res.status(200).json({
      product: product,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      err: error.message,
    });
  }
};
