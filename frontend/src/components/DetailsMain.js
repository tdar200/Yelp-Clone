import React, { useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import GoogleMap from "./GoogleMap";

function DetailsMain({ businessDetail, reviews }) {
  console.log(reviews);

  const starsTotal = 5;

  const starPercentage = (businessDetail.average_review / starsTotal) * 100;

  const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${businessDetail.image})` }}
        className='details-main-image'
      >
        <h1>{businessDetail.name}</h1>

        <div style={{ display: "inline-flex" }}>
          <div className='stars-outer'>
            <div
              style={{ width: `${starPercentageRounded}` }}
              className='stars-inner'
            ></div>
          </div>

          <span>{businessDetail.review_count} reviews</span>
        </div>
        <div style={{ display: "inline-flex" }}>
          <a href='/'>{businessDetail.restaurant_type}</a>
        </div>
      </div>

      <div className='details-main-container'>
        <div className='details-main-container-1'>
          <div className='details-main-buttons'>
            <Button variant='danger'>
              <i class='far fa-star'></i> Write a Review
            </Button>
            <Button variant='white'>
              <i class='fas fa-camera'></i> Add Photo
            </Button>
            <Button variant='white'>
              <i class='far fa-share-square'></i> Share
            </Button>
            <Button variant='white'>
              <i class='far fa-bookmark'></i> Save
            </Button>
          </div>
          <div className='details-main-location'>
            <h4>Location & Hours</h4>
            <div
              style={{
                display: "inline-flex",
                flex: 3,
                justifyContent: "space-between",
                paddingTop: "3vh",
                width: "100%",
              }}
            >
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  height: "300px",
                  flexDirection: "column",
                }}
              >
                <GoogleMap />
                <span style={{ marginTop: "1vh" }}>
                  {businessDetail.location}
                </span>
              </div>
              <div
                style={{
                  flex: 1,
                  alignItems: "flex-end",
                  display: "flex",
                  height: "300px",
                  flexDirection: "column",
                }}
              >
                {businessDetail.hours.map((item, idx) => {
                  return (
                    <div key={idx} style={{ display: "inline-flex" }}>
                      <div style={{ width: "50px" }}>
                        <p>{item.day.substr(0, 3)}</p>
                      </div>
                      <p style={{ marginLeft: "10px" }}>{item.time}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className='details-main-amenities'>
            <h4>Amenities & More</h4>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                paddingTop: "3vh",
              }}
            >
              {businessDetail.amenities.map((amenity, idx) => (
                <div key={idx} style={{ width: "50%", marginBottom: "1vh" }}>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
          <div className='details-main-reviews'>
            <h4>Reviews</h4>

            <div style={{ paddingTop: "3vh" }}>
              {reviews.map((review, idx) => {
                const starsTotal = 5;

                const starPercentage = (review.rating / starsTotal) * 100;

                const starPercentageRounded = `${
                  Math.round(starPercentage / 10) * 10
                }%`;

                return (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "3vh",
                      border: "1px solid lightgray",
                      borderRadius: "5px",
                      marginBottom: "3vh",
                    }}
                    key={idx}
                  >
                    <div style={{ display: "inline-flex" }}>
                      <img
                        style={{ width: "100px", borderRadius: "50px" }}
                        src={`${review.photos[0]}`}
                        alt='avatar'
                      />
                      <div>
                        <a href='/'>{review.username}</a>
                        <p>{review.location}</p>
                      </div>
                    </div>
                    <div style={{ display: "inline-flex" }}>
                      <div className='stars-outer'>
                        <div
                          style={{ width: `${starPercentageRounded}` }}
                          className='stars-inner'
                        ></div>
                      </div>
                      <p style={{ marginLeft: "1vh" }}>{review.date_created}</p>
                    </div>
                    <div>
                      <p>{review.body}</p>
                      </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className='details-main-container-2'>
          <div style={{ position: "sticky", top: "20px" }}>
            <div
              style={{
                padding: "2vh",
                border: "1px solid lightgrey",
                borderRadius: "5px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  paddingBottom: "2vh",
                  borderBottom: "1px solid lightgrey",
                }}
              >
                <a
                  style={{ color: "blue" }}
                  href={businessDetail.website}
                  target='_blank'
                  rel='noreferrer'
                >
                  Visit Website
                </a>
              </div>
              <div
                style={{
                  paddingBottom: "2vh",
                  paddingTop: "2vh",
                  borderBottom: "1px solid lightgrey",
                }}
              >
                <p style={{ margin: "0" }}>{businessDetail.phone}</p>
              </div>
              <div
                style={{
                  paddingBottom: "2vh",
                  paddingTop: "2vh",
                }}
              >
                <a style={{ color: "blue" }}>Get Direction</a>
                <p style={{ margin: "0" }}>{businessDetail.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsMain;
