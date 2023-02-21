import React from 'react'
import styles from './Amount.module.css'
const Amount = (props) => {
  return (
    <div className={styles.cardAmount}>
    <span >:قیمت</span>
    <span className={styles.cardPrice}>{props.amount}</span>
    </div>
  )
}

export default Amount