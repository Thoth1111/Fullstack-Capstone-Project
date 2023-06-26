import { useState } from "react";
import { useSelector } from "react-redux";

import { useCreateCommentMutation } from "../redux/vespaAPI";


const NewCommentForm = ({vespaId}) => {



	const [createComment, { isLoading: isCreatingComment }] = useCreateCommentMutation();
	const userID = useSelector((state) => state.persistedReducer.id);
	const [comment, setComment] = useState('');

	const handleCommentChange = (event) => {
		setComment(event.target.value);
	}

	const handleSubmit= (event) => {
		event.preventDefault();

		let body = {
			comment: {
				content: comment,
				vespa_id: vespaId,
				user_id : userID,
			}
				

	}
		createComment(body);
		setComment('');
	}
	return (
		<div className="w-5/6 py-2 ">
			<form className="flex flex-col items-end" onSubmit={handleSubmit}>
				
				<textarea type="text-field" value={comment}  required onChange={handleCommentChange} id="comment" name="comment" className="w-full my-2 px-2 h-16 outline rounded-lg focus:outline-lime-400 focus:outline-2"/>
				<button type="submit" className=" font-bold h-8  px-2 mt-1 text-white rounded-lg  bg-lime-500 hover:bg-green-500   ">Add Comment</button>
			</form>
		</div>
	)


}

export default NewCommentForm;