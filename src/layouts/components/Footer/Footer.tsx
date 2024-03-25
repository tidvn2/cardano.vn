import React from "react";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import { YoutubeIcon, TelegramIcon, TwitterIcon, RedisIcon, LinkedInIcon, EmailIcon, ArrowIcon } from "@site/src/assets";

const cx = classNames.bind(styles);
const socials = [
    YoutubeIcon,
    TelegramIcon,
    RedisIcon,
    TwitterIcon,
    LinkedInIcon,
];

const Footer = function () {
    return (
        <footer className={cx("wrapper")}>
            <div className="container">
                <div className={cx("content-wrapper")}>
                    <div className={cx("contact-via-email")}>
                        <Heading as="h3" className={cx("footer-heading-title")}>
                            Cardano
                        </Heading>
                        <p>
                            Get the latest from the Aleph Zero ecosystem and
                            engineering updates, straight to your inbox.
                        </p>
                        <form>
                            <div className={cx("contact-field")}>
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className={cx("email-input")}
                                />
                                <button
                                    type="submit"
                                    className={cx("button-subcribe")}
                                >
                                    <EmailIcon className={cx("icon-email")} />
                                    Subcribe
                                </button>
                            </div>
                            <div className={cx("checkbox-field")}>
                                <label htmlFor="check-input">
                                    I consent to receive commercial information
                                    in the form of a newsletter sent to the
                                    e-mail address provided by the Aleph Zero
                                    Foundation with registered seat in Bergliweg
                                    15, 6300 Zug. Providing consent is
                                    voluntary. Consent may be revoked at any
                                    time.
                                </label>
                            </div>
                        </form>
                        <ul className={cx("social-connection")}>
                            {socials.map((Social, index) => (
                                <li key={index}>
                                    <a href="#">
                                        <Social />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={cx("comunity")}>
                        <Heading as="h3">Cộng đồng</Heading>
                        <ul className={cx("footer-column-list")}>
                            <li className={cx("footer-item")}>
                                <Link to={""} className={cx("item-link")}>
                                    Blockchain
                                    <ArrowIcon className={cx("arrow-icon")} />
                                </Link>
                            </li>
                            <li className={cx("footer-item")}>
                                <Link to={""} className={cx("item-link")}>
                                    Blockchain
                                    <ArrowIcon className={cx("arrow-icon")} />
                                </Link>
                            </li>
                            <li className={cx("footer-item")}>
                                <Link to={""} className={cx("item-link")}>
                                    Blockchain
                                    <ArrowIcon className={cx("arrow-icon")} />
                                </Link>
                            </li>
                            <li className={cx("footer-item")}>
                                <Link to={""} className={cx("item-link")}>
                                    Blockchain
                                    <ArrowIcon className={cx("arrow-icon")} />
                                </Link>
                            </li>
                            <li className={cx("footer-item")}>
                                <Link to={""} className={cx("item-link")}>
                                    Blockchain
                                    <ArrowIcon className={cx("arrow-icon")} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={cx("courses")}>
                        <Heading as="h3">Khóa học</Heading>
                        <ul className={cx("footer-column-list")}>
                            <li className={cx("footer-item")}>
                                <Link to={""} className={cx("item-link")}>
                                    Blockchain
                                    <ArrowIcon className={cx("arrow-icon")} />
                                </Link>
                            </li>
                            <li className={cx("footer-item")}>
                                <Link to={""} className={cx("item-link")}>
                                    Blockchain
                                    <ArrowIcon className={cx("arrow-icon")} />
                                </Link>
                            </li>
                            <li className={cx("footer-item")}>
                                <Link to={""} className={cx("item-link")}>
                                    Blockchain
                                    <ArrowIcon className={cx("arrow-icon")} />
                                </Link>
                            </li>
                            <li className={cx("footer-item")}>
                                <Link to={""} className={cx("item-link")}>
                                    Blockchain
                                    <ArrowIcon className={cx("arrow-icon")} />
                                </Link>
                            </li>
                            <li className={cx("footer-item")}>
                                <Link to={""} className={cx("item-link")}>
                                    Blockchain
                                    <ArrowIcon className={cx("arrow-icon")} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={cx("upcomming-events")}>
                        <Heading as="h3">Sự kiện sắp diễn ra</Heading>
                        <div className={cx("event-image-wrapper")}>
                            <img
                                src={""}
                                className={cx("event-image")}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className={cx("copyright")}>
                    <p className={cx("text")}>Copyright © 2024 - fimi.vn</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
