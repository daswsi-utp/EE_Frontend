// components/timeline/Timeline.jsx
import React from 'react';
import TimelineItem from './TimelineItem';

const Timeline = ({ events }) => (
  <div className="mb-24">
    <h2 className="text-2xl font-semibold mb-10 text-center text-green-600">
      Nuestra Evolución
    </h2>
    <div className="overflow-x-auto">
      <div className="flex items-center justify-between space-x-10 min-w-[800px] px-4 py-8 border-t border-b border-gray-300">
        {events.map((e, i) => <TimelineItem key={i} {...e} />)}
      </div>
    </div>
  </div>
);

export default Timeline;
