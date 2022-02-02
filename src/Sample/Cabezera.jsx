import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import './Cabezera.css'

const Cabezera = () => {
    const [busqueda, setBusqueda] = useState("busqueda")
    const [bar, setBar] = useState('Cabezera-Container')
    const [aside, setAside] = useState('noelevar')
    const [asideRight, setAsideRight] = useState('noElevar')

    useEffect(()=>{
        function barHide(Evento){
            if(Evento.path[1].pageYOffset > 80){
                setBar('Cabezera-Container-hide')
            }else{
                setBar('Cabezera-Container')
            }
        }
        function asideHide(Evento){
            if(Evento.path[1].pageYOffset > 80){
                setAside("elevar")
                setAsideRight('Elevar')
                setBusqueda("busquedaActive")
            }else{
                setAside("noelevar")
                setAsideRight('noElevar')
                setBusqueda("busqueda")
            }
        }

        window.addEventListener("scroll",(e)=>{barHide(e); asideHide(e)})
    },[])

  return(
      <div className={bar} onMouseOver={(e)=>{setBar("Cabezera-Container");setAside("noelevar");setAsideRight("noElevar");setBusqueda("busqueda"); e.stopPropagation()}}>
          <div className={busqueda}><input type="text" name="" id="" /></div>
          <aside className={aside}>
              <div className='aside1'>
                  <div className='img1'></div>
                  <div className='text1'></div>
              </div>
              <div className='aside2'>
                  <ul className='aside2-list'>
                      <li><div className='img2'></div> <div className='text2'></div></li>
                      <li><div className='img2'></div> <div className='text2'></div></li>
                      <li><div className='img2'></div> <div className='text2'></div></li>
                      <li><div className='img2'></div> <div className='text2'></div></li>
                  </ul>
              </div>
          </aside>
          <aside className={asideRight}>
                <div className='aside-right-top'>

                </div>
                <div className='aside-right-bottom'>

                </div>
          </aside>
      </div>
  )
};
export default Cabezera;