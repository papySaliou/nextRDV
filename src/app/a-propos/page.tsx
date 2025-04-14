import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function AproposPage() {
    return (
        <>
        <div className="flex h-screen">
        <Sidebar/>
        
        <div className="ml-64 px-6 py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-[#1998D3] mb-4">À propos de nous</h1>
          
          <p className="text-lg text-gray-700 mb-3">
            Notre plateforme a été créée avec une idée simple : <strong>simplifier la prise de rendez-vous</strong> entre les professionnels et leurs clients. 
            Que vous soyez un thérapeute, un coach, un coiffeur ou un consultant, nous vous offrons un outil intuitif, rapide et sécurisé.
          </p>
    
          <p className="text-lg text-gray-700 mb-3">
            Notre mission est d’<strong>éliminer les frictions</strong> dans l’organisation de vos journées. Fini les appels manqués, les doubles réservations ou les heures perdues à gérer un agenda.
          </p>
    
          <p className="text-lg text-gray-700 mb-3">
            Grâce à notre interface moderne, vos clients peuvent réserver un créneau en quelques clics, 24h/24 et 7j/7.
          </p>
    
          <h2 className="text-2xl font-semibold text-[#1998D3] mt-3 mb-3">Nos valeurs</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg">
            <li><strong>Accessibilité</strong> : une interface claire, pour tous les niveaux.</li>
            <li><strong>Efficacité</strong> : gestion des RDV rapide et automatisée.</li>
            <li><strong>Confiance</strong> : sécurité des données et respect de votre vie privée.</li>
          </ul>
    
          <p className="text-lg text-gray-700 mt-5">
            Merci de nous faire confiance. Ce projet est pensé pour vous, et évolue chaque jour grâce à vos retours.
          </p>
    
          <p className="text-lg text-gray-700 mt-4">
            – L'équipe de développement 💙
          </p>
        </div>
        </div>

      </div>
        
      </>
    );
  }
  
