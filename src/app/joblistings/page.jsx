import React from 'react'
import styles from "./blog.module.css"
import PostCard from '@/components/postCard/postCard'
import { getPosts } from '@/lib/data';
const  getData = async ()=> {
  const res = await fetch("https://nextjs-blog-app-five-virid.vercel.app/api/blog",{next:{revalidate:3600}});
  if(!res.ok){
    throw new Error("Something went wrong !");
  }
  return res.json()
}
const BlogPage = async() => {
   const posts = await getPosts();
  // const posts = await getData();
  return (
    <>
      <div className={styles.container}>
      {posts.map((post)=>(
        <div className={styles.post} key={post.id}>
        <PostCard post={post} key={post.id}/>
        </div> 
      ))}
        
      </div>   
    </>
  )
}

export default BlogPage