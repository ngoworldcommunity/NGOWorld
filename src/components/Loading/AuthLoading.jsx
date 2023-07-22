import React from "react";
import "../../styles/Loading.css";
import SkeletonLoader from "tiny-skeleton-loader-react";

const AuthLoading = () => {
  return (
    <div className="skeleton-auth-container">
      <div className="skeleton-auth-left">
        <div className="skeleton-auth-heading">
          <SkeletonLoader width={"75%"} height={"20px"} />
        </div>
        <div className="skeleton-auth-input">
          <SkeletonLoader width={"40%"} height={"10px"} />
          <SkeletonLoader width={"80%"} height={"30px"} />
        </div>
        <div className="skeleton-auth-input">
          <SkeletonLoader width={"40%"} height={"10px"} />
          <SkeletonLoader width={"80%"} height={"30px"} />
        </div>
        <div className="skeleton-auth-input">
          <SkeletonLoader width={"40%"} height={"10px"} />
          <SkeletonLoader width={"80%"} height={"30px"} />
        </div>
        <SkeletonLoader width={"30%"} height={"40px"} />
      </div>
      <div className="skeleton-right">
        <SkeletonLoader height={"90%"} width={"100%"} />
      </div>
    </div>
  );
};

export default AuthLoading;
