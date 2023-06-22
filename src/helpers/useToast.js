import {useState, useEffect} from 'react';

export default function useToast() {

	const [displayBool, setDisplayBool] = useState(false);
	const [message, setMessage] = useState([]);
	const [type, setType] = useState([]);



	const showToast = (message, type) => {
			setDisplayBool(true);
			const timer = setTimeout(() => {
				setDisplayBool(false);
			}, 2200);
			setMessage(message);
			setType(type);
	}




	return [displayBool, message, type,showToast ];
}