import React, { ReactNode } from "react";
import styles from "./Event.module.scss";
import { EventItem } from "@site/src/types/Generics";

import Heading from "@theme/Heading";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

type Props = {
  event: EventItem;
  className?: string;
};

function Event({ event, className }: Props) {
  return (
    <div className={cx("eventItemWrapper", className)}>
      <div className={cx("imageWrapper")}>
        <img className={cx("image")} src={event.image} />
      </div>
      <div className={cx("wrapperEventInfo")}>
        <Heading as="h3" className={cx("title")}>
          {event.title}
        </Heading>
        <p className={cx("address")}>{event.address}</p>
        <p className={cx("date")}>{event.date}</p>
      </div>
    </div>
  );
}

export default Event;
