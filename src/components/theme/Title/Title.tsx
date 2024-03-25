import React from "react";
import Heading from "@theme/Heading";
import styles from "./Title.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type Props = {
  title: string;
  subTitle: string;
};

const Title = function ({ title, subTitle }: Props) {
  return (
    <div className={cx("container", "wrapper-title")}>
      <Heading
        as="h2"
        className={styles.title}
        data-aos="fade-up"
        data-aos-delay={500}
        data-aos-duration={500}
      >
        {title}
      </Heading>
      <p
        data-aos="fade-up"
        data-aos-delay={500}
        data-aos-duration={500}
        className={styles.subTitle}
      >
        {subTitle}
      </p>
    </div>
  );
};

export default Title;
