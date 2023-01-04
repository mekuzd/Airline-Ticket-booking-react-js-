import DefaultLayout from "../Layouts/DefaultLayouts";

const Signup = () => {
  return (
    <DefaultLayout>
      <main className="row justify-content-center px-1">
        <div className="col-sm-5  " style={{ marginTop: "100px" }}>
          <img src="../airplane-flight.webp" alt="" className="planeImg" />
        </div>
        <div className="col-sm-5 d-flex  " style={{ marginTop: "100px" }}>
          <form
            action=""
            className={` shadow   form-control m-auto p-3`}
            style={{ width: "300px" }}
          >
            {/* First NAme  */}
            <div className="ms-4">
              <label htmlFor="firstname">First Name</label> <br />
              <input
                required
                type="text"
                id="firstname"
                className="form-control"
              />
            </div>
            <br />
            {/* LastName  */}
            <div className="ms-4">
              <label htmlFor="lastname">Last Name</label> <br />
              <input
                required
                type="text"
                id="lastname"
                className="form-control"
              />
            </div>
            <br />
            {/* Email  */}
            <div className="ms-4">
              <label htmlFor="email">Email</label> <br />
              <input required type="text" id="email" className="form-control" />
            </div>{" "}
            <br />
            {/* password  */}
            <div className="ms-4">
              <label htmlFor="password">Password</label> <br />
              <input
                required
                type="password"
                id="password"
                className="form-control"
              />
            </div>{" "}
            <br />
            <div className="text-center">
              <button type="submit" className="p-2 rounded registerbtn">
                Register
              </button>
            </div>
          </form>
        </div>
      </main>
    </DefaultLayout>
  );
};
export default Signup;
