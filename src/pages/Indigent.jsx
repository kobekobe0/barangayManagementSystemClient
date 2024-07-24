import { useEffect, useState } from "react"
import BusinessForms from "../components/business/BusinessForms"
import EditBusiness from "../components/business/EditBusiness"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import API_URL from "../constants/api"
import CloseModal from "../components/business/CloseModal"
import DeleteModal from "../components/business/DeleteModal"
import IndigentForms from "../components/indigent/IndigentForm"
import AddIndigent from "../components/indigent/AddIndigent"
import EditHolder from "../components/indigent/EditHolder"
import CreateHolder from "../components/indigent/CreateHolder"

const Indigent = () => {
    const [addModal, setAddModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [addHolderModal, setAddHolderModal] = useState(false)
    const [indigentHolder, setIndigentHolder] = useState({})
    const [numbers, setNumbers] = useState({})

    const fetchLatestHolder = async () => {
        try {
            const {data} = await axios.get(`${API_URL}indigent/holder`)
            setIndigentHolder(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchNumbers = async () => {
        try {
            const {data} = await axios.get(`${API_URL}indigent/number/${indigentHolder._id}`)
            console.log(data)
            setNumbers(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchLatestHolder()
    },[])

    useEffect(() => {
        fetchNumbers()
    },[indigentHolder])

    return (
        <div className='ml-64 flex w-full flex-col'>
            <div className="w-full flex p-8 overflow-y-auto gap-4" >
                <div className='flex flex-col  rounded-md w-1/3 shadow-lg p-8 overflow-y-auto h-fit'>
                    <div className='flex flex-col justify-center gap-4'>
                        <div className="flex items-center justify-between">
                            <h2 className='text-lg font-semibold text-gray-600'>Cash Assistance</h2>
                            <button className="bg-blue-500 text-xs text-white px-2 py-1 rounded-md">Print Report</button>
                        </div>
                        
                        <div className="flex items-center justify-between">
                            <p>Remaining Amount:</p>
                            <h2 className="text-3xl font-semibold flex items-center">₱ {indigentHolder?.amount?.toLocaleString()}</h2>
                        </div>

                    </div>
                    <hr className="my-4"/>
                    <div className="flex flex-col gap-2"> 
                        <div className='flex justify-between items-center gap-2'>
                            <h2 className='text-sm font-semibold text-gray-600'>Current amount distributed:</h2>
                            <h2 className='text-md font-semibold hover:scale-105 transition-all duration-75'>₱ {numbers?.totalAmount?.toLocaleString()}</h2>
                        </div>
                        <div className='flex justify-between items-center gap-2'>
                            <h2 className='text-sm font-semibold text-gray-600'>Current Number of People Given:</h2>
                            <h2 className='text-md font-semibold'>{`${numbers?.total?.toLocaleString()}`}</h2>
                        </div>
                        <div className='flex justify-between items-center gap-2'>
                            <h2 className='text-sm font-semibold text-gray-600'>Total Number of People Given:</h2>
                            <h2 className='text-md font-semibold'>{`${numbers?.totalAll?.toLocaleString()}`}</h2>
                        </div>
                        {
                            indigentHolder?.amount == 0 && (
                                <div className='flex justify-between items-center gap-2'>
                                    <h2 className='text-sm font-semibold text-gray-600'>Exhausted At:</h2>
                                    <h2 className='text-md font-semibold'>{`${new Date(indigentHolder?.exhaustedAt).toLocaleString('en-us', {year: 'numeric', month:'long', day:'2-digit'})}`}</h2>
                                </div>
                            )
                        }

                    </div>
                    <hr className="my-4"/>
                    <div className="flex flex-col gap-4">
                        <button onClick={()=>setAddModal(true)} className="bg-blue-500 text-white w-full p-2 rounded-md">Cash Assistance</button>             
                        <button onClick={()=> setEditModal(true)} className="bg-green-500 text-white w-full p-2 rounded-md">Edit Current Amount</button>    
                        {
                            indigentHolder?.amount == 0 && (
                                <button onClick={()=>setAddHolderModal(true)} className="bg-green-500 text-white w-full p-2 rounded-md">New Balance</button> 
                            )
                        }
                                    
                    </div>
                </div>
                <IndigentForms />
            </div>
            {
                addModal && (
                    <AddIndigent setOpen={setAddModal} id={indigentHolder?._id}/>
                )
            }
            {
                editModal && (
                    <EditHolder setOpen={setEditModal} holder={indigentHolder}/>
                )
            }
            {
                addHolderModal && (
                    <CreateHolder setOpen={setAddHolderModal}/>
                )
            }
        </div>
    )
}

export default Indigent