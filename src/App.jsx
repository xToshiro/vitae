import React from 'react';
import './App.css';
import {
  Leaf, Wind, Activity, Cpu, HeartPulse, Globe, Database, Building, Mail, Phone
} from 'lucide-react';

/* Leaflet Imports */
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

/* Factory to generate the custom animated radar icon */
const createCustomIcon = (name, subtitle, labelClass) => {
  return L.divIcon({
    className: 'custom-leaflet-icon',
    html: `
      <div class="beacon">
        <div class="beacon-core"></div>
        <div class="beacon-pulse"></div>
        <div class="beacon-label ${labelClass}">
          <strong>${name}</strong>
          <span>${subtitle}</span>
        </div>
      </div>
    `,
    iconSize: [0, 0],
    iconAnchor: [0, 0]
  });
};

const projectLocations = [
  { coord: [-3.71839, -38.5434], name: 'Fortaleza (CE)', subtitle: 'Monitoramento Ativo', labelClass: 'left-label' },
  { coord: [-15.793889, -47.882778], name: 'Brasília (DF)', subtitle: 'Centro de Decisões', labelClass: 'right-label' },
  { coord: [-16.686891, -49.264790], name: 'Goiânia (GO)', subtitle: 'Expansão Centro-Oeste', labelClass: 'bottom-label' }
];

const br060Path = [
  [-15.793889, -47.882778], // Brasília
  [-16.3269, -48.9531],     // Anápolis
  [-16.686891, -49.264790]  // Goiânia
];

function App() {
  return (
    <div className="app-container">

      {/* 100VH Viewport Wrapper to trap the Marquee above the fold */}
      <div className="hero-viewport">
        {/* Navbar area */}
        <header className="navbar">
          <div className="navbar-brand-group">
            <div className="navbar-logo">
              <Leaf className="logo-icon" size={32} />
              <span className="logo-text">VITAE</span>
            </div>
            <div className="navbar-partner-logos">
              <img src="https://portalvitae.infrasa.gov.br/wp-content/uploads/2026/03/infra-logo-branca.png" alt="Infra S.A." className="nav-logo" />
              <img src="https://portalvitae.infrasa.gov.br/wp-content/uploads/2026/03/ONTL-10-anos-branca-scaled.png" alt="ONTL" className="nav-logo" />
            </div>
          </div>
          <nav className="navbar-links">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre o VITAE</a>
            <a href="#localidades">Localidades</a>
            <a href="#contato">Contato</a>
          </nav>
        </header>

        {/* Hero Section */}
        <section id="inicio" className="hero-section">
          <div className="hero-text-container">
            <h1 className="hero-title">
              <span className="text-highlight">Projeto VITAE</span><br />
              Vida Integrada: Transportes, Ambiente e Eficiência
            </h1>
            <p className="hero-subtitle">
              Uma iniciativa estratégica de monitoramento da qualidade do ar associada ao setor de transportes e seus efeitos sobre a saúde das populações, integrando pesquisa científica, inovação e desenvolvimento tecnológico e políticas públicas para uma sociedade mais sustentável.
            </p>
          </div>
          <div className="hero-image-placeholder">
            <div className="circle-bg">
              <Wind className="wind-icon" />
            </div>
          </div>
        </section>

        {/* Marquee Divider */}
        <div className="hero-marquee">
          <div className="marquee-container">
            <div className="marquee-content">
              <span className="marquee-item">Infra S.A</span>
              <span className="marquee-dot">•</span>
              <span className="marquee-item">Governo Federal</span>
              <span className="marquee-dot">•</span>
              <span className="marquee-item">Universidade Federal do Ceará (UFC)</span>
              <span className="marquee-dot">•</span>
              <span className="marquee-item">Trama (Transporte e Meio Ambiente)</span>
              <span className="marquee-dot">•</span>
              <span className="marquee-item">Unilab</span>
              <span className="marquee-dot">•</span>
              {/* Loop Duplication */}
              <span className="marquee-item">Infra S.A</span>
              <span className="marquee-dot">•</span>
              <span className="marquee-item">Governo Federal</span>
              <span className="marquee-dot">•</span>
              <span className="marquee-item">Universidade Federal do Ceará (UFC)</span>
              <span className="marquee-dot">•</span>
              <span className="marquee-item">Trama (Transporte e Meio Ambiente)</span>
              <span className="marquee-dot">•</span>
              <span className="marquee-item">Unilab</span>
            </div>
          </div>
        </div>
      </div>

      <main className="main-content">
        {/* Sobre / O Projeto */}
        <section id="sobre" className="about-section">
          <div className="about-mint-layout">
            <div className="mint-col">
              <div className="about-text-clean">
                <h3 className="pre-title">O PROJETO</h3>
                <h2>Monitoramento Ambiental e o Setor de Transportes</h2>
                <p>Desenvolvido pela <strong>Infra S.A.</strong> através do Observatório Nacional de Transporte e Logística (<strong>ONTL</strong>), em parceria com o Grupo de Pesquisa em Transporte e Meio Ambiente (<strong>TRAMA</strong>) da <strong>UFC</strong> e o Grupo de Pesquisa e Extensão Tecnologias do Cuidado de Enfermagem no Cenário das Doenças Crônicas da <strong>Unilab</strong>.</p>
                <p>O VITAE estabelece uma rede piloto de monitoramento da qualidade do ar focada nos impactos do setor de transporte sobre as populações.</p>
              </div>
              <div className="mint-card">
                <Cpu className="feature-icon" />
                <h4>Tecnologia Nacional</h4>
                <p>Sensores de baixo custo totalmente desenvolvidos no Brasil pela UFC para monitoramento.</p>
              </div>
            </div>

            <div className="mint-col mt-4">
              <div className="mint-card">
                <HeartPulse className="feature-icon" />
                <h4>Integração Saúde</h4>
                <p>Correlação direta entre as emissões veiculares e incidência de doenças respiratórias na população.</p>
              </div>
              <div className="mint-card">
                <Globe className="feature-icon" />
                <h4>Escalabilidade</h4>
                <p>Infraestrutura robusta, preparada estruturalmente para rápida expansão nacional e internacional.</p>
              </div>
            </div>

            <div className="mint-col">
              <div className="mint-card card-highlight">
                <Activity className="feature-icon" />
                <h4>Tempo Real</h4>
                <p>Nossos dados são capturados e analisados em tempo real para permitir respostas ágeis e precisas.</p>
              </div>
              <div className="mint-card">
                <Database className="feature-icon" />
                <h4>Dados do ONTL</h4>
                <p>Informações primárias e estratégicas altamente valiosas para análise logística e tomada de decisão.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Linux Mint Style Mini FAQ */}
        <section className="mini-faq-section">
          <div className="mini-faq-header">
            <h3 className="pre-title-mint">Tem alguma dúvida?</h3>
            <h2 className="title-mint">Inovador, estratégico e nacional.</h2>
            <p className="subtitle-mint">
              Se você está conhecendo o VITAE agora, não hesite em explorar os detalhes. Nossa equipe está sempre à disposição para esclarecer o funcionamento e aplicação dos dados.
            </p>
          </div>

          <div className="mini-faq-grid">
            <div className="mini-faq-item">
              <h4>O que é gratuito?</h4>
              <p>O acesso aos painéis de monitoramento públicos e relatórios executivos gerados pelo projeto são abertos à comunidade científica e parceiros governamentais.</p>
            </div>
            <div className="mini-faq-item">
              <h4>Onde o projeto atua?</h4>
              <p>Atualmente os equipamentos estão distribuídos estrategicamente no entorno de Fortaleza, Brasília e Goiânia. A rede está pronta para rodar em todo o país.</p>
            </div>
            <div className="mini-faq-item">
              <h4>A tecnologia é importada?</h4>
              <p>Não, o VITAE e todos os seus módulos de captação e envio de dados provém do esforço de engenharia 100% brasileira operado pela inteligência nacional.</p>
            </div>
            <div className="mini-faq-item">
              <h4>Isso atende minhas necessidades?</h4>
              <p>Para formuladores de políticas públicas e pesquisadores de meio ambiente, sim. Oferecemos um acervo estatístico vital focado apenas nas emissões viárias.</p>
            </div>
          </div>
        </section>

        {/* Localidades Map Showcase with Leaflet/OSM */}
        <section id="localidades" className="cities-section">
          <h3 className="pre-title">ABRANGÊNCIA</h3>
          <h2 className="section-title">Onde Estamos Atuando</h2>
          <p className="cities-intro">
            A fase inicial do projeto foca em capitais vitais interligadas por importantes rotas estratégicas. Explore o radar baseados em dados reais do OpenStreetMap.
          </p>

          <div className="localidades-layout">
            <div className="map-showcase">
              <MapContainer
                center={[-12, -45]}
                zoom={5}
                zoomControl={false}
                scrollWheelZoom={false}
                className="leaflet-map-override"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />

                {/* Destaque da BR-060 */}
                <Polyline
                  positions={br060Path}
                  pathOptions={{ color: '#10b981', weight: 4, opacity: 0.9, dashArray: '8, 8' }}
                />

                {projectLocations.map((loc, idx) => (
                  <Marker
                    key={idx}
                    position={loc.coord}
                    icon={createCustomIcon(loc.name, loc.subtitle, loc.labelClass)}
                  />
                ))}
              </MapContainer>
            </div>

            <div className="localidades-info-col">
              <div className="info-card">
                <div className="info-card-icon">20</div>
                <div className="info-card-text">
                  <h4>Monitores por Cidade</h4>
                  <p>Aparelhos instalados nas áreas urbanas de Fortaleza, Brasília e Goiânia.</p>
                </div>
              </div>
              <div className="info-card">
                <div className="info-card-icon">20</div>
                <div className="info-card-text">
                  <h4>Monitores na BR-060</h4>
                  <p>Densa cobertura rodoviária no eixo conectando Brasília a Goiânia.</p>
                </div>
              </div>
              <div className="info-card highlight-info-card">
                <div className="info-card-icon">80</div>
                <div className="info-card-text">
                  <h4>Total do Projeto</h4>
                  <p>Equipamentos nacionais operando de forma integrada nesta fase inicial.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="contact-section">
          <div className="contact-header">
            <span className="pill-title">FALE CONOSCO</span>
            <h2 className="section-title text-white">Entre em Contato</h2>
            <p className="contact-intro text-white-opacity">
              Quer saber mais sobre o Projeto VITAE ou estabelecer uma parceria? Nossa equipe está pronta para atendê-lo.
            </p>
          </div>

          <div className="contact-two-columns">
            {/* Left Column: Contact Items */}
            <div className="contact-list">
              <div className="contact-list-item">
                <div className="contact-icon-box">
                  <Building size={28} />
                </div>
                <div className="contact-text">
                  <h4>Sede ONTL / Infra S.A.</h4>
                  <p>SAUS, Quadra 01, Bloco G, Lotes 3 e 5 Asa<br />Sul, Brasília - DF - 70.070-010</p>
                </div>
              </div>

              <div className="contact-list-item">
                <div className="contact-icon-box">
                  <Mail size={28} />
                </div>
                <div className="contact-text">
                  <h4>Email Institucional</h4>
                  <p>
                    <a href="mailto:vitae@infrasa.gov.br">vitae@infrasa.gov.br</a><br />
                    <a href="mailto:institucional@infrasa.gov.br">institucional@infrasa.gov.br</a><br />
                    <a href="mailto:observatorio@infrasa.gov.br">observatorio@infrasa.gov.br</a>
                  </p>
                </div>
              </div>

              <div className="contact-list-item">
                <div className="contact-icon-box">
                  <Phone size={28} />
                </div>
                <div className="contact-text">
                  <h4>Telefones Institucional</h4>
                  <p>
                    <a href="tel:+556120296081">+55 (61) 2029-6081</a><br />
                    <a href="tel:+556120296017">+55 (61) 2029-6017</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Logos */}
            <div className="contact-logos-column">
              <div className="logo-box">
                <a href="https://ontl.infrasa.gov.br/" target="_blank" rel="noreferrer">
                  <img src="https://portalvitae.infrasa.gov.br/wp-content/uploads/2026/03/ONTL-10-anos-branca-scaled.png" alt="ONTL 10 Anos" />
                </a>
              </div>
              <div className="logo-box">
                <a href="https://www.infrasa.gov.br/" target="_blank" rel="noreferrer">
                  <img src="https://portalvitae.infrasa.gov.br/wp-content/uploads/2026/03/infra-logo-branca.png" alt="Infra S.A." />
                </a>
              </div>
              <div className="logo-box">
                <a href="https://www.ufc.br/" target="_blank" rel="noreferrer">
                  <img src="https://portalvitae.infrasa.gov.br/wp-content/uploads/2026/03/logohorizontalufcsimples-branco.png" alt="UFC" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="footer-simple">
        <p>© 2026 Projeto VITAE. ONTL • Infra S.A. • UFC. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
