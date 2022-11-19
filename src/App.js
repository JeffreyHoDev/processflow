import './App.scss';
import Sidebar from './components/sidebar/sidebar.component';
import SoftwareProcessPage from './pages/softwareprocess.page';

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <SoftwareProcessPage />
    </div>
  );
}

export default App;
