import React from 'react'

export default function App(){
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">Yacoub BADAROU</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMain">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navMain">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" href="#home">Accueil</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">À propos</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projets</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <header id="home" className="text-white text-center py-6 header-gradient" style={{paddingTop: '3.5rem', paddingBottom: '3.5rem'}}>
        <div className="container">
          <img src="/assets/profile.svg" alt="profile" className="profile-img mb-3" />
          <h1 className="display-5 mt-3">Yacoub Adechina A. A. BADAROU</h1>
          <p className="lead">Développeur Fullstack • Informaticien • Formateur</p>
          <div className="mt-4">
            <a className="btn btn-light btn-lg me-2" href="/assets/cv_badarou.pdf" target="_blank" rel="noreferrer">Télécharger CV</a>
            <a className="btn btn-outline-light btn-lg" href="#projects">Voir projets</a>
          </div>
        </div>
      </header>

      <main className="container py-5">
        <section id="about" className="mb-5" data-aos="fade-up">
          <h2>Profil</h2>
          <div className="card p-4 shadow-sm">
            <p>Ouvert d’esprit, sociable, dynamique, polyvalent, curieux, organisé, motivé, sens de l’écoute, pédagogique et technique. Souhait de mettre mes compétences à profit pour soutenir vos équipes.</p>
          </div>
        </section>

        <section className="row mb-5">
          <div className="col-md-6" data-aos="fade-right">
            <h3>Formations</h3>
            <ul>
              <li>2017–2018 : Licence MIAGE – UPAO Bénin (Mention Bien)</li>
              <li>2016–2017 : BTS Informatique de Gestion – UPAO Bénin</li>
              <li>2014–2015 : Baccalauréat Série D – Complexe Scolaire La Grâce</li>
            </ul>
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <h3>Contacts</h3>
            <p>Tél: +229 0196736712 / 0141569457<br/>Email: <a href="mailto:a.badarou@gmail.com">a.badarou@gmail.com</a></p>
          </div>
        </section>

        <section id="projects" className="mb-5" data-aos="fade-up">
          <h2>Projets</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card p-4 h-100 shadow-sm hover-lift">
                <h5>i-Trans</h5>
                <p>Application de gestion des opérations de transit utilisée par plusieurs entreprises.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100 shadow-sm hover-lift">
                <h5>RESTAU</h5>
                <p>Module mobile + desktop pour la gestion des commandes et éditions de facture en restaurant.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100 shadow-sm hover-lift">
                <h5>CashZone</h5>
                <p>Application de gestion de paiement de factures et dépôt d'argent en ligne (Playstore).</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mb-5" data-aos="fade-up">
          <h2>Contact</h2>
          <div className="card p-4 shadow-sm">
            <form onSubmit={(e)=>{e.preventDefault(); alert('Formulaire simulé — contacte-moi à a.badarou@gmail.com');}}>
              <div className="mb-3">
                <label className="form-label">Nom</label>
                <input className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input className="form-control" type="email" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4" required />
              </div>
              <button className="btn btn-primary">Envoyer</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="text-center py-3" style={{background:'#f8f9fa'}}>
        <div className="container">© 2025 Yacoub A. A. BADAROU</div>
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
      <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
      <link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css" />
      <script>document.addEventListener('DOMContentLoaded', ()=> AOS.init({duration:700, once:true}));</script>
    </>
  )
}