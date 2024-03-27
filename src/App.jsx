
import './App.css'
import CardsList from './components/cardsList/cardsList'
import { Graph } from './components/graphCont'
import Sidebar from './components/sidebar/Sidebar'

function App() {

  return (
    <div className='flex justify-center items-center w-full bg-[#F7ECE1] gap-2 h-screen overflow-x-hidden poppins-extralight'>
      <Sidebar />

      <div className="text-3xl font-bold  flex-1 w-[80%]">
        <Graph />
        <CardsList/>
      </div>
    </div>
  )
}

export default App
