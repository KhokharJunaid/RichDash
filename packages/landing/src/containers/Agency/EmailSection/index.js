import React from 'react'
import styles from "../EmailSection/EmailSection.module.css"
function EmailSection() {
  return (
    <div className={styles.main_parent}>
        <h2 className={styles.heading_main}>
            Get your blood tests delivered at let home collect sample from the victory of the managements that supplies the best design system guidlines ever.
        </h2>
        <div className={styles.child_parent}>
            <input type={'text'} placeholder='Enter Email Address' className={styles.input_email}/>
            <button type='submit' className={styles.subscribe_btn} >Subscribe</button>
        </div>
    </div>
  )
}

export default EmailSection