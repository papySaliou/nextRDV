import Header from "@/components/Header";

export default function HomePage() {
  return (
    <>
      <Header />

      {/* <div className="flex flex-col md:flex-row items-center  bg-amber-50 min-h-screen px-10"> */}
      <div className="flex flex-col md:flex-row items-center  justify-between px-10 pt-0 mt-0">
        {/* Section texte */}
        <div className="text-center md:text-left md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-7xl font-extralight mt-5 mb-10 ">Rendez-vous</h1>
          <p className="text-lg mb-8">
            Chez RendezVous+, nous simplifions la gestion de vos rendez-vous en
            ligne. Que ce soit pour des rendez-vous professionnels, médicaux ou
            personnels, notre plateforme vous permet de planifier, organiser et
            suivre vos rendez-vous en toute simplicité.
          </p>
          <a href="/dashboard">
            <button className="rounded cursor-pointer bg-[#1998D3] mb-10 px-6 py-3 text-white hover:bg-[#1478A6]">
              Commencer
            </button>
          </a>
        </div>

        {/* Section image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="/accueil.png"
            alt="RendezVous+"
            className="w-4/5 h-1/2 md:h-1/2 object-cover"
          />
        </div>
      </div>
    </>
  );
}
