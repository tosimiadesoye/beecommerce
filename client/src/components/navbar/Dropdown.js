import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
const CustomDropdown = (props) => {
    const { handleMouseEnter,
        handleMouseLeave,
        handleToggle,
        options,
        name,
        stateKeys
    } = props

    return (
        <div>
            <Dropdown
               
                onMouseOver={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                isOpen={stateKeys[name]}
                toggle={handleToggle}
            >
                <DropdownToggle name={name} carat>
                <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                </DropdownToggle>
                <DropdownMenu>
                    {options.length &&
                        options.map(({ header, title, id }) => {
                            // console.log(header)
                            // console.log(title)
                           
                            return(
                                <DropdownItem header={header}>
                                    <Nav.Link as={Link} to="/shop">
                                        {title}
                                    </Nav.Link>
                               
                                </DropdownItem>
                            )
                        })
                    }
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default CustomDropdown
