import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Booklet = {
    bookletNumber: 4355710,
    startORNumber: 4550,
    preparedBy: 'John Doe',
    items: [
        {
            date: '05/15/2024',
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
    const [booklet, setBooklet] = useState(Booklet)

    const formatInputDate = (input) => {
        const digits = input.replace(/\D/g, ''); // Remove non-digit characters
        let formatted = digits;
    
        if (digits.length >= 2) {
            formatted = `${digits.slice(0, 2)}/${digits.slice(2)}`;
        }
        if (digits.length >= 4) {
            formatted = `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
        }
    
        return formatted;
    };

    const handleInputChange = (index, field, event) => {
        const newItems = [...booklet.items]; // Create a copy of the items array
        newItems[index][field] = field === 'amount' ? parseFloat(event.target.value) : event.target.value; // Update the field of the item at the specified index
    
        setBooklet({ ...booklet, items: newItems }); // Update the state with the updated data
    };
    
    useEffect(() => {
        console.log(booklet)
    }, [booklet])
    return (
        <div className="flex gap-4 ml-64 p-8 w-full">
            <div className="shadow-lg flex w-1/4 h-fit">
                <div className="flex flex-col p-8 w-full">
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
                        <h2 className=" text-lg">{booklet?.startORNumber} - {booklet?.startORNumber + 50}</h2>
                    </div>
                    <hr  className="my-4"/>
                    <div className="mt-4 flex justify-between w-full">
                        <p className="text-gray-700">Total Amount</p>
                        <h2 className="text-2xl">
                            ₱ {booklet?.items.reduce((acc, item) => acc + item.amount, 0).toFixed(2).toLocaleString()}
                        </h2>
                    </div>
                    <button className="bg-green-500 text-white p-2 rounded-md mt-8 hover:bg-green-600 transition-all">Save Report</button>
                    <button className="bg-blue-500 text-white p-2 rounded-md mt-8 hover:bg-blue-600 transition-all">Print Report</button>
                    <button className=" text-red-400 border border-red-400 p-2 rounded-md mt-8 hover:bg-red-400 hover:text-white transition-all">Delete Booklet Entry</button>
                </div>
            </div>
            <div className="shadow-lg flex w-3/4">
                <div className="flex flex-col p-8 w-full">
                    <h3 className="font-semibold text-2xl text-gray-700">OR Entries</h3>                
                    <div className="overflow-y-auto h-[80vh] mt-4">
                    {
                        booklet.items.map((item, index) => (
                            <div key={item.ORNumber} className="flex justify-between items-center border-gray-200 w-full">
                                <p className="w-1/12 border text-center px-2 py-1 text-lg text-gray-500 font-semibold">{item.ORNumber}</p>
                                <input className="w-2/12 border px-2 py-1 text-lg " type="text" value={item.date} onChange={(e) => handleInputChange(index, 'date', e)} />
                                <input className="w-3/12 border px-2 py-1 text-lg " type="text" value={item.name} onChange={(e) => handleInputChange(index, 'name', e)} />
                                <input className="w-4/12 border px-2 py-1 text-lg " type="text" value={item.nature} onChange={(e) => handleInputChange(index, 'nature', e)} />
                                <input className="w-2/12 border px-2 py-1 text-lg " type="number" value={item.amount} onChange={(e) => handleInputChange(index, 'amount', e)} />
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