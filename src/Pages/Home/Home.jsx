import React from 'react'
import styles from './Home.module.css'; 
import homeImage from '../../assets/avataaars.svg'
import { FaStar } from "react-icons/fa";



export default function Home() {
  return <>
<div className={styles.homePage}>
<div className={styles.mainHome}>
<img src={homeImage} className=' w-50' alt="home image" /> 
<div className="text-center my-4">
      <h1 >START FRAMEWORK</h1>
      <div className="d-flex justify-content-center align-items-center">
        <hr className="w-25 border border-2 border-white" />
        <FaStar className="mx-3 " />
        <hr className="w-25 border border-2 border-white " />
      </div>
      <p className="text-light">Graphic Artist - Web Designer - Illustrator</p>
    </div>
</div>
</div>
 </>
}
