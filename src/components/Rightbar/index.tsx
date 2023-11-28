import React from "react"
import styles from "./Content.module.css"
import Stuff from "./props/stuff"



const Rightbar = () => {
    const stuff = [
        {'img': 'https://my-apple-store.ru/wa-data/public/shop/products/89/32/3289/images/6744/6744.750.jpg', 'price': '95 999p', 'name': 'MacBook', 'button': 'buy'},
        {'img': 'https://avatars.mds.yandex.net/i?id=8da16ffbacf769d3bebc0b539c52175b1e0bc536-9149912-images-thumbs&n=13', 'price': '120 000p', 'name': 'Iphone 14 pro', 'button': 'buy'},
        {'img': 'https://avatars.mds.yandex.net/i?id=1e0295999ff897eef13e489e8e4bcbd9833b8fce-10384989-images-thumbs&n=13', 'price': '21 999p', 'name': 'AirPods 3', 'button': 'buy'},
        {'img': 'https://avatars.mds.yandex.net/i?id=3c0f8ca182da28d79b6ecedb1262d29c025f1a9a-4554229-images-thumbs&ref=rim&n=33&w=375&h=300', 'price': '42 900p', 'name': 'AirPods Max', 'button': 'buy'},
        {'img': 'https://avatars.mds.yandex.net/i?id=f258a886aff9b8c738aec0deb3872ec1f8df628d-8497405-images-thumbs&n=13', 'price': '35 999p', 'name': 'Apple Watch SE', 'button': 'buy'},
        {'img': 'https://avatars.mds.yandex.net/i?id=3150586085773bd045b4ac666d489332e048b1ad-5008890-images-thumbs&n=13', 'price': '209 999p', 'name': 'IMac', 'button': 'buy'}
    
    ]
    return(
        <div className={styles.Container}>
           {stuff.map(item => <Stuff img={item.img} price={item.price} name={item.name} button={item.button} /> )}
        </div>
    )
}

export default Rightbar