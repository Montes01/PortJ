import './List.css'
export const List = ({name,path}) => {
  return (
    <li><a href={path} className={name}>{name}</a></li>
  )
}

