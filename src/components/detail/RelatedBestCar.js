import ReleatedCar from '@/src/components/detail/ReleatedCar';
import Link from 'next/link';

export default function RelatedBestCar() {
  return (
    <section className="car-for-rent bb1">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="main-title text-center text-md-start mb10-520">
              <h2 className="title">Releated Best Car</h2>
            </div>
          </div>
          {/* End .col-sm-6 */}

          <div className="col-sm-6">
            <div className="text-center text-md-end mb30-520">
              <Link href="/page-list-v1" className="more_listing">
                Show All Cars
                <span className="icon">
                  <span className="fas fa-plus" />
                </span>
              </Link>
            </div>
          </div>
          {/* End .col-sm-6 */}
        </div>
        {/* End .row */}

        <div className="col-lg-12">
          <div
            className="home1_popular_listing home3_style"
            data-aos-delay="100"
          >
            <div className="listing_item_4grid_slider nav_none">
              <ReleatedCar />
            </div>
          </div>
        </div>
        {/* End .col-lg-12 */}
      </div>
      {/* End .container */}
    </section>
  );
}
