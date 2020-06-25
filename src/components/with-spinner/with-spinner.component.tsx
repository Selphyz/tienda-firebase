import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }: any) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps} />
    )
};
export default WithSpinner; 