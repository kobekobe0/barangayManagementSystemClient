import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";

const Navbar = () => {
    const [signedIn, setSignedIn] = useState(false)
    return (
        <main className="flex flex-col w-full">
            <nav className="flex justify-center items-center p-8 gap-6">
                <img src={logo} alt="Cacarong Matanda Logo" className="rounded-full w-[100px]" />
                <div className="flex items-start flex-col">
                    <Link to="/" className="text-3xl font-bold text-black">CACARONG MATANDA</Link>
                    <span className="text-lg font-normal">Community Based Monitoring System</span>
                </div>
            </nav>
        </main>
    );
    }

    export default Navbar;