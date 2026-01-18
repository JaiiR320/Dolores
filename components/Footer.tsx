import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 text-center gap-4">
          <div className="md:col-span-2"></div>

          <div className="md:col-span-4">
            <Image
              className="footer-img mx-auto"
              src="/img/footer-img-small.png"
              alt="footer logo"
              width={190}
              height={100}
            />
            <hr className="light mx-auto" />
            <p>(401) 409-2075</p>
            <p>info@dolorespvd.com</p>
            <p>100 Hope St.</p>
            <p>Providence, RI, 02906</p>
          </div>

          <div className="md:col-span-4">
            <hr className="light mx-auto" />
            <h5 className="text-lg font-semibold">Our Hours</h5>
            <hr className="light mx-auto" />
            <div>
              <p>Sunday Brunch 11AM-3PM</p>
              <p>Monday 4PM-10PM</p>
              <p>Tuesday CLOSED</p>
              <p>Wednesday 4PM-10PM</p>
              <p>Thursday 4PM-10PM</p>
              <p>Friday 4PM-10PM, 10PM-11:30PM Late Night Menu</p>
              <p>Saturday 4PM-10PM, 10PM-11:30PM Late Night Menu</p>
            </div>
          </div>

          <div className="md:col-span-2"></div>

          <div className="col-span-full">
            <hr className="light-100 mx-auto" />
            <h5 className="text-lg">&copy;dolorespvd</h5>
          </div>
        </div>
      </div>
    </footer>
  );
}
