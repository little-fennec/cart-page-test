import React from 'react';
import StoreServiceContext from '../store-service-context';
import StoreService from "../../services/store-service";

const WithStoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <StoreServiceContext.Consumer>
                {
                    (StoreService) => {
                        return <Wrapped {...props} StoreService={StoreService}/>
                    }
                }
            </StoreServiceContext.Consumer>
        )
    };
};

export default WithStoreService;