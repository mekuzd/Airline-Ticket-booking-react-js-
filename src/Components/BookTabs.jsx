import { useState } from "react";
import { FaPlane } from "react-icons/fa";

const BookTabs = () => {
  const [toggle, settoggle] = useState(0);

  const handleTab = (id) => {
    settoggle(id);
  };
  return (
    <main className="booktabs shadow ">
      <div className="d-sm-flex justify-content-between tab-container  ">
        <button
          className={` ${toggle == 0 ? "activeTab" : "tabBtn"}`}
          onClick={() => handleTab(0)}
        >
          <span className="mx-2">
            <FaPlane />
          </span>
          Book a flight
        </button>
        <button
          className={` ${toggle == 1 ? "activeTab" : "tabBtn"}`}
          onClick={() => handleTab(1)}
        >
          Manage my booking
        </button>
        <button
          className={` ${toggle == 2 ? "activeTab" : "tabBtn"}`}
          onClick={() => handleTab(2)}
        >
          Check in Online
        </button>
        <button
          className={` ${toggle == 3 ? "activeTab" : "tabBtn"}`}
          onClick={() => handleTab(3)}
        >
          Flight Status
        </button>
      </div>

      <div className="tabcontent">
        <h4 className="ms-2">flights</h4>

        <form action="" className="form-control border-0 w-100">
          <div className="d-flex flex-wrap  ">
            <div className="m-2">
              <label htmlFor="from">From</label> <br />
              <input className="form-control" type="text" id="from" />
            </div>
            <div className="m-2">
              <label htmlFor="to">To</label> <br />
              <input className="form-control" type="text" id="to" />
            </div>

            <div className="m-2">
              <label htmlFor="to">depart </label> <br />
              <input className="form-control" type="date" id="departure" />
            </div>
            <div className="m-2">
              <label htmlFor="to">return</label> <br />
              <input className="form-control" type="date" id="return" />
            </div>

            <select name="" id="" className="mt-4">
              <option value="return">return</option>
              <option value="one-way">one-way</option>
              <option value="Multi-city">Multi-city</option>
            </select>

            <select name="" id="" className="m-3">
              <option value="1 adult">1 adult</option>
              <option value="2 adult (12+years)">2 adult (12+years)</option>
              <option value="3 adult (12+years)">3 adult (12+years)</option>
              <option value="4 adult (12+years)">4 adult (12+years)</option>
              <option value="5 adult (12+years)">5 adult (12+years)</option>
              <option value="6 adult (12+years)">6 adult (12+years)</option>
            </select>

            <select name="" id="" className="m-3 ">
              <option value="0 child">0 child</option>
              <option value="1 child">1 child</option>
              <option value="2 child">2 child</option>
              <option value="3 child">3 child</option>
              <option value="4 child">4 child</option>
              <option value="5 child">5 child</option>
            </select>

            <select name="" id="" className="m-3">
              <option value="0 infant">0 infant</option>
              <option value="1 infant">1 infant</option>
              <option value="2 infant">2 infant</option>
              <option value="3 infant">3 infant</option>
            </select>
          </div>
        </form>
      </div>
    </main>
  );
};
export default BookTabs;
