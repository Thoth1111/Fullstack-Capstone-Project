import { Link } from 'react-router-dom';

function SplashPage() {
  return (
    <div className="bg-blue-300 flex flex-col items-center h-screen justify-center font-bold gap-4 text-3xl text-white">
      <h1>Booking room app</h1>
      <ul>
        <li className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg w-screen py-2.5 text-center mr-2 mb-2"><Link to="/signup">Sign Up</Link></li>
        <li className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg w-screen py-2.5 text-center mr-2 mb-2"><Link to="/login">Log In</Link></li>
      </ul>
    </div>
  );
}

export default SplashPage;
