import Sidebar from "../../sidebar/Sidebar"
import Singlepost from "../../singlepost/Singlepost"
import "./Single.css"

export default function Single() {
  return (
    <div className="single">
        <Singlepost/>
        <Sidebar/>
      
    </div>
  )
}
