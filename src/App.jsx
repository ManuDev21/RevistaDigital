import React, { useState } from 'react';
import {
  LuArrowDown,
  LuArrowRight,
  LuArrowUpRight,
  LuBookOpen,
  LuDownload,
  LuLandmark,
  LuScale,
  LuShieldCheck,
} from 'react-icons/lu';
import Article1 from './components/Article1';
import Article2 from './components/Article2';
import Navigation from './components/Navigation';
import PDFViewer from './components/PDFViewer';
import FlipCard from './components/FlipCard';
import auraTalentPdfUrl from '../AURA_TALENT_AI_lEGISLACION Final.pdf?url';

const auraTalentPdfTitle = 'AURA TALENT IA';
const auraTalentPdfSubtitle = 'Legislación final · documento principal';
const auraTalentPdfFilename = 'AURA-TALENT-IA-LEGISLACION-FINAL.pdf';

const articles = [
  {
    number: '01',
    category: 'Comunidad · Innovación',
    title: 'Informa mi Comunidad',
    description: 'Una propuesta digital para acercar avisos, servicios y actividades a todas las personas de la comunidad.',
    authors: 'Ximena Cordero Montoya y equipo',
    tone: 'sage',
  },
  {
    number: '02',
    category: 'Ética · Tecnología',
    title: 'Principios éticos en el entorno digital',
    description: 'Ideas y principios para relacionarnos con la tecnología de forma segura, respetuosa y responsable.',
    authors: 'Universidad Tecnológica del Valle de Toluca',
    tone: 'sand',
  },
];

function DocumentSpotlight({ onOpen }) {
  return (
    <section className="document-spotlight" aria-labelledby="document-spotlight-title">
      <div className="document-visual" aria-hidden="true">
        <div className="document-sheet">
          <span className="document-overline">DOCUMENTO CENTRAL</span>
          <span className="document-seal"><LuScale /></span>
          <strong>AURA<br />TALENT <em>IA</em></strong>
          <span className="document-subtitle">LEGISLACIÓN FINAL</span>
          <span className="document-rule" />
          <span className="document-edition">VERSIÓN FINAL <span>·</span> PDF</span>
        </div>
      </div>
      <div className="document-copy">
        <span className="section-kicker">DOCUMENTO MÁS IMPORTANTE DEL PROYECTO</span>
        <h2 id="document-spotlight-title">AURA TALENT IA:<br /><em>Legislación final</em></h2>
        <p>Consulta la versión final del documento legislativo de Aura Talent IA. Ábrelo en el visor integrado, revísalo con zoom o descarga el PDF para consultarlo cuando lo necesites.</p>
        <div className="document-details"><span>PDF</span><span>Versión final</span><span>Visor integrado</span></div>
        <div className="document-actions">
          <button className="button button-primary" onClick={onOpen}>Visualizar documento <LuArrowRight aria-hidden="true" /></button>
          <a className="button button-outline" href={auraTalentPdfUrl} download={auraTalentPdfFilename}><LuDownload aria-hidden="true" /> Descargar PDF</a>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [currentArticle, setCurrentArticle] = useState(null);
  const [isPDFViewerOpen, setIsPDFViewerOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [pdfTitle, setPdfTitle] = useState('Visor de documentos');
  const [pdfDescription, setPdfDescription] = useState('Visualización de PDF');
  const [pdfFilename, setPdfFilename] = useState('documento.pdf');
  const [pdfSession, setPdfSession] = useState(0);

  const navigateTo = (view) => {
    setCurrentView(view);
    setCurrentArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openArticle = (articleNumber) => {
    setCurrentView('articles');
    setCurrentArticle(articleNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openPDFViewer = (
    url = '/documents/principios-eticos-original.pdf',
    title = 'Visor de documentos',
    description = 'Visualización de PDF',
    filename = 'documento.pdf',
  ) => {
    setPdfUrl(url);
    setPdfTitle(title);
    setPdfDescription(description);
    setPdfFilename(filename);
    setPdfSession((session) => session + 1);
    setIsPDFViewerOpen(true);
  };

  const openAuraTalentPdf = () => openPDFViewer(
    auraTalentPdfUrl,
    auraTalentPdfTitle,
    auraTalentPdfSubtitle,
    auraTalentPdfFilename,
  );

  const closePDFViewer = () => {
    setIsPDFViewerOpen(false);
    setPdfUrl(null);
  };

  const renderHome = () => (
    <>
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" /> Una publicación para compartir ideas</span>
          <h1 id="hero-title">Ideas que conectan.<br /><em>Conocimiento que transforma.</em></h1>
          <p className="hero-description">
            Un espacio para descubrir proyectos, reflexiones y propuestas sobre tecnología, comunidad y ética digital.
          </p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => navigateTo('articles')}>
              Explorar la revista <LuArrowRight aria-hidden="true" />
            </button>
            <button className="button button-text" onClick={openAuraTalentPdf}>
              Leer documento principal <LuArrowUpRight aria-hidden="true" />
            </button>
          </div>
          <div className="hero-note"><LuLandmark aria-hidden="true" /> Universidad Tecnológica del Valle de Toluca</div>
        </div>
        <div className="hero-art" aria-label="Edición digital de la revista">
          <div className="art-orbit art-orbit-one" />
          <div className="art-orbit art-orbit-two" />
          <div className="art-index">LECTURAS <span>·</span> EDICIÓN 01</div>
          <div className="cover-card">
            <div className="cover-topline"><span>REVISTA DIGITAL</span><span>VOL. 01</span></div>
            <div className="cover-illustration">
              <span className="cover-sun" />
              <span className="cover-shape cover-shape-one" />
              <span className="cover-shape cover-shape-two" />
              <span className="cover-shape cover-shape-three" />
              <span className="cover-book"><LuBookOpen aria-hidden="true" /></span>
            </div>
            <div className="cover-title">Ideas para<br />un mundo<br /><em>conectado.</em></div>
            <div className="cover-bottom"><span>COMUNIDAD · ÉTICA · TECNOLOGÍA</span><span>01 / 02</span></div>
          </div>
          <div className="art-caption"><span className="caption-line" /> Lecturas con propósito</div>
        </div>
        <a className="scroll-cue" href="#lecturas"><LuArrowDown aria-hidden="true" /> Desliza para descubrir</a>
      </section>

      <section className="edition-strip" aria-label="Contenido de la edición">
        <div><strong>02</strong><span>artículos para explorar</span></div>
        <div><strong>07</strong><span>voces que construyen</span></div>
        <div><strong>01</strong><span>comunidad universitaria</span></div>
        <div className="strip-message">Leer también es encontrarnos.</div>
      </section>

      <DocumentSpotlight onOpen={openAuraTalentPdf} />

      <section className="content-section" id="lecturas">
        <div className="section-heading">
          <div><span className="section-kicker">LA EDICIÓN</span><h2>Lecturas destacadas</h2></div>
          <button className="link-button" onClick={() => navigateTo('articles')}>Ver todos los artículos <LuArrowRight aria-hidden="true" /></button>
        </div>
        <div className="featured-grid">
          {articles.map((article, index) => (
            <button className={`feature-card ${article.tone}`} key={article.number} onClick={() => openArticle(index + 1)}>
              <div className="feature-top"><span className="feature-number">{article.number}</span><span className="feature-arrow"><LuArrowUpRight aria-hidden="true" /></span></div>
              <span className="feature-category">{article.category}</span>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <div className="feature-bottom"><span>{article.authors}</span><span className="read-link">Leer artículo <LuArrowRight aria-hidden="true" /></span></div>
            </button>
          ))}
        </div>
      </section>

      <section className="values-section">
        <div className="values-icon"><LuShieldCheck aria-hidden="true" /></div>
        <div><span className="section-kicker">NUESTRA MIRADA</span><h2>Tecnología con sentido humano.</h2></div>
        <p>Creemos en una cultura digital accesible, consciente y al servicio de las personas. Cada lectura es una invitación a imaginar mejores formas de convivir y aprender.</p>
        <button className="button button-light" onClick={() => openArticle(2)}>Conoce nuestros principios <LuArrowRight aria-hidden="true" /></button>
      </section>

      <section className="authors-preview">
        <div className="authors-copy"><span className="section-kicker">LAS PERSONAS DETRÁS DE LAS IDEAS</span><h2>Una revista hecha en comunidad.</h2><p>Conoce a quienes comparten su trabajo, su experiencia y su visión en esta edición.</p></div>
        <div className="author-stack" aria-hidden="true"><span>XC</span><span>MR</span><span>KM</span><span>+4</span></div>
        <button className="button button-outline" onClick={() => navigateTo('authors')}>Conocer a los autores <LuArrowRight aria-hidden="true" /></button>
      </section>
    </>
  );

  const renderArticles = () => (
    <section className="page-section">
      <div className="page-intro"><span className="section-kicker">EXPLORA LA EDICIÓN</span><h1>Artículos</h1><p>Proyectos e ideas para entender mejor nuestra relación con la tecnología y la comunidad.</p></div>
      <div className="article-list">
        {articles.map((article, index) => (
          <button className={`article-list-card ${article.tone}`} key={article.number} onClick={() => openArticle(index + 1)}>
            <span className="list-number">{article.number}</span>
            <div><span className="feature-category">{article.category}</span><h2>{article.title}</h2><p>{article.description}</p><span className="article-byline">{article.authors}</span></div>
            <span className="list-arrow"><LuArrowUpRight aria-hidden="true" /></span>
          </button>
        ))}
      </div>
    </section>
  );

  const renderAuthors = () => (
    <section className="page-section">
      <div className="page-intro"><span className="section-kicker">VOCES DE ESTA EDICIÓN</span><h1>Nuestros autores</h1><p>Conoce al equipo que hizo posible estas lecturas. Selecciona una tarjeta para descubrir más y consultar sus documentos.</p></div>
      <div className="authors-grid">
        <FlipCard name="Cordero Montoya Ximena" description="Autora del proyecto Informa mi Comunidad y colaboradora en principios éticos digitales." documentUrl="/documents/autor-6-ximena.pdf" onOpenDocument={openPDFViewer} />
        <FlipCard name="Rodríguez Calderón Manuel" description="Coautor del proyecto de comunidad y experto en accesibilidad tecnológica." documentUrl="/documents/autor-4-manuel.pdf" onOpenDocument={openPDFViewer} />
        <FlipCard name="Morales Piña Keyra" description="Investigadora en principios éticos y tecnología responsable." documentUrl="/documents/autor-7-keyra.pdf" onOpenDocument={openPDFViewer} />
        <FlipCard name="Miranda Huerta Ana Karen" description="Especialista en diseño de interfaces accesibles y experiencia de usuario." documentUrl="/documents/autor-1-ana-karen.pdf" onOpenDocument={openPDFViewer} />
        <FlipCard name="Segura Segura Jael Sebastian" description="Colaborador en proyectos de tecnología y experiencias digitales." documentUrl="/documents/autor-5-jael.pdf" onOpenDocument={openPDFViewer} />
        <FlipCard name="Arriaga Pérez Diego Álvaro" description="Colaborador en temas de seguridad digital y protección de datos personales." documentUrl="/documents/autor-2-diego.pdf" onOpenDocument={openPDFViewer} />
        <FlipCard name="Brayan Eduardo Heras Mireles" description="Colaborador en el proyecto de principios éticos y tecnología." documentUrl="/documents/autor-3-brayan.pdf" onOpenDocument={openPDFViewer} />
      </div>
    </section>
  );

  const renderArticleDetail = () => (
    <section className="page-section article-detail">
      <button className="back-link" onClick={() => navigateTo('articles')}><LuArrowRight aria-hidden="true" /> Volver a artículos</button>
      <div className="article-content">{currentArticle === 1 ? <Article1 /> : <Article2 />}</div>
    </section>
  );

  return (
    <div className="site-shell">
      <Navigation currentView={currentView} setCurrentView={navigateTo} setCurrentArticle={setCurrentArticle} onOpenMainDocument={openAuraTalentPdf} />
      <main>
        {currentArticle ? renderArticleDetail() : currentView === 'articles' ? renderArticles() : currentView === 'authors' ? renderAuthors() : renderHome()}
      </main>
      <footer className="site-footer">
        <button className="footer-brand" onClick={() => navigateTo('home')}><span className="brand-mark"><LuBookOpen aria-hidden="true" /></span><span>Revista<span className="brand-light"> Digital</span></span></button>
        <p>Ideas, comunidad y tecnología con propósito.</p>
        <span className="footer-credit">UTVT · Edición digital</span>
      </footer>
      <PDFViewer key={pdfSession} isOpen={isPDFViewerOpen} onClose={closePDFViewer} pdfUrl={pdfUrl} documentTitle={pdfTitle} documentDescription={pdfDescription} downloadName={pdfFilename} />
    </div>
  );
}

export default App;
