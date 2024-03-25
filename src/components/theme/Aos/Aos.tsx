"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

type Props = {};
const Aos = function ({}: Props) {
  useEffect(function () {
    AOS.init({
      duration: 1000,
      offset: 10,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);
  return null;
};

export default Aos;
