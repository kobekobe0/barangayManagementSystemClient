import { Link } from "react-router-dom";

const data = [
    {
        id: 1,
        date: '2021-09-01',
        household: 300,
        families: 250,
        population: 1000,
        gender: {
            male: 500,
            female: 500
        },
        ageGroup: {
            children: 200,
            adult: 500,
            senior: 300
        }
    },
    {
        id: 2,
        date: '2021-09-01',
        household: 300,
        families: 250,
        population: 1000,
        gender: {
            male: 500,
            female: 500
        },
        ageGroup: {
            children: 200,
            adult: 500,
            senior: 300
        }
    },
    {
        id: 3,
        date: '2021-09-01',
        household: 300,
        families: 250,
        population: 1000,
        gender: {
            male: 500,
            female: 500
        },
        ageGroup: {
            children: 200,
            adult: 500,
            senior: 300
        }
    }
]

const CensusCard = ({census}) => {
    return (
        <Link to={`${census.id}`} className="w-full hover:bg-gray-200 transition-all rounded-md border border-b my-4 p-4 flex justify-between items-center cursor-pointer">
            <div className="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="black" d="M19 2H5C3.3 2 2 3.3 2 5v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3M8 17c0 .6-.4 1-1 1s-1-.4-1-1v-4c0-.6.4-1 1-1s1 .4 1 1zm5 0c0 .6-.4 1-1 1s-1-.4-1-1V7c0-.6.4-1 1-1s1 .4 1 1zm5 0c0 .6-.4 1-1 1s-1-.4-1-1v-6c0-.6.4-1 1-1s1 .4 1 1z"/></svg>
                <span className="text-lg font-semibold text-gray-500">
                    {parseInt(census.population).toLocaleString()} <span className="text-sm font-light">Residents</span>
                </span>
            </div>
            <div>
                <span className="text-sm font-semibold text-gray-500">
                        {new Date(census.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
            </div>

        </Link>
    )
}
const Census = () => {
    return (
        <div className="flex p-8 flex-col ml-64 w-full">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-semibold">Census</h1>
                <button className="bg-green-500 text-white px-4 py-1 rounded-sm">Add Census</button>
            </div>
            <div className="flex flex-col w-full mt-8">
                {
                    data?.map((census, index) => (
                        <CensusCard key={index} census={census}/>
                    ))
                }
            </div>
        </div>
    );
    }

export default Census;