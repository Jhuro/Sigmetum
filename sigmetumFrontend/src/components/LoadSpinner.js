import React from 'react';

const LoadSpinner = () => {
  return (
    <div className="fixed inset-0 bg-[#0C1811] bg-opacity-70 flex justify-center items-center z-50">
      <div className="w-10 h-10 border-4 border-t-[#15B659] border-[#99BBA8] rounded-full animate-spin" />
    </div>
  );
}

export default LoadSpinner;