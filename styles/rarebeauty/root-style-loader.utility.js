import React from "react";

const RootStyleLoader = (props) => {
  return (
    <style>
      {`
        :root {
            --primary:#D782BA;
            --secondary:#EEB1D5;

            --btn_primary_normal:#E18AD4;
            --btn_primary_hover: #D782BA;
            --btn_primary_active: #B879A3;
            --btn_primary_disabled: #F7CDA6;
            --btn_outlined_hover: #F7CDA6;
            --btn_outlined_active: #EBB888;
            --btn_outlined_disabled: #ffffff;
            --btn_danger_normal: #E1273D;
            --btn_danger_hover: #C01227;
            --btn_danger_active: #9D0215;
            --btn_danger_outlined_hover: #F9D4D8;
            --btn_danger_outlined_active: #F0939E;

            --text_main: #4E1D3D;
            --text_active: #8E5B7D;
            --text_inactive: #C6CBD5;
            --elephant_gray: #F7F8F9;
            --elephant_contrast: #F0F2F5;

            --error: #FF5A43;    
            
        }
     `}
    </style>
  );
};

export default RootStyleLoader;
