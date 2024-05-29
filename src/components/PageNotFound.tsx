import { Link } from "react-router-dom"

function PageNotFound() {
  return (
    <div>
        <h1>404 PageNotFound</h1>
        <Link to="/">home</Link>
    </div>
  )
}

export default PageNotFound