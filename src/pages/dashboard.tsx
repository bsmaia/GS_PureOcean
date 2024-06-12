import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import DataTable from '../components/Data/DataTable';
import IncidentMap from '../components/Data/IncidentMap';

const Dashboard = () => (
  <div>
    <Navbar />
    <main>
      <h1>Dashboard</h1>
      <DataTable />
      <IncidentMap />
    </main>
    <Footer />
  </div>
);

export default Dashboard;
