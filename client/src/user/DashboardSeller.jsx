import DashboardNav from "../components/DashboardNav";
import ConnectNav from "../components/ConnectNav";
import { Link } from "react-router-dom";

const DashboardSeller = () => {
  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center ">
        <ConnectNav />
      </div>
      <div className="container-fluid p-4">
        <DashboardNav />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <h2>Your Hotels</h2>
          </div>
          <div className="col-md-2">
            <Link className="btn btn-primary" to="/hotels/new">
              + Add New
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSeller;
