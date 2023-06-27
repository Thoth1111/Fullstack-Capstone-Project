import { useLocation, useNavigate } from 'react-router-dom';
import CommentsList from '../components/CommentsList';
import NewCommentForm from '../components/NewCommentForm';

function Details() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/home');
  };

  const handleReserve = () => {
    navigate('/reserve', { state: { id } });
  };

  const location = useLocation();
  const { url, name, id } = location.state;
  return (
    <div className="relative flex flex-col h-screen md:grid md:grid-cols-8 md:ml-52">

      <div className="flex items-center justify-center md:col-span-5 lg:col-span-6">

        <img src={url} alt="" className="w-full" />

        {/* Buon to navigate to previous page */}
        <button className="absolute left-0 flex items-center justify-end w-16 h-10 top-4 md:top-auto md:bottom-16 md:w-24 rounded-tr-3xl rounded-br-3xl md:h-16 bg-lime-500 hover:bg-green-500" onClick={handleGoBack}>

          <svg className="w-6 h-6 mr-2 text-white md:h-10 md:w-10 md:mr-4" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {' '}
            <path stroke="none" d="M0 0h24v24H0z" />
            {' '}
            <path d="M18 15l-6-6l-6 6h12" transform="rotate(270 12 12)" />
          </svg>

        </button>

      </div>

      <div className="flex flex-col-reverse p-2 mt-2 md:mx-0 md:col-span-3 lg:col-span-2 md:flex-col">

        <div className="flex flex-col items-center w-full">
          <p className="text-2xl font-bold">
            {' '}
            {name}
            {' '}
          </p>
          {/* <small className="md:text-md">$350 deposit upon any Vespa Purchase</small> */}

          <NewCommentForm vespaId={id} />

          <CommentsList vespaId={id} />

        </div>

        <button className="flex items-center self-center justify-between w-40 h-12 py-4 mt-8 mb-4 text-lg text-center text-white border-none outline-none rounded-2xl bg-lime-500 hover:bg-green-500" onClick={handleReserve}>

          <p className="ml-10 text-lg font-bold">Reserve</p>

          <svg className="w-6 h-6 mr-2 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
