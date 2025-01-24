
'use client';
import { useState } from 'react';
import { LinkedinIcon, TwitterIcon, GithubIcon } from 'lucide-react';

const developers = [
  {
    name: 'Odree Pendo',
    role: 'Lead Blockchain Developer',
    bio: 'Blockchain architect with 5+ years experience in distributed systems',
    image: '/images/odree.jpeg',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com'
    }
  },
  {
    name: 'Ouma Ouma',
    role: 'Full Stack Engineer',
    bio: 'Expert in React, Node.js, and smart contract development',
    image: '/images/godwin.jpeg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/ouma-ouma-a01716267',
      twitter: 'https://twitter.com/ouma_godwin1',
      github: 'https://github.com/oumaoumag'
    }
  },
];


export default function MeetOurDevs() {
  const [activeProfile, setActiveProfile] = useState(0);

  return (
      <div className="container mx-auto min-h bg-gradient-to-br from-green-50 to-blue-50 p-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          Meet Our Innovative Team
        </h2>
        
        <div className="grid md:grid-cols-2 gap-20">
          {developers.map((dev, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-6 text-center transition-all duration-300 ${
                activeProfile === index 
                  ? 'scale-105 shadow-2xl border-2 border-green-500' 
                  : 'hover:scale-105 hover:shadow-xl'
              }`}
              onClick={() => setActiveProfile(index)}
            >
              <img 
                src={dev.image} 
                alt={dev.name} 
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-green-500">{dev.name}</h3>
              <p className="text-gray-500 mb-2">{dev.role}</p>
              <p className="text-black mb-4">{dev.bio}</p>
              
              <div className="flex justify-center space-x-4">
                <a 
                  href={dev.socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500"
                >
                  <LinkedinIcon size={24} />
                </a>
                <a 
                  href={dev.socialLinks.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500"
                >
                  <TwitterIcon size={24} />
                </a>
                <a 
                  href={dev.socialLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-gray-300"
                >
                  <GithubIcon size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}