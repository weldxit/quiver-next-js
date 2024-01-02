'use client'
import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link';
import Image from 'next/image';
import NewsTicker from '../NewsTicker/NewsTicker';
import Banner from '../Banner/Banner';
import { useEffect, useState} from 'react';
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

const latestNews = [
  'Breaking news: Something happened!',
  'New feature updates are live now!',
  'Stay tuned for our upcoming event!',
];

export default function Navbar() {
  const [scrollnews, setScrollnews] = useState([])
  const [activeLink, setActiveLink] = useState(0); 

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const news = await fetch('https://server-for-quiver.onrender.com/todays_news');
        const res = await news.json();
        // Extract titles from the result
        const extractedTitles = res.map((item) => item.title);
        setScrollnews(extractedTitles);
      } catch (error) {
        console.error('Error fetching scroll news:', error);
      }
    };

    fetchScroll();
  }, []);
  return (
    <div className={styles['container']}>
      <div className={styles['banner-image-container']}>
          <Banner />
      </div>
      <div className={styles['updates-scroller-container']}>
      <NewsTicker news={scrollnews} />
      </div>
     <div className={styles['category-route-container']}>
      <div className={styles['button-container']}>
      {tags.map((item, i) => {
        return (
          <Link
            href={item.id === 0 ? `/` : `/category/${item.name.toLocaleLowerCase()}?id=${item.id}`}
            key={item.id}
            className={`${styles['buttons']} ${activeLink === item.id ? styles['active'] : ''} ${
              i === tags.length - 1 ? styles['blink'] : '' // Apply blink class to the last link
            }`}
            onClick={()=>{}}
            onMouseEnter={() => setActiveLink(item.id)} // Set active link on hover
            onMouseLeave={() => setActiveLink(0)} // Reset active link on mouse leave
          >
            <span className={styles['text']}>{item.name}</span>
          </Link>
        );
      })}
      </div>
    </div>
    
    </div>
  )
}
