const Product = require("./models/Products")
const faker = require("faker")

const n_samples = parseInt(process.argv[2])


const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/refillstore")


async function createProducts( n_samples){
    for(let i=0; i<n_samples; i++){
        let item = await Product.create({
            title: faker.lorem.lines(),
            pictureURL: faker.image.image() ,
            price:faker.commerce.price(),
            origin: faker.address.country(),
            materials: faker.lorem.lines(),
            description:faker.lorem.paragraph(),
            howToUse: faker.lorem.lines()
        })
        console.log(`Create ${i+1} experience`)
    }

}
createProducts(n_samples);