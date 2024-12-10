import { TiktokIcon, DiscordIcon, SpotifyIcon, SoundcloudIcon, AppleIcon, YoutubeIcon } from "../components/icons";

const stream = [
    {
        icon: <DiscordIcon />,
        name: 'player',
    },
    {
        icon: <TiktokIcon />,
        name: null,
    },
    {
        icon: <SoundcloudIcon />,
        name: null,
    },
    {
        icon: <AppleIcon />,
        name: null,
    },
    {
        icon: <YoutubeIcon />,
        name: null,
    },
    {
        icon: <SpotifyIcon />,
        name: null,
    },
]

function Stream() {

    return (
        <section className="mx-auto mt-10 px-5 text-xl font-bold w-full sm:px-0 sm:w-[500px] mt-5 lg:w-auto lg:px-15 lg:mt-15">
            <h2 className="uppercase lg:text-4xl">Stream it your way</h2>

            <ul className="flex flex-wrap mt-5">
                {stream.map((str, index) => (
                    <li key={index} className="outline outline-1 outline-foreground outline-offset-0">
                        <a href="" className="w-full h-full flex gap-1 justify-center items-center px-2.5 py-2 lg:px-6 lg:py-5">
                            {str.icon}
                            {str.name && (
                                <p className="text-sm lg:text-lg">{str.name}</p>
                            )}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Stream;