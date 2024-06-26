import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

import { Login } from "@/pages/Login"
import { ArtDisplay } from "./components/ArtDisplay"

function App() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 font-poppins">
      <div className="bg-erieblack text-white">
        <Login />
      </div>

      <div className="hidden lg:block bg-black">
        <ArtDisplay />
      </div>



    </div>
  )
}

export default App
