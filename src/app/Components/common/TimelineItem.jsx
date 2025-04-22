// components/timeline/TimelineItem.jsx
import React from 'react';

const TimelineItem = ({ year, title, description }) => (
  <div className="text-center relative">
    <div className="w-6 h-6 bg-green-600 rounded-full mx-auto mb-2" />
    <div className="w-[200px] bg-gray-50 p-4 rounded-lg shadow-md">
      <h3 className="text-green-700 font-semibold text-lg">{year}</h3>
      <p className="font-bold text-gray-800">{title}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

export default TimelineItem;
