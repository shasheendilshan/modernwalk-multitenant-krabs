import React from "react";

const RootStyleLoader = (props) => {
  return (
    <style>
      {`
        :root {
            --primary:#2BD9AF;
            --secondary:#FF5E84;
            
        }
     `}
    </style>
  );
};

export default RootStyleLoader;
