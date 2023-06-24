import { useGetAllCommentsQuery } from '../redux/vespaAPI';
import Comment from './Comment';



export const CommentsList = ({vespaId}) => {

	const { data: comments, isLoading: isLoadingComments } = useGetAllCommentsQuery();

	if (isLoadingComments) return <p>Loading...</p>;
	
	if (!comments) return <p>Oops! Something went wrong...</p>;

   let filteredComments = comments.filter(comment => comment.room_id === vespaId)

	return (	

		<div className='flex w-full flex-col min-h-[350px] max-h-[600px] md:max-h-[350px] scrollbar  overflow-y-auto'>
		<p className="text-2xl font-bold self-center text-sky-600">Comments</p>
		
		{filteredComments?.map((comment) => (
			<Comment key={comment.id} {...comment} />
		))}


		</div>

	)
}

export default CommentsList;