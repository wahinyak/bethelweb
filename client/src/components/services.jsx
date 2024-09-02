// import React from 'react';

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
    <div className="bg-base-100 min-h-screen justify-center flex-1">
      {/* Services Section */}
      <section className="relative bg-cover bg-full text-white h-80" style={{ backgroundImage: "url('https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb')", backgroundSize: "cover" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <div className="h-1 bg-white w-80 mb-2"></div>
          <h2 className="text-4xl font-bold mb-2">OUR SERVICES</h2>
          <div className="h-1 bg-white w-80"></div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center my-8">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="mx-4 text-xl font-bold text-blue-900">Order of Services</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <table className="table-auto w-full md:w-2/3 mx-auto text-left text-gray-900 dark:text-white">
            <tbody>
              <tr className="border-b">
                <td className="py-2">Church School</td>
                <td className="py-2 text-right">8:30 AM - 10:30 AM</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Youth Service</td>
                <td className="py-2 text-right">8:30 AM - 10:30 AM</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Main Church First Service</td>
                <td className="py-2 text-right">8:30 AM - 10:30 AM</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Main Church Second Service</td>
                <td className="py-2 text-right">10:45 AM - 12:45 PM</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Mid Week Service</td>
                <td className="py-2 text-right">Wednesday 6 PM - 7 PM</td>
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
            <span className="mx-4 text-xl font-bold text-blue-900">Past Services</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-900 dark:text-white">
            {servicesData.map((service, index) => (
              <div key={index} className="bg-base-100 rounded-lg shadow-md overflow-hidden">
                <img src={service.image} alt="Service" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="font-bold text-lg">{service.title}</h4>
                  <p className="text-sm text-gray-800 dark:text-white">{service.pastor} - {service.date}</p>
                  <button className="mt-4 bg-primary text-primary-content py-2 px-4 rounded">Watch</button>
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
