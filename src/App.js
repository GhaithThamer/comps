import { NavigationProvider } from "./context/NavigationContext"
import DropdownPage from "./pages/DropdownPage"
import AccordionPage from "./pages/AccordionPage"
import ButtonPage from "./pages/ButtonPage"
import SideBar from "./components/SideBar";
import Route from "./components/Route";
import ModalPage from "./pages/ModalPage";




function App() {


  return (
    <NavigationProvider>
      <div className="flex bg-blue-200">
      <SideBar />
      <Route path="/dropdown"><DropdownPage/></Route>
      <Route path="/accordion"><AccordionPage/></Route>
      <Route path="/button"><ButtonPage/></Route>
      <Route path="/modal"><ModalPage/></Route>
      </div>
      
    </NavigationProvider>


  )
}

export default App;