'use client';
import Link from 'next/link';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

const Hero = () => {
  const carSlides = [
    {
      image: '/images/home/1.jpg',
      title: 'Temukan Kendaraan Impianmu',
      subtitle: 'Ribuan mobil berkualitas siap menemani perjalanan Anda',
      cta: 'Cari Sekarang',
      ctaLink: '/explore',
    },
    {
      image: '/images/home/3.jpg',
      title: 'Jual Mobil Anda dengan Mudah',
      subtitle:
        'Dapatkan penawaran terbaik untuk mobil Anda dalam waktu singkat',
      cta: 'Daftar Mobil',
      ctaLink: '/add-listings',
    },
    {
      image: '/images/home/4.jpg',
      title: 'Cicilan Mudah, Mobil Impian',
      subtitle: 'Miliki Mobil Impian Anda dengan Cicilan yang Mudah.',
      cta: 'Pelajari Lebih Lanjut',
      ctaLink: '/explore',
    },
  ];

  return (
    <div className="mt70-992 ovh pt0-sm">
      <div className="container-fluid p0">
        <div className="main-banner-wrapper">
          <div className="p-4 banner-style-one">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              modules={[Navigation]}
              navigation={{
                nextEl: '.right-btn',
                prevEl: '.left-btn',
              }}
            >
              {carSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="slide slide_image rounded-3"
                    style={{
                      backgroundImage: `url(${slide.image})`,
                      backgroundSize: 'cover',
                      height: '500px',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="container home_fixed_content">
                      <div className="row">
                        <div className="home-content-home6-style">
                          <div className="home_content">
                            <h2 className="banner-title text-thm">
                              {slide.title}
                            </h2>
                            <h3 className="banner_top_title text-thm d-flex align-items-baseline">
                              <p className="text-white d-inline-block ms-2 fw-normal fs-4">
                                {slide.subtitle}
                              </p>
                            </h3>
                            <Link
                              href={slide.ctaLink}
                              className="btn banner-btn"
                            >
                              {slide.cta}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* start navigation  */}
              <div className="carousel-btn-block banner-carousel-btn">
                <span className="carousel-btn left-btn">
                  <i className="flaticon-left-arrow left" />
                </span>
                <span className="carousel-btn right-btn">
                  <i className="flaticon-right-arrow right" />
                </span>
              </div>
              {/* End navigation */}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
