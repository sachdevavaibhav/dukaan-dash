import Header from "./components/header/Header"
import Sidebar from "./components/sidebar/Sidebar"

function App() {

  return (
    <div className="flex items-start">
      <Sidebar />
      <Header />
    </div>
  )
}

export default App
