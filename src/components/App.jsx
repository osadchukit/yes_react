import { PageTitle } from "./PageTitle/PageTitle";
import { EventBoard } from "./EventBoard/EventBoard";
import upcomingEvent from "../upcomming-events.json";

export const App = () => {
  return (
    <div>
      <PageTitle text="Your Editing Service" />
      <EventBoard events={upcomingEvent} />
    </div>
  );
};
