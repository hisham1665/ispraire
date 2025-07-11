import React from "react";

const AboutEvent = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-10 px-5 md:px-20">
      <div className="">
      <h1 className="text-4xl font-bold text-center  mb-4">Ispirare 2.0</h1>
      <p className="text-lg text-gray-800 leading-relaxed mb-6">
        <strong>Ispirare 2.0</strong>, the flagship event of the IEEE Kerala Section, is set to be a 
        remarkable edition, focusing on the theme of <em>“Empowering Leadership, Strengthening Innovation and Enterprenuership.”</em> 
        This year's event promises an engaging lineup of activities designed to inspire participants, cultivate leadership, 
        and encourage technological advancements. The event will take place across various venues in Kerala, combining both 
        online and offline interactions for maximum participation.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mb-3">Highlights of the Event:</h2>
      <ul className="list-disc list-inside text-gray-800 mb-6">
        <li>
          <strong>Managerial Talk Session:</strong> Gain insights into leadership and management from 
          experienced professionals and industry leaders. The session will emphasize decision-making, team building, 
          and leading in dynamic environments.
        </li>
        <li>
          <strong>Cybersecurity Workshop:</strong> A hands-on experience exploring modern cybersecurity trends, best practices, 
          and practical approaches to safeguarding data in the digital age.
        </li>
        <li>
          <strong>Stock Market Workshop:</strong> Learn the art of trading, investing, and navigating the complexities of the 
          stock market. Perfect for beginners and enthusiasts looking to enhance their financial literacy.
        </li>
        <li>
          <strong>Competitions:</strong> Exciting challenges to test creativity, problem-solving, and innovation skills. From 
          coding competitions to business idea pitching, this segment encourages participants to think out of the box.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-700 mb-3">Event Goals:</h2>
      <p className="text-gray-800 leading-relaxed mb-6">
        The event aims to:
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Encourage innovation and entrepreneurship among students and young professionals.</li>
          <li>Provide hands-on experiences and practical exposure to real-world challenges.</li>
          <li>Strengthen networking opportunities with peers, industry leaders, and domain experts.</li>
          <li>Inspire participants to adopt leadership roles and contribute to a better future.</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mb-3">Who Should Attend?</h2>
      <p className="text-gray-800 leading-relaxed">
        Ispirare 2.0 is ideal for:
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>Students seeking to expand their skill sets and explore new domains.</li>
          <li>Professionals aiming to network and stay updated with the latest industry trends.</li>
          <li>Enthusiasts who want to challenge themselves through competitions and workshops.</li>
        </ul>
      </p>
    </div>
      <div className="max-w  mt-5">
        <h2 className="text-3xl text-center font-bold mb-4">About IEEE PIE Kerala</h2>
        <p className="text-lg leading-relaxed">
            IEEE PIE (Professional, Innovators, and Entrepreneurs) is an annual flagship event organized by the IEEE Kerala Section. It aims to bring together the brightest minds from diverse fields, including engineering, technology, and management. The event fosters collaboration, innovation, and skill development among students, professionals, and industry leaders.
            IEEE PIE is renowned for its focus on empowering participants with knowledge and practical exposure, paving the way for future innovators and entrepreneurs. It serves as a platform for individuals to network, exchange ideas, and gain insights from seasoned professionals through interactive sessions, hands-on workshops, and competitive events.
        </p>
      </div>
    </section>
  );
};

export default AboutEvent;
