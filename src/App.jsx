import Payments from "./pages/payments/Payments";
import Sidebar from "./components/sidebar/Sidebar"

function App() {

  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    return (
      <div className="flex w-full h-screen justify-center items-center">
        <h1>Please switch to desktop view to use this application</h1>
      </div>
    )
  }

  return (
    <div className="flex items-start">
      <Sidebar />
      <Payments />
    </div>
  )
}

export default App;
