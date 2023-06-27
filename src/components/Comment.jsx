function Comment({ content }) {
  const colors = ['bg-orange-200', 'bg-amber-200', 'bg-green-200', 'bg-yellow-200', 'bg-purple-200', 'bg-pink-200', 'bg-lime-200', 'bg-emerald-200', 'bg-sky-200', 'bg-fuchsia-200', 'bg-rose-200'];

  const chosenColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className={
			`flex flex-col items-center justify-center p-2 m-2 rounded-lg ${chosenColor}`
		}
    >

      <p>{content}</p>
    </div>
  );
}

export default Comment;
