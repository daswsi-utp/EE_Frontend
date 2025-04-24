import React from 'react';

const SectionTitle = ({ children, className = '' }) => (
  <h2 className={`text-2xl font-semibold mb-4 text-green-600 ${className}`}>
    {children}
  </h2>
);

export default SectionTitle;
