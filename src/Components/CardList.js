import React, { useEffect, useState } from 'react'
import Card from './Card'
import Styles from './CardList.module.css'


const CardList = () => {

const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9090/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setdata(data);
      })
      .catch();
  }, []);


  return (
    <div className={Styles.container}>
        {
            data.map(item=>{
                return <Card key={item.id} data={item}/>
            })
        }
    </div>
  )
}

export default CardList