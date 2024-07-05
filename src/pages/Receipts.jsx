import { Link } from "react-router-dom"
import AddBookletEntry from "../components/AddBookletEntry"
import { useState } from "react"

const booklet = [
    {
        _id: 1,
        date: '2021-01-01',
        amount: 100.00,
        bookletNumber: 123,
        preparedBy: 'John Doe',

    },
    {
        _id: 2,
        date: '2021-01-02',
        amount: 200.00,
        bookletNumber: 124,
        preparedBy: 'Jane Doe',
    },
    {
        _id: 3,
        date: '2021-01-03',
        amount: 300.00,
        bookletNumber: 125,
        preparedBy: 'John Doe',
    }
]

const BookletCard = ({book}) => {
    return (
        <Link to={`${book._id}`} className="w-full hover:bg-gray-200 transition-all rounded-md border border-b my-2 p-4 flex justify-between items-center cursor-pointer">
            <div className="flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="black" d="M8 2v20H4v-4H2v-2h2v-3H2v-2h2V8H2V6h2V2zm12.005 0C21.107 2 22 2.898 22 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H10V2z"/></svg>
                <span className="text-lg font-semibold text-gray-500">
                    {book.bookletNumber} <span className="text-sm font-light">Booklet</span>
                </span>
            </div>
            <div>
                <span className="text-sm font-semibold text-gray-500">
                        {new Date(book.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
            </div>

        </Link>
    )
}


const Receipts = () => {
    const [addModal, setAddModal] = useState(false)
    return (
        <div className="flex p-8 flex-col ml-64 w-full">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-semibold">Receipts</h1>
                <div className="flex items-center gap-4">
                    <input className="p-2 border border-gray-400 rounded-md" type="text" placeholder="search booklet number" />
                    <button onClick={()=> setAddModal(true)} className="bg-green-500 text-white px-4 py-2 rounded-md">Add Entry</button>
                </div>
                
            </div>
            <div className="flex flex-col w-full mt-8">
                {
                    booklet?.map((book, index) => (
                        <BookletCard key={book._id} book={book} />
                    ))
                }
            </div>
            {
                addModal && <AddBookletEntry onClose={()=>setAddModal(false)} />
            }
        </div>
    );
}

export default Receipts;