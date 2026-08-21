import Header from "./components/Header"
import Home from "./layouts/Home"
import Footer from "./components/Footer"
function App(){
  return(
    <>
      <section className="coffee-bg">
        <Header/> 
        <Home/>
      </section>
      <Footer/>
    </>
   
  )
}export default App