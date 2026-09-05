
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { lecturers, guides } from "../data/lecturers";

function TributePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [id]);
  // Search both guides and lecturers
  const person = [...guides, ...lecturers].find(
    (item) => item.id === id
  );

  // Use the guide's salutation when available.
  // For lecturers, fall back to the appropriate greeting.
  const maamIds = [
    "rukmini-priyanka",
    "p-and-s",
    "oops",
    "er",
    "deepika-reddy",
  ];

  const greeting = person?.salutation
    ? person.salutation
    : maamIds.includes(person?.id)
      ? "Dear Ma'am,"
      : "Dear Sir,";

  if (!person) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#faf8f4] px-6">
        <div className="text-center">
          <p className="text-5xl">🌷</p>

          <h1 className="mt-5 font-serif text-3xl font-semibold text-purple-950">
            Tribute Not Found
          </h1>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="mt-6 rounded-full bg-purple-900 px-6 py-3 font-semibold text-white transition hover:bg-purple-800"
          >
            Back to Teachers' Day
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#faf8f4] px-5 py-7 md:px-10 md:py-10">

      {/* Background decoration */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-purple-200/25 blur-3xl" />

        <div className="absolute -right-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-orange-200/25 blur-3xl" />

        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-yellow-100/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* Back button */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="group mb-8 flex items-center gap-2 rounded-full border border-purple-100 bg-white/75 px-5 py-2.5 text-sm font-semibold text-purple-700 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-x-1 hover:bg-white hover:shadow-md"
        >
          <span className="text-lg transition-transform group-hover:-translate-x-1">
            ←
          </span>

          Back to Teachers' Day
        </button>

        {/* Main tribute */}
        <section className="animate-fade-up relative overflow-hidden rounded-[2.5rem] border border-purple-100 bg-white/90 px-5 py-12 shadow-2xl backdrop-blur sm:px-8 md:px-16 md:py-16">

          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-purple-100/70 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-orange-100/60 blur-3xl" />

          {/* Decorative stars */}
          <div className="pointer-events-none absolute left-7 top-8 text-xl text-purple-300/60">
            ✦
          </div>

          <div className="pointer-events-none absolute right-8 top-20 text-sm text-orange-400/70">
            ✦
          </div>

          <div className="pointer-events-none absolute bottom-10 right-8 text-xl text-purple-300/60">
            ✦
          </div>

          <div className="relative text-center">

            {/* Label */}
            <p className="animate-fade-in text-xs font-bold uppercase tracking-[0.35em] text-orange-600">
              {person.salutation
                ? "A Special Letter of Appreciation"
                : "A Special Tribute"}
            </p>

            {/* Divider */}
            <div className="mx-auto my-6 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-purple-200 md:w-14" />

              <span className="text-orange-500">
                ✦
              </span>

              <span className="h-px w-10 bg-purple-200 md:w-14" />
            </div>

            {/* Teacher name */}
            <h1 className="font-serif text-4xl font-semibold leading-tight text-purple-950 sm:text-5xl md:text-6xl">
              {person.name}
            </h1>

            {/* Role */}
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-purple-600">
              {person.role}
            </p>

            {/* Year */}
            {person.year && (
              <p className="mt-2 text-sm text-slate-400">
                {person.year}
              </p>
            )}

            {/* Photo */}
            <div className="group mx-auto mt-10 w-fit">

              <div className="rounded-[2rem] bg-gradient-to-br from-purple-200 via-orange-100 to-yellow-100 p-1.5 shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">

                <div className="flex h-72 w-52 items-center justify-center overflow-hidden rounded-[1.7rem] bg-purple-50 sm:h-80 sm:w-60">

                  {person.photo ? (
                    <img
                      src={person.photo}
                      alt={person.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="px-5 text-center">

                      <p className="font-serif text-6xl text-purple-300">
                        ✦
                      </p>

                      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                        Faculty Photo
                      </p>

                      <p className="mt-2 text-xs text-purple-300">
                        Coming Soon
                      </p>

                    </div>
                  )}

                </div>
              </div>

              {!person.photo && (
                <p className="mt-4 text-xs text-slate-400">
                  A little space reserved for a wonderful teacher
                </p>
              )}

            </div>

            {/* Quote */}
            <div className="mx-auto mt-12 max-w-3xl">

              <p className="font-serif text-5xl leading-none text-orange-400">
                “
              </p>

              <blockquote className="mt-1 font-serif text-xl italic leading-9 text-purple-900 sm:text-2xl md:text-3xl md:leading-10">
                {person.quote}
              </blockquote>

              <div className="mx-auto mt-7 h-px w-16 bg-orange-300" />

            </div>

            {/* Letter */}
            <div className="mx-auto mt-12 max-w-3xl rounded-[2rem] border border-purple-100 bg-[#fffdf9] p-6 text-left shadow-sm sm:p-8 md:p-10">

              {/* Letter heading */}
              <div className="mb-8 text-center">

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-600">
                  From Your Students
                </p>

                <div className="mx-auto mt-4 flex items-center justify-center gap-2">

                  <span className="h-px w-8 bg-purple-200" />

                  <span className="text-xs text-orange-400">
                    ✦
                  </span>

                  <span className="h-px w-8 bg-purple-200" />

                </div>

              </div>

              {/* Greeting */}
              <p className="font-serif text-2xl font-semibold text-purple-950">
                {greeting}
              </p>

              {/* Message */}
              <div className="mt-6 whitespace-pre-line text-base leading-8 text-slate-600 md:text-[17px]">
                {person.message}
              </div>

              {/* Signature */}
              <div className="mt-10 border-t border-purple-100 pt-7 text-right">

                <p className="font-serif text-lg italic text-purple-800">
                  With sincere gratitude,
                </p>

                <p className="mt-2 font-semibold text-purple-950">
                  Your Students
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  CSE – Data Science • Section D
                </p>

              </div>

            </div>

            {/* Share Tribute */}
            <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <button
                type="button"
                onClick={async () => {
                  const shareData = {
                    title: `A Tribute to ${person.name}`,
                    text: `A special Teachers' Day tribute for ${person.name}.`,
                    url: window.location.href,
                  };

                  if (navigator.share) {
                    try {
                      await navigator.share(shareData);
                    } catch {
                      // User closed the share menu
                    }
                  } else {
                    try {
                      await navigator.clipboard.writeText(
                        window.location.href
                      );

                      alert("Tribute link copied!");
                    } catch {
                      alert("Unable to copy the link.");
                    }
                  }
                }}
                className="group flex items-center gap-2 rounded-full border border-purple-200 bg-white px-6 py-3 text-sm font-semibold text-purple-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-md"
              >
                <span className="text-base transition-transform duration-300 group-hover:scale-110">
                  ↗
                </span>

                Share Tribute
              </button>

            </div>

            {/* Closing */}
            <div className="mt-14">

              <div className="mx-auto mb-7 flex items-center justify-center gap-4">

                <span className="h-px w-14 bg-purple-200 md:w-16" />

                <span className="text-orange-500">
                  ♥
                </span>

                <span className="h-px w-14 bg-purple-200 md:w-16" />

              </div>

              <p className="font-serif text-3xl font-semibold text-purple-950 md:text-4xl">
                Happy Teachers' Day!
              </p>

              <p className="mt-4 text-base text-orange-600 md:text-lg">
                Thank you for being a part of our journey. ❤️
              </p>

              <p className="mt-7 text-sm text-slate-500">
                With love and gratitude,
              </p>

              <p className="mt-2 font-semibold text-purple-800">
                CSE – Data Science • Section D
              </p>

              <p className="mt-1 text-sm text-slate-400">
                2nd Year • 2026
              </p>

            </div>

          </div>
        </section>

        {/* Bottom navigation */}
        <div className="py-10 text-center">

          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-sm font-semibold text-purple-700 transition hover:text-purple-950"
          >
            ← View All Teachers
          </button>

        </div>

      </div>
    </main>
  );
}

export default TributePage;




