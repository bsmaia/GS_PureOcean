import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import DataTable from '../components/Data/DataTable';
import IncidentMap from '../components/Data/IncidentMap';
import styles from '../styles/Home.module.scss';

const Home = () => (
  <div className={styles.container}>
    <Navbar />
    <main className={styles.main}>
      <h1>Welcome to PureOcean</h1>
      <IncidentMap />
      <DataTable />
    </main>
    <Footer />
  </div>
);

export default Home;
