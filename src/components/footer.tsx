export function Footer() {
  return (
    <footer id="contacto" className="bg-carbon text-paper py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto">
        {/* Aquí va todo el contenido original del footer... */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12 self-end mt-12 md:mt-0">
          <div>
            <h2 className="font-serif text-5xl md:text-8xl font-medium leading-[0.95] mb-12 text-balance">
              Construyamos juntos.
            </h2>
            <a
              href="mailto:contacto.midgardstudios@gmail.com"
              className="group inline-flex items-center bg-paper text-carbon pr-5 transition-transform hover:-translate-y-1"
            >
              <span className="size-11 bg-carbon text-paper flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-4"
                >
                  <path d="M1 4.5A1.5 1.5 0 0 1 2.5 3h11A1.5 1.5 0 0 1 15 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 11.5v-7Zm1.5-.5a.5.5 0 0 0-.5.5v.4l6 3.6 6-3.6V4.5a.5.5 0 0 0-.5-.5h-11Zm11.5 2.07-5.74 3.44a.5.5 0 0 1-.52 0L2 6.07V11.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V6.07Z" />
                </svg>
              </span>
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase">
                Iniciar Proyecto
              </span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 md:gap-12 self-end">
            <div className="flex flex-col gap-5">
              <span className="text-[10px] tracking-[0.25em] uppercase opacity-40">Contacto</span>
              <div className="flex flex-col gap-2 text-sm md:text-base">
                <span className="select-text cursor-text break-all">
                  contacto.midgardstudios@gmail.com
                </span>
                <span className="select-text cursor-text break-all">+56 9 3586 3215</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-[10px] tracking-[0.25em] uppercase opacity-40">Ubicación</span>
              <p className="text-sm md:text-base leading-relaxed">
                Santiago, Chile.
                <br />
                Disponibles para proyectos globales.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 flex sm:flex sm:justify-between items-center gap-4">
          <div className="text-[10px] font-medium tracking-[0.4em] uppercase opacity-40 truncate">
            Midgard Studios © {new Date().getFullYear()}
          </div>
          <div className="flex gap-6 md:gap-8 text-[10px] font-medium tracking-[0.25em] uppercase opacity-40 shrink-0">
            <a
              href="https://instagram.com/midgardstudioscl"
              className="hover:opacity-100 transition-opacity"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/56935863215?..."
              target="_blank"
              className="hover:opacity-100 transition-opacity"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
