import { createContext, useContext } from 'react';

const filterInitialState = {
    productList: [],
    onlyInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null,
};

export const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({ children }) => {
    const value = {
        productList: [1, 2, 3, 4, 5],
        onlyInStock: true,
    };

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilter = () => {
    const context = useContext(FilterContext);
    return context;
};
