const CensusForm = ({resident, edit, temp}) => {
    return (
        <div className="flex flex-wrap gap-2 my-2">
                <div className="flex flex-col w-[7.5%]">
                    <label className="text-xs" htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" className="border-b border px-2 py-1" defaultValue={resident?.name.last} disabled={!edit}/>
                </div>
                <div className="flex flex-col w-[10%]">
                    <label className="text-xs" htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" className="border-b border px-2 py-1" defaultValue={resident?.name.first} disabled={!edit}/>
                </div>
                <div className="flex flex-col w-[7.5%]">
                    <label className="text-xs" htmlFor="middleName">Middle Name</label>
                    <input type="text" name="middleName" className="border-b border px-2 py-1" defaultValue={resident?.name.middle} disabled={!edit}/>
                </div>
                <div className="flex flex-col w-[3%]">
                    <label className="text-xs" htmlFor="suffix">Suffix</label>
                    <input type="text" name="suffix" className="border-b border px-2 py-1" defaultValue={resident?.name.suffix} disabled={!edit}/>
                </div>

                <div className="flex flex-col w-[7%]">
                    <label className="text-xs" htmlFor="dob">Date Of Birth</label>
                    <input type="text" name="dob" className="border-b border px-2 py-1" defaultValue={resident?.dateOfBirth} value={temp} disabled={!edit} onChange={(e) => setTemp(handleDateInput(e))}/>
                </div>
                <div className="flex flex-col w-[5%]">
                    <label className="text-xs" htmlFor="sex">Gender</label>
                    <select className="border-b border px-2 py-1" name="sex" defaultValue={resident?.sex} disabled={!edit}>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                    </select>
                </div>
                <div className="flex flex-col w-[7%]">
                    <label className="text-xs" htmlFor="civilStatus">Civil Status</label>
                    <select className="border-b border px-2 py-1" name="civilStatus" defaultValue={resident?.civilStatus} disabled={!edit}>
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                        <option value="annulled">Annulled</option>
                        <option value="divorce">Divorced</option>
                        <option value="widowed">Widowed</option>
                    </select>
                </div>
                <div className="flex flex-col w-[8%]">
                    <label className="text-xs" htmlFor="occupation">Occupation</label>
                    <input type="text" name="occupation" className="border-b border px-2 py-1" defaultValue={resident?.occupation} disabled={!edit}/>
                </div>
                <div className="flex flex-col w-[5%]">
                    <label className="text-xs" htmlFor="educationalAttainment">Education</label>
                    <select className="border-b border px-2 py-1" name="educationalAttainment" defaultValue={resident?.educationalAttainment} disabled={!edit}>
                        <option value="elementary">Elementary</option>
                        <option value="highschool">Highschool</option>
                        <option value="undergraduate">Undergraduate</option>
                        <option value="masteral">Masteral</option>
                        <option value="doctorate">Doctorate</option>
                        <option value="non">Non</option>
                    </select>
                </div>

                <div className="flex flex-col w-[5%]">
                    <label className="text-xs" htmlFor="religion">Religion</label>
                    <select className="border-b border px-2 py-1" name="religion" defaultValue={resident?.religion} disabled={!edit}>
                        <option value="Roman Catholic">Catholic</option>
                        <option value="Islam">Islam</option>
                        <option value="Iglesia ni Cristo">INC</option>
                        <option value="Jehova's Witnesses">Jehova</option>
                        <option value="Buddhism">Buddhism</option>
                        <option value="Other">Others</option>
                    </select>
                </div>
                <div className="flex flex-col w-[5%]">
                    <label className="text-xs" htmlFor="sector">Sector</label>
                    <select className="border-b border px-2 py-1" name="sector" defaultValue={resident?.sector || null} disabled={!edit}>
                        <option value="null">None</option>
                        <option value="pwd">PWD</option>
                        <option value="senior">Senior Citizen</option>
                        <option value="solo">Solo Parent</option>
                    </select>
                </div>
                <div className="flex flex-col w-[5%]">
                    <label className="text-xs" htmlFor="voterStatus">Registered Voter</label>
                    <select className="border-b border px-2 py-1" name="voterStatus" defaultValue={resident?.votingStatus?.toString()} disabled={!edit}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div className="flex flex-col w-[4%]">
                    <label className="text-xs" htmlFor="pregnant">Pregnant</label>
                    <select className="border-b border px-2 py-1" name="pregnant" defaultValue={resident?.pregnant?.toString()} disabled={!edit}>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
                </div>
                <div className="flex flex-col w-[4%]">
                    <label className="text-xs" htmlFor="p4">4P's</label>
                    <select className="border-b border px-2 py-1" name="p4" defaultValue={resident?.p4?.toString()} disabled={!edit}>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
                </div>
                <div className="flex flex-col w-[5%]">
                    <label className="text-xs" htmlFor="registeredBusiness">Reg Business</label>
                    <select className="border-b border px-2 py-1" name="registeredBusiness" defaultValue={resident?.registeredBusiness?.toString()} disabled={!edit}>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
                </div>
        </div>
    
    )
}

export default CensusForm;
