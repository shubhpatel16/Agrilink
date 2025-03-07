import React from "react";
import { useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";

const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={4} />
          <div className="w-full p-4">
            {allEvents.length > 0 ? (
              allEvents.map((event, index) => (
                <EventCard key={index} active={true} data={event} />
              ))
            ) : (
              <h4 className="text-center w-full">No Events available!</h4>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EventsPage;
