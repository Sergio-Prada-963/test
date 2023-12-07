import "./index.css"
import SideBar from "./components/side_bar/side_bar"
import Books from "./components/books/books"

function App() {
  return (
    <div className='App flex flex-row bg-primary-color'>
      <div className='w-[16%] flex items-center justify-center w-[100%]'>
        <SideBar />
      </div>
      <div className='bg-white rounded-s-[2rem] w-[100%]' style={{ overflow: "auto" }}>
        <Books />
      </div>
    </div>
  )
}

export default App
