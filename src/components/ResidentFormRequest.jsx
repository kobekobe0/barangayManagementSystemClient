import axios from "axios"
import API_URL from "../constants/api"
import ResidentInfo from "./ResidentInfo"
import ResidentFormModal from "./residents/ResidentFormModal"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import toast from "react-hot-toast"

const forms = [
    {
        residentID: 1,
        _id: 1,
        formType: 'BC',
        formName: 'Barangay Clearance',
        OTCNo: '123456789',
        ORNo: '987654321',
        dateIssued: new Date('2021-01-01'),
        placeIssued: 'Cacarong Matanda, Pandi',
        purpose: 'Enrollment',
        formNumber: 'BC-0000123',
    },
    {
        residentID: 1,
        _id: 2,
        formType: 'BC',
        formName: 'Barangay Clearance',
        OTCNo: '123456789',
        ORNo: '987654321',
        dateIssued: new Date('2021-01-01'),
        placeIssued: 'Cacarong Matanda, Pandi',
        purpose: 'Enrollment',
        formNumber: 'BC-0000123',
    },
    {
        residentID: 1,
        _id: 3,
        formType: 'BC',
        formName: 'Business Clearance',
        OTCNo: '123456789',
        ORNo: '987654321',
        dateIssued: new Date('2021-01-01'),
        placeIssued: 'Cacarong Matanda, Pandi',
        purpose: 'Enrollment',
        formNumber: 'BC-0000123',
    },
    {
        residentID: 1,
        _id: 4,
        formType: 'BC',
        formName: 'Barangay Clearance',
        OTCNo: '123456789',
        ORNo: '987654321',
        dateIssued: new Date('2021-01-01'),
        placeIssued: 'Cacarong Matanda, Pandi',
        purpose: 'Enrollment',
        formNumber: 'BC-0000123',
    },
    {
        residentID: 1,
        _id: 5,
        formType: 'BC',
        formName: 'Business Clearance',
        OTCNo: '123456789',
        ORNo: '987654321',
        dateIssued: new Date('2021-01-01'),
        placeIssued: 'Cacarong Matanda, Pandi',
        purpose: 'Enrollment',
        formNumber: 'BC-0000123',
    },
    {
        residentID: 1,
        _id: 5,
        formType: 'BC',
        formName: 'Business Clearance',
        OTCNo: '123456789',
        ORNo: '987654321',
        dateIssued: new Date('2021-01-01'),
        placeIssued: 'Cacarong Matanda, Pandi',
        purpose: 'Enrollment',
        formNumber: 'BC-0000123',
    },
]

const withPurpose = ['BRC']

const FormCard = ({form, open}) => {
    return (
        <div onClick={open} className="w-full hover:bg-gray-200 transition-all rounded-md border border-b my-2 p-4 flex justify-between items-center cursor-pointer">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-4">
                    <p className="text-md font-medium">
                        {form.formNumber}
                    </p>
                    <p className="font-normal text-gray-700">
                        {form.formName}
                    </p>
                </div>
            </div>
            <div>
                <span className="text-sm font-semibold text-gray-500">
                    {form.dateIssued.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
            </div>
        </div>
    )    
}

const BusinessCard = ({business}) => {
    return (
        <Link to={`/business/${business._id}`} className="w-full hover:bg-gray-200 transition-all rounded-md border border-b my-2 p-4 flex justify-between items-center cursor-pointer">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-4">
                    <div className={`h-2 w-2 ${business.isClosed ? 'bg-red-500' : 'bg-green-500'} text-white rounded-full`}></div>
                    <p className="text-md font-medium">
                        {business.businessName}
                    </p>
                    <p className="font-normal text-gray-700">
                        {business.location}
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-gray-500">
                    {business?.natureOfBusiness}
                </span>
            </div>
        </Link>
    )
}

const ResidentFormRequest = ({id, resident}) => { // TODO: FORM LIST
    const [activeForm, setActiveForm] = useState(null)
    const [businesses, setBusinesses] = useState([])
    const [formType, setFormType] = useState('')
    const [formDisplay, setFormDisplay] = useState('');


    const [additionalData, setAdditionalData] = useState({
        CTCNo: '',
        ORNo: '',
        placeIssued: 'Pandi, Bulacan',
        dateIssued: '',
        purpose: '',
        yrsOfResidency: resident?.yrsOfResidency
    })

    const setDateToNow = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
        setAdditionalData({
            ...additionalData,
            dateIssued: formattedDate
        })
    }

    useEffect(()=>{
        setAdditionalData({
            ...additionalData,
            yrsOfResidency: resident?.yrsOfResidency
        })
    }, [resident])

    const handleChangeData = (e) => {
        setAdditionalData({
            ...additionalData,
            [e.target.name]: e.target.value
        })
    }

    const handleChangeFormType = (e) => {
        setFormType(e.target.value);
        setFormDisplay(e.target.options[e.target.selectedIndex].innerText);
    };

    const fetchBusinesses = async () => {
        try {
            const {data} = await axios.get(`${API_URL}business?residentID=${id}`)
            setBusinesses(data.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchBusinesses()
    }, [id])


    const handleGenerate = async () => {
        //check for values
        if(!additionalData.dateIssued) {
            toast.error('Please input a date issued');
            return;
        }

        const isConfirmed = await confirm('Are you sure you want to generate this document?');
        if (!isConfirmed) return;

        let body = {
            purpose: additionalData.purpose,
            placeIssued: additionalData.placeIssued,
            dateIssued: additionalData.dateIssued,
            CTCNo: additionalData.CTCNo,
            ORNo: additionalData.ORNo,
            formType: formType,
            formName: 'Business Clearance',
            residentID: id,
            yrsOfResidency: additionalData.yrsOfResidency
        }

        try{
            //create form in the backend, if failed do not generate document
            const response = await axios.post(`${API_URL}form/`, body, {
                responseType: 'arraybuffer' 
            })
            console.log(response)
            //download the docx file
            const file = new Blob([response.data], {type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});
            const fileURL = URL.createObjectURL(file);

            const link = document.createElement('a');
            link.href = fileURL;
            link.download = `${formDisplay}_${resident?.name?.first}_${resident?.name?.last}.docx`;
            link.click();

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex flex-col w-full justify-center">
            <div className="flex flex-col p-8 w-full h-fit shadow-lg ">
                <h3 className="font-semibold text-2xl text-gray-700">Forms</h3>
                {
                   resident?.isBlocked && <p className="text-red-500 text-sm font-medium mt-2">This resident is blocked, requesting form is not possible.</p> 
                }
                <div className="flex my-2 justify-between gap-4">
                    <select name="form" className="border p-2 w-5/6 rounded-md"  value={formType} onChange={handleChangeFormType}>
                        <option value="BRC">Certification of Residency</option>
                        <option value="SLP">Solo Parent Certification</option>
                        <option value="">Select Form Type</option>
                    </select>
                    <button onClick={handleGenerate} className={`${formType == '' || resident?.isBlocked ? 'bg-green-300' : 'bg-green-500'}  text-white p-2 rounded-md w-1/6`} disabled={formType == '' || resident?.isBlocked}>Generate Form</button>
                </div>
                {
                    formType !== '' && (
                        <div className="flex w-full flex-col">
                            <p className="text-orange-500 text-sm font-medium">This form needs resident's Image. Make sure that the resident has an image before generating.</p>
                            {
                                withPurpose.includes(formType) && (
                                    <>
                                        <label className="text-sm font-medium mt-2">Purpose</label>
                                        <input type="text" name="purpose" onChange={handleChangeData} value={additionalData.purpose} className="p-2 px-4 border border-gray-300 rounded-md font-medium text-lg"/>        
                                    </>     
                                )
                            }

                            <label className="text-sm font-medium mt-2">Date Issued</label>
                            <div className="flex items-center gap-2 w-full">
                                <input type="date" name="dateIssued" onChange={handleChangeData} value={additionalData.dateIssued} className=" w-5/6 p-2 px-4 border border-gray-300 rounded-md font-medium text-lg"/>
                                <button onClick={setDateToNow} className="bg-blue-500 p-2 text-white rounded-md w-1/6">Set Date to Now</button>
                            </div>

                            <label className="text-sm font-medium mt-2">Place Issued</label>
                            <input type="text" name="placeIssued" onChange={handleChangeData} value={additionalData.placeIssued} className="p-2 px-4 border border-gray-300 rounded-md font-medium text-lg"/>

                            <label className="text-sm font-medium mt-2">CTCNo</label>
                            <input type="text" name="CTCNo" onChange={handleChangeData} value={additionalData.CTCNo} className="p-2 px-4 border border-gray-300 rounded-md font-medium text-lg"/>

                            <label className="text-sm font-medium mt-2">ORNo</label>
                            <input type="text" name="ORNo" onChange={handleChangeData} value={additionalData.ORNo} className="p-2 px-4 border border-gray-300 rounded-md font-medium text-lg"/>

                            <label className="text-sm font-medium mt-2">Years of Residency</label>
                            <input type="number" name="yrsOfResidency" onChange={handleChangeData} value={additionalData.yrsOfResidency} className="p-2 px-4 border border-gray-300 rounded-md font-medium text-lg"/>
                        </div>
                    )
                }
            </div>

            <div className="flex flex-col p-8 w-full h-fit shadow-lg ">
                <div className="overflow-y-auto mt-8">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="font-medium text-gray-600">Form Requests History (90)</h3>
                        <div className="flex items-center gap-4">
                            <p>sort by: </p>
                            <select name="form" className="border p-1">
                                <option value="">Select Form Type</option>
                                <option value="BRC">Certification of Residency</option>
                            </select>
                        </div>
                    </div>
                    <div className="h-[30vh] overflow-y-auto flex flex-col">
                        {
                            forms.map(form => (
                                <FormCard form={form} key={form._id} open={()=>setActiveForm(form._id)}/>
                            ))
                        }
                    </div>
                    {
                        activeForm !== null && <ResidentFormModal onClose={() => setActiveForm(null)} form={activeForm}/>
                    }
                </div>
            </div>

            <div className="flex flex-col p-8 w-full h-fit shadow-lg ">
                <div className="flex flex-col p-8 w-full h-fit shadow-lg fit">
                    <div className="flex my-4 justify-between gap-4">
                        <h3 className="font-semibold text-lg text-gray-700">Business</h3>
                        <Link to='/business' className="bg-green-500 text-white p-2 rounded-md w-1/6 text-center">Add Business</Link>
                        
                    </div>
                    <div className="flex flex-col w-full items-center">
                        {
                            businesses.map(business => (
                                <BusinessCard business={business} key={business.plateNumber}/>
                            ))
                        }
                    </div>  
                </div>
            </div>

            <div className="flex flex-col p-8 w-full h-fit shadow-lg fit">
                
                <div className="flex my-4 justify-between gap-4">
                    <h3 className="font-semibold text-lg text-gray-700">Help Received History</h3>
                </div>
                <div className="flex flex-col w-full items-center">
                    {
                        businesses.map(business => (
                            <BusinessCard business={business} key={business.plateNumber}/>
                        ))
                    }
                </div>  
            </div>
        </div>
    )
}

export default ResidentFormRequest;