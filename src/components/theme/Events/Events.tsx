import clsx from "clsx";
import Title from "@site/src/components/theme/Title";
import styles from "./Events.module.scss";
import React from "react";
import { EventItem } from "@site/src/types/Generics";
import Event from "./Event";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type Props = {
  events: EventItem[];
};

export default function Events({ events }: Props): JSX.Element {
  return (
    <section className={cx("events")}>
      <Title
        title="Event"
        subTitle="Come meet us in IRL. The Aleph Zero community is active
                    across hackathons and events in the web3 space."
      />
      <div className="container">
        <div className={cx("eventList")}>
          {events.map((event, idx) => (
            <Event className={cx("event-item")} event={event} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
