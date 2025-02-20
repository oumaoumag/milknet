'use client';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About MilkNet
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing the dairy industry through blockchain technology, data analytics, and user-centric design.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <motion.section 
          className="mb-16"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ ...fadeIn.transition, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Vision & Mission</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-700 mb-4">
              MilkNet envisions a world where dairy supply chains are highly efficient, transparent, and equitable.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Enhance operational efficiency</li>
              <li>Ensure product quality and traceability</li>
              <li>Foster trust through transparent practices</li>
              <li>Reduce wastage and maximize profitability</li>
            </ul>
          </div>
        </motion.section>

        {/* Key Features */}
        <motion.section 
          className="mb-16"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ ...fadeIn.transition, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <ul className="text-gray-700 space-y-2">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Technology Stack */}
        <motion.section 
          className="mb-16"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ ...fadeIn.transition, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Frontend</h3>
              <ul className="text-gray-700 space-y-2">
                <li>Next.js 14</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
                <li>Ethers.js</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Contracts</h3>
              <ul className="text-gray-700 space-y-2">
                <li>Solidity</li>
                <li>Hardhat</li>
                <li>OpenZeppelin</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Team */}
        <motion.section 
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ ...fadeIn.transition, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Audrey Pendo</h3>
              <p className="text-gray-600">Lead Blockchain Developer</p>
              <a 
                href="https://github.com/odree123" 
                className="text-green-600 hover:text-green-700 mt-2 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ouma Ouma</h3>
              <p className="text-gray-600">Full Stack Engineer</p>
              <a 
                href="https://github.com/oumaoumag" 
                className="text-green-600 hover:text-green-700 mt-2 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

const features = [
  {
    title: "Blockchain-Based Transparency",
    points: [
      "Traceability throughout production",
      "Tamper-proof records",
      "Real-time auditing"
    ]
  },
  {
    title: "Smart Contracts",
    points: [
      "Automated payments",
      "Quality assurance contracts",
      "Streamlined transactions"
    ]
  },
  {
    title: "Data Analytics",
    points: [
      "Demand forecasting",
      "Performance monitoring",
      "Supply chain optimization"
    ]
  },
  {
    title: "Farmer-Centric Tools",
    points: [
      "Livestock monitoring",
      "Access to microloans",
      "Market insights"
    ]
  },
  {
    title: "Consumer Engagement",
    points: [
      "Product authenticity",
      "Nutritional transparency",
      "Direct feedback"
    ]
  },
  {
    title: "Sustainability",
    points: [
      "Carbon footprint tracking",
      "Spoilage reduction",
      "Recycling initiatives"
    ]
  }
]; 