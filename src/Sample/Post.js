import { useState,useEffect } from 'react';
import CreateNewPost from './CreatePost';
import "./App.css"


export default function Coment (){
    const [accion , setAccion] = useState("")
    const [mostarMas, setMostrarMas] = useState(2)
    const [post, setPost] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res =>{
            return res.json();
        })
        .then(res => {
            let hola = [...res]
            setPost(hola)
        })
    },[])

    return(
        <div className='Post-Container'>
            {post.map(obj => mostrar(mostarMas,obj, accion , setAccion))}
            <button className='MostrarMas' onClick={()=>setMostrarMas(mostarMas + 1)}>Mostrar Mas</button>
        </div>
    )    
}

const mostrar = (menorQue,obj, state,setState)=>{
    if (obj.userId < menorQue){
        return CreateNewPost(obj, state,setState)
    }else{
        let id = Math.random().toString(36).slice(2)
        return <div key={id}></div>
    }
}

