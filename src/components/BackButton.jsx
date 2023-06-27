import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button className="absolute top-0 left-0 z-10 m-4 " onClick={handleGoBack}>
      <svg
        className="w-20 h-20 text-white sm:h-10 sm:w-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {' '}
        <circle cx="12" cy="12" r="10" />
        {' '}
        <polyline points="12 8 8 12 12 16" />
        {' '}
        <line x1="16" y1="12" x2="8" y2="12" />
      </svg>
    </button>
  );
}

export default BackButton;
