import { react } from "react";
import BookTabs from "./Components/BookTabs";

import DefaultLayout from "./Layouts/DefaultLayouts";

function App() {
  return (
    <>
      <DefaultLayout />
      <section className="section ">
        <main className="row justify-content-center p-3 align-items-center">
          <div className="col-sm-6 p-2 ">
            <h1 className="  travel ">Travel to new destinations with us.</h1>
            <h4>Explore the world together</h4>
            <button className="btn btn-outline-info mt-5 ">Book Now</button>
          </div>
          <div className="col-sm-4 mt-5 py-5 ">
            <img src="../airplane-flight.webp" alt="" className="planeImg " />
          </div>
        </main>
        <BookTabs />
      </section>
    </>
  );
}

export default App;
