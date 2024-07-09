import { useNavigate, useParams } from 'react-router-dom';
import HouseholdDetails from '../components/HouseholdDetails';
//import HouseholdNew from '../components/HouseholdNew';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import API_URL from '../constants/api';
import CensusForm from '../components/CensusForm';
import CensusFormOne from '../components/CensusFormOne';


const censusReport = {
    id: 1,
    date: '2021-09-01',
    household: 3452,
    families: 5321,
    population: 12543,
    gender: {
        male: 2564,
        female: 2679
    },
    // ///////
    ageGroup: {
        children: 1436,
        adult: 4520,
        senior: 943
    },
    sector: {
        pwd: 10,
        soloParent: 20,
        ofw: 30,
        ip: 0
    }
}

const households = [
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
            civilStatus: 'Married',
            occupation: 'Farmer',
            educationalAttainment: 'Elementary Graduate',
            religion: 'Roman Catholic',
            sector: null,
            votingStatus: true,
            p4: true,
            registered: true,
        },
    },
    {
        id: 2,
        address: {
            street: 'Esteban',
            apartment: null,
            householdNuber: '314',
            sitio: 'Lawang Bato'
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
            civilStatus: 'Married',
            occupation: 'Farmer',
            educationalAttainment: 'Elementary Graduate',
            religion: 'Roman Catholic',
            sector: null,
            votingStatus: true,
            p4: true,
            registered: true,
        },
    },
    {
        id: 3,
        address: {
            street: 'Esteban',
            apartment: null,
            householdNuber: '314',
            sitio: 'Lawang Bato'
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
            civilStatus: 'Married',
            occupation: 'Farmer',
            educationalAttainment: 'Elementary Graduate',
            religion: 'Roman Catholic',
            sector: null,
            votingStatus: true,
            p4: true,
            registered: true,
        },
    },
    {
        id: 4,
        address: {
            street: 'Esteban',
            apartment: null,
            householdNuber: '314',
            sitio: 'Lawang Bato'
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
            civilStatus: 'Married',
            occupation: 'Farmer',
            educationalAttainment: 'Elementary Graduate',
            religion: 'Roman Catholic',
            sector: null,
            votingStatus: true,
            p4: true,
            registered: true,
        },
    },
    {
        id: 5,
        address: {
            street: 'Castro',
            apartment: null,
            householdNuber: '115',
            sitio: 'Bitukang Manok'
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
            civilStatus: 'Married',
            occupation: 'Farmer',
            educationalAttainment: 'Elementary Graduate',
            religion: 'Roman Catholic',
            sector: null,
            votingStatus: true,
            p4: true,
            registered: true,
        },
    },
    {
        id: 6,
        address: {
            street: 'Castro',
            apartment: null,
            householdNuber: '115',
            sitio: 'Bitukang Manok'
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
            civilStatus: 'Married',
            occupation: 'Farmer',
            educationalAttainment: 'Elementary Graduate',
            religion: 'Roman Catholic',
            sector: null,
            votingStatus: true,
            p4: true,
            registered: true,
        },
    },
    {
        id: 7,
        address: {
            street: 'Castro',
            apartment: null,
            householdNuber: '115',
            sitio: 'Bitukang Manok'
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
            civilStatus: 'Married',
            occupation: 'Farmer',
            educationalAttainment: 'Elementary Graduate',
            religion: 'Roman Catholic',
            sector: null,
            votingStatus: true,
            p4: true,
            registered: true,
        },
    },
]

const AddModal = ({onClose}) => {
    const navigate = useNavigate()
    const {id} = useParams();
    const handleCreate = async () => {
        onClose()
    }

    const [resident, setResident] = useState(
        {
            address: {
                streetName: '',
                apartment: '',
                householdNumber: '',
                sitio: ''
            },
            head: {
                name: {
                    first: '',
                    last: '',
                    middle: '',
                    suffix: ''
                },
                dateOfBirth: '',
                sex: '',
                civilStatus: '',
                employment: {
                    occupation: '',
                },
                educationalAttainment: '',
                religion: '',
                sector: '',
                voterInfo: {
                    isRegistered: false
                },
                pregnant: false,
                p4: false,
                registeredBusiness: false,
                familyPlanning: false
            }
        }
    )

    const handleChange = (path, value) => {
        setResident(prevState => {
            const newState = { ...prevState };
            let schema = newState;
            const pList = path.split('.');
            const len = pList.length;
            for(let i = 0; i < len-1; i++) {
                let elem = pList[i];
                if( !schema[elem] ) schema[elem] = {}
                schema = schema[elem];
            }
            schema[pList[len-1]] = value;
            return newState;
        });
    }

    const handleDateChange = (path, value) => {
        if (value.length === 8) {
            const formattedValue = value.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
            handleChange(path, formattedValue);
        } else {
            handleChange(path, value);
        }
    };

    const prepareData = (data) => {
        for (let key in data) {
            if (typeof data[key] === 'object') {
                prepareData(data[key]);
            } else if (data[key] === '' || data[key] === null) {
                data[key] = null;
            } else if (typeof data[key] === 'string') {
                data[key] = data[key].trim();
                if(data[key] === '') {
                    data[key] = null;
                }
            }
        }
    };

    const handleSave = async () => {
        const dateParts = resident.head.dateOfBirth.split('-');
        if (dateParts.length !== 3) {
            toast.dismiss();
            toast.error('Invalid date format');
            return;
        }
        if (dateParts[0].length !== 4 || dateParts[1].length !== 2 || dateParts[2].length !== 2) {
            toast.dismiss();
            toast.error('Invalid date format');
            return;
        }
        if (parseInt(dateParts[1]) < 1 || parseInt(dateParts[1]) > 12) {
            toast.dismiss();
            toast.error('Invalid month');
            return;
        }

        if (parseInt(dateParts[2]) < 1 || parseInt(dateParts[2]) > 31) {
            toast.dismiss();
            toast.error('Invalid day');
            return;
        }

        try{
            let dataToSubmit = { ...resident };
            prepareData(dataToSubmit);

            const {data} = await axios.post(`${API_URL}census/household/create/${id}`, dataToSubmit);
            toast.success(data.message);

            window.open(`/census/${id}/${data.data._id}`, '_blank');

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-md w-[90vw] flex flex-col flex-wrap">
                <h1 className="text-2xl font-semibold">Add Household</h1>
                <p className='text-gray-600 font-semibold text-sm my-2'>Make sure to input correct address, you cannot change it after creating household</p>
                <div className="mt-4">
                    <h3 className="font-semibold text-sm bg-blue-500 text-white w-fit p-2">Address</h3>
                    <div className="flex gap-4 mt-2 flex-wrap">
                        <div className="flex flex-col">
                            <label className="text-xs" htmlFor="street">Street</label>
                            <input type="text" name="street" className="border-b border px-2 py-1" value={resident?.address?.streetName || ''} onChange={e=>handleChange('address.streetName', e.target.value)}/>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-xs" htmlFor="houseNumber">House Number</label>
                            <input type="text" name="houseNumber" className="border-b border px-2 py-1" value={resident?.address?.householdNumber || ''} onChange={e=>handleChange('address.householdNumber', e.target.value)}/>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-xs" htmlFor="apartment">Apartment</label>
                            <input type="text" name="apartment" className="border-b border px-2 py-1" value={resident?.address?.apartment || ''} onChange={e=>handleChange('address.apartment', e.target.value)}/>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-xs" htmlFor="sitio">Sitio</label>
                            <input type="text" name="sitio" className="border-b border px-2 py-1" value={resident?.address?.sitio || ''} onChange={e=>handleChange('address.sitio', e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <h3 className="font-semibold text-sm p-2 bg-green-500 text-white w-fit">Head</h3>
                    <CensusFormOne resident={resident.head} edit={true} onInputChange={handleChange} onDateChange={handleDateChange}/>
                </div>
                <div className="flex justify-end gap-4 mt-4">
                    
                    <button onClick={onClose} className="bg-gray-500 text-white px-4 py-1 rounded-sm">Cancel</button>
                    <button onClick={handleSave} className="bg-green-500 text-white px-4 py-1 rounded-sm">Create</button>
                </div>
            </div>
        </div>
    )
}

const CensusItem = () => {
    const {id} = useParams();
    const [activeHousehold, setActiveHousehold] = useState(null);
    const [addNewHousehold, setAddNewHousehold] = useState(false);
    const [addModal, setAddModal] = useState(false);

    return (
        <div className='ml-64 flex w-full flex-col'>
            <div className="w-full flex p-8 overflow-y-auto gap-4" >
                <div className='flex flex-col  rounded-md w-1/3 shadow-lg p-8 overflow-y-auto h-[85vh]'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-lg font-semibold'>Population</h2>
                        <button className='text-xs bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 transition-all'>Print Report</button>
                    </div>
                    <div className='flex items-end gap-2'>
                        <h1 className='text-5xl font-bold'>{censusReport.population.toLocaleString()}</h1>
                        <span className='bg-green-400 rounded-full px-2 text-white text-xs'>Residents</span>
                    </div>
                    <div className='flex justify-between mt-4'>
                        <div className='text-lg text-gray-500 w-full flex justify-between gap-2 flex-col'>

                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="#8a8a8a" d="M5.673 0a.7.7 0 0 1 .7.7v1.309h7.517v-1.3a.7.7 0 0 1 1.4 0v1.3H18a2 2 0 0 1 2 1.999v13.993A2 2 0 0 1 18 20H2a2 2 0 0 1-2-1.999V4.008a2 2 0 0 1 2-1.999h2.973V.699a.7.7 0 0 1 .7-.699M1.4 7.742v10.259a.6.6 0 0 0 .6.6h16a.6.6 0 0 0 .6-.6V7.756zm5.267 6.877v1.666H5v-1.666zm4.166 0v1.666H9.167v-1.666zm4.167 0v1.666h-1.667v-1.666zm-8.333-3.977v1.666H5v-1.666zm4.166 0v1.666H9.167v-1.666zm4.167 0v1.666h-1.667v-1.666zM4.973 3.408H2a.6.6 0 0 0-.6.6v2.335l17.2.014V4.008a.6.6 0 0 0-.6-.6h-2.71v.929a.7.7 0 0 1-1.4 0v-.929H6.373v.92a.7.7 0 0 1-1.4 0z"/></svg>
                                        <h2>Date:</h2>
                                    </div>
                                    <p className='text-sm font-semibold'>
                                        {new Date(censusReport.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                    </p>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="#8a8a8a" d="M224 120v96a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8v-52a4 4 0 0 0-4-4h-40a4 4 0 0 0-4 4v52a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-96a16 16 0 0 1 4.69-11.31l80-80a16 16 0 0 1 22.62 0l80 80A16 16 0 0 1 224 120"/></svg>
                                        <h2>Household:</h2>
                                    </div>
                                    <p>
                                        {censusReport.household.toLocaleString()}
                                    </p>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><defs><mask id="ipTFamily0"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"><path d="M10 19s-5.143 2-6 9m34-9s5.143 2 6 9m-26-9s4.8 1.167 6 7m6-7s-4.8 1.167-6 7m-4 8s-4.2.75-6 6m14-6s4.2.75 6 6"/><circle cx="24" cy="31" r="5" fill="#555" stroke-linejoin="round"/><circle cx="34" cy="14" r="6" fill="#555" stroke-linejoin="round"/><circle cx="14" cy="14" r="6" fill="#555" stroke-linejoin="round"/></g></mask></defs><path fill="#8a8a8a" d="M0 0h48v48H0z" mask="url(#ipTFamily0)"/></svg>
                                        <h2>Families:</h2>
                                    </div>
                                    <p>
                                        {censusReport.families.toLocaleString()}
                                    </p>
                                </div>
                           
                            
                                <h2 className="text-sm text-gray-700 font-semibold mt-2">Gender</h2>
                                <hr />
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="skyblue" d="M20 4v6h-2V7.425l-3.975 3.95q.475.7.725 1.488T15 14.5q0 2.3-1.6 3.9T9.5 20t-3.9-1.6T4 14.5t1.6-3.9T9.5 9q.825 0 1.625.237t1.475.738L16.575 6H14V4zM9.5 11q-1.45 0-2.475 1.025T6 14.5t1.025 2.475T9.5 18t2.475-1.025T13 14.5t-1.025-2.475T9.5 11"/></svg>
                                        <h2>Male:</h2>
                                    </div>
                                    <p>
                                        {censusReport.gender.male.toLocaleString()}
                                    </p>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="pink" d="M17.5 9.5C17.5 6.46 15.04 4 12 4S6.5 6.46 6.5 9.5c0 2.7 1.94 4.93 4.5 5.4V17H9v2h2v2h2v-2h2v-2h-2v-2.1c2.56-.47 4.5-2.7 4.5-5.4m-9 0C8.5 7.57 10.07 6 12 6s3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5"/></svg>
                                        <h2>Female:</h2>
                                    </div>
                                    <p>
                                        {censusReport.gender.female.toLocaleString()}
                                    </p>
                                </div>
                          

                                <h2 className="text-sm text-gray-700 font-semibold mt-2">Age Group</h2>
                                <hr />
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1em" viewBox="0 0 640 512"><path fill="#8a8a8a" d="M160 0a64 64 0 1 1 0 128a64 64 0 1 1 0-128M88 480v-80H70.2c-10.9 0-18.6-10.7-15.2-21.1l31.1-93.4l-28.6 37.8c-10.7 14.1-30.8 16.8-44.8 6.2s-16.8-30.7-6.2-44.8L65.4 207c22.4-29.6 57.5-47 94.6-47s72.2 17.4 94.6 47l58.9 77.7c10.7 14.1 7.9 34.2-6.2 44.8s-34.2 7.9-44.8-6.2l-28.6-37.8l31.1 93.4c3.5 10.4-4.3 21.1-15.2 21.1H232v80c0 17.7-14.3 32-32 32s-32-14.3-32-32v-80h-16v80c0 17.7-14.3 32-32 32s-32-14.3-32-32M480 0a64 64 0 1 1 0 128a64 64 0 1 1 0-128m-8 384v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V300.5L395.1 321c-9.4 15-29.2 19.4-44.1 10s-19.4-29.2-10-44.1l51.7-82.1c17.6-27.9 48.3-44.9 81.2-44.9h12.3c33 0 63.7 16.9 81.2 44.9l51.7 82.2c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10l-13-20.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96z"/></svg>
                                        <h2>Children:</h2>
                                    </div>
                                    <p>
                                        {censusReport.ageGroup.children.toLocaleString()}
                                    </p>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1200 1200"><path fill="#8a8a8a" d="M605.096 480c-135.542-2.098-239.082-111.058-239.999-240C367.336 105.667 477.133.942 605.096 0c135.662 5.13 239.036 108.97 240.001 240c-2.668 134.439-111.907 239.09-240.001 240m194.043 49.788c170.592 1.991 257.094 151.63 257.881 301.269V1200H889.784l.001-324.254c-4.072-22.416-19.255-30.018-33.164-27.82c-13.022 2.059-24.929 12.701-25.56 27.82V1200h-464.67V875.746c-3.557-21.334-17.128-29.537-30.331-28.709c-14.138.889-27.853 12.135-28.393 28.709V1200h-164.68V831.057c-.98-159.475 99.901-300.087 259.137-301.269z"/></svg>
                                        <h2>Adult:</h2>
                                    </div>
                                    <p>
                                        {censusReport.household.toLocaleString()}
                                    </p>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="#8a8a8a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m11 21l-1-4l-2-3V8"/><path d="m5 14l-1-3l4-3l3 2l3 .5M7 4a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 13l-2 4m11 0v-8.5a1.5 1.5 0 0 1 3 0v.5"/></g></svg>
                                        <h2>Senior:</h2>
                                    </div>
                                    <p>
                                        {censusReport.household.toLocaleString()}
                                    </p>
                                </div>
                            

                                <h2 className="text-sm text-gray-700 font-semibold mt-2">Sectors</h2>
                                <hr />
                                {
                                    Object.keys(censusReport.sector).map((key, index) => {
                                        return (
                                            <div key={index} className='flex justify-between items-center'>
                                                <div className='flex items-center gap-2'>
                                                    <h2>{key}:</h2>
                                                </div>
                                                <p>
                                                    {censusReport.sector[key].toLocaleString()}
                                                </p>
                                            </div>
                                        )
                                    })
                                }
                            

                        </div>
                        
                    </div>
                    <button onClick={()=>setAddModal(true)} className='w-full text-center bg-green-500 text-white p-2 rounded-md mt-6 hover:bg-green-600 transition-all'>Add New Household</button>
                    
                </div>
                <div className='flex flex-col  rounded-md w-2/3 shadow-lg p-8 h-[85vh] '>
                    <div className='flex justify-between my-2 items-center'>
                        <h2 className='font-semibold'>Households</h2>
                        <input type="text" className='border border-b p-2 items-center' placeholder='search by street'/>
                    </div>
                    <div className='overflow-y-auto'>
                        {
                            households.map((household, index) => {
                                return (
                                    <Link to={`${household.id}`} target='_blank' key={index} className='flex justify-between items-center p-4 my-2 hover:bg-gray-300 border border-b cursor-pointer rounded-md'>
                                        <div className='flex gap-2'>
                                            <p className='font-semibold'>{household.address.street}, {household.address.sitio}</p>
                                            <h3 >{household.address.householdNuber}</h3>
                                        </div>
                                        <p className='text-xs'>{household.head.name.last}, {household.head.name.first}</p>
                                    </Link>
                                )
                            })
                        
                        }
                    </div>

                </div>
            </div>
            {
                addModal && <AddModal onClose={() => setAddModal(false)}/>
            }
        </div>
    )
}

export default CensusItem;