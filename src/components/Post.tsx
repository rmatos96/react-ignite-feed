import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://pbs.twimg.com/media/FXRi1shXgAEFcua?format=jpg&name=small" />
          <div className={styles.authorInfo}>
            <strong>Diego Rodrigues</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='27 de Junho' dateTime='2022-05-11 08:13:30'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p> Fala galeraa 👋</p>
        <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉{''}<a href=""> jane.design/doctorcare</a></p>
        <p>
          <a href="">#novoprojeto </a>{''}
          <a href="">#nlw</a> {''}
          <a href="">rocketseat</a>
        </p>
      </div>

      <form className={styles.comentForm}>
        <strong>Deixe seu feedvack</strong>

        <textarea placeholder='Deixe seu comentario' />
        
        <footer>
          <button type='submit'>Publicar</button>
        </footer>

      </form>

      <div className={styles.comentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </article>
  )
}
