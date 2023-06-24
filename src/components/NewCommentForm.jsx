

const NewCommentForm = () => {

	return (
		<div className="w-5/6 py-2 ">
			<form className="flex flex-col items-end">
				
				<textarea type="text-field" id="comment" name="comment" className="w-full my-2 px-2 h-16 outline rounded-lg focus:outline-lime-400 focus:outline-2"/>
				<button type="submit" className=" font-bold h-8  px-2 mt-1 text-white rounded-lg  bg-lime-500 hover:bg-green-500   ">Add Comment</button>
			</form>
		</div>
	)


}

export default NewCommentForm;