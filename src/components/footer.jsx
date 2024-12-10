import { useEffect } from 'react';
import { InstagramIcon, TwitterIcon, TwitchIcon, TiktokIcon, FacebookIcon, DiscordIcon, SpotifyIcon, YoutubeIcon, AppleIcon, SoundcloudIcon, MusicIcon, RightArrowIcon } from "./icons";

let links = [
    "About Monstercat",
    "Contact Us",
    "Careers",
    "News",
    "Press",
    "Terms Of Service",
    "Privacy Policy",
]

let logos = [
    <YoutubeIcon />,
    <InstagramIcon />,
    <TiktokIcon />,
    <TwitterIcon />,
    <SpotifyIcon />,
    <AppleIcon />,
    <TwitchIcon />,
    <FacebookIcon />,
    <DiscordIcon />,
    <SoundcloudIcon />,
    <MusicIcon />,

]

function Footer() {
    return (
        <>
            <footer className="px-5 mt-25">
                <div className='border-t border-b border-foreground'>
                    <ul className='mt-10'>
                        {links.map((link) => (
                            <li><a href="" className='uppercase font-semibold'>{link}</a></li>
                        ))}
                    </ul>

                    <div className='my-10'>
                        <h3 className='uppercase text-gray font-semibold'>Monstercat News</h3>
                        <p className='text-lightgray italic font-light mt-2'>Don't miss a thing, stay up to date with the latest news from us.</p>
                        <div className='relative rounded-none'>
                            <input className='border-b border-b-gray w-full py-2 text-gray bg-background mt-4' type="text" placeholder='Enter email' />
                            <button className='group absolute rounded-none right-0 bottom-0 px-3 py-2 flex justify-center items-center bg-none border-none hover:bg-foreground'>
                                <RightArrowIcon className="text-foreground hover:text-background" />
                            </button>
                        </div>
                    </div>

                </div>
                <div className='my-10'>
                    <p className='text-lightgray italic font-light'>2011 - 2024 © Monstercat, All Rights Reserved</p>
                    <ul className='flex flex-wrap gap-3 mt-5'>
                        {logos.map((logo) => (
                            <li><a href="">{logo}</a></li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className='text-xs italic text-lightgray text-center'>We acknowledge with gratitude the traditional, ancestral and unceded land of the Coast Salish peoples, including the territories of the Sḵwx̱wú7mesh (Squamish), Stó:lō and Səl̓ílwətaʔ/Selilwitulh (Tsleil-Waututh) and xʷməθkʷəy̓əm (Musqueam) Nations, on which Monstercat's Vancouver HQ stands.</p>
                    <p className='text-xs italic text-lightgray text-center mt-5 mb-10'>We acknowledge the unceded and ancestral territories of the Gabrielino/Tongva peoples on which our LA team live and work.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;