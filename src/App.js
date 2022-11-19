import './App.scss';
import Sidebar from './components/sidebar/sidebar.component';
import ProcessPage from './pages/process.page';

import { useState } from 'react'

const App = () => {

  const [page, setPage] = useState('software_development')
  return (
    <div className="App">
      <Sidebar setPage={setPage} page={page} />
      <ProcessPage page={page}/>
    </div>
  );
}

export default App;
