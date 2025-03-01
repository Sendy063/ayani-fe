import React from 'react';

const EventList = () => {
  const events = [
    { name: 'Acara 1', date: '2025-05-01' },
    { name: 'Acara 2', date: '2025-06-15' },
    { name: 'Acara 3', date: '2025-07-20' },
  ];

  return (
    <div>
      {events.map((event, index) => (
        <div key={index} className="border p-4 mb-4">
          <h2 className="text-xl font-bold">{event.name}</h2>
          <p>{event.date}</p>
        </div>
      ))}
    </div>
  );
};

export default EventList;
