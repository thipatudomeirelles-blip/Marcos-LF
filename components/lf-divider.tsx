export function LfDivider() {
  return (
    <div className="relative z-30 w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Logo sobreposta a uma linha cinza fina que passa por trás do seu meio */}
        <div className="-mt-10 pb-6">
          <div className="relative flex h-20 items-center justify-center md:h-24">
            <span
              className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-neutral-200"
              aria-hidden="true"
            />
            <img
              src="/logo-lf-quadrado.png"
              alt="Logo LF - Marcos Le Fosse"
              className="relative z-10 h-20 w-20 rounded-md bg-white object-contain p-1 shadow-md md:h-24 md:w-24"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
