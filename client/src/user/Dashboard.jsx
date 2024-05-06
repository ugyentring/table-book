import DashboardNav from "../components/DashboardNav";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center ">
        <h1>Dashboard</h1>
      </div>
      <div className="container-fluid p-4">
        <DashboardNav />
      </div>
      <div className="container">
        <p>Show all booking and button to browse hotels</p>
      </div>
    </>
  );
};

export default Dashboard;
