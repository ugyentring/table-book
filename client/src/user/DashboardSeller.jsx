import DashboardNav from "../components/DashboardNav";

const DashboardSeller = () => {
  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center ">
        <h1>Dashboard</h1>
      </div>
      <div className="container-fluid p-4">
        <DashboardNav />
      </div>
      <div className="container">
        <p>
          Show all booking hotel tables user posted and button to add a new one
        </p>
      </div>
    </>
  );
};

export default DashboardSeller;
