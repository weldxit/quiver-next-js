import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from './footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
    const desc = `It's the time for a change !!
    We are Not for Anyone and No One will be there behind us !!
    We are sole and one standing for Justice !! `
  return (
<div className={style.main}>
            <div className={style.Footer}>
                <div className={style.footerSec}>
                    <div className={style.brandDiv}>
                        <div>
                        <span className={style.addres_label}>ABOUT US</span>
                            <p className={style.description}>{desc}</p>
                        </div>
                    </div>
                    <div className={style.linksDiv}>
                        <span className={style.addres_label}>OUR ADDRESS</span>
                        <p className={style.landline_container}>
                            <span className={style.landline}>fsdjaf</span>
                            <span className={style.landline}>fdkjsahf ajfdlksajf asfjalkf jas</span>
                            <span className={style.landline}>fajksfafajf</span>
                        </p>
                    </div>
                    <div className={style.mediaDiv}>
                        <span className={style.addres_label}>SOCIAL MEDIA</span>
                        <div className={style.social_links}>
                            <a href={'https://www.facebook.com/WeldX-IoT-109293968473834'} target="_blank" className={style.li}><FontAwesomeIcon icon={faFacebook} className={style.icon} /></a>
                            <a href={'https://twitter.com/WeldxIT'} target="_blank" className={style.li}><FontAwesomeIcon icon={faTwitter} className={style.icon} /></a>
                            <a href={'https://www.instagram.com/weldxit/'} target="_blank" className={style.li}><FontAwesomeIcon icon={faInstagram} className={style.icon} /></a>
                            <a href={'https://in.pinterest.com/WeldxIT/_saved/'} target="_blank" className={style.li}><FontAwesomeIcon icon={faPinterest} className={style.icon} /></a>
                        </div>
                    </div>
                </div>
                <p className={style.copyright}>© Copyright 2023, Weld Group. All rights reserved.</p>
            </div>
        </div>
  )
}
