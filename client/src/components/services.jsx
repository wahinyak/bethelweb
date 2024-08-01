import React from 'react';

// Example services data
const servicesData = [
  {
    title: "Transforming Lives and Restoring Hope",
    date: "1st April 2024",
    pastor: "Rev. David",
    image: "https://images.pexels.com/photos/2402276/pexels-photo-2402276.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Saved by Grace",
    date: "8th April 2024",
    pastor: "Rev. David",
    image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Your Year of Transformation",
    date: "15th April 2024",
    pastor: "Rev. David",
    image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Spiritual Warfare",
    date: "22nd April 2024",
    pastor: "Rev. David",
    image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Transforming Lives and Restoring Hope",
    date: "29th April 2024",
    pastor: "Rev. David",
    image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen justify-center mx-auto px-12 ">
      {/* Services Section */}
      <section className="relative bg-cover bg-full text-white h-80" style={{ backgroundImage: "url('https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=600')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <div className="h-1 bg-white w-64 mb-4"></div>
          <h2 className="text-4xl font-bold mb-4">OUR SERVICES</h2>
          <div className="h-1 bg-white w-64"></div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center my-8">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="mx-4 text-xl font-bold">Our program</span>
           <div className="flex-grow border-t border-gray-400"></div>
        </div>
          <table className="table-auto w-full md:w-2/3 mx-auto text-left">
            <tbody>
              <tr className="border-b">
                <td className="py-2">Praise & Worship</td>
                <td className="py-2 text-right">9:00 AM</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Service Start</td>
                <td className="py-2 text-right">9:10 AM</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Praise & Worship</td>
                <td className="py-2 text-right">9:15 AM</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Tithes & Offering</td>
                <td className="py-2 text-right">9:45 AM</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Presentations</td>
                <td className="py-2 text-right">9:50 AM</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Announcements</td>
                <td className="py-2 text-right">10:00 AM</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Sermon</td>
                <td className="py-2 text-right">10:15 AM</td>
              </tr>
              <tr>
                <td className="py-2">Service Closure</td>
                <td className="py-2 text-right">11:00 AM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Past Services Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
        <div className="flex items-center my-8">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="mx-4 text-xl font-bold">Past Services</span>
            <div className="flex-grow border-t border-gray-400"></div>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={service.image} alt="Service" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="font-bold text-lg">{service.title}</h4>
                  <p className="text-sm text-gray-600">{service.pastor} - {service.date}</p>
                  <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Watch</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services
