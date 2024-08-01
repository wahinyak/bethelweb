import eventsHeader from '../assets/Events_header.jpg';
 

const Events = () => {
  return (
    <div className="flex-1">
      <section className="text-white h-80 mb-10" style={{backgroundImage: `url(${eventsHeader})`, backgroundSize: "cover"}}>
        <div className="flex items-center justify-center h-full">
          <h1 className="text-4xl font-bold" style={{textDecoration: "underline overline", textDecorationThickness: 4}}>OUR EVENTS</h1>
        </div>
      </section>
      <section className="flex justify-center">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Africa%2FNairobi&bgcolor=%23ffffff&showTitle=0&showPrint=0&showCalendars=0&src=cnVhaXBjZWFiZXRoZWxAZ21haWwuY29t&src=ZW4ua2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%233F51B5&color=%230B8043"
          style={{ borderWidth: 0 }}
          width={800}
          height={600}
          frameBorder={0}
          scrolling="no"
        ></iframe>

      </section>

    </div>
  );
}

export default Events;
