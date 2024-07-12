import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import API_URL from "../constants/api";
import InputField from "../components/receipts/InputField";

const Booklet = {
    bookletNumber: 4355710,
    startORNumber: 4550,
    endORNumber: 4600,
    preparedBy: 'John Doe',
    items: [
        {
            date: null,
            amount: 100.00,
            ORNumber: 4550,
            name: 'Yun Huang',
            nature: 'Barangay CLR'
        },
        {
            date: '05/15/2024',
            amount: 2030.01,
            ORNumber: 4551,
            name: 'Jane Doe',
            nature: 'Barangay CLR'
        },
        {
            date: '05/15/2024',
            amount: 300.00,
            ORNumber: 4552,
            name: 'John Doe',
            nature: 'Barangay CLR'
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4554,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4555,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4556,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4557,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4558,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4559,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4560,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4561,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4562,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4563,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4564,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4565,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4566,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4567,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4568,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4569,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4570,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4571,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4572,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4573,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4574,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 45575,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4576,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4577,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4578,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4579,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4580,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4581,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4582,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4583,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4584,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4585,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4586,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4587,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4588,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4589,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4590,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4591,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4592,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4593,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4594,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4595,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4596,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4597,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4598,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4599,
            name: '',
            nature: ''
        },
        {
            date: '',
            amount: 0,
            ORNumber: 4600,
            name: '',
            nature: ''
        },
    
    ]
}

const ReceiptItem = () => {
    const {id} = useParams()
    const [booklet, setBooklet] = useState(null)
    const [yearToAdd, setYearToAdd] = useState('')
    const [monthToAdd, setMonthToAdd] = useState('')
    const [isSaved, setIsSaved] = useState(true)

    const fetchBooklet = async () => {
        try {
            const {data} = await axios.get(`${API_URL}receipt/${id}`)
            setBooklet(data.data)
            console.log(data.data)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        fetchBooklet()
    }, [])

    const handleInputChange = (index, field, event) => {
        if(isSaved) setIsSaved(false)

        setBooklet((prevBooklet) => {
          const newItems = [...prevBooklet.items];
          let value = event.target.value;
      
          if (field === 'amount') {
            value = value === '' ? '0' : value;
            if (value.length > 1 && value[0] === '0') {
              value = value.slice(1);
            }
            value = parseFloat(value) || 0;
          }
      
          if (field === 'date') {
            if (/[^0-9-]/.test(value)) {
              return prevBooklet; // No need to update if invalid date format
            }
      
            let formattedDate;
            if (value.length === 8) {
              formattedDate = `${value.slice(0, 4)}-${value.slice(4, 6)}-${value.slice(6, 8)}`;
            } else if (value.length === 9) {
              formattedDate = value.replace(/-/g, '');
            } else if (value.length >= 10) {
              formattedDate = value.slice(0, 10);
            } else {
              formattedDate = value;
            }
            value = formattedDate;
          }
      
          newItems[index][field] = value;
          return { ...prevBooklet, items: newItems }; // Update only the items property
        });
    };

    const addYearToDateFields = () => {
        if(yearToAdd.length !== 4) {
            if(parseInt(yearToAdd) < 1970) {
                setYearToAdd('');
                toast.error('Please enter a valid year');
                return;
            }
            toast.error('Please enter a valid year');
            return;
        }
        const newItems = booklet.items.map(item => {
            if (item.date === '' || item.date === null){
                return {...item, date: yearToAdd}
            }
            return item
        })
        setBooklet({...booklet, items: newItems})
        setYearToAdd('')
    }

    const addMonthToDateFields = () => {
        console.log(monthToAdd)
        const newItems = booklet.items.map(item => {
            if (item.date.trim().length === 4){
                return {...item, date: item.date + monthToAdd}
            }
            return item
        })
        
        setBooklet({...booklet, items: newItems})
    }
    
    const handleSave = () => {
        setIsSaved(true)
        console.log(booklet.items)
    }

    if (!booklet) {
        return <div>Loading...</div>
    }

    return (
        <div className="flex gap-4 ml-64 p-8 w-full">
            <div className="flex flex-col w-1/4 h-fit">
                <div className="flex shadow-lg mb-4 flex-col p-8 w-full">
                    <div className="flex flex-col gap-2">
                        <p className="text-sm text-gray-700">Booklet Number</p>
                        <h2 className="text-4xl font-semibold">{booklet?.bookletNumber}</h2>
                    </div>
                    <div className="mt-8 flex justify-between w-full">
                        <p className="text-gray-700">Prepared By: </p>
                        <h2 className="font-semibold text-lg">{booklet?.preparedBy}</h2>
                    </div>
                    <div className="mt-4 flex justify-between w-full">
                        <p className="text-gray-700">OR Numbers</p>
                        <h2 className=" text-lg">{booklet?.startOfOR} - {booklet?.endOfOR}</h2>
                    </div>
                    <hr  className="my-4"/>
                    <div className="mt-4 flex justify-between w-full">
                        <p className="text-gray-700">Total Amount</p>
                        <h2 className="text-2xl">
                            ₱ {booklet?.items.reduce((acc, item) => acc + item.amount, 0).toFixed(2).toLocaleString()}
                        </h2>
                    </div>
                    <button className="bg-green-500 text-white p-2 rounded-md mt-8 hover:bg-green-600 transition-all" onClick={handleSave}>Save Report</button>
                    <button className="bg-blue-500 text-white p-2 rounded-md mt-8 hover:bg-blue-600 transition-all">Print Report</button>
                    <button className=" text-red-400 border border-red-400 p-2 rounded-md mt-8 hover:bg-red-400 hover:text-white transition-all">Delete Booklet Entry</button>
                </div>
                <div className="flex shadow-lg mb-4 flex-col p-8 w-full">
                    <div className="flex flex-col flex-wrap gap-2 w-full">
                        <p className="text-sm text-gray-700">Add Year to Date Fields</p>
                        <div className="w-full">
                            <input className="border p-2 w-4/5" type="number" value={yearToAdd} onChange={(e) => setYearToAdd(e.target.value)} />
                            <button className="bg-green-500 w-1/5 text-white p-2 mt-2 hover:bg-green-600 transition-all" onClick={addYearToDateFields}>Insert</button>
                        </div>                        
                    </div>
                    <div className="flex flex-col flex-wrap gap-2 w-full">
                        <p className="text-sm text-gray-700 mt-4">Add Month to Date Fields</p>
                        <div className="w-full">
                            <select className="border p-2 w-4/5" name="month" onChange={e=>setMonthToAdd(e.target.value)}>
                                <option value="01">01 - January</option>
                                <option value="02">02 - February</option>
                                <option value="03">03 - March</option>
                                <option value="04">04 - April</option>
                                <option value="05">05 - May</option>
                                <option value="06">06 - June</option>
                                <option value="07">07 - July</option>
                                <option value="08">08 - August</option>
                                <option value="09">09 - September</option>
                                <option value="10">10 - October</option>
                                <option value="11">11 - November</option>
                                <option value="12">12 - December</option>
                            </select>
                            <button className="bg-green-500 text-white p-2 w-1/5 mt-2 hover:bg-green-600 transition-all" onClick={() => addMonthToDateFields()}>Insert</button>    
                        </div>
                    </div>
                </div>
            </div>
            <div className="shadow-lg flex w-3/4">
                <div className="flex flex-col p-8 w-full">
                    <div className="flex gap-4 items-center">
                        <h3 className="font-semibold text-2xl text-gray-700">OR Entries</h3>  
                        <p className={`
                            ${isSaved ? 'bg-green-300' : 'bg-yellow-300'}
                            text-white h-7 w-7 flex items-center justify-center rounded-full text-xs
                        `}>
                            {
                                isSaved 
                                    ? <svg xmlns="http://www.w3.org/2000/svg" width="1.5" height="1.5" viewBox="0 0 20 20"><path fill="green" d="m15.3 5.3l-6.8 6.8l-2.8-2.8l-1.4 1.4l4.2 4.2l8.2-8.2z"/></svg>
                                    : <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32"><path fill="red" d="M30 19.4L28.6 18L25 21.6L21.4 18L20 19.4l3.6 3.6l-3.6 3.6l1.4 1.4l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6z"/><path fill="black" d="M16 26h-4v-8h4v-2h-4c-1.1 0-2 .9-2 2v8H6V6h4v4c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V6.4l4 4V16h2v-6c0-.3-.1-.5-.3-.7l-5-5c-.2-.2-.4-.3-.7-.3H6c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h10zM12 6h8v4h-8z"/></svg>
                            }
                        </p>
                    </div>
                    <div className="overflow-y-auto h-[80vh] mt-4">
                        <div className="flex justify-between items-center border-gray-200 w-full">
                            <p className="w-1/12 border text-center px-2 py-1 text-lg text-gray-800 font-semibold">ORno</p>
                            <p className="w-2/12 border text-center px-2 py-1 text-lg text-gray-800 font-semibold flex items-center justify-center">Date <span className="text-xs">(yyyy-mm-dd)</span></p>
                            <p className="w-3/12 border text-center px-2 py-1 text-lg text-gray-800 font-semibold">Name</p>
                            <p className="w-4/12 border text-center px-2 py-1 text-lg text-gray-800 font-semibold">Nature</p>
                            <p className="w-2/12 border text-center px-2 py-1 text-lg text-gray-800 font-semibold">Amount</p>
                        </div>
                        {
                            booklet?.items?.map((item, index) => (
                                <div key={item.ORNumber} className="flex justify-between items-center border-gray-200 w-full">
                                    <p className="w-1/12 border text-center px-2 py-1 text-lg text-gray-500 font-semibold">{item?.ORNumber}</p>
                                    <InputField width={'w-2/12'} label="Date" value={item?.date} onChange={(e) => handleInputChange(index, 'date', e)} />
                                    <InputField width={'w-3/12'} label="Name" value={item?.name} onChange={(e) => handleInputChange(index, 'name', e)} />
                                    <InputField width={'w-4/12'} label="Nature" value={item?.nature} onChange={(e) => handleInputChange(index, 'nature', e)} />
                                    <InputField width={'w-2/12'} label="Amount" value={item?.amount.toString()} onChange={(e) => handleInputChange(index, 'amount', e)} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReceiptItem