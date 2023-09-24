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
    const url = "http://localhost:3001/posts";
    ky(url, {
      // If this call takes longer than this timeout, throw an error.
      timeout: 1000,
    })
      .then((res) => res.json())
      .then((data) => setPosts(data as Post[]))
      .catch((err) => {
        console.error(`Request for ${url} timed out.`);
        showBoundary(err);
      });
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
