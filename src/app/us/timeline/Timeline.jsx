import React from 'react';
import TimelineItem from './TimelineItem';

const Timeline = ({ events }) => (
  <div className="mb-24 relative">
    <h2 className="text-2xl font-semibold mb-10 text-center text-primary">Nuestra Evolución</h2>

    <div className="absolute top-1/2 left-0 w-full border-t border-gray-300 z-0" />

    <div className="overflow-x-auto">
      <div className="relative flex items-center justify-between space-x-10 min-w-[800px] px-4 py-8 z-10">
        {events.map((e, i) => (
          <TimelineItem key={i} {...e} />
        ))}
      </div>
    </div>
  </div>
);

export default Timeline;
