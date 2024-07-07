import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CensusForm from "../components/CensusForm";
import ConfirmationModal from "../components/ConfirmationModal";

const household = 
    {
        id: 1,
        address: {
            street: 'Castro',
            apartment: null,
            householdNuber: '114',
            sitio: null
        },
        head: {
            name: {
                first: 'Juan',
                last: 'Dela Cruz',
                middle: 'Bautista',
                suffix: null
            },
            dateOfBirth: '1990-01-01',
            sex: 'M',
            civilStatus: 'married',
            occupation: 'Farmer',
            educationalAttainment: 'Elementary Graduate',
            religion: 'Islam',
            sector: null,
            votingStatus: true,
            pregnant: false,
            p4: true,
            registeredBusiness: true,
        },
    }

const families = [
    {
        id: 1,
        familyMembers: [
            {
                name: {
                    first: 'Juan',
                    last: 'Dela Cruz',
                    middle: 'Bautista',
                    suffix: null
                },
                dateOfBirth: '1990-01-01',
                sex: 'M',
                civilStatus: 'Married',
                occupation: 'Farmer',
                educationalAttainment: 'Elementary Graduate',
                religion: 'Roman Catholic',
                sector: null,
                votingStatus: true,
                p4: true,
                registered: true,
                _id: 66341
            },
            {
                name: {
                    first: 'Juan',
                    last: 'Dela Cruz',
                    middle: 'Bautista',
                    suffix: null
                },
                dateOfBirth: '1990-01-01',
                sex: 'M',
                civilStatus: 'Married',
                occupation: 'Farmer',
                educationalAttainment: 'Elementary Graduate',
                religion: 'Roman Catholic',
                sector: null,
                votingStatus: true,
                p4: true,
                registered: true,
                _id: 42113
            },
            {
                name: {
                    first: 'Juan',
                    last: 'Dela Cruz',
                    middle: 'Bautista',
                    suffix: null
                },
                dateOfBirth: '1990-01-01',
                sex: 'M',
                civilStatus: 'Married',
                occupation: 'Farmer',
                educationalAttainment: 'Elementary Graduate',
                religion: 'Roman Catholic',
                sector: null,
                votingStatus: true,
                p4: true,
                registered: true,
                _id: 2141
            },
            {
                name: {
                    first: 'Juanaaa',
                    last: 'Dela Cruz',
                    middle: 'Bautista',
                    suffix: null
                },
                dateOfBirth: '1990-01-01',
                sex: 'M',
                civilStatus: 'Married',
                occupation: 'Farmer',
                educationalAttainment: 'Elementary Graduate',
                religion: 'Roman Catholic',
                sector: null,
                votingStatus: true,
                p4: true,
                registered: true,
                _id: 3123
            },
            {
                name: {
                    first: 'Juandsd',
                    last: 'Dela Cruz',
                    middle: 'Bautista',
                    suffix: null
                },
                dateOfBirth: '1990-01-01',
                sex: 'M',
                civilStatus: 'Married',
                occupation: 'Farmer',
                educationalAttainment: 'Elementary Graduate',
                religion: 'Roman Catholic',
                sector: null,
                votingStatus: true,
                p4: true,
                registered: true,
                _id: 123
            },
        ],
        householdID: 1
    },
]

const Household = () => {
    const [edit, setEdit] = useState(false)
    const [temp, setTemp] = useState('01/21/1990') //TODO
    const [familiesData, setFamiliesData] = useState([...families])

    const [modal, setModal] = useState({
        title: '',
        message: '',
        color: '',
        onConfirm: null,
        onCancel: null,
        open: false
    })

    const handleAddFamily = () => {
        setFamiliesData([...familiesData, {
            id: familiesData.length + 1,
            familyMembers: [
                {
                    name: {
                        first: '',
                        last: '',
                        middle: '',
                        suffix: ''
                    },
                    dateOfBirth: '',
                    sex: '',
                    civilStatus: '',
                    occupation: '',
                    educationalAttainment: '',
                    religion: '',
                    sector: null,
                    votingStatus: true,
                    pregnant: false,
                    p4: true,
                    registeredBusiness: true,
                }]
        }])
    }

    const handleAddFamilyMember = (index) => {
        const newFamiliesData = [...familiesData]; // Create a copy of familiesData
        const newFamily = newFamiliesData[index];
        newFamily.familyMembers.push({
            name: {
                first: '',
                last: '',
                middle: '',
                suffix: ''
            },
            dateOfBirth: '',
            sex: '',
            civilStatus: '',
            occupation: '',
            educationalAttainment: '',
            religion: '',
            sector: null,
            votingStatus: true,
            pregnant: false,
            p4: true,
            registeredBusiness: true,
            _id: Math.floor(Math.random() * 15631216)
        });
    
        setFamiliesData(newFamiliesData); // Update the state with the new data
    }

    const handleRemoveFamily = (index) => {
        const newFamiliesData = [...familiesData]; // Create a copy of familiesData
        newFamiliesData.splice(index, 1); // Remove the family at the specified index
    
        setFamiliesData(newFamiliesData); // Update the state with the new data
    }

    const handleRemoveFamilyMember = (familyIndex, memberIndex, e) => {
        if(!edit) return;
        e.preventDefault();

        const newFamiliesData = [...familiesData];
        const familyToRemoveMember = newFamiliesData[familyIndex];
        familyToRemoveMember.familyMembers.splice(memberIndex, 1);
        console.log(familyToRemoveMember.familyMembers)

        setModal({
            open: false,
            title: '',
            message: '',
            color: '',
            onConfirm: null,
            onCancel: null
        })
    };

    const openModal = (title, message, color, onConfirm, onCancel, e) => {
        e.preventDefault();
        setModal({
            title,
            message,
            color,
            onConfirm,
            onCancel,
            open: true
        })
    }

    useEffect(() => {
        console.log(familiesData);
    }, [familiesData]);

    return (
        <div className='shadow-lg p-8'>
            <div>
                <div className='flex justify-between items-center'>
                    <h2 className='font-semibold text-lg'>Household</h2>
                    <div>
                        {
                            edit ? (
                                <button className='bg-blue-500 text-white rounded-sm px-4 py-1' onClick={() => setEdit(false)}>Save</button>
                            ) : (
                                <button className='bg-blue-500 text-white rounded-sm px-4 py-1' onClick={() => setEdit(true)}>Edit</button>
                            )
                        }
                    </div>
                </div>
                <div className="mt-4">
                    <h3 className="font-semibold text-sm bg-blue-500 w-fit p-2 text-white">Address</h3>
                    <div className="flex gap-4 mt-2">
                        <div className="flex flex-col">
                            <label className="text-xs" htmlFor="street">Street</label>
                            <input type="text" name="street" className="border-b border px-2 py-1" defaultValue={household.address.street} disabled={!edit}/>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-xs" htmlFor="houseNumber">House Number</label>
                            <input type="text" name="houseNumber" className="border-b border px-2 py-1" defaultValue={household.address.householdNuber} disabled={!edit}/>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-xs" htmlFor="apartment">Apartment</label>
                            <input type="text" name="apartment" className="border-b border px-2 py-1" defaultValue={household.address.apartment} disabled={!edit}/>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-xs" htmlFor="sitio">Sitio</label>
                            <input type="text" name="sitio" className="border-b border px-2 py-1" defaultValue={household.address.sitio} disabled={!edit}/>
                        </div>
                    </div>
                </div>
                <hr className="my-4 bg-gray-300 h-[1.5px]"/>
                <div className="mt-4">
                    <h3 className="font-semibold text-sm bg-green-500 w-fit p-2 text-white">Head</h3>
                    <CensusForm resident={household.head} edit={edit} temp={temp}/>
                </div>
                <hr className="my-4 bg-gray-300 h-[2px]"/>
                <div className="mt-4">
                    {
                        familiesData.map((family, index) => (
                            <div key={index} className="mt-4">
                                <h3 className="font-semibold text-sm bg-red-500 w-fit p-2 text-white">Family {index + 1}</h3>
                                {
                                    family.familyMembers.map((member, memberIndex) => (
                                        <div key={member._id} className={`${memberIndex % 2 === 0 ? 'bg-gray-200': 'white'} p-2 hover:bg-red-300 transition-all`} onContextMenu={(e) => {
                                            openModal(
                                                'Remove Family Member',
                                                'Are you sure you want to remove this family member?',
                                                'bg-red-500',
                                                () => handleRemoveFamilyMember(index, memberIndex, e),
                                                () => {setModal({open: false})},
                                                e
                                            )
                                        }}>
                                            <CensusForm key={memberIndex} resident={member} edit={edit} temp={temp}/>
                                        </div>
                                    ))
                                }
                                <div className="flex justify-end gap-4">
                                    <button onClick={() => handleRemoveFamily(index)} className="bg-red-400 p-2 rounded-md text-white mt-4">Remove family</button>
                                    <button onClick={() => handleAddFamilyMember(index)} className="bg-blue-500 p-2 rounded-md text-white mt-4">+ Add Family Member</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <button onClick={handleAddFamily} className="w-full bg-green-500 rounded-md text-white p-2 hover:bg-green-600 transition-all mt-8">+ Add New Family</button>
            {
                modal.open && (
                    <ConfirmationModal title={modal.title} message={modal.message} color={modal.color} onConfirm={modal.onConfirm} onCancel={modal.onCancel}/>
                )
            }
        </div>
    );
}

export default Household;