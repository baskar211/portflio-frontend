import React from 'react';
import Navbar from '../pages/Navbar';

export default function ViewWork() {
  return (
    <div>
      <div className="mb-30">
        <Navbar />
      </div>
      <section id="portfolio" className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
          🚀 My Recent Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {/* Project 1 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <Image
              src="/digital-marketing (1).png"
              alt="Project 1"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">Digital Marketing Website</h3>
            <Image
              src="/project1.jpg"
              alt="Project 1"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">E-Commerce Website</h3>
            <p className="text-gray-600 mt-2">
              A modern online store built using React and TailwindCSS with
              product filters and cart functionality.
            </p>
            <a
              href="https://villa-agency-baskar.vercel.app/"

              className="text-indigo-600 underline mt-3 inline-block"
            >
              View Project →
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <Image
              src="/digital-marketing (2).png"
              alt="Project 2"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold capitalize">food order Website</h3>
              <Image
              src="/project2.jpg"
              alt="Project 2"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">Portfolio Website</h3>
            <p className="text-gray-600 mt-2">
              A responsive personal portfolio showcasing my works and contact
              details.
            </p>
            <a
              href="https://baskar-briyani-delivery.vercel.app/"

              className="text-indigo-600 underline mt-3 inline-block"
            >
              View Project →
            </a>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <Image
              src="/digital-marketing (3).png"
              alt="Project 3"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">E Commerce Website</h3>
              <Image
              src="/project3.jpg"
              alt="Project 3"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">Restaurant Landing Page</h3>
            <p className="text-gray-600 mt-2">
              Designed a landing page for a local restaurant using Next.js and
              Tailwind.
            </p>
            <a
              href="https://electro-baskar.vercel.app/"

              className="text-indigo-600 underline mt-3 inline-block"
            >
              View Project →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
