import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ titulo,onAdd, showAdd }) => {

    const onClick = () => {
        console.log('click desde parent')
    }

    return (
        <header className='header'>
            <h2> {titulo} </h2>
            <Button color={showAdd ? 'Red' :'Green'} text={showAdd ? 'Cerrar' :'Nueva'} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    titulo: 'Danny'
}


Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

/*
const estilos = {
    color: 'red', background: 'black'
}
*/

export default Header