
const Events = () => {
  return (
    <div className="flex-1">
      <section className="text-white h-150 mb-10" style={{backgroundImage: "url(https://imgs.search.brave.com/nz1FVmzLVV2vWd-hOs67EKV0EbSPrQrDeR2WwmctJH0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTYy/MzMwMzc3MC9waG90/by9jcmVhdGl2ZS1i/YWNrZ3JvdW5kLWlt/YWdlLWlzLWJsdXJy/ZWQtZXZlbmluZy1j/aXR5LWxpZ2h0cy1h/bmQtbGlnaHQtc25v/d2ZhbGwud2VicD9i/PTEmcz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/LS1JNlFpc1BSN3lH/bWd1ak9JMmNvOFUz/RklLNXRCdjZ4QWpN/dXA2N2doYz0)", backgroundSize: "cover"}}>
        <div className="flex flex-col items-center justify-center h-full">
	  <div className="h-1 bg-white w-80 mb-2 "></div>
          <h1 className="text-4xl font-bold mb-2 text-white">OUR EVENTS</h1>
	  <div className="h-1 bg-white w-80"></div>
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
