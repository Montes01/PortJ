import { List } from '../List/List'
import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className='menu'>
        <ul>
            <List name="Home"></List>
            <List name="About"></List>
            <List name="Services"></List>
            <List name="Portafolio"></List>
            <List name="Contact"></List>
        </ul>
    </nav>
  )
}