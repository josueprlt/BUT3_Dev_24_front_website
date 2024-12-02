import { PlayIcon, ShareIcon } from "../components/icons";

const listOfMusic = [
    {
        title: "The Small Things",
        time: {
            minute: '3',
            seconde: '35'
        },
        creators: [
            {
                name: "Conro",
            }
        ]
    },
    {
        title: "Without Your Love",
        time: {
            minute: '3',
            seconde: '09'
        },
        creators: [
            {
                name: "Conro",
            }
        ]
    },
    {
        title: "Therapy",
        time: {
            minute: '3',
            seconde: '06'
        },
        creators: [
            {
                name: "Conro",
            }
        ]
    },
    {
        title: "Fighters",
        time: {
            minute: '3',
            seconde: '46'
        },
        creators: [
            {
                name: "Conro",
            }
        ]
    },
    {
        title: "Way Up",
        time: {
            minute: '3',
            seconde: '32'
        },
        creators: [
            {
                name: "Conro",
            },
            {
                name: "Nevve",
            }
        ]
    },
    {
        title: "Waiting",
        time: {
            minute: '3',
            seconde: '07'
        },
        creators: [
            {
                name: "Conro",
            }
        ]
    },
    {
        title: "Dreaming",
        time: {
            minute: '2',
            seconde: '57'
        },
        creators: [
            {
                name: "Conro",
            }
        ]
    },
    {
        title: "Tattoo",
        time: {
            minute: '3',
            seconde: '29'
        },
        creators: [
            {
                name: "Conro",
            }
        ]
    },
    {
        title: "Out for the Night",
        time: {
            minute: '3',
            seconde: '05'
        },
        creators: [
            {
                name: "Conro",
            }
        ]
    },
    {
        title: "Overdue",
        time: {
            minute: '2',
            seconde: '48'
        },
        creators: [
            {
                name: "Conro",
            }
        ]
    },
    {
        title: "Say It",
        time: {
            minute: '3',
            seconde: '04'
        },
        creators: [
            {
                name: "Conro",
            }
        ]
    },
    {
        title: "Here to Stay",
        time: {
            minute: '2',
            seconde: '44'
        },
        creators: [
            {
                name: "Conro",
            }
        ]
    },
]

function TrackList() {

    return (
        <section className="mx-auto mt-10 px-5 text-xl font-bold w-full sm:px-0 sm:w-[500px] lg:w-auto mt-5">
            <h2 className="uppercase">Track List</h2>

            <div className="flex flex-wrap mt-5 gap-5">
                {listOfMusic.map((str, index) => (
                    <div key={index} className="flex justify-between items-center w-full">
                        <div className="flex items-center sm:gap-2">
                            <p className="text-lg w-[20.6px]">{index}</p>
                            <div className="cursor-pointer">
                                <PlayIcon />
                            </div>
                            <div>
                                <p className="text-lg">{str.title}</p>
                                <p className="text-sm">
                                    <>
                                        {str.creators.map((creator, index) => (
                                            <span key={index}>
                                                {creator.name}
                                                {index < str.creators.length - 1 && ' & '}
                                            </span>
                                        ))}
                                    </>
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <p className="text-lg">{str.time.minute}:{str.time.seconde}</p>
                            <div className="cursor-pointer">
                                <ShareIcon />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TrackList;