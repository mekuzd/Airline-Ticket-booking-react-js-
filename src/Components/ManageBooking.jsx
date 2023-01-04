const ManageBooking = ({ toggle }) => {
  return (
    <div className={` ${toggle == 1 ? "activetabcontent" : "tabcontent"}`}>
      <form action="" className="form-control border-0 w-100">
        <div className="d-flex flex-wrap align-items-center">
          <div className="m-2">
            <label htmlFor="reference">Booking reference</label> <br />
            <input className="form-control" type="text" id="reference" />
          </div>
          <div className="m-2">
            <label htmlFor="last">LastName</label> <br />
            <input className="form-control" type="text" id="last" />
          </div>
          <div>
            <button className="tabcontentBtn mt-4"> Retrive booking </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ManageBooking;
