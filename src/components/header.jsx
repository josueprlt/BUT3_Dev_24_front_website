let music = {
    firstname_music: 'Level Days',
    name_music: 'Conro',
    artists: [
        {
            image_profil: '/img/artist1.jpg'
        },
        {
            image_profil: '/img/artist2.webp'
        }
    ],
    image_album: '/img/albumCover1.jpg',
    name_album: 'Instinct',
    date_album: 'May 22, 2020'
}

function Header() {

    return (
      <>
        <header className="h-screen px-15 py-5">
            <div className="h-full relative">
                <nav className="flex justify-between items-start">
                    <img src="/img/monstercat-logo.webp" alt="Image de monstercat" className="w-15 cursor-pointer"/>
                    <img src="/svg/bx-menu.svg" alt="Svg du menu burger" className="cursor-pointer" />
                </nav>
                <nav className="absolute top-20 right-0 flex flex-col gap-4">
                    <img src="/svg/bxl-instagram.svg" alt="Svg icon instagram" className="cursor-pointer"/>
                    <img src="/svg/bxl-tiktok.svg" alt="Svg icon tiktok" className="cursor-pointer"/>
                    <img src="/svg/bxl-twitter.svg" alt="Svg icon twitter" className="cursor-pointer"/>
                    <img src="/svg/bxl-twitch.svg" alt="Svg icon twitch" className="cursor-pointer"/>
                    <img src="/svg/bxl-facebook-circle.svg" alt="Svg icon facebook" className="cursor-pointer"/>
                    <img src="/svg/bxl-discord.svg" alt="Svg icon discord" className="cursor-pointer"/>
                    <img src="/svg/bxl-spotify.svg" alt="Svg icon spotify" className="cursor-pointer"/>
                </nav>

                <section className="flex">
                    <div className="flex gap-2">
                        <p className="flex gap-2 text-cover rotate-180"><span className="text-primary after:content-['-'] after:block">Instinct</span> Released May 22, 2020</p>
                        <img src="/img/albumCover1.jpg" alt="Image de la couverture d'album" className="w-90" />
                    </div>
                    <div>
                        text
                    </div>
                </section>
            </div>
        </header>
      </>
    )
  }
  
  export default Header
  