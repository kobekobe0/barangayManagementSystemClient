import { useState } from "react";
import WebcamCapture from "./residents/ResidentCameraModal";


const resident = {
    name: {
      first: "Juan",
      last: "Dela Cruz",
      middle: "Santos",
      suffix: "Jr.",
    },
    dateOfBirth: new Date("1985-05-15"),
    dateOfDeath: null,
    placeOfBirth: "Manila",
    address: {
      streetName: "Rizal Street",
      apartment: "Apt 101",
      householdNumber: "123",
      sitio: "Sitio Sto. Niño",
    },
    bloodType: "O",
    sex: "M",
    citizenship: "Filipino",
    civilStatus: "Married",
    mobileNumber: "09171234567",
    landlineNumber: null,
    emergencyContact: {
      name: "Maria Dela Cruz",
      relationship: "Spouse",
      mobileNumber: "09181234567",
      address: "Same address as resident",
    },
    weight: 70, // kg
    height: 170, // cm
    educationalAttainment: "Bachelor's Degree",
    IDs: {
      TIN: "123-456-789",
      SSS: "01-2345678-9",
      PAGIBIG: "1234-5678-9012",
      PhilHealth: "1234-5678-9012",
    },
    voterInfo: {
      precinctNumber: "0123A",
      voterID: "1234567890",
    },
    picture: null,
    religion: "Roman Catholic",
    employment: {
      occupation: "Software Engineer",
      employer: "Tech Solutions Inc.",
      employerAddress: "Makati City",
      yearsEmployed: 5,
      employmentStatus: "Employed",
    },
    dateOfResidency: new Date("2010-01-01"),
    blocked: null,
    isBlocked: false,
};


const ResidentInfo = () => { // TODO: FORM LIST
    const [activeForm, setActiveForm] = useState(null)

    const [openPicture, setOpenPicture] = useState(false);
    const [photo, setPhoto] = useState(null);
    const [fileName, setFileName] = useState('');

    const handleFileChange = (e) => {
        setPhoto(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    return (
        <div className="flex flex-col p-8 w-full h-[85vh] overflow-auto">
            <h3 className="font-semibold text-2xl text-gray-700 mb-4">Details</h3>  
            <div className="flex flex-col gap-4 mb-4">
                <h3 className="font-medium text-sm text-gray-600">Profile Picture</h3>
                <div className="flex items-center gap-4">
                    {photo && <img src={URL.createObjectURL(photo)} alt="preview" />}
                    <button className="bg-blue-500 rounded-md p-2 hover:bg-blue-600 transition-all" onClick={() => setOpenPicture(true)}><svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 512 512"><circle cx="256" cy="272" r="64" fill="white"/><path fill="white" d="M432 144h-59c-3 0-6.72-1.94-9.62-5l-25.94-40.94a15.5 15.5 0 0 0-1.37-1.85C327.11 85.76 315 80 302 80h-92c-13 0-25.11 5.76-34.07 16.21a15.5 15.5 0 0 0-1.37 1.85l-25.94 41c-2.22 2.42-5.34 5-8.62 5v-8a16 16 0 0 0-16-16h-24a16 16 0 0 0-16 16v8h-4a48.05 48.05 0 0 0-48 48V384a48.05 48.05 0 0 0 48 48h352a48.05 48.05 0 0 0 48-48V192a48.05 48.05 0 0 0-48-48M256 368a96 96 0 1 1 96-96a96.11 96.11 0 0 1-96 96"/></svg></button>
                    {
                        photo && (
                            <button className="bg-green-500 rounded-md p-2 hover:bg-green-600 transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="white" d="M21 7v12q0 .825-.587 1.413T19 21H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h12zm-9 11q1.25 0 2.125-.875T15 15t-.875-2.125T12 12t-2.125.875T9 15t.875 2.125T12 18m-6-8h9V6H6z"/></svg></button>
                        )
                    }
                    {
                        openPicture && (
                            <WebcamCapture setPhoto={setPhoto} onClose={()=>setOpenPicture(false)}/>
                        )
                    }
                </div>
            </div>
            <hr  className="my-4"/>
            <h3 className="font-medium my-2">Personal Details</h3>
            <div className="flex items-center flex-wrap gap-2">
                <div className="flex flex-col w-2/12">
                    <label className="text-sm">First Name</label>
                    <input type="text" className="border py-2 px-1 font-semibold"/>
                </div>
                <div className="flex flex-col w-2/12">
                    <label className="text-sm">Middle Name</label>
                    <input type="text" className="border py-2 px-1 font-semibold"/>
                </div>
                <div className="flex flex-col w-2/12">
                    <label className="text-sm">Last Name</label>
                    <input type="text" className="border py-2 px-1 font-semibold"/>
                </div>
                <div className="flex flex-col w-1/12">
                    <label className="text-sm">Suffix</label>
                    <input type="text" className="border py-2 px-1 font-semibold"/>
                </div>
                <div className="flex flex-col w-1/12">
                    <label className="text-sm">Gender</label>
                    <select className="border py-2 px-1 font-semibold">
                        <option value="M">Male</option>
                        <option value="M">Female</option>
                    </select>
                </div>
                <div className="flex flex-col w-1/12">
                    <label className="text-sm ">Blood Type</label>
                    <select className="border py-2 px-1 font-semibold">
                        <option value="null">Non</option>
                        <option value="O">O</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="AB">AB</option>
                    </select>
                </div>
                <div className="flex flex-col w-2/12">
                    <label className="text-sm">Birthdate <span className="text-xs text-gray-700">(mm/dd/yyyy)</span></label>
                    <input type="text" className="border py-2 px-1 font-semibold"/>
                </div>
                <div className="flex flex-col w-2/12">
                    <label className="text-sm">Birthplace <span className="text-xs text-gray-700">(mm/dd/yyyy)</span></label>
                    <input type="text" className="border py-2 px-1 font-semibold"/>
                </div>
                <div className="flex flex-col w-2/12">
                    <label className="text-sm">Deathdate <span className="text-xs text-gray-700">(mm/dd/yyyy)</span></label>
                    <input type="text" className="border py-2 px-1 font-semibold"/>
                </div>
                <div className="flex flex-col w-1/12">
                    <label className="text-sm">Weight (kg)</label>
                    <input type="number" className="border py-2 px-1 font-semibold"/>
                </div>
                <div className="flex flex-col w-1/12">
                    <label className="text-sm">Height (cm)</label>
                    <input type="number" className="border py-2 px-1 font-semibold"/>
                </div>
                <div className="flex flex-col w-2/12">
                    <label className="text-sm">Education</label>
                    <select name="education"  className="border py-2 px-1 font-semibold">
                        <option value="elementary">Elementary</option>
                        <option value="highschool">Highschool</option>
                        <option value="undergraduate">Undergraduate</option>
                        <option value="masteral">Masteral</option>
                        <option value="doctorate">Doctorate</option>
                        <option value="non">Non</option>
                    </select>
                </div>
                <div className="flex flex-col w-1/12">
                    <label className="text-sm">Citizenship</label>
                    <input type="text" className="border py-2 px-1 font-semibold"/>
                </div>

                <div className="flex flex-col">
                    <label className="text-sm">Civil Status</label>
                    <select className="border py-2 px-1 font-semibold">
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Widowed">Widowed</option>
                        <option value="Separated">Separated</option>
                    </select>
                </div>
                <div className="flex flex-col w-2/12">
                    <label className="text-sm">Religion</label>
                    <select className="border py-2 px-1 font-semibold">
                        <option value="Roman Catholic">Catholic</option>
                        <option value="Islam">Islam</option>
                        <option value="Iglesia ni Cristo">INC</option>
                        <option value="Jehova's Witnesses">Jehova</option>
                        <option value="Buddhism">Buddhism</option>
                        <option value="Other">Others</option>
                    </select>
                </div>
            </div>
            <hr  className="my-4"/>
            <h3 className="font-medium my-2">Address</h3>
            <div className="flex items-center flex-wrap gap-2 mt-2">
                <div className="flex flex-col w-2/12">
                    <label className="text-sm">Street</label>
                    <input type="text" className="border py-2 px-1 font-semibold"/>
                </div>
                <div className="flex flex-col w-2/12">
                    <label className="text-sm">Apartment</label>
                    <input type="text" className="border py-2 px-1 font-semibold"/>
                </div>
                <div className="flex flex-col w-1/12">
                    <label className="text-sm">HouseNo</label>
                    <input type="text" className="border py-2 px-1 font-semibold"/>
                </div>
                <div className="flex flex-col w-2/12">
                    <label className="text-sm">Sitio</label>
                    <input type="text" className="border py-2 px-1 font-semibold"/>
                </div>
                <div className="flex flex-col w-2/12">
                    <label className="text-sm">Mobile Number</label>
                    <input type="text" className="border py-2 px-1 font-semibold"/>
                </div>
                <div className="flex flex-col w-2/12">
                    <label className="text-sm">Landline Number</label>
                    <input type="text" className="border py-2 px-1 font-semibold"/>
                </div>
            </div>
            <hr className="my-4"/>
            <h3 className="font-medium my-2">Emergency Contact Person</h3>
            <div className="flex items-center flex-wrap gap-2 mt-2">
                <div className="flex flex-col w-2/12">
                    <label className="text-sm">Name</label>
                    <input type="text" className="border py-2 px-1 font-semibold"/>
                </div>
                <div className="flex flex-col w-2/12">
                    <label className="text-sm">Number</label>
                    <input type="text" className="border py-2 px-1 font-semibold"/>
                </div>
                <div className="flex flex-col w-2/12">
                    <label className="text-sm">Relationship</label>
                    <input type="text" className="border py-2 px-1 font-semibold"/>
                </div>
                <div className="flex flex-col w-2/12">
                    <label className="text-sm">Address</label>
                    <input type="text" className="border py-2 px-1 font-semibold"/>
                </div>
            </div>

            <hr className="my-4"/>
            <h3 className="font-medium my-2">Employment</h3>
            <div className="flex items-center flex-wrap gap-2 mt-2">
                <div className="flex flex-col w-2/12">
                    <label className="text-sm">Occupation</label>
                    <input type="text" className="border py-2 px-1 font-semibold"/>
                </div>
                <div className="flex flex-col w-2/12">
                    <label className="text-sm">Employer</label>
                    <input type="text" className="border py-2 px-1 font-semibold"/>
                </div>
                <div className="flex flex-col w-2/12">
                    <label className="text-sm">Employer Address</label>
                    <input type="text" className="border py-2 px-1 font-semibold"/>
                </div>
                <div className="flex flex-col w-2/12">
                    <label className="text-sm">Years Employed</label>
                    <input type="number" className="border py-2 px-1 font-semibold"/>
                </div>
                <div className="flex flex-col w-2/12">
                    <label className="text-sm">Employment Status</label>
                    <select className="border py-2 px-1 font-semibold">
                        <option value="Employed">Employed</option>
                        <option value="Unemployed">Unemployed</option>
                        <option value="Retired">Retired</option>
                    </select>
                </div>
            </div>

            <hr className="my-4"/>
            <h3 className="font-medium my-2">IDs</h3>
            <div className="flex items-center flex-wrap gap-2 mt-2">
                <div className="flex flex-col w-2/12">
                    <label className="text-sm">SSS</label>
                    <input type="text" className="border py-2 px-1 font-semibold"/>
                </div>
                <div className="flex flex-col w-2/12">
                    <label className="text-sm">TIN</label>
                    <input type="text" className="border py-2 px-1 font-semibold"/>
                </div>
                <div className="flex flex-col w-2/12">
                    <label className="text-sm">PAG-IBIG</label>
                    <input type="text" className="border py-2 px-1 font-semibold"/>
                </div>
                <div className="flex flex-col w-2/12">
                    <label className="text-sm">Philhealth</label>
                    <input type="text" className="border py-2 px-1 font-semibold"/>
                </div>
            </div>
        </div>
    )
}

export default ResidentInfo;