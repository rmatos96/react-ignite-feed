import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export const Comment = () => {
  return (
    <div className={styles.comment}>
        <Avatar hasAnyBorder={false} src="https://scontent-gru2-1.xx.fbcdn.net/v/t1.6435-9/84351586_2542243189220205_128527008001949696_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFsscfLx-Ng0mTAdwnhGSqcskjXSHh8r6SySNdIeHyvpESUnRoRpHlhy9FRSLYnXA48mDEyvwW6RII4Hey5HMIf&_nc_ohc=aAJhe1akbEcAX9izlwD&tn=Z5bfIIT5Px3we3_D&_nc_ht=scontent-gru2-1.xx&oh=00_AT9VHa-Kv8tL0qlEPBA3qR9QwM6W64MdwjacUFhjboGpqA&oe=630773B7" />

        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Rodrigo Matos</strong>
                        <time title='27 de Junho' dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
                    </div>

                    <button title='Deletar COmentario'>
                        <Trash size={24}/>
                    </button>
                </header>

                <p>Muito bom dev</p>
            </div>

            <footer>
                <button>
                    <ThumbsUp/>
                    Aplaudir <span>20</span>
                </button>
            </footer>
        </div>
    </div>
  )
}
