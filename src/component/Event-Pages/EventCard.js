import Timer from "./Timer";
const EventCard = (props) => {
  return (
    <>
      <div className="mx-auto px-2 py-3 bg-white overflow-hidden  transform transition duration-500 hover:scale-105 hover:bg-slate-200 flex justify-center items-center">
        <div className="md:flex">
          <div className="md:shrink-1 md:flex xs:mx-5 xs:my-5">
            <img
              className="rounded-lg object-cover w-auto md:h-full md:w-48 lg:w-56"
              src="https://source.unsplash.com/random/1900x1080/?,landscape"
              alt="event"
            />
          </div>
          <div className="p-8">
            <p className="block mt-1 text-xl leading-tight font-bold text-black sm:text-lg">
              {props.heading}
            </p>
            <p className="mt-2 text-slate-500">{props.description}</p>
            <Timer eventDate={props.eventDate} />
            <button className="bg-lime-400 hover:bg-amber-400 w-18 px-5 py-1 my-2">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default EventCard;
// special hovering effect on event card container div-->transform h-64 transition duration-500 hover:scale-105 hover:bg-slate-200 flex justify-center items-center
{
  /* <div className="md:shrink-0">
            <img
              className="rounded-lg object-cover h-full md:h-full md:w-48 lg:w-56"
              src="https://source.unsplash.com/random/1900x1080/?,landscape"
              alt="event"
            />
          </div> */
}
