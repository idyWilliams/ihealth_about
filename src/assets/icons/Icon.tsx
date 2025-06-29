/* eslint-disable simple-import-sort/imports */
import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";

// Import all your SVG files with correct names
import home_active from "@/assets/icons/home.svg";
import home_inactive from "@/assets/icons/home-inactive.svg";
import profile_active from "@/assets/icons/profile_active.svg";
import profile_inactive from "@/assets/icons/profile_inactive.svg";
import bell from "@/assets/icons/bell.svg";
import search from "@/assets/icons/search.svg";
import chat from "@/assets/icons/message-square.svg";
import send from "@/assets/icons/send.svg";
import arrowLeft from "@/assets/icons/arrow-left.svg";
import check from "@/assets/icons/check.svg";
import close from "@/assets/icons/close.svg";
import twitter from "@/assets/icons/twitter.svg";
import linkedin from "@/assets/icons/linkedin.svg";
import mission from "@/assets/icons/mission.svg";
import vision from "@/assets/icons/vision.svg";
import values from "@/assets/icons/values.svg";

import { Theme } from "@/src/constants/Colors";

type IconFunction = React.FC<SvgProps>;

export const ICONS = {
  home_active,
  home_inactive,
  profile_active,
  profile_inactive,
  arrowLeft,
  bell,
  chat,
  search,
  send,
  check,
  close,
  twitter,
  linkedin,
  mission,
  vision,
  values,
};

export type IconName = keyof typeof ICONS;
export type IconProps = SvgProps & {
  name?: IconName;
  size?: number;
  style?: StyleProp<ViewStyle>;
  stroke?: string;
  outerStroke?: string;
  color?: keyof Theme["colors"];
};

/**
 * Custom Icon component based on design systems used in the figma
 */
function Icon({
  name,
  color,
  fill = "none",
  size = 24,
  style,
  ...props
}: IconProps) {
  const IconImpl: IconFunction = ICONS[name as IconName];
  return IconImpl ? (
    <IconImpl
      height={size}
      color={color}
      style={style}
      fill={fill}
      width={size}
      {...props}
    />
  ) : null;
}

export default Icon;
