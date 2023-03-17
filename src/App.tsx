import { useState } from 'react'
import { Button } from '@mui/material'
import TableComponent from './components/TableComponent'
import './App.css'
import ExampleUseMemo from './components/ExampleUseMemo';

function App() {
  const [rows, setRows] = useState<number>(0);
  const [columns, setColumns] = useState<number>(0);
  const [headers, setHeaders] = useState<string[]>([]);

  const GenerateTable = () => {
    setHeaders(['Data 1', 'Data 2', 'Data 3']);
    setRows(4);
    setColumns(6);
  }

  return (
    <div className="App">
      <Button variant='contained' className='button_generate' onClick={() => GenerateTable()}>Generar Tabla</Button>
      <TableComponent columns={columns} rows={rows} headers={headers} />

      <ExampleUseMemo />
    </div>
  )
}

export default App
