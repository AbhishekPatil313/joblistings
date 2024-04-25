import styles from "./loginform.module.css";
import React from 'react'
import LoginForm from '@/components/loginForm/loginForm';

const LoginPage = async() => {


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
         {/* <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form> */}
       <LoginForm/>
       </div>
    </div>
  )
}

export default LoginPage