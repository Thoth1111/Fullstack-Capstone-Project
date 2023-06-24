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

              <button>

                  Reserve

              </button>
          </div>

        </div>
    </div>
  );
}

export default Details;
