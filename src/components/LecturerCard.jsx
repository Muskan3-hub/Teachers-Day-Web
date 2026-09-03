
function LecturerCard({ lecturer, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(lecturer)}
      className="group relative w-full overflow-hidden rounded-3xl border border-purple-100 bg-white/80 p-5 text-left shadow-sm backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-purple-200 hover:shadow-2xl sm:p-7"
    >
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-purple-100/60 blur-2xl transition-transform duration-500 group-hover:scale-150" />

      <div className="relative">

        {/* ================= PHOTO ================= */}
        <div className="mb-6 flex justify-center">
          {lecturer.photo ? (
            <div className="relative">
              <div className="h-36 w-36 overflow-hidden rounded-2xl border-4 border-white bg-purple-50 shadow-lg sm:h-40 sm:w-40">
                <img
                  src={lecturer.photo}
                  alt={lecturer.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Small decorative corner */}
              <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-sm text-white shadow-md">
                ✦
              </div>
            </div>
          ) : (
            <div className="flex h-36 w-36 items-center justify-center rounded-2xl border-4 border-white bg-gradient-to-br from-purple-50 to-orange-50 shadow-inner sm:h-40 sm:w-40">
              <div className="text-center">
                <span className="block font-serif text-3xl text-purple-300">
                  ✦
                </span>

                <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                  Photo Coming Soon
                </span>
              </div>
            </div>
          )}
        </div>

        {/* ================= HEADER ================= */}
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-orange-600 sm:text-xs sm:tracking-[0.2em]">
              {lecturer.role}
            </p>

            <h3 className="mt-2 break-words font-serif text-xl font-semibold leading-tight text-purple-950 sm:text-2xl">
              {lecturer.name}
            </h3>
          </div>

          {/* Arrow */}
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-50 text-base text-purple-700 transition-all duration-300 group-hover:rotate-[-10deg] group-hover:bg-purple-900 group-hover:text-white sm:h-11 sm:w-11 sm:text-lg">
            →
          </span>
        </div>

        {/* Description */}
        <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
          {lecturer.shortDescription}
        </p>

        {/* Divider */}
        <div className="mt-5 h-px bg-gradient-to-r from-purple-100 via-orange-100 to-transparent sm:mt-6" />

        {/* Quote */}
        <p className="mt-5 font-serif text-sm italic leading-6 text-purple-800 sm:text-[15px]">
          “{lecturer.quote}”
        </p>

        {/* Open */}
        <div className="mt-6 flex items-center text-sm font-semibold text-purple-700">
          <span>Open tribute</span>

          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </div>

      </div>
    </button>
  );
}

export default LecturerCard;



