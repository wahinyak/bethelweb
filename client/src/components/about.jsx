import React from 'react';
import Closed from '../assets/closed.jpg';
const About = () => {
    const groupData = [
        { title: "Youth Office", description: "Youth activities and support.", imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" },
        { title: "P.C.M.F", description: "Men's fellowship and community service.", imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" },
        { title: "Christian Education", description: "Spiritual education for all ages.", imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" },
        { title: "Evangelism", description: "Sharing the gospel locally and globally.", imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" },
        { title: "Health Board", description: "Promoting health and wellness.", imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" },
        { title: "Woman's Guild", description: "Empowering women through fellowship.", imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" },
        { title: "Children's Brigade", description: "Activities and learning for children.", imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" },
        { title: "JPRC", description: "Justice, peace, and reconciliation committee.", imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" },
        { title: "Development", description: "Community and church development projects.", imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" },
        { title: "Missionary Committee", description: "Supporting missions locally and abroad.", imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" },
        { title: "Prayer Group", description: "Focused prayer and intercession.", imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" },
        { title: "Music Ministry", description: "Worship through music and arts.", imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" },
        { title: "Church School", description: "Let all little children come to me.", imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" },
        { title: "Media Ministry", description: "Media coverage of the Lord's work.", imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" },
        { title: "Choir", description: "Melodic worship.", imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" },
      ];
    
  return (
    <div className="bg-gray-700 p-8 flex-1">
      <section 
  className="mb-12 bg-cover bg-center text-white" 
  style={{ 
    backgroundImage: "url('https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=600')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    minHeight: '600px'
  }}
>
  <div className="bg-black bg-opacity-50 p-8 flex flex-col justify-center items-center min-h-screen">
    <h2 className="text-4xl font-bold mb-4 text-center">About Us</h2>
    <div className="flex flex-col md:flex-row items-center text-center">
      <div className="md:ml-8">
        <p className="text-lg">
          PCEA Bethel is a member of the PCEA Ruai Parish. We are a Bible-based, evangelistic, Spirit-empowered church founded in 2015 by Elder PlaceHolder Holder. We started with a congregation of 20 people across 2 districts and with the blessing of God, have grown to over 200 people across 6 districts.
        </p>
        <p className="text-lg mt-4">
          At Bethel, EVERYONE MATTERS. We pride ourselves on our inclusion of everyone in the day to day running of our church. We are all children of God, so we all have a chance to grow and lead in Bethel and shape it in whichever way the Lord guides us.
        </p>
      </div>
    </div>
  </div>
</section>


      <section className="mb-12 text-center">
        <div className="md:flex md:justify-around">
          <div className="md:w-1/3">
            <h3 className="card mb-12 text-center  bg-base-100 w-96 shadow-xl">Mission</h3>
            <p className="text-lg">
              A highly motivated, united and self-reliant Parish that is committed to serve God and its members for enhanced spiritual, physical, economic and social transformation.
            </p>
          </div>
          <div className="md:w-1/3">
            <h3 className="card mb-12 text-center  bg-base-100 w-96 shadow-xl">Vision</h3>
            <p className="text-lg">
              To empower our members holistically, accommodating all and encouraging voluntary devoted services to God and society.
            </p>
          </div>
        </div>
      </section>

      <section className="card mb-12 text-center bg-base-100 w-full lg:w-1/2 mx-auto shadow-xl p-8">
  <h3 className="text-2xl font-bold mb-4">Core Values</h3>
  <div className="flex justify-center">
    <ul className="list-none space-y-2 text-left pr-4 border-r">
      <li className="text-lg">Dynamic Leadership</li>
      <li className="text-lg">Discipleship</li>
      <li className="text-lg">Teamwork</li>
      <li className="text-lg">Integrity</li>
    </ul>
    <ul className="list-none space-y-2 text-left pl-4">
      <li className="text-lg">Unity of Purpose</li>
      <li className="text-lg">Accountability</li>
      <li className="text-lg">Spiritual Nurturing</li>
    </ul>
  </div>
</section>


<section className="mb-12">
  <h3 className="text-2xl font-bold mb-4 text-center">Our Theme for 2024</h3>
  <p className="text-lg italic mb-4 text-center">"The righteous shall flourish like the palm tree, he shall grow like a cedar in Lebanon." - Psalms 92:12</p>
  <div className="flex flex-col md:flex-row justify-between items-start">
    <div className="flex flex-col items-start mb-4 md:mb-0">
      <h4 className="text-3xl font-extrabold">THE RIGHTEOUS</h4>
      <h4 className="text-3xl font-extrabold bg-blue-500 text-white px-2">SHALL FLOURISH</h4>
    </div>
    <ul className="list-disc list-inside text-lg space-y-2 ml-0 md:ml-4">
      <li>How do Christians flourish in life</li>
      <li>What is the secret of flourishing</li>
      <li>How do you attain spiritual flourishing</li>
      <li>How can you live a disciplined life of worship</li>
    </ul>
  </div>
</section>

<div className="flex items-center my-8">
    <div className="flex-grow border-t border-gray-400"></div>
    <span className="mx-4 text-xl font-bold">Leadership</span>
    <div className="flex-grow border-t border-gray-400"></div>
  </div>
  <p className="text-center mb-8">Our leadership consists of strong and dedicated men and women that were elected and  have led Bethel faithfully.</p>

      <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
            Elder Christine Mwangi
              <div className="badge badge-secondary">Chairperson</div>
            </h2>
            
            
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Elder Frederick Muhoro
            </h2>
            <p>Retired Chairperson</p>
            
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Elder Lucy Kinyua
              
            </h2>
            <p>Ebenezer District</p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Elder Patrick Kamengere
              
            </h2>
            <p>Bethany District</p>
            
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Elder Daniel Gichuki
              
            </h2>
            <p>Jericho District</p>
            
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Elder Kiongo
            </h2>
            <p>Judea District</p>
            
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Veronica Kinyua 
              
            </h2>
            <p>Secretary</p>
            
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Elder Peter Gashanga
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Treasurer</p>
           
          </div>
        </div>
      </div>
    </div>
    <div className="flex items-center my-8">
    <div className="flex-grow border-t border-gray-400"></div>
    <span className="mx-4 text-xl font-bold">Our groups</span>
    <div className="flex-grow border-t border-gray-400"></div>
  </div>
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {groupData.map((group, index) => (
          <div key={index} className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={group.imgSrc}
                alt={group.title}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{group.title}</h2>
              <p>{group.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
  );
};

export default About;
