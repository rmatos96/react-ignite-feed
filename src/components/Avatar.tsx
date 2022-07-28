import styles from './Avatar.module.css'

export const Avatar = (props:any) => {
  const hasBorder = props.hasAnyBorder !== false

  return (
    <img className={hasBorder ? styles.avatarWithBoder : styles.avatar} src={props.src}/>
  )
}
