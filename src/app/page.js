import styles from "./page.module.css";
import Link from "next/link";
import NewsCard from "@/components/Newscard/Newscard";
import CatCard from "@/components/Catcard/Catcard";
import UpdatedCard from "@/components/Updatednews/UpdatedCard";
const fetchArticle = async () => {
  // console.log(id, "here");
  try {
    const result = await fetch(`http://localhost:3001/todays_news/`, {
      next: { revalidate: 120 },
      cache: "no-store",
    });
    if (!result.ok) {
      throw new Error("Failed to fetch data");
    }
    return await result.json();
  } catch (error) {
    // Handle error, for example, return an empty array
    console.error("Error fetching data:", error);
    return [];
  }
};

export default async function Home() {
  const todaysnews = await fetchArticle();
  console.log(todaysnews);
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.first_container}>
          <div className={styles["cat-head-container1"]}>
            <span className={styles["category-label1"]}>Last Updates..</span>
            <Link href={`/latestnews`} className={styles["see-all-label1"]}>
              <span>See All</span>
            </Link>
          </div>
          <div className={styles["first"]}>
            <div className={styles.left}>
              {todaysnews.slice(0, 4).map((news, i) => (
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
            <div className={styles.right}>
              <span className={styles['read-more']}>Scroll here</span>

              {todaysnews.slice(0,5).map((news, i) => (
                <Link key={news.id} href={{ pathname: `/article/${news.id}` }}>
                  <UpdatedCard
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
        </div>
        <div className={styles.second}>
          <div className={styles["cat-head-container"]}>
            <span className={styles["category-label"]}>Most readings..</span>
            <Link href="" className={styles["see-all-label"]}>
              <span>See All</span>
            </Link>
          </div>
          <div className={styles["cat-cards-container"]}>
            {/* Display 6 news card components fetched from the API */}
            {todaysnews.slice(0, 6).map((news, i) => (
              <Link key={news.id} href={{ pathname: `/article/${news.id}` }}>
                <CatCard
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
        <div className={styles.third}>
          <div className={styles["cat-head-container"]}>
            <span className={styles["category-label"]}>Special Stories..</span>
            <Link href="" className={styles["see-all-label"]}>
              <span>See All</span>
            </Link>
          </div>
          <div className={styles["cat-cards-container"]}>
            {/* Display 6 news card components fetched from the API */}
            {todaysnews.slice(0, 6).map((news, i) => (
              <Link key={news.id} href={{ pathname: `/article/${news.id}` }}>
                <CatCard
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
      </div>
    </main>
  );
}
