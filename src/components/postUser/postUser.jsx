import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";
import Image from "next/image";

// const getData = async(userId) =>{
// const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
// if(!res.ok){
//   throw new Error("Something went wrong !");
// }
// return res.json()
// }
const PostUser = async({userId}) => {
  const user = await getUser(userId);
  console.log("userdata",user);
  return (
    <div className={styles.container}>
      <Image height={50} width={50} className={styles.avatar} src={user.img ? user.img : "/noavatar.png"} alt="profile pic" />
      <div className={styles.texts}>
        <span className={styles.title}>{user.username}</span>
        <span className={styles.username}>{user.email}</span>
      </div>
    </div>
  )
}

export default PostUser