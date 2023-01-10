import { react } from "react";
import BookTabs from "./Components/BookTabs";
import GreatFares from "./Components/GreatFares";

import DefaultLayout from "./Layouts/DefaultLayouts";

function App() {
  return (
    <>
      <DefaultLayout>
        <section>
          <main className="d-flex  justify-content-center align-items-center HomeTop">
            <div>
              <h1 className="px-4 text-center my-4 fw-bold Explore">
                Travel to new destinations with us.
              </h1>
              <h3 className="text-center Explore my-3  fw-bold">
                Explore the world together
              </h3>
              <div className="text-center">
                <button className="bookNowBtn border my-5">Book Now</button>
              </div>
            </div>
          </main>
          <BookTabs />
          <GreatFares />
          {/* backgroundImage session  */}
          <article className="section row my-4 justify-content-center ">
            <section className="col-sm-6"></section>

            <section className="col-sm-6 p-1 ">
              <div>
                <h3 className="text-light">Never miss an offer</h3>
                <p className="text-light">
                  Subscribe and be the first to receive our exclusive offers.
                </p>
              </div>
              <div>
                <form action="">
                  <div>
                    <label htmlFor="Email" className="text-light ">
                      Email Address
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      className="homeInp border form-control"
                      id="Email"
                    />
                  </div>{" "}
                  <div>
                    <label htmlFor="city" className="text-light">
                      Preferred city of departure
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      className="homeInp form-control border"
                      id="city"
                    />
                  </div>{" "}
                  <div>
                    <input type="checkbox" id="checkbox" className="my-2" />
                    <label htmlFor="checkbox" className="fs-6  text-light">
                      I would like to get offers and news from MekusAirline i
                      have read and understood the privacy policy
                    </label>
                  </div>
                  <button className="homebtn border mt-3">Subscribe</button>
                </form>
              </div>
            </section>
          </article>
        </section>
      </DefaultLayout>
    </>
  );
}

export default App;
