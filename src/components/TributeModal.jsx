
function TributeModal({ lecturer, onClose }) {
  if (!lecturer) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-purple-950/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[32px] border border-white/60 bg-[#fffdf9] shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-100/70 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-orange-100/60 blur-3xl" />

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close tribute"
          className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-500 shadow-md transition-all duration-300 hover:rotate-90 hover:bg-purple-900 hover:text-white"
        >
          ✕
        </button>

        <div className="relative px-6 py-10 md:px-14 md:py-14">
          {/* Header */}
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-orange-600">
              A Special Message For You
            </p>

            <div className="mx-auto my-6 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-orange-200" />
              <span className="text-lg">✦</span>
              <span className="h-px w-12 bg-orange-200" />
            </div>

            <h2 className="font-serif text-4xl font-semibold leading-tight text-purple-950 md:text-5xl">
              {lecturer.name}
            </h2>

            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-purple-600">
              {lecturer.role}
            </p>
          </div>

          {/* Photo */}
          <div className="mx-auto mt-10 h-64 w-48 overflow-hidden rounded-[28px] border-4 border-white bg-purple-50 shadow-xl">
            {lecturer.photo ? (
              <img
                src={lecturer.photo}
                alt={lecturer.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center">
                <div className="text-5xl">🌷</div>

                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-purple-400">
                  Faculty Photo
                </p>

                <p className="mt-1 text-xs text-purple-300">
                  Coming Soon
                </p>
              </div>
            )}
          </div>

          {/* Quote */}
          <div className="mx-auto mt-10 max-w-2xl text-center">
            <span className="font-serif text-4xl text-orange-300">
              “
            </span>

            <blockquote className="font-serif text-xl italic leading-9 text-purple-900 md:text-2xl">
              {lecturer.quote}
            </blockquote>
          </div>

          {/* Message card */}
          <div className="mx-auto mt-10 max-w-2xl rounded-[28px] border border-purple-100 bg-white/80 p-7 shadow-sm md:p-9">
            <p className="font-serif text-xl font-semibold text-purple-950">
              Dear Ma'am/Sir,
            </p>

            <div className="mt-5 whitespace-pre-line text-[15px] leading-8 text-slate-600">
              {lecturer.message}
            </div>
          </div>

          {/* Closing */}
          <div className="mt-12 text-center">
            <div className="text-2xl">🌸</div>

            <h3 className="mt-4 font-serif text-2xl font-semibold text-purple-950">
              Happy Teachers' Day!
            </h3>

            <p className="mt-3 text-sm text-slate-500">
              With love, respect and gratitude
            </p>

            <p className="mt-2 text-sm font-semibold text-purple-800">
              CSE–DS • Section D
            </p>

            <p className="mt-1 text-xs text-slate-400">
              2nd Year
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TributeModal;


