import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
function App() {

 
  return (
    <>
    <Navbar/>
    <div className='flex '>
      
    <Sidebar/>
    <Main/>
    </div>
    </>
  )
}

export default App

