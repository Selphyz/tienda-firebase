import React from 'react';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { MenuItem } from '../menu-item/menu-item.component';
import { DirectoryModel } from '../../redux/directory/directory.model';
import './directory.styles.scss';

const Directory = ({ sections }: DirectoryModel) => (
    <div className="directory-menu">
        {
            sections !== undefined ?
                sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                )) : null
        }
    </div>
);
const mapStateToProps = (state: { directory: any; }) => ({
    sections: selectDirectorySections(state)
});
export default connect(mapStateToProps)(Directory);