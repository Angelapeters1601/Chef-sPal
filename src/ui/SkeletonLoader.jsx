import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./SkeletonLoader.css";

const SkeletonLoader = ({ cards = 6 }) => {
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSkeleton(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!showSkeleton) return null;

  return (
    <div className="skeleton-grid">
      {Array(cards)
        .fill(0)
        .map((_, index) => (
          <div className="skeleton-card" key={index}>
            <Skeleton
              height={180}
              baseColor="#FFF8F0"
              highlightColor="#FFFDF5"
              style={{ marginBottom: "1rem", borderRadius: "12px 12px 0 0" }}
            />
            <div className="skeleton-content">
              <Skeleton
                width="70%"
                height={28}
                baseColor="#FFF8F0"
                highlightColor="#FFFDF5"
                style={{ marginBottom: "0.75rem" }}
              />
              <Skeleton
                count={2}
                baseColor="#FFF8F0"
                highlightColor="#FFFDF5"
                style={{ marginBottom: "1rem" }}
              />
              <Skeleton
                width="40%"
                height={20}
                baseColor="#FFF8F0"
                highlightColor="#FFFDF5"
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default SkeletonLoader;
