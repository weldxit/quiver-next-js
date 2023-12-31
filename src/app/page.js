import styles from './page.module.css' 
import Link from 'next/link'
export default function Home() {
  const tags = [
    {id: 0, name: 'Home', alias:"ସମସ୍ତ"},
    {id: 1, name: 'Politics', alias:"ରାଜନୀତି"},
    {id: 2, name: 'Business', alias:"ବ୍ୟବସାୟ"},
    {id: 3, name: 'Education', alias:"ଶିକ୍ଷା"},
    {id: 4, name: 'Farming', alias:"କୃଷି"},
    {id: 5, name: 'Health & lifestyle', alias:"ସ୍ୱାସ୍ଥ୍ୟ ଓ ଜୀବନଶୈଳୀ"},
    {id: 6, name: 'Sports', alias:"କ୍ରୀଡା"},
    {id: 7, name: 'State', alias:"ରାଜ୍ୟ"},
    {id: 8, name: 'National', alias:"ଜାତୀୟ"},
    {id: 9, name: 'International', alias:"ଆନ୍ତର୍ଜାତୀୟ"},
  ];
  return (
    <main className={styles.main}>
      <div>
        <Link href={`/category/${tags[1].name.toLocaleLowerCase()}?id=${tags[1].id}&page=1`}>politics</Link>
      </div>
    </main>
  )
}
