// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { FormDataProvider } from './Context/FormDataContext';
import HomePage from './Pages/HomePage';
import Form from './components/forms/TicketForm';
import TicketTable from './components/TicketTable/TicketTable';

function App() {
  // const [count, setCount] = useState(0)

  return (
  <FormDataProvider>
    <HomePage />
    <Form />
    <TicketTable />

  </FormDataProvider>
  )
}

export default App
