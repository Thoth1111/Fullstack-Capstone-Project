import Comment from './Comment';

export const CommentsList = ({id}) => {

	return (	

		<div className='bg-green-400 flex w-full flex-col  max-h-[600px] md:max-h-[400px] overflow-y-auto'>
		<p className="text-2xl font-bold self-center text-sky-600">Comments</p>
		
		<Comment />
		<Comment />
		<Comment />
		<Comment />
		<Comment />
		<Comment />
		<Comment />
		<Comment />
		<Comment />
		<Comment />
		<Comment />

		</div>

	)
}

export default CommentsList;