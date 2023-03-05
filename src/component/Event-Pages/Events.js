import React, { Fragment } from "react";
import EventCard from "./EventCard";
const Events = () => {
  // Event Data later would be fetched from the API
  const DUMMY_EVENTS = {
    event1: {
      id: 1,
      img: "../Event-Pages/assets/anaya-katlego-CXKk4zU7anE-unsplash.jpg",
      heading: "Event 1",
      description:
        "Lorem ipsum dolor sit amet, enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia",
      eventDate: "March, 31, 2023",
    },
    event2: {
      id: 2,
      img: "../Event-Pages/assets/atul-pandey-0f3bZHXZSz8-unsplash.jpg",
      heading: "Event 2",
      description:
        "Lorem ipsum dolor sit amet, enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia",
      eventDate: "April, 31, 2023",
    },
    event3: {
      id: 3,
      img: "../Event-Pages/assets/tegan-mierle-fDostElVhN8-unsplash.jpg",
      heading: "Event 3",
      description:
        "Lorem ipsum dolor sit amet, enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia",
      eventDate: "May, 3, 2023",
    },
    event4: {
      id: 4,
      img: "../Event-Pages/assets/yannis-h-uaPaEM7MiQQ-unsplash.jpg",
      heading: "Event 4",
      description:
        "Lorem ipsum dolor sit amet, enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia",
      eventDate: "June, 31, 2023",
    },
  };
  return (
    <Fragment>
      {/* Here we have to add a Default Banner with heading "Events" and some extra paragraph */}
      <p className="text-center text-black mt-14 text-4xl font-bold">
        Upcoming Events
      </p>
      <p className="mt-2 text-slate-500 text-center mb-10 text-lg">
        Adipnon magna fugiat do.lit. Amet nostrud laborum exercitation
        velit eu. Exercitation occaecat exercitation occa
      </p>

      <div className="grid grid-cols-1 py-4 px-4 gap-x-1 gap-y-4 md:grid-cols-1  xl:grid-cols-2">
        {Object.keys(DUMMY_EVENTS).map((e) => {
          return (
            <EventCard
              key={e}
              img={DUMMY_EVENTS[e].img}
              heading={DUMMY_EVENTS[e].heading}
              description={DUMMY_EVENTS[e].description}
              eventDate={DUMMY_EVENTS[e].eventDate}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

export default Events;
//unsplash src="https://source.unsplash.com/random/1900x1080/?wallpaper,landscape"