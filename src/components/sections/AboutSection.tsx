import { Award, Camera, Users } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="bg-white px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-[1360px] items-center gap-16 lg:grid-cols-[0.95fr_1fr]">
        <div>
          <div className="mb-10 inline-flex items-center gap-2 rounded-full bg-orange-100 px-7 py-3 text-base font-bold text-orange-600">
            <Users size={18} />
            About Visualix Studio
          </div>

          <h2 className="text-5xl font-black leading-tight tracking-normal text-black md:text-6xl">Your Vision, Our Lens</h2>

          <div className="mt-10 space-y-8 text-2xl leading-relaxed text-slate-700">
            <p>
              Founded by <strong>Siddhant Kharwar</strong>, Visualix Studio was born from a passion for capturing
              powerful moments and transforming them into cinematic masterpieces.
            </p>
            <p>
              From high-impact commercial campaigns to compelling visual storytelling, our team blends creative vision
              with cutting-edge technology.
            </p>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 text-3xl font-black text-black">
                <Camera className="text-orange-500" size={30} />
                500+
              </div>
              <p className="mt-4 text-xl text-slate-700">Events Captured</p>
            </div>
            <div>
              <div className="flex items-center gap-3 text-3xl font-black text-black">
                <Award className="text-orange-500" size={30} />
                50+
              </div>
              <p className="mt-4 text-xl text-slate-700">Brand Collaborations</p>
            </div>
          </div>

          <div className="mt-12 rounded-[8px] bg-slate-50 p-8">
            <h3 className="text-2xl font-black text-black">Our Mission</h3>
            <p className="mt-6 text-xl leading-relaxed text-slate-700">
              To create visual narratives that not only capture moments but evoke emotions, tell stories, and preserve
              memories that last a lifetime.
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute -left-8 top-1/2 hidden h-16 w-16 -translate-y-1/2 rounded-full bg-white shadow-xl sm:block" />
          <div className="absolute -right-8 top-1/2 hidden h-16 w-16 -translate-y-1/2 rounded-full bg-white shadow-xl sm:block" />
          <div className="overflow-hidden rounded-[18px] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-200/80">
            <video
              className="aspect-[9/16] w-full rounded-[14px] bg-slate-950 object-cover"
              src="/reel.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
}
