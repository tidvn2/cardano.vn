import classNames from "classnames/bind";
import React, { useState } from "react";
import Slider, { Settings } from "react-slick";
import styles from "./TabList.module.scss";
import { CourseType } from "@site/src/types/Generics";
import videos from "@site/src/data/videos";
const cx = classNames.bind(styles);

type Props = {
    tabs: CourseType[];
};

const TabList = function ({ tabs }: Props) {
    const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);

    const settings: Settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
    };

    const handleActiveTab = function (index: number) {
        setCurrentTabIndex(index);
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("header-tabs")}>
                <div className={cx("line-bottom")} />
                <Slider {...settings}>
                    {tabs.map((tab, index) => (
                        <li
                            key={tab.id}
                            className={cx("tab-name", {
                                active: index === currentTabIndex,
                            })}
                            onClick={() => handleActiveTab(index)}
                        >
                            <span>{tab.name}</span>
                        </li>
                    ))}
                </Slider>
            </div>
            <ul className={cx("video-list")}>
                {videos.map(({ id, name, url }) => (
                    <li key={id} className={cx("video-item-wrapper")}>
                        <span className={cx("box")} />
                        <span>{name}</span>
                    </li>
                ))}
            </ul>
            {/* <div className={cx("content")}>{tabs[currentTabIndex].content}</div> */}
        </div>
    );
};

export default TabList;
