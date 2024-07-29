import eventsHeader from '../assets/Events_header.jpg';
 

const Events = () => {
  return (
    <>
      <section className="text-white h-80 mb-10" style={{backgroundImage: `url(${eventsHeader})`, backgroundSize: "cover"}}>
        <div className="flex items-center justify-center h-full">
          <h1 className="text-4xl font-bold" style={{textDecoration: "underline overline", textDecorationThickness: 4}}>OUR EVENTS</h1>
        </div>
      </section>
      <section className="flex justify-center">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=UTC&bgcolor=%23ffffff&showTitle=0&showPrint=0&showCalendars=0&showTz=0&src=YmQ5ODRiNDI4NTA3MWEwODdiODJjMDRiOGM2MWFjMjY0NTIzZjU4YTY0ODFjZmRhZTU0MDA5OTM3MTk2NmRmNUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4ua2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%233F51B5&color=%230B8043"
          style={{ borderWidth: 0 }}
          width={800}
          height={600}
        ></iframe>
      </section>

    </>
  );
}

export default Events;
