import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const brown = "#8D6748";
const lightBrown = "#F5EFE6";
const accent = "#BFA181";

function animateHero(refs) {
  if (!refs.current) return;
  refs.current.forEach((el, i) => {
    if (el) {
      el.style.opacity = 0;
      el.style.transform = "translateY(40px) scale(0.98)";
      setTimeout(() => {
        el.style.transition =
          "opacity 0.7s cubic-bezier(.6,.2,.2,1), transform 0.7s cubic-bezier(.6,.2,.2,1)";
        el.style.opacity = 1;
        el.style.transform = "translateY(0) scale(1)";
      }, 200 + i * 180);
    }
  });
}

function Landing() {
  const navigate = useNavigate();
  const heroRefs = useRef([]);

  useEffect(() => {
    animateHero(heroRefs);
  }, []);

  return (
    <div className="font-poppins bg-[var(--page)] text-[var(--text)] min-h-screen flex flex-col">
      <section className="relative min-h-[87vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute left-0 top-0 w-44 h-44 bg-[#C7E8C7] rounded-br-[80px] z-0" />
        <div className="absolute right-0 top-0 w-56 h-44 bg-[#D6D6F7] rounded-bl-[80px] z-0" />

        {/* Hero images */}
        <img
          ref={(el) => (heroRefs.current[0] = el)}
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&q=80"
          alt="plant"
          className="absolute left-8 bottom-0 w-32 h-40 object-cover rounded-3xl shadow-md z-10 block"
        />
        <img
          ref={(el) => (heroRefs.current[1] = el)}
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&q=80"
          alt="gift"
          className="absolute right-0 bottom-0 w-36 h-36 object-cover rounded-3xl shadow-md z-10 block"
        />

        {/* Content */}
        <div className="relative z-20 text-center mt-10 px-6">
          <h1
            ref={(el) => (heroRefs.current[2] = el)}
            className="text-5xl md:text-6xl font-bold text-[var(--text)] m-0 leading-tight mb-4"
          >
            Company Directory
          </h1>
          <p
            ref={(el) => (heroRefs.current[3] = el)}
            className="text-lg md:text-xl text-[var(--accent)] mb-8 font-medium"
          >
            Browse company profiles and contact info.
          </p>
          <button
            ref={(el) => (heroRefs.current[4] = el)}
            className="inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 bg-gradient-to-r from-[#BFA181] to-[#8D6748] text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl hover:from-[#8D6748] hover:to-[#BFA181] transition-all duration-300 active:scale-95"
            onClick={() => navigate("/companies")}
          >
            View Companies →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto px-5 py-4 text-center text-[var(--accent)] font-medium text-base mt-auto">
        &copy; {new Date().getFullYear()} Tarun. All rights reserved.
      </footer>
    </div>
  );
}

export default Landing;
