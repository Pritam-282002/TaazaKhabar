"use client";
import Image from "next/image";

import News_Card from "./Components/News_Card";

export default function Home() {
  const newsArticles = [
    {
      title: "Breaking News: Scientists Discover New Planet",
      description:
        "A team of astronomers has found a previously unknown exoplanet in a distant galaxy.",
      slug: "breaking-news-scientists-discover-new-planet",
      image:
        "https://plus.unsplash.com/premium_photo-1709405755034-c8da5f836657?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Tech Giant Unveils Latest Smartphone with AI Integration",
      description:
        "The new smartphone boasts cutting-edge artificial intelligence features and a sleek design.",
      slug: "tech-giant-unveils-latest-smartphone-with-ai-integration",
      image:
        "https://plus.unsplash.com/premium_photo-1709405755034-c8da5f836657?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Global Summit Addresses Climate Change Crisis",
      description:
        "World leaders come together to discuss urgent measures to combat the escalating climate change problem.",
      slug: "global-summit-addresses-climate-change-crisis",
      image:
        "https://plus.unsplash.com/premium_photo-1709405755034-c8da5f836657?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "SpaceX Successfully Launches Mission to Mars",
      description:
        "Elon Musk's SpaceX achieves another milestone with a successful launch and journey towards Mars.",
      slug: "spacex-successfully-launches-mission-to-mars",
      image:
        "https://plus.unsplash.com/premium_photo-1709405755034-c8da5f836657?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "New Medical Breakthrough in Cancer Research",
      description:
        "Researchers announce a groundbreaking discovery in cancer treatment that shows promising results in early trials.",
      slug: "new-medical-breakthrough-in-cancer-research",
      image:
        "https://plus.unsplash.com/premium_photo-1709405755034-c8da5f836657?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Artificial Intelligence Revolutionizes Agriculture",
      description:
        "AI-powered technologies are transforming the agricultural industry, increasing efficiency and crop yields.",
      slug: "ai-revolutionizes-agriculture",
      image:
        "https://plus.unsplash.com/premium_photo-1709405755034-c8da5f836657?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Economic Outlook: Global Markets Respond to Recent Developments",
      description:
        "Financial experts analyze the impact of recent geopolitical events on the world economy.",
      slug: "economic-outlook-global-markets-respond-to-recent-developments",
      image:
        "https://plus.unsplash.com/premium_photo-1709405755034-c8da5f836657?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Entertainment Industry Adapts to New Virtual Reality Experiences",
      description:
        "Hollywood embraces virtual reality, offering audiences immersive and interactive entertainment experiences.",
      slug: "entertainment-industry-adapts-to-new-virtual-reality-experiences",
      image:
        "https://plus.unsplash.com/premium_photo-1709405755034-c8da5f836657?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Advancements in Renewable Energy: Solar Power Breakthrough",
      description:
        "Scientists announce a major breakthrough in solar power technology, promising more efficient and affordable energy production.",
      slug: "advancements-in-renewable-energy-solar-power-breakthrough",
      image:
        "https://plus.unsplash.com/premium_photo-1709405755034-c8da5f836657?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "COVID-19 Vaccination Campaign Reaches Milestone",
      description:
        "The global effort to vaccinate against COVID-19 achieves a significant milestone with millions of doses administered worldwide.",
      slug: "covid-19-vaccination-campaign-reaches-milestone",
      image:
        "https://plus.unsplash.com/premium_photo-1709405755034-c8da5f836657?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="min-h-screen md:p-20">
      <p className="text-black md:text-4xl text-2xl mt-4 font-semibold text-center capitalize">
        Latest News Articles
      </p>

      <hr className="w-[40%] border-2 mx-auto border-pink-300" />
      <div className="grid md:grid-cols-3 p-10 gap-5">
        {newsArticles.map((item, i) => {
          return(
          <News_Card  item={item} key={i}/>)
        })}
      </div>
    </div>
  );
}
