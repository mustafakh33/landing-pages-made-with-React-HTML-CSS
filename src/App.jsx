import About from "./components/about/About"
import Header from "./components/header/Header"
import Feature from "./components/feature/Feature"
import Tours from "./components/tours/Tours"
import Book from "./components/book/Book.JSX"
import Stories from "./components/stories/Stories"



const App = () => {
  return (
    <div>
      <Header/>
      <About/>
      <Feature/>
      <Tours/>
      <Stories />
      <Book/>
    </div>
  )
}

export default App
