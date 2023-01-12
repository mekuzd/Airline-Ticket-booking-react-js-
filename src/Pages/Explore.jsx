import DefaultLayout from "../Layouts/DefaultLayouts";

const Explore = () => {
  return (
    <DefaultLayout>
      <div className="my-4 p-4">
        <p className="text-center">FLYING WITH MEKUZ-AIRLINE</p>
        <h2 className="text-center">Make it an incredible journey</h2>
        <p className="text-center">
          Explore the Emirates experience and plan an unforgettable trip beyond
          your flight.
        </p>
      </div>

      <section>
        <div className="p-3 DubaiExplore ">
          <main className=" DubaiExp animate__animated animate__backInDown ">
            <div className=" shadow-lg dubaiAvi p-4">
              <div>
                <p className="mt-4">DUBAI EXPERIENCE</p>
                <h2>Create Your Dubai Experience</h2>
                <div className="underline"></div>
                <p className="my-3">learn more</p>
              </div>
            </div>
          </main>

          {/* firstclass row  */}
          <main className="py-3 FirstClassrow animate__animated animate__heartBeat">
            <div className=" p-3 shadow classes  dubaiAvi2">
              <div>
                <p>cabin features</p>
                <h6>First class</h6>
                <div className="underline"></div>
                <p className="my-2">learn more</p>
              </div>
            </div>

            <div className=" p-3 my-3 shadow classes  dubaiAvi3">
              <div>
                <p>cabin features</p>
                <h6>Buisness class</h6>
                <div className="underline"></div>
                <p className="my-2">learn more</p>
              </div>
            </div>

            <div className=" p-3 shadow classes  dubaiAvi4">
              <div>
                <p>cabin features</p>
                <h6>Premium-Economy</h6>
                <div className="underline"></div>

                <p className="my-2">learn more</p>
              </div>
            </div>
            <div className=" p-3 my-3 shadow classes  dubaiAvi5">
              {" "}
              <div>
                <p>cabin features</p>
                <h6>Economy class</h6>
                <div className="underline"></div>

                <p className="my-2">learn more</p>
              </div>
            </div>
          </main>
        </div>
      </section>
    </DefaultLayout>
  );
};
export default Explore;
