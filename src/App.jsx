import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"

function App() {

  return (
    <div className="flex items-start">
      <Sidebar />
      <Navbar />
    </div>
  )
}

export default App
