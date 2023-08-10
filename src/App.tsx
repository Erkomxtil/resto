import React, { useState, useEffect } from 'react';
import './App.css';
import Menu from './components/menu'
import Panier from './components/panier'
import menus from './services/data'

function App() {

  const [backgroundClass, setBackgroundClass] = useState("bg-pas-vegan")
  const [regime, setRegime] = useState(2)
  const [formule, setFormule] = useState(1)
  const [facturation, setFacturation] = useState(0)
  const [datas, setDatas] = useState([] as any)
  const [isMounted, setIsMounted] = useState(false)

  const handleRegimeClick = (index:number) => {
    const background = ["bg-vegan", "bg-viandard-sensible", "bg-pas-vegan"]
    setBackgroundClass(background[index])
    setRegime(index)
  } 
  const handleFormuleClick = (index:number) => {
    setFormule(index)
  } 
  const handleFacturationClick = (index:number) => {
    setFacturation(index)
  } 

  useEffect(() => {
    if(!isMounted) {
      setIsMounted(true)
      setDatas(menus.Menus)
    }
  }, [isMounted]);

const {vegan, viandard, vequoi} = datas
const message = () => {
  alert("Merci pour votre commande !")
}


  return (
    <div className='App bg-[#eee6d8] min-h-screen font-great-vibes text-2xl'>
      <header className={`${backgroundClass}`}>
        <h1 className='font-bold flex justify-center mb-[30px] bg-[#93441a] h-32 items-center text-4xl md:text-6xl before:bg-logo before:h-[60px] before:w-[60px] before:mr-[10px]'>Menu du {new Date().toLocaleDateString("fr-FR", {weekday:"long"})}</h1>
      </header>
      <div className='md:max-w-7xl md:flex  md:flex-col md:mx-[auto]'>
        <nav className='px-[20px]'>
          <Menu className={`${backgroundClass} regime`} data={["Vegan", "Viandard sensible", "Véquoi?"]} onClick={handleRegimeClick} selected={regime}/>
          <Menu className={`${backgroundClass}`} data={["Petit faim", "Grosse dalle"]} onClick={handleFormuleClick} selected={formule} extraClass="formule"/>
        </nav>
        <section className='px-[20px]'>
          {vegan && regime === 0 && formule === 1 && (
            <>
              <h2>Entrées</h2>
              <h3 className='bg-tofu title'>
                <span className='bg-[#b67332] h-[20px] text-[#ffffff] px-[10px] py-[6px] rounded'>
                  {vegan.entree1}
                </span>
              </h3>
              <p className='rounded-b-lg bg-[#b67332] px-[20px] py-[10px] text-[#ffffff] mb-[20px]'>{vegan.description1}</p>
              <h3 className='bg-soupe title'>
                <span className='bg-[#b67332] h-[20px] text-[#ffffff] px-[10px] py-[6px] rounded'>
                  {vegan.entree2}
                </span>
              </h3>
              <p className='rounded-b-lg bg-[#b67332] px-[20px] py-[10px] text-[#ffffff] mb-[20px]'>{vegan.description2}</p>
              <h2>Plat</h2>
              <h3 className='bg-sandwich-vegan title'>
                <span className='bg-[#b67332] h-[20px] text-[#ffffff] px-[10px] py-[6px] rounded'>
                  {vegan.plat}
                </span>
              </h3>
              <p className='rounded-b-lg bg-[#b67332] px-[20px] py-[10px] text-[#ffffff] mb-[20px]'>{vegan.description3}</p>
            </>
          )}
          {vegan && regime === 0 && formule === 0 && (
            <>
              <h2>Plat</h2>
              <h3 className='bg-sandwich-vegan title'>
                <span className='bg-[#b67332] h-[20px] text-[#ffffff] px-[10px] py-[6px] rounded'>
                  {vegan.plat}
                </span>
              </h3>
              <p className='rounded-b-lg bg-[#b67332] px-[20px] py-[10px] text-[#ffffff] mb-[20px]'>{vegan.description3}</p>    
            </>
          )}
          {viandard && regime === 1 && formule === 1 && (
            <>
              <h2>Entrées</h2>
              <h3 className='bg-thon title'>
                <span className='bg-[#b67332] h-[20px] text-[#ffffff] px-[10px] py-[6px] rounded'>
                  {viandard.entree1}
                </span>
              </h3>
              <p className='rounded-b-lg bg-[#b67332] px-[20px] py-[10px] text-[#ffffff] mb-[20px]'>{viandard.description1}</p>
              <h3 className='bg-mousse title'>
                <span className='bg-[#b67332] h-[20px] text-[#ffffff] px-[10px] py-[6px] rounded'>
                  {viandard.entree2}
                </span>
              </h3>
              <p className='rounded-b-lg bg-[#b67332] px-[20px] py-[10px] text-[#ffffff] mb-[20px]'>{viandard.description2}</p>
              <h2>Plat</h2>
              <h3 className='bg-andouillettes title'>
                <span className='bg-[#b67332] h-[20px] text-[#ffffff] px-[10px] py-[6px] rounded'>
                  {viandard.plat}
                </span>
              </h3>
              <p className='rounded-b-lg bg-[#b67332] px-[20px] py-[10px] text-[#ffffff] mb-[20px]'>{viandard.description3}</p>
            </>
          )}
          {viandard && regime === 1 && formule === 0 && (
            <>
              <h2>Plat</h2>
              <h3 className='bg-andouillettes title'>
                <span className='bg-[#b67332] h-[20px] text-[#ffffff] px-[10px] py-[6px] rounded'>
                  {viandard.plat}
                </span>
              </h3>
              <p className='rounded-b-lg bg-[#b67332] px-[20px] py-[10px] text-[#ffffff] mb-[20px]'>{viandard.description3}</p>
            </>
          )}
          {vequoi && regime === 2 && formule === 1 && (
            <>
              <h2>Entrées</h2>
              <h3 className='bg-thon title'>
                <span className='bg-[#b67332] h-[20px] text-[#ffffff] px-[10px] py-[6px] rounded'>
                  {vequoi.entree1}
                  </span>
              </h3>
              <p className='rounded-b-lg bg-[#b67332] px-[20px] py-[10px] text-[#ffffff] mb-[20px]'>{vequoi.description1}</p>
              <h3 className='bg-foie title'>
                <span className='bg-[#b67332] h-[20px] text-[#ffffff] px-[10px] py-[6px] rounded'>{vequoi.entree2}</span></h3>
              <p className='rounded-b-lg bg-[#b67332] px-[20px] py-[10px] text-[#ffffff] mb-[20px]'>{vequoi.description2}</p>
              <h2>Plat</h2>
              <h3 className='bg-entrecote title'>
                <span className='bg-[#b67332] h-[20px] text-[#ffffff] px-[10px] py-[6px] rounded'>
                  {vequoi.plat}
                </span>
                </h3>
              <p className='rounded-b-lg bg-[#b67332] px-[20px] py-[10px] text-[#ffffff] mb-[20px]'>{vequoi.description3}</p>
            </>
          )}
          {vequoi && regime === 2 && formule === 0 && (
            <>
              <h2>Plat</h2>
              <h3 className='bg-entrecote title'>
                <span className='bg-[#b67332] h-[20px] text-[#ffffff] px-[10px] py-[6px] rounded'>
                  {vequoi.plat}
                </span>
                </h3>
              <p className='rounded-b-lg bg-[#b67332] px-[20px] py-[10px] text-[#ffffff] mb-[20px]'>{vequoi.description3}</p>
            </>
          )}
        </section>
        <footer className='px-[20px]'>
          <Menu className={`${backgroundClass} facturation`} data={["Abonnés", "Pompiers et militaires", "Les autres"]} onClick={handleFacturationClick} selected={facturation}/>
          <Panier className={`${backgroundClass} panier`} facturation={facturation}/>
          <Menu className={`${backgroundClass} validation`} data={["Commander"]} onClick={message}/>
        </footer>
      </div>
    </div>
  );
}

export default App;
