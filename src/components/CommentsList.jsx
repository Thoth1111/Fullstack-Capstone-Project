import { useGetAllCommentsQuery } from '../redux/vespaAPI';
import Comment from './Comment';



export const CommentsList = ({vespaId}) => {

	const { data: comments, isLoading: isLoadingComments } = useGetAllCommentsQuery();

	if (isLoadingComments) return <p>Loading...</p>;
	
	if (!comments) return <p>Oops! Something went wrong...</p>;

   let filteredComments = comments.filter(comment => comment.vespa_id === vespaId)

	return (	

		<div className='flex w-full flex-col  max-h-[600px] md:max-h-[400px] overflow-y-auto'>
		<p className="self-center text-2xl font-bold text-sky-600">Comments</p>
		
		{filteredComments?.map((comment) => (
			<Comment key={comment.id} {...comment} />
		))}


		</div>

	)
}

export default CommentsList;