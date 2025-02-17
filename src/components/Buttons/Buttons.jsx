import React, { useState } from "react";
import {
  BsFileText,
  BsFileTextFill,
  BsCloudDownload,
  BsCloudDownloadFill,
} from "react-icons/bs";

const ButtonGroup = ({ isA4Format, setIsA4Format }) => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleFileClick = () => {
    setIsA4Format(!isA4Format);
    setHoveredIcon(null);
  };

  const pdfUrl = `https://jordiciurana16.github.io/curriculum-vitae/curriculums/JordiCiurana-ENG.pdf`;

  return (
    <div className={`container d-flex justify-content-end mt-2 mb-2`}>
      <span
        className={`fs-3 d-flex align-items-center`}
        onClick={handleFileClick}
        onMouseEnter={() => setHoveredIcon("file")}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        {hoveredIcon === "file" ? (
          <BsFileTextFill className="mx-auto ms-4" />
        ) : (
          <BsFileText className="mx-auto ms-4" />
        )}
      </span>
      <a
        className={`fs-3 me-3 d-flex align-items-center text-dark`}
        href={pdfUrl}
        target="_blank" // Open the link in a new window
        download
        onMouseEnter={() => setHoveredIcon("download")}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        {hoveredIcon === "download" ? (
          <BsCloudDownloadFill className="mx-auto ms-4" />
        ) : (
          <BsCloudDownload className="mx-auto ms-4" />
        )}
      </a>
    </div>
  );
};

export default ButtonGroup;
