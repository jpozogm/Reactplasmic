import { useState, useEffect } from "react"
import ReactDOM from "react-dom/client"
import { PlasmicRootProvider, PlasmicComponent } from "@plasmicapp/loader-react"
import { PLASMIC } from "./plasmic-init"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Components from './Components/Components'

const CatchAllPage = () => {
  const [loading, setLoading] = useState(true)
  const [pageData, setPageData] = useState(null)

  useEffect(() => {
      async function load() {
          const pageData = await PLASMIC.maybeFetchComponentData(
              location.pathname
          )

          console.log("location", location)
          console.log("location pathname", location?.pathname)
          console.log("pageData", pageData)
          
          setPageData(pageData)
          setLoading(false)
      }
      load()
  }, [])


  if (loading) {
      return <div>Loading...</div>
  }
  if (!pageData) {
      return <div>Not found</div>
  }


  return <PlasmicComponent component={location.pathname} />
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <PlasmicRootProvider loader={PLASMIC}>
        <Router>
            <Routes>
                <Route path="/" element={<CatchAllPage />} />
                <Route path="Components" element={<Components />} />
            </Routes>
        </Router>
    </PlasmicRootProvider>
)