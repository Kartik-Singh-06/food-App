import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full h-[100vh] bg-zinc-100">
      <div className="pt-[10vw] max-w-screen-xl h-[100vh]   px-4 mx-auto  z-999">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="w-[80%] text-xl mb-4 text-zinc-500">
          Welcome to our food delivery app! We are dedicated to bringing you the
          best dining experiences from top restaurants in your city.
        </p>
        <p className="w-[80%] text-xl mb-4 text-zinc-500">
          Our mission is to make food ordering easy, convenient, and enjoyable
          for everyone. Whether you're craving your favorite cuisine or want to
          explore new flavors, we have something for every taste bud.
        </p>
        <p className="w-[80%] text-xl mb-4 text-zinc-500">
          Explore our app to discover a wide range of restaurants, exciting
          menus, and special offers. Order with confidence and let us take care
          of delivering delicious meals to your doorstep.
        </p>
        <p className="w-[80%] text-xl text-zinc-500">
          Thank you for choosing us for your food delivery needs. Bon appétit!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
