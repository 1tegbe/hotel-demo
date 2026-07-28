import pic1 from "./1.jpg";
import pic2 from "./2.jpg";
import pic3 from "./3.jpg";
import pic4 from"./4.jpg";
import pic5 from"./5.jpg";
import pic6 from"./6.jpg";
import pic7 from"./7.jpg";
import pic8 from"./8.jpg";
import pic9 from"./9.jpg";
import pic10 from"./10.jpg";
import pic11 from"./11.jpg";
import pic12 from"./12.jpg";
import pic13 from"./13.jpg";
import pic14 from"./14.jpg";
import pic15 from"./15.jpg";
const hotelRooms = [
  {
    id: 1,
    category: "Standard",
    text:"Villa Aegean, Santorini",
    head:"Ocean Suite",
    story:"Perched on the caldera edge, this whitewashed suite frames an unobstructed view of the Aegean from every room. The private plunge pool is heated year-round.",
    price: 25000,
    images: [
      pic1,
      pic2,
      pic3,
    ]
  },
  {
    id: 2,
    category: "Deluxe",
    price: 15000,
    images: [
pic4,
pic5,
pic6
    ]
  },
  {
    id: 3,
    category: "Suite",
    price: 40000,
    images: [
    pic7,
    pic8,
    pic9
    ]
  },
  {
    id: 4,
    category: "Executive",
    price: 249,
    images: [
     pic10,
     pic11,
     pic12
    ]
  },
  {
    id: 5,
    category: "Standard",
    price: 25000,
    images: [
      pic5,
      pic5,
      pic5
    ]
  }
 
];

export default hotelRooms;