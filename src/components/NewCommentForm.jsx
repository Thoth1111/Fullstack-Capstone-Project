

const NewCommentForm = () => {

	return (
		<div className="w-5/6 py-2 ">
			<form className="flex flex-col items-end">
				
				<textarea type="text-field" id="comment" name="comment" className="w-full my-2 px-2 h-16 outline rounded-lg"/>
				<button type="submit" className=" font-bold bg-emerald-300 px-2  rounded-lg outline ">Add Comment</button>
			</form>
		</div>
	)


}

export default NewCommentForm;