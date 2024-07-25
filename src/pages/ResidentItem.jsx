import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ResidentFormRequest from "../components/ResidentFormRequest";
import ResidentInfo from "../components/ResidentInfo";
import ResidentAddModal from "../components/residents/ResidentAddModal";
import axios from "axios";
import API_URL from "../constants/api";
import toast from "react-hot-toast";

const BlockModal = ({resident, onClose}) => {
    const [reason, setReason] = useState('')
    const blockResident = async () => {
        try {
            const {data} = await axios.put(`${API_URL}blocklog/block/${resident._id}`, {reason: reason})
            console.log(data)
            toast.success('Resident blocked successfully')
            onClose()
            setTimeout(() => {
                window.location.reload()
            }, 1000)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-md shadow-lg">
                <h3 className="text-xl font-semibold text-gray-700">Block Resident</h3>
                <p className="text-md my-4 text-gray-500">Are you sure you want to block <b>{resident.name.last}, {resident.name.first} {resident.name.middle} {resident.name.suffix}</b>?</p>
                <div>
                    <label htmlFor="reason" className="text-md text-gray-500 font-medium">Reason</label>
                    <input type="text" id="reason" className="w-full border border-gray-300 rounded-md p-2" onChange={e=>setReason(e.target.value)}/>
                </div>
                <div className="flex gap-4 mt-4 justify-end">
                    <button className="bg-gray-500 text-white p-2 rounded-md" onClick={() => onClose()}>Cancel</button> 
                    <button className="bg-red-500 text-white p-2 rounded-md" onClick={() => blockResident()} >Block</button>
                </div>
            </div>
        </div>
    )

}

const UnblockModal = ({resident, onClose}) => {
    const unblockResident = async () => {
        try {
            const {data} = await axios.put(`${API_URL}blocklog/unblock/${resident._id}`)
            console.log(data)
            toast.success('Resident unblocked successfully')
            onClose()
            //refresh page
            setTimeout(() => {
                window.location.reload()
            }, 1000)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-md shadow-lg">
                <h3 className="text-xl font-semibold text-gray-700">Unblock Resident</h3>
                <p className="text-md my-4 text-gray-500">Are you sure you want to unblock <b>{resident.name.last}, {resident.name.first} {resident.name.middle} {resident.name.suffix}</b>?</p>
                <div>
                    <label>Date</label>
                    <p>{new Date(resident.blocked.dateBlocked).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    <label htmlFor="reason" className="text-md text-gray-500 font-medium">Reason</label>
                    <p>{resident?.blocked.reason}</p>
                </div>
                <div className="flex gap-4 mt-4 justify-end">
                    <button className="bg-gray-500 text-white p-2 rounded-md" onClick={() => onClose()}>Cancel</button> 
                    <button className="bg-red-500 text-white p-2 rounded-md" onClick={() => unblockResident()}>Unblock</button>
                </div>
            </div>
        </div>
    )


}

const ResidentItem = () => {
    const {id} = useParams()
    const [activeTab, setActiveTab] = useState('form')
    const [resident, setResident] = useState(null)
    const [showBlockModal, setShowBlockModal] = useState(false)
    const [showUnblockModal, setShowUnblockModal] = useState(false)

    const fetchResident = async () => {
        try{
            const {data} = await axios.get(`${API_URL}resident/${id}`)
            setResident(data.data)
            console.log(data.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchResident()
    }, [id])

    return (
        <div className="flex gap-4 ml-64 p-8 w-full">
            <div className="shadow-lg flex w-1/4 h-fit">
                <div className="flex flex-col p-8 w-full ">
                    <h3 className="font-semibold text-lg text-gray-700">Resident Information</h3>
                    <div className="flex flex-col mt-4 gap-2">
                        <div className="flex items-center w-full justify-center">
                            {
                                resident?.picture ? (
                                    <img src={resident?.picture} className="w-[10em] h-[10em] object-cover rounded-md"/>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10em" height="10em" viewBox="0 0 24 24"><path fill="#8a8a8a" fillRule="evenodd" d="M12 4a8 8 0 0 0-6.96 11.947A4.99 4.99 0 0 1 9 14h6a4.99 4.99 0 0 1 3.96 1.947A8 8 0 0 0 12 4m7.943 14.076A9.959 9.959 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.958 9.958 0 0 0 2.057 6.076l-.005.018l.355.413A9.98 9.98 0 0 0 12 22a9.947 9.947 0 0 0 5.675-1.765a10.055 10.055 0 0 0 1.918-1.728l.355-.413zM12 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6" clipRule="evenodd"/></svg>
                                )
                            }
                        </div>
                        <div className="flex flex-col justify-between">
                            <p className="text-md text-gray-500">Name</p>
                            <p className="text-md font-semibold">{resident?.name.last}, {resident?.name.first} {resident?.name.middle} {resident?.name.suffix}
                            {resident?.isBlocked ? <span className="bg-red-500 text-white px-2  text-xs rounded-full">Blocked</span> : null}
                            </p>
                        </div>
                        <div className="flex flex-col justify-between">
                            <p className="text-md text-gray-500">Date of Birth</p>
                            <p className="text-md font-semibold">{new Date(resident?.dateOfBirth).toLocaleDateString('en-us', {year: 'numeric', month:'long', day:'numeric'})}</p>
                        </div>
                        <div className="flex flex-col justify-between">
                            <p className="text-md text-gray-500">Address</p>
                            <p className="text-md font-semibold">{resident?.address.streetName ? `${resident.address.streetName}` : null} {resident?.address.apartment ? `, ${resident?.address.apartment}` : null} {resident?.address.householdNumber ? `, ${resident?.address.householdNumber}` : null} {resident?.address.sitio ? `, ${resident?.address.sitio}` : null}</p>
                        </div>
                        <div className="flex flex-col justify-between">
                            <p className="text-md text-gray-500">Mobile Number</p>
                            <p className="text-md font-semibold">
                                {resident?.mobileNumber ? resident?.mobileNumber : 'N/A'}
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 mt-4">
                            <button onClick={() => setActiveTab('form')} className="border border-blue-500 text-blue-500 hover:text-white p-2 rounded-md hover:bg-blue-500 transition-all">Form Request</button>
                            <button onClick={() => setActiveTab('info')} className=" border border-green-500 text-green-500 hover:text-white p-2 rounded-md hover:bg-green-600 transition-all">Edit Info</button>
                            {
                                resident?.isBlocked ? (
                                    <button onClick={() => setShowUnblockModal(true)} className="border border-red-500 text-red-500 p-2 rounded-md hover:bg-red-500 hover:text-white transition-all">Unblock Resident</button>
                                ) : (
                                    <button onClick={() => setShowBlockModal(true)} className="border border-red-500 text-red-500 p-2 rounded-md hover:bg-red-500 hover:text-white transition-all">Block Resident</button>
                                )
                            }
                            <button className="border border-red-500 text-red-500 p-2 rounded-md hover:bg-red-500 hover:text-white transition-all">Delete Resident</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-3/4 h-fit">
                {
                    activeTab === 'form' ? <ResidentFormRequest id={id} resident={resident}/> : null
                }
                {
                    activeTab === 'info' ? <ResidentInfo residentData={resident}/> : null
                }
            </div>
            {
                showBlockModal ? <BlockModal resident={resident} onClose={() => setShowBlockModal(false)}/> : null
            }
            {
                showUnblockModal ? <UnblockModal resident={resident} onClose={() => setShowUnblockModal(false)}/> : null
            }
        </div>
    )
}

export default ResidentItem