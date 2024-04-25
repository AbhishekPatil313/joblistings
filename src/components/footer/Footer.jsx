import Link from 'next/link'
import React from 'react'
import styles from "./footer.module.css"
const Footer = () => {
  return (
    <div className={styles.container}>
        <Link href="https://github.com/AbhishekPatil313" >Built by Abhishek</Link>
        <div className={styles.text}>
          <br></br>
        Creative thoughts agency &copy; All rights reserved.
        </div>
        
    </div>
  )
}

export default Footer