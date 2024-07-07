import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ResidentFormRequest from "../components/ResidentFormRequest";
import ResidentInfo from "../components/ResidentInfo";
import ResidentAddModal from "../components/residents/ResidentAddModal";

const resident = {
    name: {
        first: "Juan",
        last: "Dela Cruz",
        middle: "Garcia",
        suffix: "Jr.",
    },
    dateOfBirth: new Date("1990-01-01"),
    dateOfDeath: null,
    placeOfBirth: "Manila, Philippines",
    address: {
        streetName: "123 Main St",
        apartment: "Unit 1A",
        householdNumber: "123",
        sitio: "Sitio Uno",
    },
    bloodType: "O",
    sex: "M",
    citizenship: "Filipino",
    civilStatus: "Single",
    mobileNumber: "09171234567",
    landlineNumber: "0271234567",
    emergencyContact: {
        name: {
            first: "Maria",
            last: "Dela Cruz",
            middle: "Santos",
            suffix: "",
        },
        relationship: "Mother",
        mobileNumber: "09181234567",
        address: "456 Elm St, Sitio Uno",
    },
    weight: 70, // in kg
    height: 170, // in cm
    educationalAttainment: "College Graduate",
    IDs: {
        TIN: "123-456-789",
        SSS: "01-2345678-9",
        PAGIBIG: "1234-5678-9101",
        PhilHealth: "1234-5678-9101",
    },
    voterInfo: {
        precinctNumber: "001",
        voterID: "V123456789",
    },
    picture: null,
    signature: "path/to/signature.jpg",
    religion: "Catholic",
    employment: {
        occupation: "Software Engineer",
        employer: "Tech Company",
        employerAddress: "789 Tech Park, Manila",
        yearsEmployed: 5,
        employmentStatus: "Employed",
    },
    dateOfResidency: new Date("2015-06-01"),
    blocked: null, // Assuming there is no blocked log reference initially
    isBlocked: false,
};


const ResidentItem = () => {
    const {id} = useParams()
    const [activeTab, setActiveTab] = useState('form')

    return (
        <div className="flex gap-4 ml-64 p-8 w-full">
            <div className="shadow-lg flex w-1/4 h-fit">
                <div className="flex flex-col p-8 w-full ">
                    <h3 className="font-semibold text-lg text-gray-700">Resident Information</h3>
                    <div className="flex flex-col mt-4 gap-2">
                        <div className="flex items-center w-full justify-center">
                            {
                                resident?.picture ? (
                                    <img src={resident.picture} className="w-[10em] h-[10em] object-cover rounded-full"/>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10em" height="10em" viewBox="0 0 24 24"><path fill="#8a8a8a" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.96 11.947A4.99 4.99 0 0 1 9 14h6a4.99 4.99 0 0 1 3.96 1.947A8 8 0 0 0 12 4m7.943 14.076A9.959 9.959 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.958 9.958 0 0 0 2.057 6.076l-.005.018l.355.413A9.98 9.98 0 0 0 12 22a9.947 9.947 0 0 0 5.675-1.765a10.055 10.055 0 0 0 1.918-1.728l.355-.413zM12 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6" clip-rule="evenodd"/></svg>
                                )
                            }
                        </div>
                        <div className="flex flex-col justify-between">
                            <p className="text-md text-gray-500">Name</p>
                            <p className="text-md font-semibold">{resident.name.last}, {resident.name.first} {resident.name.middle} {resident.name.suffix}</p>
                        </div>
                        <div className="flex flex-col justify-between">
                            <p className="text-md text-gray-500">Date of Birth</p>
                            <p className="text-md font-semibold">{resident.dateOfBirth.toLocaleDateString()}</p>
                        </div>
                        <div className="flex flex-col justify-between">
                            <p className="text-md text-gray-500">Address</p>
                            <p className="text-md font-semibold">{resident.address.streetName}, {resident.address.apartment}, {resident.address.householdNumber}, {resident.address.sitio}</p>
                        </div>
                        <div className="flex flex-col justify-between">
                            <p className="text-md text-gray-500">Mobile Number</p>
                            <p className="text-md font-semibold">
                                {resident.mobileNumber}
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 mt-4">
                            <button onClick={() => setActiveTab('form')} className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-all">Form Request</button>
                            <button onClick={() => setActiveTab('info')} className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition-all">Edit Info</button>
                            <button className="border border-red-500 text-red-500 p-2 rounded-md hover:bg-red-500 hover:text-white transition-all">Block Resident</button>
                            <button className="border border-red-500 text-red-500 p-2 rounded-md hover:bg-red-500 hover:text-white transition-all">Delete Resident</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shadow-lg flex w-3/4">
                {
                    activeTab === 'form' ? <ResidentFormRequest /> : null
                }
                {
                    activeTab === 'info' ? <ResidentInfo /> : null
                }
            </div>

        </div>
    )
}

export default ResidentItem