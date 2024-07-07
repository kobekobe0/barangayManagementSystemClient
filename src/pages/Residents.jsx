import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import ResidentAddModal from "../components/residents/ResidentAddModal"

const residentsdata = [
    {
        _id: 1,
        name: {
            first: 'John',
            last: 'Doe',
            middle: 'Smith',
            suffix: null
        },
        dateOfBirth: new Date('01-01-1990'),    
        profile: null,
    },
    {
        _id: 2,
        name: {
            first: 'Jane',
            last: 'Doe',
            middle: 'Smith',
            suffix: null
        },
        dateOfBirth: new Date('1990-01-01'),    
        profile: null,
    },
    {
        _id: 3,
        name: {
            first: 'John',
            last: 'Doe',
            middle: 'Smith',
            suffix: null
        },
        dateOfBirth: new Date('1990-01-01'),    
        profile: null,
    
    }
]

const ResidentCard = ({resident}) => {
    return (
        <Link to={`${resident._id}`} className="w-full hover:bg-gray-200 transition-all rounded-md border border-b my-2 p-4 flex justify-between items-center cursor-pointer">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-4">
                    {
                        resident?.profile ? (
                            <img src={resident?.profile} className="w-[3em] h-[3em] object-cover"/>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="#8a8a8a" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.96 11.947A4.99 4.99 0 0 1 9 14h6a4.99 4.99 0 0 1 3.96 1.947A8 8 0 0 0 12 4m7.943 14.076A9.959 9.959 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.958 9.958 0 0 0 2.057 6.076l-.005.018l.355.413A9.98 9.98 0 0 0 12 22a9.947 9.947 0 0 0 5.675-1.765a10.055 10.055 0 0 0 1.918-1.728l.355-.413zM12 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6" clip-rule="evenodd"/></svg>
                        )
                    }
                    <p className="font-semibold text-lg">
                        {resident.name.last}, {resident.name.first} {resident.name.middle} {resident.name.suffix}
                    </p>
                </div>
            </div>
            <div>
                <span className="text-sm font-semibold text-gray-500">
                    {resident.dateOfBirth.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
            </div>

        </Link>
    )
}


const Residents = () => {
    const [residents, setResidents] = useState(residentsdata)
    const [addModal, setAddModal] = useState(false)
    useEffect(() => {
        console.log(residents)
    },[residents])
    return (
        <div className="ml-64 p-8 w-full flex flex-col">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-semibold">Residents</h1>
                <div className="flex items-center gap-4">
                    <input className="p-2 border border-gray-400 rounded-md" type="text" placeholder="search booklet number" />
                    <button onClick={()=> setAddModal(true)} className="bg-green-500 text-white px-4 py-2 rounded-md">Add Resident</button>
                </div>
            </div>
            <div className="flex flex-col w-full mt-8">
                {
                    residents?.map((resident, index) => (
                        <ResidentCard key={resident._id} resident={resident}/>
                    ))
                }
            </div>
            {
                addModal && (
                    <ResidentAddModal onClose={()=>setAddModal(false)}/>
                )
            }
        </div>
    )
}

export default Residents;