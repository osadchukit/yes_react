// import { computeHeadingLevel } from "@testing-library/react";
import css from "./EventBoard.module.css";

export const EventBoard = ({ events }) => {
  console.log(events);
  return (
    <div className={css.eventBoard}>
      Board events
    </div>
  );
};
