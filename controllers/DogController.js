//if you don't have mongoose models and seed file for data
const dogs = [
    { name: "Clifford",
     color: "red", 
     size: "huge" },
    { name: "Scooby-Doo", 
    color: "brown", 
    size: "big" },
    { name: "Snowy", 
    color: "white", 
    size: "small" },
  ];
  
  
  //non async versions, if not using mongoose
  const getDogs = (req, res) => {
      res.send(dogs)
    }
    
    const getDog = (req, res) => {
        res.send(dogs[req.params.id])
    }

    const getDogName = (req, res) => {
        res.send(dogs[req.params.id].name)
    }    
    
    const getDogColor = (req,res) => {
        const myColor = req.params.color
        const dogsWithColor = dogs.filter(dog => dog.color === myColor)
        res.send(dogsWithColor)
    }
    

//ASYNC versions, if using mongoose
const {Product} = require('../models'); //with models/index.js file
//const Product = require('../models/product'); //without models/index.js file

//Read
const getAllProducts = async (req, res) => {
    try {
        const objectArray = await Product.find()
        res.json(objectArray)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//Read
const getProductById = async (req, res) => {
    try {
        const { id } = req.params
        const singleObject = await Product.findById(id)
        if (singleObject) {
            return res.json(singleObject)
        }
        return res.status(404).send(`that Product doesn't exist`)
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That Product doesn't exist`)
        }
        return res.status(500).send(error.message);
    }
}

//create
const createProduct = async (req, res) => {
    try {
        const newObject = await new Product(req.body)
        await newObject.save()
        return res.status(201).json({
            newObject,
        });
    } catch (error) {
        // if (error.name === 'CastError' && error.kind === 'ObjectId') {
        //     return res.status(404).send(`That Product doesn't exist`)
        // }
        return res.status(500).json({ error: error.message })
    }
}

//update
const updateProduct = async (req, res) => {
    try {
        let { id } = req.params;
        let changedObject = await Product.findByIdAndUpdate(id, req.body, { new: true })
        if (changedObject) {
            return res.status(200).json(changedObject)
        }
        throw new Error("Product not found and can't be updated")
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That Product doesn't exist`)
        }
        return res.status(500).send(error.message);
    }
}

//delete
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const erasedObject = await Product.findByIdAndDelete(id)
        if (erasedObject) {
            return res.status(200).send("Product deleted");
        }
        throw new Error("Product not found and can't be deleted");
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That Product doesn't exist`)
        }
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllProducts, 
    getProductById, 
    createProduct, 
    updateProduct, 
    deleteProduct,
    getDogs,
    getDog,
    getDogName,
    getDogColor
    }