import React from 'react';

const Hook = ({ ...props }) => {
  const { ...prop } = props;
  return (
    <div className={'hook-export'}>
      <h1>Hello Hook Component</h1>
      <h5>{prop.subtitle}</h5>
    </div>
  );
};

export default Hook;