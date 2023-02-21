import React from 'react'
import Amount from './Amount'
import Styles from './Card.module.css'
const Card = (props) => {
  return (
    <div className={Styles.card}>
        <img className={Styles.cardimage} alt="" src={props.data.indexImageUrl}/>
        <p className={Styles.cardname}>{props.data.name}</p>
        <Amount amount={props.data.price}/>


    </div>
  )
}

export default Card