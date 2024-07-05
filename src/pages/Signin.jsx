import Navbar from "../components/Navbar";
import { useParams, Link, useNavigate } from 'react-router-dom';

const Signin = () => {
    const navigate = useNavigate();
    const tempSignin = (e) => {
        e.preventDefault();
        console.log('Signing in...');
        navigate('/');
    }
    return (
        <main>
            <Navbar/>
            <div className="flex w-full justify-center p-8">
                <form className="flex flex-col shadow-xl p-8 py-12 gap-4 rounded-md w-1/3">
                    <label htmlFor="email" className="mb-2">Username:</label>
                    <input type="email" id="email" name="email" className="p-2 border border-gray-300 rounded mb-4"/>
                    <label htmlFor="password" className="mb-2">Password:</label>
                    <input type="password" id="password" name="password" className="p-2 border border-gray-300 rounded mb-4"/>
                    <button onClick={tempSignin} type="submit" className="bg-green-500 text-white p-2 rounded">Sign in</button>
                </form>
            </div> 
        </main>

    );
}
export default Signin;