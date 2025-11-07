import { useEffect, useState } from 'react';
import { getPosts } from '../utils/api';

export default function useExample() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return posts;
}