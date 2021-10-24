import logo from './logo.svg';
import './App.css';
import { BasicTable } from './components/BasicTable';
import { SortingTable } from './components/SortingTable';
import { FilteringTable } from './components/FilteringTable';
import { FilteringColumnTable } from './components/FilteringColumnTable'
import { PaginationTable } from './components/PaginationTable';

function App() {
  return (
    <div className="App">
      <PaginationTable />
    </div>
  );
}

export default App;
