import './App.css';
import { BasicTable } from './components/BasicTable';
import { StickyTable } from './components/StickyTable'
import { SortingTable } from './components/SortingTable';
import { FilteringTable } from './components/FilteringTable';
import { PaginationTable } from './components/PaginationTable';
import { ColumnOrderTable } from './components/ColumnOrderTable';
import { RowSelectionTable } from './components/RowSelectionTable';
import { ColumnHidingTable } from './components/ColumnHidingTable'
import { FilteringColumnTable } from './components/FilteringColumnTable'

function App() {
  return (
    <div className="App">
      <FilteringTable />
    </div>
  );
}

export default App;