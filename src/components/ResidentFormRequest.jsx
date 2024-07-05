import ResidentInfo from "./ResidentInfo"
import ResidentFormModal from "./residents/ResidentFormModal"
import { useState } from "react"

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
]

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

const ResidentFormRequest = () => { // TODO: FORM LIST
    const [activeForm, setActiveForm] = useState(null)
    return (
        <div className="flex flex-col p-8 w-full">
            <h3 className="font-semibold text-2xl text-gray-700">Forms</h3>  
            <div className="flex my-4 justify-between gap-4">
                <select name="form" className="border p-2 w-5/6 rounded-md">
                    <option value="cedula">Cedula</option>
                    <option value="barangay-clearance">Barangay Clearance</option>
                    <option value="business-permit">Business Permit</option>
                    <option value="residency">Residency</option>
                </select>
                <button className="bg-green-500 text-white p-2 rounded-md w-1/6">Generate Form</button>
            </div>
            <hr />              
            <div className="overflow-y-auto mt-8">
                <div className="flex justify-between items-center mb-8">
                    <h3 className="font-medium text-gray-600">Form Requests History (90)</h3>
                    <div className="flex items-center gap-4">
                        <p>sort by: </p>
                        <select name="form" className="border p-1">
                            <option value="cedula">Cedula</option>
                            <option value="barangay-clearance">Barangay Clearance</option>
                            <option value="business-permit">Business Permit</option>
                            <option value="residency">Residency</option>
                        </select>
                    </div>
                </div>
                <div className="h-[60vh] overflow-y-auto flex flex-col">
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
    )
}

export default ResidentFormRequest;