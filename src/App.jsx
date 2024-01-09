import Payments from "./pages/payments/Payments";
import Sidebar from "./components/sidebar/Sidebar"

function App() {

  return (
    <div className="flex items-start">
      <Sidebar />
      <Payments />
    </div>
  )
}

export default App;
