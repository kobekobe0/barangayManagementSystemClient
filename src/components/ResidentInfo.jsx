import { useState } from "react";


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
    return (
        <div className="flex flex-col p-8 w-full">
            <h3 className="font-semibold text-2xl text-gray-700">Details</h3>  
        </div>
    )
}

export default ResidentInfo;