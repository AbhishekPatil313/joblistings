import React from 'react'
import styles from "./postCard.module.css"
import Image from 'next/image';
import Link from 'next/link';
const PostCard = ({post}) => {
  console.log(post);
  return (
    <div className={styles.container}>
        <div className={styles.top}>
       
           <div className={styles.detail}>
            <Image
              src={"/noAvatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <span>{post.company}</span>

          </div>
          <span className={styles.date}>Job posted on {post.createdAt.toString().slice(4,16)}</span>

        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}> <span>Job Title - </span> {post.title}</h1>
            Description : <p className={styles.desc}>{post.desc}</p>

            Skills : <p className={styles.desc}>{post.skills}</p>
            <div className={styles.optionContainer}>
                <button className={styles.loginButton}>Apply</button>
                <br></br>
                <br></br>
                <Link href={`/joblistings/${post.slug}`}  className={styles.link}>Read More</Link>
            </div>
        </div>
    </div>
  )
}

export default PostCard;