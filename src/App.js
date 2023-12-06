import "./index.css"
import SideBar from "./components/side_bar/side_bar"
import Books from "./components/books/books"
import News from "./components/news/news"

function App() {
  return (
    <div className='App flex flex-row bg-primary-color'>
      <div>
        <SideBar />
      </div>
      <div>
        <Books />
      </div>
      <div>
        <News />
      </div>
    </div>
  )
}

export default App
