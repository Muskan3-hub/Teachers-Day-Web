
function TributeModal({ lecturer, onClose }) {
  if (!lecturer) return null;

  const isGuide = Boolean(lecturer.salutation);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-purple-950/75 p-3 backdrop-blur-md sm:p-5"
      onClick={onClose}
    >
      <div
        className="relative max-h-[94vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white/50 bg-[#fffdf9] shadow-[0_30px_100px_rgba(30,15,60,0.3)] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-purple-200"
        onClick={(event) => event.stopPropagation()}
      >
        {/* ================= BACKGROUND DECORATION ================= */}

        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-100/70 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl" />

        <div className="pointer-events-none absolute left-1/2 top-1/3 h-56 w-56 -translate-x-1/2 rounded-full bg-yellow-50/60 blur-3xl" />

        {/* ================= CLOSE BUTTON ================= */}

        <button
          type="button"
          onClick={onClose}
          aria-label="Close tribute"
          className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-purple-100 bg-white/90 text-sm text-slate-500 shadow-md backdrop-blur transition-all duration-300 hover:rotate-90 hover:bg-purple-900 hover:text-white sm:right-6 sm:top-6"
        >
          ✕
        </button>

        <div className="relative px-5 py-10 sm:px-8 md:px-14 md:py-14">

          {/* ================= HEADER ================= */}

          <div className="text-center">

            <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-orange-600 sm:text-[11px] sm:tracking-[0.3em]">
              {isGuide
                ? "A Special Letter of Appreciation"
                : "A Special Message For You"}
            </p>

            <div className="mx-auto my-5 flex items-center justify-center gap-3 sm:my-6">
              <span className="h-px w-8 bg-orange-200 sm:w-12" />

              <span className="text-base text-orange-500 sm:text-lg">
                ✦
              </span>

              <span className="h-px w-8 bg-orange-200 sm:w-12" />
            </div>

            <h2 className="font-serif text-3xl font-semibold leading-tight text-purple-950 sm:text-4xl md:text-5xl">
              {lecturer.name}
            </h2>

            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.16em] text-purple-600 sm:text-xs sm:tracking-[0.18em]">
              {lecturer.role}
            </p>

            {lecturer.year && (
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                {lecturer.year}
              </p>
            )}

          </div>

          {/* ================= PHOTO ================= */}

          <div className="relative mx-auto mt-9 w-fit sm:mt-10">

            <div className="h-56 w-44 overflow-hidden rounded-[1.5rem] border-4 border-white bg-gradient-to-br from-purple-50 to-orange-50 shadow-[0_15px_35px_rgba(76,29,149,0.14)] sm:h-64 sm:w-48">
              {lecturer.photo ? (
                <img
                  src={lecturer.photo}
                  alt={lecturer.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center">
                  <span className="font-serif text-5xl text-purple-300">
                    ✦
                  </span>

                  <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Faculty Photo
                  </p>

                  <p className="mt-1 text-xs text-purple-300">
                    Coming Soon
                  </p>
                </div>
              )}
            </div>

            <div className="absolute -bottom-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full border-4 border-[#fffdf9] bg-orange-500 text-xs text-white shadow-md">
              ✦
            </div>

          </div>

          {/* ================= QUOTE ================= */}

          <div className="mx-auto mt-10 max-w-2xl px-2 text-center">

            <span className="font-serif text-4xl leading-none text-orange-300">
              “
            </span>

            <blockquote className="-mt-1 font-serif text-lg italic leading-8 text-purple-900 sm:text-xl sm:leading-9 md:text-2xl">
              {lecturer.quote}
            </blockquote>

          </div>

          {/* ================= LETTER ================= */}

          <div className="relative mx-auto mt-9 max-w-2xl overflow-hidden rounded-[1.7rem] border border-purple-100 bg-white/85 p-6 shadow-[0_8px_30px_rgba(76,29,149,0.05)] sm:p-8 md:p-9">

            {/* Paper decoration */}
            <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 rounded-bl-[4rem] bg-purple-50/70" />

            <div className="pointer-events-none absolute bottom-0 left-0 h-16 w-16 rounded-tr-[3rem] bg-orange-50/60" />

            <div className="relative">

              {/* Letter heading */}
              <div className="flex items-center gap-3">
                <span className="h-px flex-1 bg-purple-100" />

                <span className="text-xs text-orange-400">
                  ✦
                </span>

                <span className="h-px flex-1 bg-purple-100" />
              </div>

              <p className="mt-6 font-serif text-xl font-semibold text-purple-950">
                {lecturer.salutation || "Dear Ma'am/Sir,"}
              </p>

              {/* Message */}
              <div className="mt-5 whitespace-pre-line text-sm leading-8 text-slate-600 sm:text-[15px]">
                {lecturer.message}
              </div>

              {/* Closing */}
              {lecturer.closing && (
                <p className="mt-7 whitespace-pre-line font-serif text-base italic text-purple-900">
                  {lecturer.closing}
                </p>
              )}

              {isGuide && (
                <p className="mt-1 text-sm font-semibold text-purple-800">
                  CSE – Data Science, 2nd Year
                </p>
              )}

              <div className="mt-7 flex items-center gap-3">
                <span className="h-px flex-1 bg-purple-100" />

                <span className="text-xs text-orange-400">
                  ✦
                </span>

                <span className="h-px flex-1 bg-purple-100" />
              </div>

            </div>
          </div>

          {/* ================= CLOSING ================= */}

          <div className="mt-11 text-center sm:mt-12">

            <div className="font-serif text-3xl text-orange-400">
              ❀
            </div>

            <h3 className="mt-3 font-serif text-2xl font-semibold text-purple-950 sm:text-3xl">
              Happy Teachers' Day!
            </h3>

            {!isGuide && (
              <>
                <p className="mt-3 text-sm text-slate-500">
                  With love and gratitude
                </p>

                <p className="mt-2 text-sm font-semibold text-purple-800">
                  CSE–DS • Section D
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  2nd Year
                </p>
              </>
            )}

            <div className="mx-auto mt-7 h-px w-12 bg-orange-300" />

            <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-300">
              Teachers' Day • 2026
            </p>

          </div>

        </div>
      </div>
    </div>
  );
}

export default TributeModal;



