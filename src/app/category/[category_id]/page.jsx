import React from "react";
import NewsCard from "@/components/Newscard/Newscard";
import Link from "next/link";
import Image from "next/image";
import styles from "./[category_id].module.css";
import Norecord from "@/components/NoRecord/Norecord";

const getnewsBycategory = async (catid,page) => {

  try {
    const result = await fetch(`http://localhost:3001/category-web/${catid}?page=${page}`, {cache:"no-store"});
    if (!result.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await result.json()
    return data;
  } catch (error) {
    // Handle error, for example, return an empty array
    console.error("Error fetching data:", error);
    return [];
  }
};

// ... (imports and other code)

export default async function SingleCategory({ searchParams }) {

  let id = parseInt(searchParams.id, 10);
  let page = parseInt(searchParams.page, 10);

  id = !id || id < 1 ? 1 : id;
  page = !page || page < 1 ? 1 : page;
  // const id = 18
  const {posts,pages} = await getnewsBycategory(id,page);
  console.log(pages)
  const prevPage = page - 1 > 0 ? page - 1 : 1;
  const nextPage = page + 1;

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
    { page===1 ? <Image src={'/assets/pagignation/disabled-lessthan.png'} alt="prev" width={50} height={80} className={styles['image']}/> : <Link href={`?id=1&page=${prevPage}`}><Image src={'/assets/pagignation/active-lessthan.png'} alt="prev" width={50} height={80}/></Link>}
     {/* { page=== pages? 'disable' : <Link href={`?id=1&page=${nextPage}`}>next</Link>} */}
    </div>
    <div className={styles['grid-container']}>
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
