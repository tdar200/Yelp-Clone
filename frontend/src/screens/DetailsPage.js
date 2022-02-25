import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailsHeader from "../components/DetailsHeader";
import DetailsMain from "../components/DetailsMain";

function DetailsPage() {
  const businessDetail = {
    id: 1,
    name: "McDonalds",
    image:
      "https://i0.wp.com/bridalmusings.com/wp-content/uploads/2020/02/La-Badia-di-Orvieto-Bridal-Musings-10-Best-Italian-Wedding-Venues.jpg?resize=%2C&ssl=1",
    link: "/",
    average_review: 4.5,
    review_count: 5,
    restaurant_type: "American",
    location: "Lahore, Punjab",
    coordinates: "",
    province: "",
    hours: [
      { day: "Saturday", time: "1:30 PM - 12:00 PM" },
      { day: "Sunday", time: "1:30 PM - 12:00 PM" },
      { day: "Monday", time: "1:30 PM - 12:00 PM" },
      { day: "Tuesday", time: "1:30 PM - 12:00 PM" },
      { day: "Wednesday", time: "1:30 PM - 12:00 PM" },
      { day: "Thursday", time: "1:30 PM - 12:00 PM" },
      { day: "Friday", time: "1:30 PM - 12:00 PM" },
    ],
    amenities: [
      "Family Hall",
      "Delivery",
      "Take-Away",
      "Outdoor Seating",
      "Indoor Seating",
      "Waiter Service",
      "Casual",
    ],
    website: "https://backyardbbqrestaurantwebsite.herokuapp.com/",
    phone: "(0316) 143-2871",
    direction: "Lahore, Punjab",
  };

  const reviews = [{
    username: "Cinthia",
    photos: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/6/1/2/FNM_070112-Copy-That-Almost-Famous-Animal-Style-Burger-Recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382541460839.jpeg"],
    first_name: "Cynthia",
    last_name: "Richie",
    location: "Gujranwala, Punjab",
    body: "Very good",
    rating: "4.5",
    profile_pic: "",
    date_created: "6/12/2021",

  },{
    username: "Moe",
    photos: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/6/1/2/FNM_070112-Copy-That-Almost-Famous-Animal-Style-Burger-Recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382541460839.jpeg"],
    first_name: "Malik",
    last_name: "Khan",
    location: "Gujranwala, Punjab",
    body: "Very good food",
    rating: "3",
    profile_pic: "",
    date_created: "6/12/2021",

  },{
    username: "A7med",
    photos: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/6/1/2/FNM_070112-Copy-That-Almost-Famous-Animal-Style-Burger-Recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382541460839.jpeg"],
    first_name: "Ahmed",
    last_name: "Riaz",
    location: "Gujranwala, Punjab",
    body: "Very delicious",
    rating: "5",
    profile_pic: "",
    date_created: "6/12/2021",

  },]

  const { id } = useParams();

  return (
    <div>
      <DetailsHeader />
      <DetailsMain businessDetail={businessDetail} reviews={reviews} />
    </div>
  );
}

export default DetailsPage;
