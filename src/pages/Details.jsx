import CommentsList from "../components/CommentsList";
import NewCommentForm from "../components/NewCommentForm";

function Details() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-8 bg-yellow-100 ml-52 h-screen">

        <div className = " md:col-span-5 lg:col-span-6 flex items-center justify-center bg-red-200">

          <img src="https://as1.ftcdn.net/v2/jpg/04/88/07/66/1000_F_488076617_IVBsEeXAy56swgxUxXjDG3wKRTHJj2HR.jpg" alt="" />

        </div>

        <div className="  md:mx-0 p-2 md:col-span-3 lg:col-span-2 flex flex-col bg-green-200">

          <div className="flex flex-col w-full bg-orange-500 items-center">
              <p className="text-2xl font-bold"> VESPA NAME </p>
              {/* <small className="md:text-md">$350 deposit upon any Vespa Purchase</small> */}
              
              <NewCommentForm />

              <CommentsList />

              <button className="w-40  justify-between text-center items-center rounded-2xl flex text-lg text-white border-none outline-none py-4 bg-lime-500 h-10">

                  <p className="ml-10">Reserve</p>
              
                  <svg class="h-6 w-6    text-white mr-2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <polyline points="12 16 16 12 12 8" />  <line x1="8" y1="12" x2="16" y2="12" /></svg>

              </button>
          </div>

        </div>
    </div>
  );
}

export default Details;
