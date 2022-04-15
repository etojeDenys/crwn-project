import React from "react";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";

import {MenuItem} from "../MenuItem/MenuItem";
import {selectMenuListSections} from "../../redux/menuList/menu-list.selectors";

import './menu-list.styles.scss'


const MenuList = ({sections}) => {
    return (
        <div className='directory-menu'>
            {sections.map(({id, ...otherSection}) => (
                <MenuItem key={id} {...otherSection}/>
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections:selectMenuListSections
})
export default connect(mapStateToProps)(MenuList)