import { Linkedin, Star, Users } from 'lucide-react';

interface TeamMember {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  linkedinUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    firstName: "Romain",
    lastName: "Jouanel",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    linkedinUrl: "https://www.linkedin.com/in/romain-jouanel-b94205195/"
  },
  {
    id: 2,
    firstName: "Corentin",
    lastName: "Peron",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=300&h=300&fit=crop&crop=face",
    linkedinUrl: "https://www.linkedin.com/in/corentin-peron-b983b519b/"
  },
  {
    id: 3,
    firstName: "Arthur",
    lastName: "Godinho",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    linkedinUrl: "https://www.linkedin.com/in/arthur-godinho-0685351a2/"
  },
  {
    id: 4,
    firstName: "Alexis",
    lastName: "Gallet",
    image: "https://media.licdn.com/dms/image/v2/D4E35AQFK6CNL_jDKdA/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1722093688505?e=1756724400&v=beta&t=lKE4yvRcR_NPFsgfVoOdJuG_TX5r7h2Rp3Wz7lSNXcE",
    linkedinUrl: "https://www.linkedin.com/in/alexis-gallet-11182b1b8/"
  },
  {
    id: 5,
    firstName: "Benjamin",
    lastName: "Liszewski",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQFDYPfmzOsouw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1681373561961?e=1758758400&v=beta&t=xfs2IfW4gMtauH-myZE-1dRSaB07GScDNG_mDcLDjtw",
    linkedinUrl: "https://www.linkedin.com/in/benjamin-liszewski/"
  }
];

function App() {
  return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-green-800 to-gray-900">
        {/* Header Section */}
        <header className="relative overflow-hidden">
          <div className="absolute inset-0 bg-emerald-900/30"></div>
          <div className="relative container mx-auto px-4 py-24 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
                <img
                    src="/public/uuid-56210ec1-fc4c-476c-8b59-790148662fc4.png"
                />
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light tracking-wide">
                Le barman de vos soirées
              </p>

              {/* Features Cards */}
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-emerald-300/30 hover:bg-emerald-500/20 hover:border-emerald-300/50 transition-all duration-300 hover:scale-105">
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400 mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-white font-semibold mb-2">Service Premium</h3>
                  <p className="text-emerald-100 text-xs sm:text-sm">Des cocktails d'exception préparés par nos experts</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-emerald-300/30 hover:bg-emerald-500/20 hover:border-emerald-300/50 transition-all duration-300 hover:scale-105">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-white font-semibold mb-2">Équipe Experte</h3>
                  <p className="text-emerald-100 text-xs sm:text-sm">Des professionnels passionnés à votre service</p>
                </div>
{/*                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-emerald-300/30 hover:bg-emerald-500/20 hover:border-emerald-300/50 transition-all duration-300 hover:scale-105">
                  <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-lime-400 mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-white font-semibold mb-2">Disponibilité</h3>
                  <p className="text-emerald-100 text-xs sm:text-sm">Service sur mesure pour tous vos événements</p>
                </div>*/}
              </div>
            </div>
          </div>
        </header>

        {/* Team Section */}
        <section className="py-12 sm:py-20 bg-emerald-800/20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                L'équipe
              </h2>
              <p className="text-lg sm:text-xl text-emerald-100 max-w-2xl mx-auto px-4">
                Découvrez les talents qui font la différence dans chaque événement
              </p>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member) => (
                  <div
                      key={member.id}
                      className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-emerald-300/30 hover:bg-emerald-500/20 hover:border-emerald-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25"
                  >
                    {/* Profile Image */}
                    <div className="relative mb-6">
                      <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-emerald-400 to-green-500 p-1 group-hover:scale-110 transition-transform duration-300">
                        <div className="w-full h-full rounded-full overflow-hidden">
                          <img
                              src={member.image}
                              alt={`${member.firstName} ${member.lastName}`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              loading="lazy"
                          />
                        </div>
                      </div>

                      {/* Decorative Ring */}
                      <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-emerald-400/20 to-green-500/20 animate-pulse group-hover:animate-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Member Info */}
                    <div className="text-center">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                        {member.firstName}
                      </h3>
                      <p className="text-lg sm:text-xl font-semibold text-emerald-200 mb-4 group-hover:text-white transition-colors duration-300">
                        {member.lastName}
                      </p>

                      {/* LinkedIn Link */}
                      <a
                          href={member.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/25 group/link text-sm sm:text-base"
                          aria-label={`Profil LinkedIn de ${member.firstName} ${member.lastName}`}
                      >
                        <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 group-hover/link:rotate-12 transition-transform duration-300" />
                        <span>LinkedIn</span>
                      </a>
                    </div>

                    {/* Background Pattern */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 sm:py-12 bg-emerald-900/50">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">MrBar</h3>
              <p className="text-gray-400">Le barman de vos soirées</p>
            </div>
            <div className="border-t border-white/20 pt-6">
              <p className="text-gray-500 text-sm">
                © 2025 MrBar. Tous droits réservés. | Service professionnel de bar événementiel
              </p>
            </div>
          </div>
        </footer>
      </div>
  );
}

export default App;