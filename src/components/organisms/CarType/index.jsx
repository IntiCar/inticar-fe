import { Link } from "react-router-dom";
import styled from "styled-components";

import ListingBrowse1 from "@/assets/images/listing/browse1.jpg";
import ListingBrowse2 from "@/assets/images/listing/browse2.jpg";
import ListingBrowse3 from "@/assets/images/listing/browse3.jpg";
import ListingBrowse4 from "@/assets/images/listing/browse4.jpg";
import ListingBrowse5 from "@/assets/images/listing/browse5.jpg";


const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CarType = () => {
  const listings = [
    {
      imgSrc: ListingBrowse1,
      title: "Compact",
      numListings: "59 Listings",
      colClasses: "col-md-6",
      delay: "100",
    },
    {
      imgSrc: ListingBrowse2,
      title: "Sedan",
      numListings: "8912 Listings",
      colClasses: "col-md-6",
      delay: "200",
    },
    {
      imgSrc: ListingBrowse3,
      title: "SUV",
      numListings: "775 Listings",
      colClasses: "col-md-6 col-lg-4",
      delay: "300",
    },
    {
      imgSrc: ListingBrowse4,
      title: "Convertible",
      numListings: "12 Listings",
      colClasses: "col-md-6 col-lg-4",
      delay: "400",
    },
    {
      imgSrc: ListingBrowse5,
      title: "Coupe",
      numListings: "45 Listings",
      colClasses: "col-md-6 col-lg-4",
      delay: "500",
    },
  ];

  return (
    <>
      {listings.map((listing, index) => (
        <div
          key={index}
          className={listing.colClasses}
          data-aos="fade"
          data-aos-delay={listing.delay}
        >
          <div className="explore_city">
            <div className="thumb">
              <Image
                width={450}
                height={303}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                priority
                src={listing.imgSrc}
                alt={listing.title}
              />
            </div>
            <div className="details">
              <h4 className="title">
                <Link to="/listing-v1">{listing.title}</Link>
              </h4>
              <p>{listing.numListings}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CarType;
