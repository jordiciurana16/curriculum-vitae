// components/ButtonGroup.js
import React, { useState } from 'react';
import { BsFileText, BsFileTextFill, BsCloudDownload, BsCloudDownloadFill, BsShare, BsShareFill } from 'react-icons/bs';
import { saveAs } from 'file-saver'; // Import the saveAs function

const ButtonGroup = ({ isA4Format, setIsA4Format }) => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleFileClick = () => {
    setIsA4Format(!isA4Format);
    setHoveredIcon(null);
  };

  const handleDownloadClick = () => {
    // Replace 'your-pdf-file.pdf' with the actual path to your PDF file.
    const pdfUrl = `curriculum-vitae/titles/languages/EnglishB2.pdf`;

    // Use the saveAs function to trigger the download.
    saveAs(pdfUrl, 'downloaded-file.pdf');
  };

  return (
    <div className={`d-flex justify-content-end mt-2 mb-2`}>
      <span
        className={`fs-3 d-flex align-items-center`}
        onClick={handleFileClick}
        onMouseEnter={() => setHoveredIcon('file')}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        {hoveredIcon === 'file' ? (
          <BsFileTextFill className='mx-auto ms-4' />
        ) : (
          <BsFileText className='mx-auto ms-4' />
        )}
      </span>
      <span
        className={`fs-3 d-flex align-items-center`}
        onMouseEnter={() => setHoveredIcon('share')}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        {hoveredIcon === 'share' ? (
          <BsShareFill className='mx-auto ms-4' />
        ) : (
          <BsShare className='mx-auto ms-4' />
        )}
      </span>
      <span
        className={`fs-3 d-flex align-items-center`}
        onClick={handleDownloadClick} // Handle download on click
        onMouseEnter={() => setHoveredIcon('download')}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        {hoveredIcon === 'download' ? (
          <BsCloudDownloadFill className='mx-auto ms-4' />
        ) : (
          <BsCloudDownload className='mx-auto ms-4' />
        )}
      </span>
    </div>
  );
};

export default ButtonGroup;
