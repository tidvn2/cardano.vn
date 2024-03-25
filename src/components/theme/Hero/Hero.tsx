import React, { useEffect, useMemo, useState } from "react";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import clsx from "clsx";
import { loadSlim } from "@tsparticles/slim";

const cx = classNames.bind(styles);
import styles from "./Hero.module.scss";
import classNames from "classnames/bind";
import { CardanoIcon } from "@site/src/assets";
const Hero = function () {
    const [init, setInit] = useState(false);
    const { siteConfig } = useDocusaurusContext();

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const options: any = useMemo(
        () => ({
            fullScreen: false,
            background: {
                color: {
                    value: "transparent",
                },
            },
            fpsLimit: 165,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 1,
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                zIndex: -1,
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 100,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "outside",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 200,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 2, max: 6 },
                },
            },
            detectRetina: true,
        }),
        [],
    );

    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            {/* {init ? (
                <Particles
                    id={clsx(styles.tsparticles)}
                    particlesLoaded={particlesLoaded}
                    options={options}
                />
            ) : null} */}

            <section className={cx("banner", "container")}>
                <div className={cx("wrapper-banner")}>
                    <div className={cx("banner-inner")}>
                        <div data-aos="fade-left" className={cx("banner-content")}>
                            <h1 className={cx("banner-title")}>
                                <div className={cx("banner-title-up")}>Platform for</div>
                                <div className={cx("banner-title-down")}>The crypto Industry</div>
                            </h1>
                            <div className={cx("banner-intro")}>
                                At vero eos et accusamus et iusto odio ignissimos ducimus qui blanditiis praesentium um deleniti atque corrupti.
                            </div>
                            {/* Button goes here */}
                            <Link href="/docs/intro" className={cx("banner-button")}>
                                Get started
                            </Link>
                        </div>
                        <div data-aos="fade-right" className={cx("banner-image-wrapper")}>
                            <div className={cx("banner-image-container")}>
                                <CardanoIcon className={cx("branner-image")} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Hero;
