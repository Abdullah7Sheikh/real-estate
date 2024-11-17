const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

let houses = [
    {
        id: 1,
        title: "Motion House",
        price: 999999,
        description: "Karachi",
        img: "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_640.jpg"
    },
    {
        id: 2,
        title:" Wisdom house",
        price: 1200000,
        description: "Riaz",
        img: "https://cdn.pixabay.com/photo/2022/01/26/04/47/house-6967908_640.jpg"
    },
    {
        id: 3,
        title: "Immense house",
        price: 850000,
        description: "Abu Dabi",
        img: "https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796_640.jpg"
    },
    {
        id: 4,
         title: "Strategy house",
          price: 1300000,
        description: "Dubai",
        img: "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_640.jpg"
    },
    {
        id: 5,
        title: "Absolute House",
        price: 350000,
        description: "belgium",
        img: "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_640.jpg"
    },
    {
        id: 6,
        title: "Chair House",
        price: 299000,
        description: "Shibuya",
        img: "https://cdn.pixabay.com/photo/2019/01/31/10/32/house-3966469_640.jpg"
    },
    {
        id: 7,
        title: "Yoke house",
        price: 400000,
        description: "Tokyo",
        img: "https://cdn.pixabay.com/photo/2014/07/31/00/30/vw-beetle-405876_640.jpg"
    },
    {
        id: 8,
        title: "Executive house",
        price: 1990000,
        description: "Islamabad",
        img: "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 9,
        title: "Scout house",
        price: 500000, 
        description: "chicago",
        img: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 10,
        title: "Little Wood",
        price: 399999,
        description: "tailand",
        img: "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
];

app.get('/api/houses', (req, res) => {
    res.json(houses);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
