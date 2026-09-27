import { useEffect, useState } from "react"
import axios from "axios"



function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/posts/`)
      .then(response => setPosts(response.data))
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <h1>BookShare</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.content}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  )
}

export default App
