'use client'
import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link';
import Image from 'next/image';
import Banner from '../Banner/Banner';

const tags = [
  { id: 0, name: "Home", alias: "ସମସ୍ତ" },
  { id: 1, name: "Politics", alias: "ରାଜନୀତି" },
  { id: 2, name: "Business", alias: "ବ୍ୟବସାୟ" },
  { id: 3, name: "Education", alias: "ଶିକ୍ଷା" },
  { id: 4, name: "Farming", alias: "କୃଷି" },
  { id: 5, name: "Health & lifestyle", alias: "ସ୍ୱାସ୍ଥ୍ୟ ଓ ଜୀବନଶୈଳୀ" },
  { id: 6, name: "Sports", alias: "କ୍ରୀଡା" },
  { id: 7, name: "State", alias: "ରାଜ୍ୟ" },
  { id: 8, name: "National", alias: "ଜାତୀୟ" },
  { id: 9, name: "International", alias: "ଆନ୍ତର୍ଜାତୀୟ" },
  {id:10,name:"Shree Jagannath", alias:"Shree Jagannath"},
  {id:11,name:"Ramlala", alias:"jay shree ram"}
  
];

export default function Navbar() {
  return (
    <div className={styles['container']}>
      <div className={styles['banner-image-container']}>
          <Banner />
      </div>
      <div className={styles['updates-scroller-container']}>

      </div>
      <div className={styles['category-route-container']}>
      {
        tags.map((item,i)=>{
          // console.log(item)
          return(
            <Link href={item.id==0 ? `/` :`/category/${item.name.toLocaleLowerCase()}?id=${item.id}`} key={item.id}  className={styles['buttons']}><span className={styles['text']}>{item.name}</span></Link>

          )
        })
      }
      </div>
    
    </div>
  )
}
