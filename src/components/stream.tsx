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
        <section className="mx-auto mt-10 px-5 text-xl font-bold w-full sm:px-0 sm:w-[500px] lg:w-auto mt-5">
            <h2 className="uppercase">Stream it your way</h2>

            <div className="flex flex-wrap mt-5">
                {stream.map((str, index) => (
                    <div key={index} className="flex gap-1 justify-center items-center px-2.5 py-2 outline outline-1 outline-foreground outline-offset-0">
                        {str.icon}
                        {str.name && (
                            <p className="text-sm">{str.name}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stream;