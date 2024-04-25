"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import styles from "./links.module.css"
import NavLink from './navLink/navLink';
import Image from 'next/image';
import { handleLogOut } from '@/lib/handlereq';
const links = [
   
    {
        title : "Job Listings",
        path  : "/joblistings",
    },
   
];


const Links = ({session}) => {
    const [open , setOpen] = useState(false);
    const isAdmin = true;
  return (
    <div className={styles.container}>
    <div className={styles.links}>
       { links.map((link=>(
        <NavLink item={link} key={link.title}/>
       )))}{
        session?.user ? (
            <>
           { session.user?.isAdmin && (
                 <NavLink item = {{title : "Add Listing" , path : "/admin"}}/>
            )}
            <form action={handleLogOut}>
                 <button className={styles.logout}>Logout</button>
            </form>
            
            </>
            
        ) : (
            <NavLink item = {{title : "Login" , path : "/login"}}/>
        )}
    </div>
    <Image src="/menu.png" alt='' width={30} height={30} onClick={()=>setOpen((prev)=>!prev)} className={styles.menuButton}/>
       {
        open && (<div className={styles.mobileLinks}>
            {
                links.map((link)=>(
                    <NavLink item={link} key={link.title}/>
                ))}
        </div>
       )}
    </div>
  )
}

export default Links