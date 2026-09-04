
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import mrecwLogo from "./assets/mrecw-logo.jpg";
import { lecturers, guides } from "./data/lecturers";

import LecturerCard from "./components/LecturerCard";
import TributePage from "./components/TributePage";
import GuideCard from "./components/GuideCard";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen overflow-hidden bg-[#faf8f4] text-slate-800">

      {/* =========================================================
          GLOBAL DECORATION
      ========================================================= */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

        {/* Soft background glows */}
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-purple-200/30 blur-3xl" />

        <div className="absolute -right-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-orange-200/25 blur-3xl" />

        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-yellow-100/35 blur-3xl" />

        {/* Floating petals */}
        <span className="petal left-[8%] top-[25%]">
          ✿
        </span>

        <span className="petal petal-slow left-[22%] top-[70%] text-sm">
          ✦
        </span>

        <span className="petal petal-fast right-[15%] top-[35%]">
          ✿
        </span>

        <span className="petal petal-slow right-[28%] top-[75%] text-sm">
          ✦
        </span>

      </div>


      <main className="relative z-10">

        {/* =========================================================
            HEADER
        ========================================================= */}

        <header className="animate-fade-in px-5 pt-8 text-center sm:px-6 sm:pt-10">

          <div className="mx-auto flex max-w-6xl flex-col items-center">

            {/* Logo */}
            <div className="rounded-[1.75rem] border border-purple-100 bg-white/70 px-6 py-4 shadow-[0_8px_30px_rgba(76,29,149,0.06)] backdrop-blur sm:px-7 sm:py-5">

              <img
                src={mrecwLogo}
                alt="Malla Reddy Engineering College for Women Logo"
                className="animate-float h-20 w-auto object-contain sm:h-24 md:h-28"
              />

            </div>

            {/* College name */}
            <p className="mt-5 max-w-xl text-[10px] font-bold uppercase tracking-[0.22em] text-purple-700 sm:text-xs sm:tracking-[0.28em] md:text-sm">
              Malla Reddy Engineering College for Women
            </p>

            {/* Decorative divider */}
            <div className="mt-5 flex items-center gap-3">

              <span className="h-px w-8 bg-purple-200 sm:w-10" />

              <span className="text-xs text-orange-500 sm:text-sm">
                ✦
              </span>

              <span className="h-px w-8 bg-purple-200 sm:w-10" />

            </div>

          </div>

        </header>


        {/* =========================================================
            HERO
        ========================================================= */}

        <section className="animate-fade-up mx-auto flex min-h-[65vh] max-w-5xl flex-col items-center justify-center px-5 py-14 text-center sm:px-6 sm:py-16">

          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-orange-600 sm:text-xs md:text-sm">
            Teachers' Day • 2026
          </p>

          <h1 className="max-w-4xl font-serif text-[3rem] font-semibold leading-[1.02] text-purple-950 sm:text-6xl md:text-7xl">

            A Tribute to

            <span className="mt-3 block text-orange-600">
              Our Mentors
            </span>

          </h1>

          {/* Hero divider */}
          <div className="my-8 flex items-center gap-3 sm:my-9">

            <span className="h-px w-10 bg-purple-200 sm:w-16 md:w-20" />

            <span className="text-orange-500">
              ✦
            </span>

            <span className="h-px w-10 bg-purple-200 sm:w-16 md:w-20" />

          </div>

          <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 md:text-xl md:leading-9">
            To the teachers who guide us, inspire us, challenge us,
            and make our journey a little more meaningful.
          </p>

          {/* Class information */}
          <div className="mt-7">

            <p className="font-serif text-xl font-semibold text-purple-950 sm:text-2xl">
              CSE – Data Science
            </p>

            <p className="mt-2 text-xs tracking-[0.08em] text-slate-500 sm:text-sm">
              Section D&nbsp; • &nbsp;2nd Year
            </p>

          </div>

          {/* Explore indicator */}
          <div className="mt-12 flex flex-col items-center text-purple-400 sm:mt-14">

            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-slate-400 sm:text-[10px]">
              Explore
            </span>

            <span className="mt-2 animate-bounce text-lg sm:text-xl">
              ↓
            </span>

          </div>

        </section>


        {/* =========================================================
            OUR GUIDES
        ========================================================= */}

        <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16">

          <div className="mb-10 text-center sm:mb-12">

            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-orange-600 sm:text-xs sm:text-sm">
              Our Guides
            </p>

            <div className="mx-auto my-5 flex items-center justify-center gap-2">

              <span className="h-px w-6 bg-orange-200" />

              <span className="text-xs text-orange-400">
                ✦
              </span>

              <span className="h-px w-6 bg-orange-200" />

            </div>

            <h2 className="font-serif text-3xl font-semibold text-purple-950 sm:text-4xl md:text-5xl">
              The People Who Guide Us
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              The people who guide, support, and shape our journey.
            </p>

          </div>


          {/* Guide cards */}
          <div className="grid gap-7 md:grid-cols-2 md:gap-8">

            {guides.map((guide) => (
              <GuideCard
                key={guide.id}
                guide={guide}
                onOpen={(selectedGuide) => {
                  navigate(`/tribute/${selectedGuide.id}`);
                }}
              />
            ))}

          </div>

        </section>


        {/* =========================================================
            SECTION DIVIDER
        ========================================================= */}

        <div className="mx-auto flex max-w-5xl items-center justify-center gap-4 px-6 py-2">

          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-purple-100" />

          <span className="font-serif text-lg text-orange-400">
            ❀
          </span>

          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-purple-100" />

        </div>


        {/* =========================================================
            LECTURERS
        ========================================================= */}

        <section className="mx-auto max-w-6xl px-5 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-16">

          <div className="mb-11 text-center sm:mb-14">

            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-orange-600 sm:text-xs md:text-sm">
              With Gratitude
            </p>

            <h2 className="mt-4 font-serif text-3xl font-semibold text-purple-950 sm:text-4xl md:text-5xl">
              To Our Wonderful Teachers
            </h2>

            <div className="mx-auto mt-6 flex items-center justify-center gap-2">

              <span className="h-px w-7 bg-orange-200" />

              <span className="text-xs text-orange-400">
                ✦
              </span>

              <span className="h-px w-7 bg-orange-200" />

            </div>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Each teacher has left a unique mark on our journey.
              Here is a little tribute to each of them.
            </p>

          </div>


          {/* Lecturer cards */}
          <div className="grid gap-6 sm:gap-7 md:grid-cols-2">

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


        {/* =========================================================
            QUOTE
        ========================================================= */}

        <section className="mx-auto max-w-4xl px-5 pb-20 sm:px-6 sm:pb-24">

          <div className="relative overflow-hidden rounded-[2rem] border border-purple-100 bg-white/75 px-6 py-11 shadow-[0_15px_45px_rgba(76,29,149,0.06)] backdrop-blur sm:px-10 sm:py-13 md:px-14 md:py-14">

            {/* Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-100/50 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-orange-100/40 blur-3xl" />

            <div className="relative text-center">

              <p className="font-serif text-5xl leading-none text-orange-400">
                “
              </p>

              <p className="mt-2 font-serif text-xl italic leading-9 text-purple-950 sm:text-2xl md:text-3xl md:leading-relaxed">
                A teacher affects eternity; they can never tell where their
                influence stops.
              </p>

              <div className="mx-auto mt-7 h-px w-12 bg-orange-300" />

              <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400 sm:text-xs">
                — Henry Adams
              </p>

            </div>

          </div>

        </section>


        {/* =========================================================
            FINAL MESSAGE
        ========================================================= */}

        <section className="mx-auto max-w-5xl px-5 pb-20 sm:px-6 sm:pb-24">

          <div className="relative overflow-hidden rounded-[2.25rem] border border-purple-100 bg-white/80 px-6 py-12 shadow-[0_20px_60px_rgba(76,29,149,0.08)] backdrop-blur sm:px-10 sm:py-14 md:px-16 md:py-16">

            {/* Decorative glows */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-purple-200/30 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-orange-200/30 blur-3xl" />

            <div className="relative text-center">

              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-orange-600 sm:text-xs md:text-sm">
                A Little More From Us
              </p>

              <div className="mx-auto my-6 flex items-center justify-center gap-3 sm:my-7">

                <span className="h-px w-8 bg-purple-200 sm:w-10" />

                <span className="text-orange-500">
                  ✦
                </span>

                <span className="h-px w-8 bg-purple-200 sm:w-10" />

              </div>

              <h2 className="font-serif text-2xl font-semibold leading-tight text-purple-950 sm:text-3xl md:text-5xl">

                To the teachers who taught us

                <span className="mt-2 block text-orange-600">
                  more than just a subject...
                </span>

              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-8 sm:text-base sm:leading-8 md:text-lg">
                Thank you for every explanation, every correction,
                every moment of patience, and every time you believed in us.
              </p>

              <p className="mt-7 font-serif text-lg italic leading-8 text-purple-900 sm:mt-8 sm:text-xl md:text-2xl">
                You are a part of the journey we will always remember.
              </p>

              <div className="mx-auto mt-9 h-px w-14 bg-orange-300 sm:mt-10 sm:w-16" />

              <div className="mt-9 sm:mt-10">

                <p className="font-serif text-2xl font-semibold text-purple-950 sm:text-3xl md:text-4xl">
                  Happy Teachers' Day ❤️
                </p>

                <p className="mt-3 text-xs text-slate-500 sm:mt-4 sm:text-sm">
                  With love, respect, and gratitude
                </p>

                <p className="mt-2 text-xs font-semibold text-purple-800 sm:text-sm">
                  CSE – Data Science • Section D
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            FOOTER
        ========================================================= */}

        <footer className="border-t border-purple-100 px-5 py-10 text-center sm:px-6 sm:py-12">

          <p className="font-serif text-lg font-semibold text-purple-950 sm:text-xl">
            With Love & Gratitude ❤️
          </p>

          <p className="mt-2 text-xs text-slate-500 sm:mt-3 sm:text-sm">
            CSE – Data Science • Section D • 2nd Year
          </p>

          <div className="mx-auto my-5 flex items-center justify-center gap-3">

            <span className="h-px w-7 bg-purple-200 sm:w-8" />

            <span className="text-xs text-orange-500">
              ✦
            </span>

            <span className="h-px w-7 bg-purple-200 sm:w-8" />

          </div>

          <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-slate-400 sm:text-[10px]">
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

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/tribute/:id"
          element={<TributePage />}
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;










