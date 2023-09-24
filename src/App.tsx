import { useEffect, useState } from "react";
import "./App.css";
import ky from "ky";
import { useErrorBoundary } from "react-error-boundary";

type Post = {
  id: number;
  title: string;
  author: string;
};

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    ky("http://localhost:3001/posts", {
      // If this call takes more than this timeout, throw an error.
      timeout: 1500,
    })
      .then((res) => res.json())
      .then((data) => setPosts(data as Post[]))
      .catch((err) => showBoundary(err));
  }, [showBoundary]);

  return (
    <>
      <h1>Playwright Timeout Demo</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.author}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
