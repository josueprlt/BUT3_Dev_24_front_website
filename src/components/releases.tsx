import { PlayIcon, ShareIcon } from "../components/icons";

const albums = [
    {
        title: 'Feeling',
        creator: 'Conro',
        image: '/img/albumCover1.jpg'
    },
    {
        title: 'Find u.',
        creator: 'Conro',
        image: '/img/albumCover2.jpg'
    },
    {
        title: 'Falling for you',
        creator: 'Sabai, With Love & Nevve',
        image: '/img/albumCover3.jpg'
    },
    {
        title: 'Memory Bank',
        creator: 'Dyro x Conro',
        image: '/img/albumCover4.jpg'
    },
    {
        title: 'Luv(Drunk)',
        creator: 'Conro',
        image: '/img/albumCover5.jpg'
    },
    {
        title: 'You gotta be',
        creator: 'Conro & LissA',
        image: '/img/albumCover6.jpg'
    },
]

function TrackList() {

    return (
        <section className="mx-auto mt-10 px-5 text-xl font-bold w-full sm:px-0 sm:w-[500px] lg:w-auto mt-5">
            <h2 className="uppercase">Other releases like this</h2>

            <div className="flex flex-wrap justify-between">
                {albums.map((album) => (
                    <div>
                        <div className="w-40 h-40">
                            <img src={album.image} alt="Image d'album" />
                        </div>

                        <div className="text-wrap">
                            <p className="text-lg uppercase">{album.title}</p>
                            <p className="text-xs">{album.creator}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TrackList;