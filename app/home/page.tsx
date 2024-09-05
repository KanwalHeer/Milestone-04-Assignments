import Navbar from "../component/navbar/navbar"
import Footer from "../component/footer/footer"

export default function Home() {
  return (
    <div>
      {/* navbar div */}
      <div>
        <Navbar/>
      </div>

      {/* herro section div */}
      <div>
        <h1>Home page</h1>
      </div>
      
      {/* footer div */}
      <div>
        <Footer/>
      </div>
    </div>
  )
}
