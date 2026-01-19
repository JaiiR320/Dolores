import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-footer-text pt-8">
      <div className="container mx-auto pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 text-center gap-4">
          <div className="md:col-span-2"></div>

          <div className="md:col-span-4">
            <Image
              className="w-47.5 h-auto mx-auto"
              src="/img/footer-img-small.png"
              alt="footer logo"
              width={190}
              height={100}
            />
            <hr className="divider-footer" />
            <p>(401) 409-2075</p>
            <p>info@dolorespvd.com</p>
            <p>100 Hope St.</p>
            <p>Providence, RI, 02906</p>
          </div>

          <div className="md:col-span-4">
            <hr className="divider-footer" />
            <h5 className="text-lg font-semibold">Our Hours</h5>
            <hr className="divider-footer" />
            <div>
              <p>Sunday Brunch 11AM-3PM</p>
              <p>Monday 5PM-10PM</p>
              <p>Tuesday CLOSED</p>
              <p>Wednesday 5PM-10PM</p>
              <p>Thursday 5PM-10PM</p>
              <p>Friday 4PM-10PM, 10PM-11:30PM Late Night Menu</p>
              <p>Saturday 4PM-10PM, 10PM-11:30PM Late Night Menu</p>
            </div>
          </div>

          <div className="md:col-span-2"></div>

          <div className="col-span-full">
            <hr className="divider-footer-full" />
            <h5 className="text-lg">&copy;dolorespvd</h5>
          </div>
        </div>
      </div>
    </footer>
  );
}
