import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
    return (
        <main className="flex">
            <div className='w-64 flex flex-col bg-black text-white h-screen fixed'>
                <Sidebar/>
            </div>
            <Outlet/>
        </main>
    );
}

export default Home;