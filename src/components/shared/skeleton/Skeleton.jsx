import React from "react";
import "./Skeleton.css";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonCard = () => {
  return (
    <SkeletonTheme baseColor="#bdc3c7" highlightColor="#f1f2f6">
      <p style={{ height: "100%" }}>
        <div className="skeleton-container">
          <div className="grid-1">
            {/* Image */}
            <Skeleton width={290} count={1} height={150} />
            <br />
            {/* Tags */}
            <Skeleton width={180} count={3} height={15} />
          </div>
          <div className="grid-2">
            {/* Button */}
            <div className="skeleton-footer">
              <Skeleton width={210} count={1} height={35} />
              <Skeleton width={50} count={1} height={35} />
            </div>
          </div>
        </div>
      </p>
    </SkeletonTheme>
  );
};

export default SkeletonCard;
