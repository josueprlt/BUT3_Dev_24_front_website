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
        <section className="mx-auto mt-10 px-5 text-xl font-normal w-full sm:px-0 sm:w-[500px] mt-5 lg:w-auto lg:px-35 lg:mt-15">
            <h2 className="uppercase lg:text-4xl font-normal">Other releases like this</h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4 mt-5 lg:flex lg:flex-wrap lg:gap-10">
                {albums.map((album, index) => (
                    <div
                        key={index}
                        className="w-full lg:w-50"
                    >
                        <div className="w-auto h-40 overflow-hidden lg:w-50 lg:h-50">
                            <img
                                src={album.image}
                                className="object-cover h-full w-full"
                                alt={`Image d'album: ${album.title}`}
                            />
                        </div>

                        <div className="mt-4">
                            <p className="text-lg uppercase font-normal">{album.title}</p>
                            <p className="text-xs font-normal italic text-gray-300 font-normal">{album.creator}</p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default TrackList;