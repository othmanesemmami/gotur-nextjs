// components/Preloader.tsx
"use client";

import React, { useEffect, useState } from "react";
import loaderImage from "@/assets/images/loader.png"; // Adjust path as needed

const Preloader: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={`preloader ${loading ? "" : "preloader-hidden"}`}>
      <div
        className="preloader__image"
        style={{ backgroundImage: `url(${loaderImage.src})` }}
      ></div>
    </div>
  );
};

export default Preloader;
