import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback, useMemo } from "react";
import CensusForm from "../components/CensusForm";
import ConfirmationModal from "../components/ConfirmationModal";
import axios from "axios";
import toast from "react-hot-toast";
import API_URL from "../constants/api.js";

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
    const {householdId} = useParams()
    const [edit, setEdit] = useState(false)
    const [temp, setTemp] = useState('01/21/1990') //TODO
    
    const [household, setHousehold] = useState(null)
    const [families, setFamilies] = useState([])
    const [members, setMembers] = useState([])

    const fetchHousehold = async () => {
        try {
            const {data} = await axios.get(`${API_URL}census/household/${householdId}`)
            console.log(data.data)

            // split head.dateOfBirth to yyyy-mm-dd
            const head = {
                ...data.data.head,
                dateOfBirth: data.data.head.dateOfBirth.split('T')[0]
            }
            setHousehold({...data.data, head})
        } catch (error) {
            console.error(error.message)
        }
    }

    const fetchFamilies = async () => {
        try {
            const { data } = await axios.get(`${API_URL}census/family/household/${householdId}`);
    
            const newFamilies = data.data.map(family => ({
                _id: family._id,
                members: family.members.map(member => member._id)
            }));
    
            setFamilies([...newFamilies]);
    
            const newMembers = data.data.flatMap(family =>
                family.members.map(member => ({
                    ...member,
                    dateOfBirth: member.dateOfBirth ? member.dateOfBirth.split('T')[0] : '' // Extract date part only
                }))
            );
    
            setMembers([...newMembers]);
    
        } catch (error) {
            console.error(error.message);
        }
    };    

    useEffect(() => {
        console.log(families)
        console.log(members)
    }, [families, members])

    const [modal, setModal] = useState({
        title: '',
        message: '',
        color: '',
        onConfirm: null,
        onCancel: null,
        open: false
    })

    const handleAddFamily = async () => {
        setFamilies([...families, {
            _id: `tempID-${Math.floor(Math.random() * 1000000)}`,
            members: []
        }])
    }

    const handleAddFamilyMember = (familyID) => {
        const tempID = `tempID-${Math.floor(Math.random() * 1000000)}`;

        // push tempID to the family.members array based on the familyID
        setFamilies(families.map(family => {
            if (family._id === familyID) {
                return {
                    ...family,
                    members: [...family.members, tempID]
                }
            }
            return family;
        }));
    
        // Add a new member to the members array
        setMembers([...members, {
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
            p4: false,
            registered: false,
            familyPlanning: true,
            _id: tempID
        }]);
    }

    const handleRemoveFamily = (familyID) => {
        // Remove family members based on familyID
        setMembers(members.filter(member => !families.find(family => family._id === familyID).members.includes(member._id)));

        // Remove family based on familyID
        setFamilies(families.filter(family => family._id !== familyID));
    }

    const handleRemoveFamilyMember = (memberID) => {
        if(!edit) return;
        setModal({
            open: false,
            title: '',
            message: '',
            color: '',
            onConfirm: null,
            onCancel: null
        })
        // Remove member based on memberID
        setMembers(members.filter(member => member._id !== memberID));

        // Remove member from family members array
        setFamilies(families.map(family => {
            if (family._id === familyID) {
                return {
                    ...family,
                    members: family.members.filter(member => member !== memberID)
                }
            }
            return family;
        }));

    };

    const handleMemberValueChange = useCallback((memberID, keyPath, value) => {
        setMembers(members => members.map(member => {
            if (member._id === memberID) {
                let updatedMember = { ...member };
    
                // Check if the keyPath is 'dateOfBirth' and value is 8 characters long
                if (keyPath === 'dateOfBirth' && value.length === 8) {
                    // Format the date as 'YYYY-MM-DD'
                    const formattedDate = `${value.slice(0, 4)}-${value.slice(4, 6)}-${value.slice(6, 8)}`;
                    updatedMember[keyPath] = formattedDate;
                } else {
                    // For other fields, update normally
                    const keys = keyPath.split('.');
                    let currentLevel = updatedMember;
    
                    for (let i = 0; i < keys.length - 1; i++) {
                        currentLevel = currentLevel[keys[i]];
                    }
    
                    currentLevel[keys[keys.length - 1]] = value;
                }
    
                return updatedMember;
            }
            return member;
        }));
    }, []);
    
    const memoizedMembers = useMemo(() => members, [members]);

    const openModal = (title, message, color, onConfirm, onCancel, e) => {
        e.preventDefault();
        if(!edit) return;
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
        fetchHousehold()
        fetchFamilies()
    }, [])

    return (
        <div className='shadow-lg p-8'>
            <div>
                <div className='flex justify-between items-center'>
                    <h2 className='font-semibold text-lg'>Household</h2>
                    <div className="flex items-center gap-2">
                        <button className='bg-blue-500 text-white rounded-sm px-4 py-1'>Print</button>
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
                            <input type="text" name="street" className="border-b border px-2 py-1" defaultValue={household?.address?.streetName} disabled={true}/>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-xs" htmlFor="houseNumber">House Number</label>
                            <input type="text" name="houseNumber" className="border-b border px-2 py-1" defaultValue={household?.address?.householdNumber} disabled={true}/>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-xs" htmlFor="apartment">Apartment</label>
                            <input type="text" name="apartment" className="border-b border px-2 py-1" defaultValue={household?.address?.apartment} disabled={true}/>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-xs" htmlFor="sitio">Sitio</label>
                            <input type="text" name="sitio" className="border-b border px-2 py-1" defaultValue={household?.address?.sitio} disabled={true}/>
                        </div>
                        {
                            !household?.isUnique && (
                                <div className="flex flex-col justify-around">
                                    <p className="text-xs font-semibold" htmlFor="householdNumber">Special Address <span className="text-xs font-normal text-gray-700">(This is auto generated if household address is not unique)</span></p>
                                    <input type="text" name="sitio" className="border-b border px-2 py-1 font-bold" defaultValue={household?.identifier} disabled={true}/>
                                </div>
                            )
                        }
                    </div>
                </div>
                <hr className="my-4 bg-gray-300 h-[1.5px]"/>
                <div className="mt-4">
                    <h3 className="font-semibold text-sm bg-green-500 w-fit p-2 text-white">Head</h3>
                    <CensusForm resident={household?.head} edit={edit} temp={temp}/>
                </div>
                <hr className="my-4 bg-gray-300 h-[2px]"/>
                <div className="mt-4">
                    {
                        families.map((family, familyIndex) => (
                            <div key={family._id} className="mt-4">
                                <div className="flex justify-between items-center my-2">
                                    <h3 className="font-semibold text-sm bg-red-500 w-fit px-2 py-1 text-white">Family {familyIndex + 1}</h3>
                                    <div className="flex items-center gap-4">
                                        <button onClick={() => handleRemoveFamily(family._id)} className="border border-red-400 text-red-400 px-2 rounded-md hover:bg-red-400 hover:text-white py-1 text-sm">Remove family</button>
                                        <button onClick={() => handleAddFamilyMember(family._id)} className="bg-blue-500 px-2 rounded-md text-white py-1 text-sm">+ Add Family Member</button>
                                    </div>
                                </div>
                                {family.members.map((memberId, memberIndex) => {
                                    const member = memoizedMembers.find(member => member._id === memberId);
                                    if (!member) return null;

                                    return (
                                        <div key={member._id} className={`${memberIndex % 2 === 0 ? 'bg-gray-200' : 'white'} p-2 hover:bg-red-300 transition-all`} onContextMenu={(e) => {
                                            openModal(
                                                'Remove Family Member',
                                                'Are you sure you want to remove this family member?',
                                                'bg-red-500',
                                                () => handleRemoveFamilyMember(familyIndex, memberIndex, e),
                                                () => { setModal({ open: false }) },
                                                e
                                            );
                                        }}>
                                            <CensusForm key={member._id} resident={member} onMemberValueChange={handleMemberValueChange} edit={edit} />
                                        </div>
                                    );
                                })}
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