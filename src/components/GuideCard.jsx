
function GuideCard({ guide, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(guide)}
      className="group relative w-full overflow-hidden rounded-[2rem] border border-purple-100 bg-white/80 p-6 text-center shadow-[0_10px_35px_rgba(76,29,149,0.07)] backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-purple-200 hover:shadow-[0_25px_60px_rgba(76,29,149,0.14)] sm:p-8"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-purple-100/60 blur-3xl transition-transform duration-700 group-hover:scale-125" />

      <div className="pointer-events-none absolute -bottom-24 -left-20 h-48 w-48 rounded-full bg-orange-100/50 blur-3xl" />

      <div className="relative">

        {/* ================= LABEL ================= */}
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-orange-200 sm:w-10" />

          <span className="rounded-full border border-purple-100 bg-purple-50 px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.25em] text-purple-700">
            Our Guide
          </span>

          <span className="h-px w-8 bg-orange-200 sm:w-10" />
        </div>

        {/* ================= PHOTO ================= */}
        <div className="relative mx-auto mt-8 w-fit">
          <div className="h-48 w-40 overflow-hidden rounded-[1.4rem] border-4 border-white bg-gradient-to-br from-purple-50 to-orange-50 shadow-lg sm:h-52 sm:w-44">
            {guide.photo ? (
              <img
                src={guide.photo}
                alt={guide.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center">
                <span className="font-serif text-4xl text-purple-300">
                  ✦
                </span>

                <span className="mt-3 text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  Photo Coming Soon
                </span>
              </div>
            )}
          </div>

          {/* Decorative badge */}
          <div className="absolute -bottom-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-orange-500 text-xs text-white shadow-md transition-transform duration-500 group-hover:rotate-12">
            ✦
          </div>
        </div>

        {/* ================= NAME ================= */}
        <h3 className="mt-8 font-serif text-2xl font-semibold leading-tight text-purple-950 sm:text-3xl">
          {guide.name}
        </h3>

        {/* Role */}
        <p className="mt-3 text-sm font-semibold text-orange-600">
          {guide.role}
        </p>

        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-400">
          {guide.year}
        </p>

        {/* Divider */}
        <div className="mx-auto my-6 flex items-center justify-center gap-2">
          <span className="h-px w-8 bg-purple-100" />
          <span className="text-xs text-orange-400">✦</span>
          <span className="h-px w-8 bg-purple-100" />
        </div>

        {/* Description */}
        <p className="mx-auto max-w-md text-sm leading-7 text-slate-500 sm:text-base">
          {guide.shortDescription}
        </p>

        {/* Quote */}
        <div className="mx-auto mt-6 max-w-md rounded-2xl bg-purple-50/60 px-5 py-4">
          <p className="font-serif text-sm italic leading-7 text-purple-800">
            “{guide.quote}”
          </p>
        </div>

        {/* ================= ACTION ================= */}
        <div className="mt-7 inline-flex items-center rounded-full border border-purple-900 bg-purple-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 group-hover:bg-purple-800 group-hover:shadow-lg">
          Read Our Letter

          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5">
            →
          </span>
        </div>

        {/* Small footer accent */}
        <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-300">
          Teachers' Day • 2026
        </p>

      </div>
    </button>
  );
}

export default GuideCard;

