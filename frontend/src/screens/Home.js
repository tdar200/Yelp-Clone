import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Form, InputGroup, FormControl, Button, Card } from "react-bootstrap";

function Home() {
  const sampleCardObject = [
    {
      name: "Marriage Halls",
      image:
        "https://i0.wp.com/bridalmusings.com/wp-content/uploads/2020/02/La-Badia-di-Orvieto-Bridal-Musings-10-Best-Italian-Wedding-Venues.jpg?resize=%2C&ssl=1",
      link: "/",
    },

    {
      name: "Restaurants",
      image:
        "https://img.buzzfeed.com/buzzfeed-static/static/2020-06/15/19/asset/5fd156fbc34c/sub-buzz-6120-1592250681-3.jpg?downsize=600:*&output-format=auto&output-quality=auto",
      link: "/",
    },
    {
      name: "Clothes",
      image:
        "https://seenthemagazine.com/wp-content/uploads/65273183_2318926084861027_2488942236750839808_o.jpg",
      link: "/",
    },
    {
      name: "Electricans",
      image: "https://www.trade-schools.net/graphics/electrician-jobs-2.jpg",
      link: "/",
    },
  ];

  const businessCardObject = [
    {
      id: 1,
      name: "McDonalds",
      image:
        "https://i0.wp.com/bridalmusings.com/wp-content/uploads/2020/02/La-Badia-di-Orvieto-Bridal-Musings-10-Best-Italian-Wedding-Venues.jpg?resize=%2C&ssl=1",
      link: "/",
      average_review: 4.5,
      review_count: 5,
      restaurant_type: "American",
      location: "Lahore",
    },
    {
      id: 2,
      name: "Manchurian Panchurian",
      image:
        "https://img.buzzfeed.com/buzzfeed-static/static/2020-06/15/19/asset/5fd156fbc34c/sub-buzz-6120-1592250681-3.jpg?downsize=600:*&output-format=auto&output-quality=auto",
      link: "/",
      average_review: 2.5,
      review_count: 15,
      restaurant_type: "Chinese",
      location: "Lahore",
    },
    {
      id: 3,
      name: "Samosa Pakora",
      image:
        "https://seenthemagazine.com/wp-content/uploads/65273183_2318926084861027_2488942236750839808_o.jpg",
      link: "/",
      average_review: 5,
      review_count: 5,
      restaurant_type: "Pakistani",
      location: "Lahore",
    },
  ];

  const businessCategoriesObject = [
    {
      name: "Restaurants",
      image: "fas fa-utensils",
      link: "/",
      color: "red",
    },

    {
      name: "Shopping",
      image: "fas fa-shopping-bag",
      link: "/",
      color: "yellow",
    },
    {
      name: "Active Life",
      image: "fas fa-futbol",
      link: "/",
      color: "blue",
    },
    {
      name: "Beauty & Spas",
      image: "fas fa-spa",
      link: "/",
      color: "green",
    },
    {
      name: "Automotive",
      image: "fas fa-car",
      link: "/",
      color: "purple",
    },

    {
      name: "Home Services",
      image: "fas fa-home",
      link: "/",
      color: "violet",
    },
    {
      name: "Night Life",
      image:
        "https://seenthemagazine.com/wp-content/uploads/65273183_2318926084861027_2488942236750839808_o.jpg",
      link: "/",
      color: "orange",
    },
    {
      name: "More Categories",
      image: "fas fa-ellipsis-h",
      link: "/",
      color: "cyan",
    },
  ];

  const [location, setLocation] = useState("Lahore");
  const [business, setBusiness] = useState("");

  let navigate = useNavigate();

  const detailPage = (id) => {
    navigate(`/details/${id}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className='home'>
      <Header />
      <section className='home-1'>
        <div className='background-overlay'>
          <div className='logo'></div>

          <div>
            <Form onSubmit={submitHandler}>
              <InputGroup className='mb-3'>
                <InputGroup.Text className='bg-white'>Find</InputGroup.Text>
                <FormControl
                  aria-label='Business Name'
                  placeholder='All places nearby'
                />
                <InputGroup.Text className='bg-white'>Location</InputGroup.Text>
                <FormControl value={location} aria-label='Location' />
                <Button type='submit' variant='danger' id='button-addon2'>
                  <i class='fa fa-search'></i>
                </Button>
              </InputGroup>
            </Form>
          </div>

          <div>
            <Button variant='none' className='text-white'>
              <i class='fas fa-shower'></i> <text>Plumbers</text>
            </Button>
            <Button variant='none' className='text-white'>
              <i class='fas fa-tshirt'></i> <text>Clothes</text>
            </Button>
            <Button variant='none' className='text-white'>
              <i class='fa fa-stethoscope'></i> <text>Doctors</text>
            </Button>
            <Button variant='none' className='text-white'>
              <i class='fa fa-home'></i> <text>Contractors</text>
            </Button>
            <Button variant='none' className='text-white'>
              <i class='fa fa-motorcycle'></i> <text>Delivery Services</text>
            </Button>
          </div>
        </div>
      </section>
      <section className='home-2'>
        <h3>Find best reviewed places and services</h3>
        <div>
          {sampleCardObject.map((service, idx) => {
            return (
              <div key={idx}>
                <a className='card-div' href={service.link}>
                  <img src={service.image} />

                  <p>{service.name}</p>
                </a>
              </div>
            );
          })}
        </div>
      </section>
      <section className='home-3'>
        <h5>Hot & New Places</h5>
        <div>
          {businessCardObject.map((item, idx) => {
            const starsTotal = 5;

            const starPercentage = (item.average_review / starsTotal) * 100;

            const starPercentageRounded = `${
              Math.round(starPercentage / 10) * 10
            }%`;

            return (
              <div key={idx}>
                <div
                  className='card-div'
                  onClick={() => detailPage(item.id)}
            
                >
                  <img src={item.image} />
                  <div className='card-container'>
                    <h4>{item.name}</h4>
                    <div className='reviews'>
                      <div className='stars-outer'>
                        <div
                          style={{ width: `${starPercentageRounded}` }}
                          className='stars-inner'
                        ></div>
                      </div>

                      <text>{item.review_count}</text>
                    </div>
                    <text>{item.restaurant_type}</text>
                    <text>{item.location}</text>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className='home-4'>
        <h5>Browse Businesses By Category</h5>
        <div>
          {businessCategoriesObject.map((item, idx) => {
            return (
              <div key={idx}>
                <a className='card-div' href={item.link}>
                  <i
                    style={{ color: `${item.color}` }}
                    className={item.image}
                  />

                  <p>{item.name}</p>
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Home;
