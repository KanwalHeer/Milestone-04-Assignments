import React from 'react';
import Card from '../card/card';

export default function ApiProjects() {
  return (
    <div className="p-8  min-h-screen">
      <h1 className="text-black text-3xl font-extrabold mb-2 mt-6 pb-2 text-center">My Projects</h1>
      <p className="text-black text-md mb-8 text-center">
  Explore some of the projects I have created, each of which demonstrates different aspects of my skills and interests in software development. These projects utilize data fetched from public APIs to provide dynamic and engaging user experiences.
</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
     
        
        <Card
          heading="Weather App"
          text="A weather forecasting application that displays current weather conditions and forecasts for various locations. Utilizes external APIs to fetch weather data and provides an intuitive interface for users."
          link="https://weather-app-psi-six-56.vercel.app"
            image="/p1.png"
        />
        <Card
          heading="GitHub User App"
          text="An application that allows users to search for GitHub profiles and view their repositories, followers, and other details. Provides a clean and easy-to-navigate interface for interacting with GitHub data."
          link="https://githubuser-peach.vercel.app"
            image="/p5.png"
        />
        <Card
          heading="Currency Converter"
          text="A versatile currency converter tool that allows users to convert amounts between different currencies. Includes up-to-date exchange rates and supports a wide range of currencies from around the world."
          link="https://currency-converter-five-delta.vercel.app"
            image="/p6.png"
        />
      </div>
    </div>
  );
}