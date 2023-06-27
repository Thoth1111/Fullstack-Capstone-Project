import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/home');
  };

  return (
    <button id="back-button" className="z-10 absolute left-0 top-0 m-4  " onClick={handleGoBack}>
      <svg
        className="h-20 w-20 text-white sm:h-10 sm:w-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: window.innerWidth <= 640 ? '30px' : '50px', height: window.innerWidth <= 640 ? '30px' : '50px' }}
      >
        {' '}
        <circle cx="12" cy="12" r="10" /> <polyline points="12 8 8 12 12 16" />{' '}
        <line x1="16" y1="12" x2="8" y2="12" />
      </svg>
    </button>
  );
}

export default BackButton;
