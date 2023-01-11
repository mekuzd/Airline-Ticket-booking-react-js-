const GreatFares = () => {
  return (
    <section>
      <div className="GreatFares">
        <main className="seattle">
          <img src="../seattle.jpg" alt="" className="w-100" />
          <article className="shadow">
            <h4>Seattle</h4>
            <p> 06 Feb 2023 - 11 Feb 2023</p>
            <p>Economy From</p>
            <h2>NGN 557318</h2>
          </article>
        </main>

        <main className="doha">
          <div className="d-flex justify-content-between gap-2">
            <div className=" class">
              <img src="../doha.jpg" alt="" />
              <article className="shadow">
                <h4>Doha</h4>
                <p> 13 Feb 2023 - 18 Feb 2023</p>
                <p>Economy From</p>
                <h2>NGN 498318</h2>
              </article>
            </div>
            <div className=" class">
              <img src="../Milan.jpg" alt="" />
              <article className="shadow">
                <h4>Milan</h4>
                <p> 20 Feb 2023 - 25 Feb 2023</p>
                <p>Economy From</p>
                <h2>NGN 417318</h2>
              </article>
            </div>
          </div>

          <div className="d-flex  gap-2 justify-content-between">
            <div className=" class">
              <img src="../washington.jpg" alt="" />
              <article className="shadow">
                <h4>Washington</h4>
                <p> 23 Feb 2023 - 03 Mar 2023</p>
                <p>Economy From</p>
                <h2>NGN 656318</h2>
              </article>
            </div>
            <div className=" class">
              <img src="../losAngeles.jpg" alt="" />
              <article className="shadow">
                <h4>Los Angeles</h4>
                <p> 13 Feb 2023 - 18 Feb 2023</p>
                <p>Economy From</p>
                <h2>NGN 498318</h2>
              </article>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};
export default GreatFares;
