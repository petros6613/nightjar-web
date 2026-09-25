import { Link } from 'react-router'

export default function NotFound() {
  return (
    <div className="container not-found">
      <h1>Page not found</h1>
      <Link to="/" className="button">
        Back to home
      </Link>
    </div>
  )
}
