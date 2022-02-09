import React from 'react';

const LeftSection = () => {
  const theme = localStorage.getItem("theme");
  console.log(theme, 'left section');
  return <div>LeftSection</div>;
};

export default LeftSection;
