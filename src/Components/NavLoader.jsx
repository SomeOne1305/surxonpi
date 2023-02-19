import React from "react";
import ContentLoader from "react-content-loader";


const NavLoader = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={4000}
      height={40}
      viewBox="0 0 4000 40"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="0" rx="5" ry="2" width="140" height="35" />
    </ContentLoader>
  );
};

export default NavLoader;
