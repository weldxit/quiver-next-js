// 'use client'
import Image from "next/image";
import styles from "./[slug].module.css";
import Link from "next/link";
import ConfettiComponent from "@/components/Confetti/Confetti";
import RelatedArticle from "@/components/RelatedNewsCard/RelatedArticle";
const fetchArticle = async (id) => {
  // console.log(id, "here");
  try {
    const result = await fetch(`http://localhost:3001/todays_news/${id}`, {
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
const fetchRelated = async () => {
  try {
    const result = await fetch(`http://localhost:3001/maymisseddata`, {
      next: { revalidate: 60 },
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
function formatDate(timestamp) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "Jun",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(timestamp);

  // Format date as dd-MMM-yyyy (e.g., 12-Dec-2023)
  const day = String(date.getDate()).padStart(2, "0");
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  const formattedDate = `${day} ${month} ${year}`;

  // Format time as hr:minute am/pm
  const hour = date.getHours();
  const minute = String(date.getMinutes()).padStart(2, "0");
  const ampm = hour >= 12 ? "pm" : "am";
  const formattedHour = hour % 12 === 0 ? 12 : hour % 12;

  const formattedTime = `${formattedHour}:${minute} ${ampm}`;

  return { formattedDate, formattedTime };
}
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
];

function findCategory(id) {
  const foundItem = tags.find((item) => item.id === id);

  if (foundItem) {
    // console.log(foundItem.name); // Log the category name if found
    return foundItem.name; // Return the category name
  }

  return null; // Return null if category with the ID is not found
}
export default async function Snglearticle({ params }) {
  const { slug } = params;
  const article = await fetchArticle(slug);
  const relatedNews = await fetchRelated();
  console.log(article, "rti");
  const { formattedDate, formattedTime } = formatDate(article[0].posted_at);
  const categoty = findCategory(article[0].category_id);
  console.log(categoty);
  const textWithNewLines = article[0].content; // Assuming article[0].content holds the provided text

  const splitText = textWithNewLines.split("\n");

  const contentWithBreaks = splitText.map((line, index) => (
    <p key={index}>{line}</p>
  ));
  let index = 0;
  return (
    <div className={styles["main"]}>
      <div className={styles["container"]}>
        <div className={styles["article-container"]}>
          <div className={styles["cat-time"]}>
            <span className={styles["category"]}>/{categoty}</span>
            <span className={styles["timestamp"]}>
              {formattedDate} | {formattedTime}
            </span>
          </div>

          <h1 className={styles["article-title"]}>{article[0].title}</h1>
          <Image
            src={article[0].image}
            alt={"image"}
            className={styles["article-image"]}
            width={200}
            height={200}
          />

          <div className={styles["article-content"]}>
            <p>{contentWithBreaks}</p>
          </div>
        </div>
        <div className={styles["related-container"]}>
          <span className={styles["scroll-down"]}>Scroll down for more..</span>

          {relatedNews.map((news, i) => {
            index = index + i;
            return (
              <Link key={news.id} href={{ pathname: `/article/${news.id}` }}>
                <RelatedArticle
                  id={news.id}
                  title={news.title}
                  content={news.content}
                  imageLink={news.image}
                  postedAt={news.posted_at}
                />
              </Link>
            );
          })}
        </div>
        <div className={styles["next-prev"]}>
          <Link href={{ pathname: `/article/${relatedNews[1].id}` }}>
            <Image
              src={"/assets/pagignation/active-greaterthan.png"}
              alt="next"
              width={30}
              height={30}
            />
          </Link>
          <Image
            src={"/assets/pagignation/active-lessthan.png"}
            alt="next"
            width={30}
            height={30}
          />
        </div>
      </div>
      <div className={styles["confetti"]}>
        <ConfettiComponent />
      </div>
    </div>
  );
}
