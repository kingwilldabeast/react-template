//all in one seed file

const db = require('../db')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const { Brand, Bicycle, Bell } = require('../models') //with models/index.js

// const Brand  = require('../models/brand') //without models/index.js
// const Bicycle  = require('../models/bicycle') //without inmodels/index.jsdex
// const Bell  = require('../models/bell') //without models/index.js


const resetCollections = async () => {
    try {
        await Brand.deleteMany({});
        await Bicycle.deleteMany({});
        await Bell.deleteMany({});
        console.log('All collection reset');
    } catch (error) {
        console.error('Error resetting collections:', error);
    }
};

const main = async () => {

  await resetCollections();   

  const brand1 = await new Brand({
    name: 'BMX',
    location: '123 Main St, Orlando, FL',
    logo_img: 'bikesDB/BMX.jpeg'
  })
  brand1.save()

  const brand2 = await new Brand({
    name: 'MTB',
    location: '123 Main St, Orlando, FL',
    logo_img: 'bikesDB/MTB.jpeg'
  })
  brand2.save()

  const bicycleArray = [
    {
      brand_id: brand1._id,
      type: 'Mountain Bike',
      price: 130,
      color: 'red',
      img: 'bikesDB/redMTB.jpeg'
    },
    {
        brand_id: brand1._id,
        type: 'Aqua Bike',
        price: 250,
        color: 'blue',
        img: 'bikesDB/aquabike.jpeg'
    },
  ]

  const bicycles = await Bicycle.insertMany(bicycleArray)
  console.log('Created bicycles!')
  
  const bellArray  = [
        {
          // bicycle_id: bicycleArray[0]._id,
          bicycle_id: bicycles[0]._id,
          sound: "trill",
          price: 4
        },
        {
          bicycle_id: bicycles[0]._id,
          sound: "honk",
          price: 15
        },

    ]


    await Bell.insertMany(bellArray)
    console.log('Created bells!')
}

const run = async () => {
  await main()
  db.close()
}

run()