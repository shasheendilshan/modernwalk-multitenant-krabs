import React from "react";

const RootStyleLoader = (props) => {
  return (
    <style>
      {`
        :root {
            --primary:#2BD9AF;
            --secondary:#FF5E84;

            --btn_primary_normal:#EB8120;
            --btn_primary_hover: #F17502;
            --btn_primary_active: #D16400;
            --btn_primary_disabled: #F7CDA6;
            --btn_outlined_hover: #F7CDA6;
            --btn_outlined_active: #EBB888;
            --btn_outlined_disabled: #ffffff;
            --btn_danger_normal: #E1273D;
            --btn_danger_hover: #C01227;
            --btn_danger_active: #9D0215;
            --btn_danger_outlined_hover: #F9D4D8;
            --btn_danger_outlined_active: #F0939E;

            --text_main: #001948;
            --text_active: #7C89A1;
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
