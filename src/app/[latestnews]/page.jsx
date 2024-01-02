'use client'
import React, { useState, useEffect } from "react";
import NewsCard from "@/components/Newscard/Newscard";
import Link from "next/link";
import Image from "next/image";
import styles from "./latest.module.css";
import Norecord from "@/components/NoRecord/Norecord";



export default  function SingleCategory({ params, searchParams}) {
  const [posts, setPost] = useState([])
  const [pages, setPages] = useState([])
  const getnewsLatest = async () => {
    // console.log(catid,page);
    try {
      const result = await fetch(`http://localhost:3001/todays_news_web`, {cache:"no-store"});
      if (!result.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await result.json()
      console.log(data,'kk ')
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
    console.log(data?.pages)
    setPost(data?.posts)
    setPages(data?.pages)
  }

  fetCh()
},[])

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
    { pages===1 ? <Image src={'/assets/pagignation/disabled-lessthan.png'} alt="prev" width={50} height={80} className={styles['image']}/> : <Link href={`?id=1&page=${prevPage}`}><Image src={'/assets/pagignation/active-lessthan.png'} alt="prev" width={50} height={80}/></Link>}
     {/* { page=== pages? 'disable' : <Link href={`?id=1&page=${nextPage}`}>next</Link>} */}
    </div>
    <div className={styles['grid-container']}>
      <span className={styles['route']}>jjj</span>
      <div className={styles["center"]}>
        {posts.map((news) => (
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
    {/* { page===1 ? 'disable' : <Link href={`?id=1&page=${prevPage}`}>Previous</Link>} */}
     { page=== pages? <Image src={'/assets/pagignation/disabled-greaterthan.png'} alt="prev" width={50} height={80}/> : <Link href={`?id=1&page=${nextPage}`}><Image src={'/assets/pagignation/active-greaterthan.png'} alt="next" width={50} height={80}/></Link>}
    </div>
    </div>
  );
}
