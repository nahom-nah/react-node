import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Login from './Login'
import Register from './Register'  
import Todos from './Todos'
import './App.css'
 

 
function App() {
  return (
    <Router>
       
      <main className='container content'>
        <Routes> 
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} /> 
          <Route path='/todos' element={<Todos />} /> 
        </Routes>
      </main>
    </Router>
  )
}
export default App