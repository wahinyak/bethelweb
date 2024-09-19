import React, {useState} from 'react';


const About = () => {
    const groupData = [
        { title: "Woman's Guild", description: "Empowering women through fellowship.", imgSrc: "https://imgs.search.brave.com/TVRs3VD-174D5V5TU1qbsLH-nayNJ-Mtcz7JBzh9rO8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wY2Vh/Lm9yLmtlL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9lbGVtZW50b3Iv/dGh1bWJzLzI4MDI0/NDYxMV8xMTY5MzEw/NjQwMjc2ODc5XzY3/OTQxOTk5Mjk3ODY0/Nzk4NjFfbi1xazc2/ZDFydGcyeWxza2dy/aXlhd2Zrcmp1aWwy/azBsNDVzd3ppeDVr/amcuanBn" },
        { title: "P.C.M.F", description: "Men's fellowship and community service.This group of men seeks to nurture and represent God's divine plan and creation", imgSrc: "https://drive.google.com/thumbnail?id=1udr164f6q_IJJ2XkacigeZufeJ62crOA&sz=w400" },
        { title: "Youth", description: "Youth activities and support.", imgSrc: "https://drive.google.com/thumbnail?id=11E2pGayyMRMXbiw9j7XlXmYFvXwbnpbP&sz=w360" },
        { title: "Christian Education", description: "Spiritual education for all ages.Lorem Ipsum sedor catrot fvnlr fgejrsf weoptug  fewfwef fspfifs sfpieccs fefdsff ewfgvsmvnlF", imgSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DsUE9pF7kGV4OhcHfG8o5gHaLH%26pid%3DApi&f=1&ipt=1f803806d5c5487d34960c3d6351e4ba00a2d6c17fb7dfc3c4ba7cf70e7ebfaf&ipo=images" },
        { title: "Evangelism", description: "Sharing the gospel locally and globally.", imgSrc: "https://imgs.search.brave.com/oqzHKIpXz6yIFkP846XqgKXqwkbWV2jYFMLZ8BnlTJE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzEzLzcy/LzA5LzEzNzIwOWU4/YjdjZjU4ZTg5YTFh/YWEwM2ExYTkyNGZi/LmpwZw" },
        { title: "Health Board", description: "Promoting health and wellness.", imgSrc: "https://imgs.search.brave.com/vvFvKENhHLPj0IqM8e31qgJI3hxxJnAK6eoc1HnTFHk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg0/MzY0NjM0L3Bob3Rv/L3N0ZXRob3Njb3Bl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1ra0pXQkZsZUs3/UW8tSWRCNndIUjFk/MFFIOUtRMnlSVDlI/cGxBeEV1aFJBPQ" },
        { title: "Children's Brigade", description: "Activities and learning for children.", imgSrc: "https://imgs.search.brave.com/TG3lmrNkI-XDjzDp4CKWTpzg6awqgvw4wQD5peOHzCg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ncmFw/aC5mYWNlYm9vay5j/b20vNDE4NzIzODg4/MzIxMzI0L3BpY3R1/cmU_dHlwZT1sYXJn/ZQ.jpeg" },
        { title: "JPRC", description: "Justice, peace, and reconciliation committee.", imgSrc: "https://imgs.search.brave.com/MFLQVGNsVGOx6r3g7dad_ahTQUehTtzcmJ2CqAbYg2A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzE0LzEyLzMy/LzM2MF9GXzIxNDEy/MzIwMl9LR0lpQ0xL/OE1aYVlONmpLZkxj/dGVDWkxxTlRBdG1K/My5qcGc" },
        { title: "Development", description: "Community and church development projects.", imgSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ODj8rGRLWZhIpJfSSgcwAAHaHa%26pid%3DApi&f=1&ipt=381b1417f8bb72261300fb4243fed18bb6598313f0bfbd27d518cc1a23f43bd3&ipo=images" },
        { title: "Church School", description: "Let all little children come to me.", imgSrc: "https://drive.google.com/thumbnail?id=1nFNMoFw9FlcVzVfZ6F3PvNaNmBamfjAt&sz=w360" },
        { title: "Media Ministry", description: "Media coverage of the Lord's work.", imgSrc: "https://drive.google.com/thumbnail?id=1glrkfCoBv1A_ZyZ3gIzB_hfWmAHKqfnO&sz=w360" },
        { title: "Choir", description: "Melodic worship.", imgSrc: "https://imgs.search.brave.com/ST-1lVOlN7WejLbzXN1y_IWvxrLH-cHZ0ZKefudD7Pk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTE3/Njc1NDY4L3Bob3Rv/L3NoZWV0LW11c2lj/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1VV2pWTi1BZTg4/MEVESDJpQm9oSXpK/eWNZQVFVcnAzN3FZ/a3oxaTl0TVhJPQ" },
      ];
      const [expandedIndex, setExpandedIndex] = useState(null);
      const toggleReadMore = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
      };
    
    
  return (
    <div className="flex-1">
      <section 
  className="mb-12 bg-cover bg-center text-white" 
  style={{ 
    backgroundImage: "url('https://drive.google.com/thumbnail?id=1PjjaWysqg7WTRnrHDAeeOWxCfDDr9c0t&sz=h600')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    minHeight: '600px'
  }}
>
  <div className="bg-black bg-opacity-50 p-8 flex flex-col justify-center items-center min-h-screen">
    <h2 className="text-4xl font-bold mb-4 text-center mt-8">About Us</h2>
    <div className="flex flex-col md:flex-row items-center text-center">
      <div className="md:ml-8">
        <p className="text-lg">
        PCEA Bethel Church was launched on October 4, 2015, starting with around seventy families from two districts under the leadership of Elders Frederick Muhoro and Rose Mukunya, guided by Rev. John Maina Mahinda. Initially meeting in tents, the congregation persevered through challenges like land issues and weather to establish a semi-permanent structure before building a modern sanctuary. The church now consists of five districts, Berea, Ebenezer, Jericho, Bethany, Judea and has made significant progress, including acquiring land, constructing a sanctuary, and establishing a youth church. The current leadership under Rev. Moses Kihara remains committed to spiritual growth and community impact.
        </p>
        <p className="text-lg mt-4">
          At Bethel, EVERYONE MATTERS. We pride ourselves on our inclusion of everyone in the day to day running of our church. We are all children of God, so we all have a chance to grow and lead in Bethel and shape it in whichever way the Lord guides us.
        </p>
      </div>
    </div>
  </div>
</section>


      <section className="mb-12 text-center text-gray-900 dark:text-white">
        <div className="md:flex md:justify-around">
          <div className="md:w-1/3">
            <h3 className="card mb-12 text-center bg-base-100 w-full sm:w-80 md:w-64 lg:w-95 shadow-xl text-blue-900 font-bold">Mission</h3>
            <p className="text-lg">
              A highly motivated, united and self-reliant Parish that is committed to serve God and its members for enhanced spiritual, physical, economic and social transformation.
            </p>
          </div>
          <div className="md:w-1/3">
            <h3 className="card mb-12 text-center bg-base-100 w-full sm:w-80 md:w-64 lg:w-95 shadow-xl text-blue-900 font-bold">Vision</h3>
            <p className="text-lg">
              To empower our members holistically, accommodating all and encouraging voluntary devoted services to God and society.
            </p>
          </div>
        </div>
      </section>

      <section className="card mb-12 text-center bg-base-100 w-full lg:w-1/2 mx-auto shadow-xl p-8 text-gray-900 dark:text-white">
        <h3 className="text-2xl font-bold mb-4 text-blue-900">Core Values</h3>
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


<section className="mb-12 text-gray-900 dark:text-white">
  <h3 className="text-2xl font-bold mb-4 text-center">Our Theme for 2024</h3>
  <p className="text-lg italic mb-4 text-center text-blue-900 font-bold">"The righteous shall flourish like the palm tree, he shall grow like a cedar in Lebanon." - Psalms 92:12</p>
  <div className="flex flex-col md:flex-row justify-around items-start">
    <div className="flex flex-col items-start mb-4 md:mb-0">
      <h4 className="text-3xl font-extrabold">THE RIGHTEOUS</h4>
      <h4 className="text-3xl font-extrabold bg-blue-900 text-white px-2">SHALL FLOURISH</h4>
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
    <span className="mx-4 text-xl font-bold text-blue-900">Leadership</span>
    <div className="flex-grow border-t border-gray-400"></div>
  </div>
  <p className="text-center mb-8 text-gray-900 dark:text-white">Our leadership consists of strong and dedicated men and women that were elected and  have led Bethel faithfully.</p>

      <div className="container mx-auto p-8 flex justify-around text-gray-900 dark:text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div className="card bg-base-100 w-full sm:w-80 md:w-64 lg:w-95 shadow-xl">
          <figure>
            <img
              src="https://drive.google.com/thumbnail?id=148MXvbEpOKCgXCL-JA1rISzSpDlWUbcQ&sz=w360"
              alt="Elder Frederick Muhoro" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">
              Elder Frederick Muhoro
            </h2>
            <p>Retired Elder</p>
            
          </div>
        </div>
        <div className="card bg-base-100 w-full sm:w-80 md:w-64 lg:w-95 shadow-xl">
          <figure>
            <img
              src="https://drive.google.com/thumbnail?id=1eUnakZ5RLHgVImVbAaZ682AEhmXK_Hcv&sz=w360"
              alt="Elder Lucy Kinyua" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">
              Elder Lucy Kinyua
              
            </h2>
            <p>Ebenezer District</p>
          </div>
        </div>
        <div className="card bg-base-100 w-full sm:w-80 md:w-64 lg:w-95 shadow-xl">
          <figure>
            <img
              src="https://drive.google.com/thumbnail?id=14U-5x8Z7lfuwPbiAWVeMzv7aVlGfoEtN&sz=w360"
              alt="Elder Patrick Kamengere" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">
              Elder Patrick Kamengere
              
            </h2>
            <p>Bethany District</p>
            
          </div>
        </div>
        <div className="card bg-base-100 w-full sm:w-80 md:w-64 lg:w-95 shadow-xl">
          <figure>
            <img
              src="https://drive.google.com/thumbnail?id=1JPf0MZLhOxZyVTV_OSqLrZyydXbJaoP2&sz=w360"
              alt="Elder Daniel Gichuki" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">
              Elder Daniel Gichuki
              
            </h2>
            <p>Jericho District</p>
            
          </div>
        </div>
        <div className="card bg-base-100 w-full sm:w-80 md:w-64 lg:w-95 shadow-xl">
          <figure>
            <img
              src="https://drive.google.com/thumbnail?id=1Vj7h6oWRvK8BW9USp9tnjDMZ8nWmwrKi&sz=w360"
              alt="Elder Peter Kiongo" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">
              Elder Peter Kiongo
            </h2>
            <p>Judea District</p>
            
          </div>
        </div>
        <div className="card bg-base-100 w-full sm:w-80 md:w-64 lg:w-95 shadow-xl">
          <figure>
            <img
              src="https://drive.google.com/thumbnail?id=1hZ5KC7fsCCGk9tPvFeJftWqjQsOe6Jgt&sz=w360"
              alt="Church Secretary" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">
              Veronica Kinyua 
              
            </h2>
            <p>Secretary</p>
            
          </div>
        </div>
        <div className="card bg-base-100 w-full sm:w-80 md:w-64 lg:w-95 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Church Treasurer" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">
              Peter Gacanja
            </h2>
            <p>Treasurer</p>
           
          </div>
        </div>
      </div>
    </div>
    <div className="flex items-center my-8">
    <div className="flex-grow border-t border-gray-400"></div>
    
    <span className="mx-4 text-xl font-bold text-blue-900">Our Ministries</span>
    <div className="flex-grow border-t border-gray-400"></div>
  </div>
  <div className="container mx-auto p-8 flex justify-around text-gray-900 dark:text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {groupData.map((group, index) => {
          const isExpanded = expandedIndex === index;
          const truncatedDescription = group.description.slice(0, 100); // Show only the first 100 characters
          
          return (
            <div key={index} className="card bg-base-100 w-full sm:w-80 md:w-64 lg:w-95 shadow-xl">
              <figure className="px-5 pt-10">
                <img
                  src={group.imgSrc}
                  alt={group.title}
                  className="rounded-xl w-auto"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">{group.title}</h2>

                {/* Conditionally render full or truncated description */}
                <p>
                  {isExpanded
                    ? group.description
                    : `${truncatedDescription}...`}
                </p>

                {/* Toggle button for Read More/Read Less */}
                <button
                  onClick={() => toggleReadMore(index)}
                  className="text-blue-500 hover:underline mt-2"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default About;
