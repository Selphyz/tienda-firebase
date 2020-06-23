import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { MenuItem } from '../menu-item/menu-item.component';
import { DirectoryModel } from '../../redux/directory/directory.model';
import './directory.styles.scss';

const Directory = ({ sections }: DirectoryModel) => (
    <div className="directory-menu">
        {
            sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />

            ))
        }
    </div>
);
const mapStateToProps = createStructuredSelector<any, any>({
    sections: selectDirectorySections
});
export default connect(mapStateToProps)(Directory);