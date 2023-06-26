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
				
				<textarea type="text-field" id="comment" value={comment} name="comment" className="w-full h-16 px-2 my-2 rounded-lg outline" onChange={handleCommentChange}/>
				<button type="submit" className="px-2 font-bold rounded-lg bg-emerald-300 outline">Add Comment</button>
			</form>
		</div>
	)


}

export default NewCommentForm;