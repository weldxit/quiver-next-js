'use client'
import React, { useState, useEffect } from "react";
import NewsCard from "@/components/Newscard/Newscard";
import Link from "next/link";
import Image from "next/image";
import styles from "./latest.module.css";
import Norecord from "@/components/NoRecord/Norecord";



export default  function SingleCategory({ params, searchParams}) {
  const batchsize = 9
  const [posts, setPost] = useState([])
  const [pages, setPages] = useState([])
  const [batch , setBatch] = useState([])
  const [prev, setPrev] = useState(0)
  const [next, setNext] = useState(9)
  const [iteration, setiteration] = useState(0)
  const [current, setCurrent] = useState(1)
  const getnewsLatest = async () => {
    // console.log(catid,page);
    try {
      const result = await fetch(`http://localhost:3001/todays_news_web`, {cache:"no-store"});
      if (!result.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await result.json()
      // console.log(data,'kk ')
      return data;
    } catch (error) {
      // Handle error, for example, return an empty array
      console.error("Error fetching data:", error);
      return [];
    }
  };
useEffect(()=>{
  async function fetCh(){
    const data = await getnewsLatest();
    // console.log(data?.pages)
    const total = data?.posts?.length
    // console.log(typeof(total))
    const pages = Math.ceil(total / batchsize)
    // console.log(pages)
    setiteration(pages)
    setBatch(data?.posts?.slice(0,9))
    setPost(data?.posts)
    setPages(data?.pages)
  }



  fetCh()
},[])
const clickPrev = async () => {
  if (current > 1) {
    const newNext = prev;
    const newPrev = prev - batchsize;
    const newArray = posts.slice(newPrev, newNext);

    setBatch([]);
    setBatch(newArray);
    setCurrent(current - 1);
    setPrev(newPrev);
    setNext(newNext);
  }
};

const clickNext = async()=>{
  setPrev(next)
  // setNext(next+9)
  if(current<=iteration){
    setBatch([])
    console.log('emptied', next, next+9)
    const newArray = posts.slice(next,next+9);
   
    setBatch(newArray);
    console.log('refill')
    console.log(newArray)
    setCurrent(current=>current+1)
    setPrev(next)
    setNext(next+9)
  }
  
}
console.log(batch)
  if (!posts || posts.length === 0) {
    return (
      <>
        {/* <div className={styles["not-found"]}>no record found</div> */}
        <Norecord/>
      </>
    );
  }

  return (
    <div className={styles["news-container"]}>
        <div className={styles['next']}>
    { current == 1 ? <Image src={'/assets/pagignation/disabled-lessthan.png'} alt="prev" width={50} height={80} className={styles['image']}/> : <button onClick={clickPrev} style={{cursor:'pointer', backgroundColor:'transparent' , border:0}}><Image src={'/assets/pagignation/active-lessthan.png'} alt="prev" width={50} height={80}/></button>}

    </div>
    <div className={styles['grid-container']}>
      <span className={styles['route']}>{params.latestnews}</span>
      <div className={styles["center"]}>
        {batch.map((news) => (
          <Link key={news.id} href={{ pathname: `/article/${news.id}` }}>
            <NewsCard
              id={news.id}
              title={news.title}
              content={news.content}
              imageLink={news.image}
              postedAt={news.posted_at}
            />
          </Link>
        ))}
     
      </div>
      </div>
    <div className={styles['prev']}>

     { current==iteration ? <Image src={'/assets/pagignation/disabled-greaterthan.png'} alt="prev" width={50} height={80}/> : <button onClick={clickNext} style={{cursor:'pointer', backgroundColor:'transparent' , border:0}}><Image src={'/assets/pagignation/active-greaterthan.png'} alt="next" width={50} height={80}/></button>}
    </div>
    </div>
  );
}
