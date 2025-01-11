import React, { useEffect, useState } from 'react';

function CountSection() {
  const [students, setStudents] = useState(0);
  const [workshops, setWorkshops] = useState(0);
  const [speakers, setSpeakers] = useState(0);
  const [hackathon, setHackathon] = useState(0);
  const [talkSessions, setTalkSessions] = useState(0);

  useEffect(() => {
    const animateNumbers = (target, setState, duration) => {
      let start = 0;
      const increment = target / (duration / 16); // 60 FPS
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setState(target);
          clearInterval(timer);
        } else {
          setState(Math.ceil(start));
        }
      }, 16);
    };

    animateNumbers(300, setStudents, 1000);
    animateNumbers(2, setWorkshops, 1000);
    animateNumbers(10, setSpeakers, 1000);
    animateNumbers(1, setHackathon, 1000);
    animateNumbers(1, setTalkSessions, 1000);
  }, []);

  return (
    <div>
      <div className="bg-white py-24 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-5">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 text-gray-600">Students</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{students}+</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 text-gray-600">Workshops</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{workshops}+</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 text-gray-600">Speakers</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{speakers}+</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 text-gray-600">Hackathon</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{hackathon}+</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 text-gray-600">Talk Sessions</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{talkSessions}+</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default CountSection;