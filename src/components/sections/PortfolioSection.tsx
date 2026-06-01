import { clientVideos, collaborations } from '../../data/siteData';

export function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-white px-5 pb-24 sm:px-8 lg:pb-32">
      <div className="mx-auto max-w-[1360px]">
        <div className="text-center">
          <h2 className="text-5xl font-black tracking-normal text-black md:text-6xl">Our Clients</h2>
          <p className="mt-6 text-2xl text-slate-700">
            A selection of video projects created in collaboration with our clients.
          </p>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {clientVideos.map((client) => (
            <article
              key={client.name}
              className="overflow-hidden rounded-[28px] bg-white shadow-2xl shadow-slate-200 transition duration-300 hover:-translate-y-2 hover:shadow-orange-200/60"
            >
              <video
                className="aspect-video w-full bg-slate-900 object-cover"
                src={client.src}
                controls
                muted
                preload="metadata"
                playsInline
              />
              <h3 className="px-6 py-6 text-2xl font-black text-black">{client.name}</h3>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-28 max-w-5xl text-center text-2xl text-slate-700">
          We've had the privilege of collaborating with some amazing brands and organizations.
        </p>

        <div className="mt-20 grid grid-cols-2 gap-x-10 gap-y-16 sm:grid-cols-3 lg:grid-cols-4">
          {collaborations.map((brand) => (
            <div key={brand.name} className="group text-center">
              <div className="mx-auto flex h-28 max-w-[220px] items-center justify-center">
                <img
                  src={brand.image}
                  alt={`${brand.name} logo`}
                  className="brand-logo max-h-24 max-w-full object-contain transition duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-lg font-semibold text-slate-900">{brand.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
