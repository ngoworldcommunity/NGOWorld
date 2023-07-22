import React from "react";
import "../../styles/Loading.css";
import SkeletonLoader from "tiny-skeleton-loader-react";

const DisplayLoading = () => {
  return (
    <div className="text-center skeleton-container">
      <div className="skeleton-heading">
        <SkeletonLoader width={"50%"} height={"30px"} />
        <SkeletonLoader width={"40%"} height={"30px"} />
      </div>
      <div className="skeleton-content">
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
      </div>
      <div className="skeleton-button">
        <SkeletonLoader height={"40px"} />
        <SkeletonLoader height={"40px"} />
      </div>
    </div>
  );
};

export default DisplayLoading;
