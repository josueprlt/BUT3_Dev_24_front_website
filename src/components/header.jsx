import { useEffect } from 'react';
import { InstagramIcon, TwitterIcon, TwitchIcon, TiktokIcon, FacebookIcon, DiscordIcon, SpotifyIcon, MenuIcon, PlayIcon, ShareIcon } from "../components/icons";

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
    useEffect(() => {
        const headerRef = document.getElementById('header');
        if (headerRef) {
            headerRef.style.position = 'relative';
        }
    }, []);

    return (
        <>
            <header id='header' className="h-auto lg:px-15 lg:py-5 after:w-full after:h-3/4 after:absolute after:left-0 after:-bottom-4 after:z-2 after:bg-gradient-to-b after:to-background">
                <div className="h-full relative z-20">
                    <nav className="flex justify-between sticky top-0 items-center bg-backgroundOpacity px-4 py-2 lg:relative lg:flex lg:justify-between lg:bg-inherit lg:p-0 lg:items-start lg:z-20">
                        <img src="/img/monstercat-logo.webp" alt="Image de monstercat" className="w-9 cursor-pointer sm:w-12 lg:w-15" />
                        <div className="hidden sm:flex sm:gap-4 lg:absolute lg:top-20 lg:right-0 lg:flex lg:flex-col lg:gap-4 lg:z-20">
                            <InstagramIcon className="cursor-pointer" />
                            <TiktokIcon className="cursor-pointer" />
                            <TwitterIcon className="cursor-pointer" />
                            <TwitchIcon className="cursor-pointer" />
                            <FacebookIcon className="cursor-pointer" />
                            <DiscordIcon className="cursor-pointer" />
                            <SpotifyIcon className="cursor-pointer" />
                        </div>
                        <MenuIcon className="cursor-pointer" />
                    </nav>

                    <section className="flex items-center flex-col mt-10 px-5 lg:gap-20 lg:flex-row lg:pt-20 lg:pl-15 lg:z-20">
                        <div className="flex flex-col-reverse gap-10 lg:gap-2 lg:flex-row">
                            <p className="hidden lg:flex lg:gap-7 rotate-180 text-cover"><span className="relative text-primary after:absolute after:w-[1.5px] after:h-4 after:bg-white after:left-[8px] after:-bottom-[22.5px]">{music.name_album}</span>Released {music.date_album}</p>
                            <p className="text-base flex gap-7 lg:hidden"><span className="relative text-primary after:absolute after:w-4 after:h-[1px] after:bg-white after:left-[57px] after:bottom-[10px]">{music.name_album}</span>Released {music.date_album}</p>
                            <img src={music.image_album} alt="Image de la couverture d'album" className="w-full sm:w-[500px] lg:w-[400px] xl:w-[450px]" />
                        </div>
                        <div className='w-full sm:w-[500px] lg:w-auto mt-5'>
                            <p className='text-foreground text-xl sm:text-5xl font-extrabold'>{music.firstname_music}</p>
                            <p className='text-xl sm:text-4xl font-bold mt-2'>{music.name_music}</p>

                            <div className='my-10 flex gap-5'>
                                {music.artists.map((artist, index) => (
                                    <>
                                        <div key={index} className='w-20 h-20 rounded-full overflow-hidden'>
                                            <img className='w-full h-full object-cover' src={artist.image_profil} alt="Image artiste de l'album" />
                                        </div>
                                    </>
                                ))}
                            </div>

                            <div className='flex gap-2 flex-wrap'>
                                <button className="flex justify-center items-center gap-1 uppercase text-foreground bg-primary border-none rounded-none px-5 py-3 cursor-pointer hover:bg-foreground hover:text-background transition-all duration-300">
                                    <PlayIcon className="transition-all duration-300" />
                                    Listen now
                                </button>
                                <button className="flex justify-center items-center gap-1 uppercase text-foreground border border-foreground rounded-none px-5 py-3 cursor-pointer hover:bg-foreground hover:text-background transition-all duration-300">
                                    <ShareIcon className="transition-all duration-300" />
                                    Share
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="absolute inset-0 z-1 bg-cover bg-center filter blur-sm" style={{ backgroundImage: `url(${music.image_album})` }}></div>
            </header>
        </>
    )
}

export default Header;