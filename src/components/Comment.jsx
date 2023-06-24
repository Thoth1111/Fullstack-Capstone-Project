

const Comment = ({ comment }) => {

	let colors = [ 'bg-orange-200', 'bg-amber-200', 'bg-green-200', 'bg-yellow-200', 'bg-purple-100', 'bg-pink-100'  ]

	let chosenColor = colors[Math.floor(Math.random() * colors.length)];

	return (
		<div className={
			`flex flex-col items-center justify-center p-2 m-2 rounded-lg ${chosenColor}`
		}>
			<p>Comment Text Goes Here</p>
		</div>
	);
}

export default Comment;