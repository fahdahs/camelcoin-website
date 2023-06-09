import { useState, useEffect } from "react";
import TheHump1 from "./components/TheHump1";
import TheHump2 from "./components/TheHump2";
import TheHump3 from "./components/TheHump3";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Button } from "@/material";
import Head from "next/head";

const SEO_KEYWORDS = [
  "CamelCoin",
  "Cryptocurrency",
  "Blockchain",
  "Token Distribution",
  "Digital Asset",
  "Decentralized",
  "Crypto Investment",
  "Tactical Partners",
  "Crypto Charts",
  "Project CamelCoin",
  "The Hump App",
];

export default function TheHump() {
  const [activeComponentIndex, setActiveComponentIndex] = useState(0);

  function handleSwipeRight() {
    if (activeComponentIndex > 0) {
      setActiveComponentIndex(activeComponentIndex - 1);
    } else {
      setActiveComponentIndex(2);
    }
  }

  function handleSwipeLeft() {
    if (activeComponentIndex < 2) {
      setActiveComponentIndex(activeComponentIndex + 1);
    } else {
      setActiveComponentIndex(0);
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (activeComponentIndex < 2) {
        setActiveComponentIndex(activeComponentIndex + 1);
      } else {
        setActiveComponentIndex(0);
      }
    }, 8000);

    return () => {
      clearInterval(intervalId);
    };
  }, [activeComponentIndex]);

  return (
    <>
      <Head>
        <link rel="canonical" href="https://camelcoin.io/team" />
        <meta
          property="og:title"
          content=" CamelCoin - The Hump App"
        />
        <meta
          property="og:description"
          content="Located in the Sahara, near vast livestock and wildlife populations, Camelcoin is a cryptocurrency project with three primary goals: develop Camelcoin as a digital currency, establish CameLink blockchain for information exchange, and promote global acceptance of natural brown products. This comprehensive approach aims to boost economic development surrounding camelids, drive innovation across sectors (food, cosmetics, tourism, textiles, sports, etc.), enhance global market positioning, and create income-generating opportunities in underprivileged regions. The ecosystem will later open to 200 similar projects, expanding the platform's offerings to include thousands of natural products such as oils, honeys, and herbs."
        />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="CML Global" />
        <link rel="icon" href="/favicon.ico" />
        <title>CamelCoin - The Hump App</title>
        <meta
          name="description"
          content="Located in the Sahara, near vast livestock and wildlife populations, Camelcoin is a cryptocurrency project with three primary goals: develop Camelcoin as a digital currency, establish CameLink blockchain for information exchange, and promote global acceptance of natural brown products. This comprehensive approach aims to boost economic development surrounding camelids, drive innovation across sectors (food, cosmetics, tourism, textiles, sports, etc.), enhance global market positioning, and create income-generating opportunities in underprivileged regions. The ecosystem will later open to 200 similar projects, expanding the platform's offerings to include thousands of natural products such as oils, honeys, and herbs."
        />
        <meta name="keywords" content={SEO_KEYWORDS.join(", ")} />
      </Head>
      <section className="z-0 h-screen w-screen flex flex-col items-center justify-center overflow-y-auto overflow-x-hidden">
        <div className="relative">
          <div
            className="top-0 left-0 w-full h-full"
            onTouchStart={(event) => {
              const touchStartX = event.touches[0].clientX;
              event.currentTarget.addEventListener(
                "touchmove",
                (event) => {
                  const touchEndX = event.touches[0].clientX;
                  const deltaX = touchStartX - touchEndX;
                  if (deltaX > 50) {
                    handleSwipeLeft();
                  } else if (deltaX < -50) {
                    handleSwipeRight();
                  }
                },
                { passive: true }
              );
            }}
            onTouchEnd={(event) => {
              event.currentTarget.removeEventListener("touchmove", () => {}, {
                passive: true,
              });
            }}
          >
            {activeComponentIndex === 0 && (
              <div className="w-screen px-5 flex items-center justify-center">
                <TheHump1 />
              </div>
            )}
            {activeComponentIndex === 1 && (
              <div className="w-screen px-5 flex items-center justify-center">
                <TheHump2 />
              </div>
            )}
            {activeComponentIndex === 2 && (
              <div className="w-screen z-0 px-5 flex items-center justify-center">
                <TheHump3 />
              </div>
            )}
          </div>

          <button
            className="absolute hidden lg:block top-1/2 ml-4 opacity-50 hover:opacity-100 scale-90 hover:scale-105 transition-all bg-blue-gray-300/50 rounded-full p-1.5 left-0 transform -translate-y-1/2 z-10"
            onClick={handleSwipeRight}
          >
            <AiOutlineLeft className="text-blue-gray-900 md:w-10 md:h-10 w-6 h-6 dark:text-blue-gray-200" />
          </button>
          <button
            className="absolute hidden lg:block top-1/2 mr-4 opacity-50 hover:opacity-100 scale-90 hover:scale-105 transition-all bg-blue-gray-300/50 rounded-full p-1.5 right-0 transform -translate-y-1/2 z-10"
            onClick={handleSwipeLeft}
          >
            <AiOutlineRight className="text-blue-gray-900 md:w-10 md:h-10 w-6 h-6 dark:text-blue-gray-200" />
          </button>
        </div>
        <a
          href="https://www.thehump.website/"
          target="_blank"
          rel="noopener noreferrer"
          className="py-8 md:absolute relative w-full bottom-0 left-0 right-0 flex justify-center items-center flex-col"
        >
          <Button variant="text" color="blue" className="mx-auto">
            Go to the Hump website
          </Button>
        </a>
      </section>
    </>
  );
}
