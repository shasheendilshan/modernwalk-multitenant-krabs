import React from "react";

const theme_01 = {
  primary: "#2BD9AF",
  secondary: "#FF5E84",

  background_primary: "#b2f7ef",

  btn_primary_normal: "#EB8120",
  btn_primary_hover: "#F17502",
  btn_primary_active: "#D16400",
  btn_primary_disabled: "#F7CDA6",
  btn_outlined_hover: "#F7CDA6",
  btn_outlined_active: "#EBB888",
  btn_outlined_disabled: "#ffffff",
  btn_danger_normal: "#E1273D",
  btn_danger_hover: "#C01227",
  btn_danger_active: "#9D0215",
  btn_danger_outlined_hover: "#F9D4D8",
  btn_danger_outlined_active: "#F0939E",

  text_main: "#001948",
  text_active: "#7C89A1",
  text_inactive: "#C6CBD5",
  elephant_gray: "#F7F8F9",
  elephant_contrast: "#F0F2F5",

  error: "#FF5A43",
};
const theme_02 = {
  primary: "#D782BA",
  secondary: "#EEB1D5",

  btn_primary_normal: "#E18AD4",
  btn_primary_hover: "#D782BA",
  btn_primary_active: "#B879A3",
  btn_primary_disabled: "#f3d1ee",
  btn_outlined_hover: "#f3d1ee",
  btn_outlined_active: "#d1b3c4",
  btn_outlined_disabled: "#ffffff",
  btn_danger_normal: "#E1273D",
  btn_danger_hover: "#C01227",
  btn_danger_active: "#9D0215",
  btn_danger_outlined_hover: "#F9D4D8",
  btn_danger_outlined_active: "#F0939E",

  text_main: "#4E1D3D",
  text_active: "#8E5B7D",
  text_inactive: "#C6CBD5",
  elephant_gray: "#F7F8F9",
  elephant_contrast: "#F0F2F5",

  error: "#FF5A43",
};

const RootStyleLoader = ({ theme }) => {
  var appTheme = theme;

  return (
    <style>
      {`
        :root {
            --primary:${appTheme.primary};
            --secondary:${appTheme.secondary};

            --background_primary:${appTheme.background_primary};

            --btn_primary_normal:${appTheme.btn_primary_normal};
            --btn_primary_hover: ${appTheme.btn_primary_hover};
            --btn_primary_active: ${appTheme.btn_primary_active};
            --btn_primary_disabled: ${appTheme.btn_primary_disabled};
            --btn_outlined_hover: ${appTheme.btn_outlined_hover};
            --btn_outlined_active: ${appTheme.btn_outlined_active};
            --btn_outlined_disabled: ${appTheme.btn_outlined_disabled};
            --btn_danger_normal: ${appTheme.btn_danger_normal};
            --btn_danger_hover: ${appTheme.btn_danger_hover};
            --btn_danger_active: ${appTheme.btn_danger_active};
            --btn_danger_outlined_hover: ${appTheme.btn_danger_outlined_hover};
            --btn_danger_outlined_active: ${appTheme.btn_danger_outlined_active};

            --text_main: ${appTheme.text_main};
            --text_active: ${appTheme.text_active};
            --text_inactive: ${appTheme.text_inactive};
            --elephant_gray: ${appTheme.elephant_gray};
            --elephant_contrast: ${appTheme.elephant_contrast};

            --error: ${appTheme.error};    
            
        }
     `}
    </style>
  );
};

export default RootStyleLoader;
