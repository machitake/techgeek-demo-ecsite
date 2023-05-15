const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.get("/api/products", async (req, res) => {
  console.log("GET /api/products");
  await sleep(3000);
  res.status(200).json([
    {
      id: "商品ID: 1",
      name: "Product 1",
      price: 100,
      image: "https://burst.shopifycdn.com/photos/woman-practices-yoga-in-green-grass.jpg?width=925&format=pjpg&exif=1&iptc=1"
    },
    {
      id: "商品ID: 2",
      name: "Product 2",
      price: 200,
      image: "https://burst.shopifycdn.com/photos/person-holds-themselves-parallel-to-a-blue-yoga-mat.jpg?width=925&format=pjpg&exif=1&iptc=1"
    },
    {
      id: "商品ID: 3",
      name: "Product 3",
      price: 300,
      image: "https://burst.shopifycdn.com/photos/young-woman-doing-yoga-in-park.jpg?width=925&format=pjpg&exif=1&iptc=1"
    },
  ]);
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
app.listen(port, () => console.log(`Example app listening on port ${port}!`));