
import Registration from './Pages/Registration'
import Dashboard from './Pages/Dashboard'
// import Navbar from './Components/Navbar/Navbar'
import AppRoutes from './Route/AppRoutes';


function App() {

  return (
    <>
      {/* <Registration /> */}
      <Dashboard/>
      {/* <Navbar/> */}     
        <div className="ml-[310px] p-6 flex-1">
          <AppRoutes /> 
        </div>

    </>
  )
}

export default App
