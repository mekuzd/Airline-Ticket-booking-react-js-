const Bookflight = ({ toggle }) => {
  return (
    <div className={` ${toggle == 0 ? "activetabcontent" : "tabcontent"}`}>
      <h4 className="ms-3">flights</h4>
      <form action="" className="form-control border-0 w-100">
        <div className="d-flex flex-wrap gap-3  align-items-center">
          <div>
            <label htmlFor="from">From</label> <br />
            <input className="form-control" type="text" id="from" />
          </div>
          <div>
            <label htmlFor="to">To</label> <br />
            <input className="form-control" type="text" id="to" />
          </div>

          <div>
            <label htmlFor="departure">depart </label> <br />
            <input className="form-control" type="date" id="departure" />
          </div>
          <div className="">
            <label htmlFor="return">return</label> <br />
            <input className="form-control" type="date" id="return" />
          </div>

          <div className="mt-3">
            <select name="" id="" className=" border">
              <option value="return">return</option>
              <option value="one-way">one-way</option>
              <option value="Multi-city">Multi-city</option>
            </select>
          </div>

          <div className="mt-3">
            <select name="" id="" className=" border">
              <option value="1 adult">1 adult</option>
              <option value="2 adult (12+years)">2 adult (12+years)</option>
              <option value="3 adult (12+years)">3 adult (12+years)</option>
              <option value="4 adult (12+years)">4 adult (12+years)</option>
              <option value="5 adult (12+years)">5 adult (12+years)</option>
              <option value="6 adult (12+years)">6 adult (12+years)</option>
            </select>
          </div>

          <div>
            <select name="" id="" className=" border ">
              <option value="0 child">0 child</option>
              <option value="1 child">1 child</option>
              <option value="2 child">2 child</option>
              <option value="3 child">3 child</option>
              <option value="4 child">4 child</option>
              <option value="5 child">5 child</option>
            </select>
          </div>

          <div>
            <select name="" id="" className=" border">
              <option value="0 infant">0 infant</option>
              <option value="1 infant">1 infant</option>
              <option value="2 infant">2 infant</option>
              <option value="3 infant">3 infant</option>
            </select>
          </div>
          <div>
            <button className="tabcontentBtn">Show flight</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Bookflight;
