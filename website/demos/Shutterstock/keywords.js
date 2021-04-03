require('dotenv').config()

const sstk = require("shutterstock-api");
const fs = require("fs");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const computerVisionApi = new sstk.ComputerVisionApi();

const images = [
  './images/lions.jpeg',
  './images/nws-st-bengal-tiger.jpeg',
  './images/Kitchen-trends-2019-featured.jpeg',
  './images/3VeiQCKVdLtqfez9KLG8iT.jpeg',
  './images/bath-white.jpeg'
]

const random = Math.floor(Math.random() * images.length)
const image = images[random]

console.log('image', image)

const imageFile = fs.readFileSync(image);
const base64File = Buffer.from(imageFile).toString("base64");

const body = new sstk.ImageCreateRequest(base64File);

computerVisionApi.uploadImage(body)
  .then((data) => {
    console.log(data.upload_id);
    return computerVisionApi.getKeywords(data.upload_id);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });