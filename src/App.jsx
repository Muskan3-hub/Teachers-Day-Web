
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import mrecwLogo from "./assets/mrecw-logo.jpg";
import { lecturers } from "./data/lecturers";
import LecturerCard from "./components/LecturerCard";
import TributePage from "./components/TributePage";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen overflow-hidden bg-[#faf8f4] text-slate-800">
    {/* Floating decorative petals */}
    <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
      <span className="petal left-[8%] top-[25%]">✿</span>
      <span className="petal petal-slow left-[22%] top-[70%] text-sm">✦</span>
      <span className="petal petal-fast right-[15%] top-[35%]">✿</span>
      <span className="petal petal-slow right-[28%] top-[75%] text-sm">✦</span>
    </div>
      {/* Decorative background */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-purple-200/30 blur-3xl" />
        <div className="absolute -right-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-orange-200/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-yellow-100/35 blur-3xl" />
      </div>

      <main className="relative z-10">
        {/* Header */}
        <header className="animate-fade-in px-6 pt-10 text-center">
          <div className="mx-auto flex max-w-6xl flex-col items-center">
            <div className="rounded-3xl border border-purple-100 bg-white/60 px-6 py-4 shadow-sm backdrop-blur">
              <img
                src={mrecwLogo}
                alt="MRECW Logo"
                className="animate-float h-24 w-auto object-contain md:h-28"
              />
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.28em] text-purple-700 md:text-sm">
              Malla Reddy Engineering College for Women
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-10 bg-purple-200" />
              <span className="text-sm text-orange-500">✦</span>
              <span className="h-px w-10 bg-purple-200" />
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="animate-fade-up mx-auto flex min-h-[68vh] max-w-5xl flex-col items-center justify-center px-6 py-16 text-center">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-orange-600 md:text-sm">
            Teachers' Day • 2026
          </p>

          <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-[1.05] text-purple-950 md:text-7xl">
            A Tribute to
            <span className="mt-3 block text-orange-600">
              Our Mentors
            </span>
          </h1>

          <div className="my-9 flex items-center gap-3">
            <span className="h-px w-12 bg-purple-200 md:w-20" />
            <span className="text-orange-500">✦</span>
            <span className="h-px w-12 bg-purple-200 md:w-20" />
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-600 md:text-xl md:leading-9">
            To the teachers who guide us, inspire us, challenge us,
            and make our journey a little more meaningful.
          </p>

          <div className="mt-8">
            <p className="font-serif text-xl font-semibold text-purple-950">
              CSE – Data Science
            </p>

            <p className="mt-2 text-sm tracking-wide text-slate-500">
              Section D&nbsp; • &nbsp;2nd Year
            </p>
          </div>

          <div className="mt-14 flex flex-col items-center text-purple-400">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400">
              Explore
            </span>
            <span className="mt-2 animate-bounce text-xl">↓</span>
          </div>
        </section>

        {/* Lecturers */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-600 md:text-sm">
              With Gratitude
            </p>

            <h2 className="mt-4 font-serif text-4xl font-semibold text-purple-950 md:text-5xl">
              To Our Wonderful Teachers
            </h2>

            <div className="mx-auto mt-6 h-px w-16 bg-orange-300" />

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
              Each teacher has left a unique mark on our journey.
              Here is a little tribute to each of them.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            {lecturers.map((lecturer) => (
              <LecturerCard
                key={lecturer.id}
                lecturer={lecturer}
                onOpen={(selectedLecturer) => {
                  navigate(`/tribute/${selectedLecturer.id}`);
                }}
              />
            ))}
          </div>
        </section>

        {/* Quote */}
        <section className="mx-auto max-w-4xl px-6 pb-24 text-center">
          <div className="relative overflow-hidden rounded-[2rem] border border-purple-100 bg-white/70 px-7 py-12 shadow-sm backdrop-blur md:px-14 md:py-14">
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-100/50 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-orange-100/40 blur-3xl" />

            <div className="relative">
              <p className="font-serif text-5xl leading-none text-orange-400">
                “
              </p>

              <p className="mt-2 font-serif text-2xl italic leading-relaxed text-purple-950 md:text-3xl">
                A teacher affects eternity; they can never tell where their
                influence stops.
              </p>

              <div className="mx-auto mt-7 h-px w-12 bg-orange-300" />

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                — Henry Adams
              </p>
            </div>
          </div>
        </section>

        {/* Final Teachers' Day Message */}
        <section className="mx-auto max-w-5xl px-6 pb-24 text-center">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-purple-100 bg-white/80 px-7 py-14 shadow-xl backdrop-blur md:px-16 md:py-16">
            <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-purple-200/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-orange-200/30 blur-3xl" />

            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-600 md:text-sm">
                A Little More From Us
              </p>

              <div className="mx-auto my-7 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-purple-200" />
                <span className="text-orange-500">✦</span>
                <span className="h-px w-10 bg-purple-200" />
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-purple-950 md:text-5xl">
                To the teachers who taught us
                <span className="block text-orange-600">
                  more than just a subject...
                </span>
              </h2>

              <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                Thank you for every explanation, every correction,
                every moment of patience, and every time you believed in us.
              </p>

              <p className="mt-8 font-serif text-xl italic leading-8 text-purple-900 md:text-2xl">
                You are a part of the journey we will always remember.
              </p>

              <div className="mx-auto mt-10 h-px w-16 bg-orange-300" />

              <div className="mt-10">
                <p className="font-serif text-3xl font-semibold text-purple-950 md:text-4xl">
                  Happy Teachers' Day ❤️
                </p>

                <p className="mt-4 text-sm text-slate-500">
                  With love, respect, and gratitude
                </p>

                <p className="mt-2 text-sm font-semibold text-purple-800">
                  CSE – Data Science • Section D
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-purple-100 px-6 py-12 text-center">
          <p className="font-serif text-xl font-semibold text-purple-950">
            With Love & Gratitude ❤️
          </p>

          <p className="mt-3 text-sm text-slate-500">
            CSE – Data Science • Section D • 2nd Year
          </p>

          <div className="mx-auto my-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-purple-200" />
            <span className="text-xs text-orange-500">✦</span>
            <span className="h-px w-8 bg-purple-200" />
          </div>

          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400">
            Teachers' Day 2026
          </p>
        </footer>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tribute/:id" element={<TributePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;




