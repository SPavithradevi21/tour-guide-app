import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-3xl font-bold text-blue-600">Tour Guide</h1>
          <nav className="space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#destinations" className="text-gray-600 hover:text-blue-600">Destinations</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-5xl font-bold mb-6">
            Discover Your Next Adventure
          </h1>
          <p className="text-lg mb-8">
            Explore breathtaking destinations and create unforgettable memories.
          </p>
          <div className="flex justify-center">
            <a
              href="#destinations"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200"
            >
              View Destinations
            </a>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section id="destinations" className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg overflow-hidden text-center">
            <div className="flex justify-center">
              <Image src="/paris.jpg" alt="Paris" width={350} height={250} />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Paris</h3>
              <p className="text-gray-600">The City of Light offers stunning architecture and rich culture.</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden text-center">
            <div className="flex justify-center">
              <Image src="/bali.jpg" alt="Bali" width={350} height={250} />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Bali</h3>
              <p className="text-gray-600">A tropical paradise with breathtaking beaches and temples.</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden text-center">
            <div className="flex justify-center">
              <Image src="/nyc.jpg" alt="New York City" width={350} height={250} />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">New York City</h3>
              <p className="text-gray-600">Experience the energy of the Big Apple.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; 2025 Tour Guide. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
