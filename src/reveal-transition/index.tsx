import React, { useRef } from "react";
import clsx from "clsx";
import useOnScreen from "../hook/useOnScreen";
import useWindowSize from "../hook/useWindowSize";
import styles from "./styles.module.scss";

interface RevealProps {
  children?: React.ReactNode;
  htmlTag?: keyof JSX.IntrinsicAttributes;
  position?: "left" | "right" | "top" | "bottom" | "centered";
  mobilePosition?: "left" | "right" | "top" | "bottom" | "centered" | "none";
  transitionType?: "ease-in-out" | "linear";
  transitionTime?: number;
  delay?: number;
  once?: boolean;
}

const RevealTransition: React.FC<RevealProps> = (props) => {
  const {
    children,
    htmlTag = "div",
    position = "centered",
    mobilePosition,
    transitionType = "ease-in-out",
    transitionTime = 500,
    delay = 0,
    once = true,
  } = props;

  const revealRef = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(revealRef, "0px", once);
  const size = useWindowSize();
  const mq = { mobile: 375 };

  const renderReveal = clsx(
    styles["reveal-transition"],
    onScreen &&
      styles[
        `reveal-transition__${
          mobilePosition && size.width <= mq.mobile ? mobilePosition : position
        }`
      ]
  );

  const handleStyles = {
    animationDelay: `${(delay / 1000).toString()}s`,
    animationDuration: `${(transitionTime / 1000).toString()}s`,
    animationTimingFunction: transitionType,
  };

  return React.createElement(
    htmlTag,
    {
      className: renderReveal,
      style: handleStyles,
      ref: revealRef,
    },
    children
  );
};

export default RevealTransition;
