import React from 'react';
import { LuArrowUpRight, LuBookOpen, LuFileText, LuUsers } from 'react-icons/lu';
import Building3D from './Building3D';

const Navigation = ({ currentView, setCurrentView, setCurrentArticle, onOpenMainDocument }) => {
  const views = [
    { id: 'home', label: 'Inicio', icon: LuBookOpen },
    { id: 'articles', label: 'Artículos', icon: LuFileText },
    { id: 'authors', label: 'Autores', icon: LuUsers },
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <button className="brand" onClick={() => { setCurrentArticle(null); setCurrentView('home'); }} aria-label="Ir al inicio">
          <div className="brand-mark brand-building"><Building3D /></div>
          <span className="brand-name">Revista<span> Digital</span></span>
        </button>
        <nav className="main-nav" aria-label="Navegación principal">
          {views.map((view) => (
            <button
              key={view.id}
              onClick={() => {
                setCurrentView(view.id);
                setCurrentArticle(null);
              }}
              className={`nav-link ${currentView === view.id ? 'is-active' : ''}`}
              aria-current={currentView === view.id ? 'page' : undefined}
            >
              <view.icon aria-hidden="true" />
              <span>{view.label}</span>
            </button>
          ))}
        </nav>
        <button className="header-cta" onClick={onOpenMainDocument}>
          Ver documento <LuArrowUpRight aria-hidden="true" />
        </button>
      </div>
    </header>
  );
};

export default Navigation;
