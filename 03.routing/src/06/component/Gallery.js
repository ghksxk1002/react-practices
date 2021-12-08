import React, {Fragment} from 'react';
import styles from '../assets/scss/component/Gallery.scss';
import SiteLayout from '../layout/StieLayout';

export default function Gallery() {
    return (
        <SiteLayout>
            <div className={styles.Gallery}>
                <h2>Gallery</h2>
            </div>
        </SiteLayout>
    );
}