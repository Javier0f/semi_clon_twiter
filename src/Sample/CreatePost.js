import "./CreatePost.css"

export default function CreateNewPost (obj, state,setState) {

    return(
        <div key={obj.id} onClick={()=>{setState(obj.id)}}>
            <div id={obj.id} className='Post'>
                <section className="user"><img src={"./img/perfil-del-usuario.png"} alt="" /> nombre de usuario</section>
                <h2>{obj.title}</h2>
                <p>{obj.body}</p>
            </div>
            {state === obj.id? <Acciones/>: null}
        </div>
    )
}

const Acciones = () =>{
    return(
        <div className="acciones">
            <ul>
                <li className="like">Me gusta</li>
                <li className="comp">Compartir</li>
                <li className="coment">Comentar</li>
                <li className="repost">Post</li>
            </ul>
        </div>
    )
}