import { useLocation, useNavigate } from 'react-router-dom';
import CommentsList from '../components/CommentsList';
import NewCommentForm from '../components/NewCommentForm';



function Details() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/home');
  };
  const location = useLocation();
  const {url,name, id} = location.state;
  return (
    <div className="flex relative flex-col md:grid md:grid-cols-8  ml-52 h-screen">

      <div className=" md:col-span-5 lg:col-span-6 flex items-center justify-center">

        <img src={url} alt="" />

          {/* Buon to navigate to previous page */}
        <button className="absolute flex justify-end items-center left-0 top-4 md:top-auto md:bottom-16 w-16 md:w-24 rounded-tr-3xl rounded-br-3xl h-10 md:h-16 bg-lime-500 hover:bg-green-500" onClick={handleGoBack}>

          <svg className="h-6 w-6 md:h-10 md:w-10 mr-2 md:mr-4 text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {' '}
            <path stroke="none" d="M0 0h24v24H0z" />
            {' '}
            <path d="M18 15l-6-6l-6 6h12" transform="rotate(270 12 12)" />
          </svg>

        </button>

      </div>

      <div className="  md:mx-0 p-2 md:col-span-3 lg:col-span-2 flex flex-col-reverse md:flex-col ">

        <div className="flex flex-col w-full items-center">
          <p className="text-2xl font-bold"> {name} </p>
          {/* <small className="md:text-md">$350 deposit upon any Vespa Purchase</small> */}

          <NewCommentForm vespaId={id}/>

          <CommentsList vespaId={id}/>

        </div>

        <button className="w-40  self-center mt-8 justify-between text-center mb-4 items-center rounded-2xl flex text-lg text-white border-none outline-none py-4 bg-lime-500 hover:bg-green-500 h-12">

          <p className="ml-10 font-bold text-lg">Reserve</p>

          <svg className="h-6 w-6    text-white mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {' '}
            <circle cx="12" cy="12" r="10" />
            {' '}
            <polyline points="12 16 16 12 12 8" />
            {' '}
            <line x1="8" y1="12" x2="16" y2="12" />
          </svg>

        </button>

      </div>
    </div>
  );
}

export default Details;
