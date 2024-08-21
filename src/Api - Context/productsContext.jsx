import React, { createContext, useState, useContext, useEffect } from "react";
import { getItemsRequest, getCategoriesRequest } from "./products";

export const ItemsContext = createContext();

export const useItems = () => {
    const context = useContext(ItemsContext);
    if (!context) {
        throw new Error("useItems debe ser utilizado dentro de un ItemsProvider");
    }
    return context;
};

export const ItemsProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [errors, setErrors] = useState([]);

    const getItems = async () => {
        try {
            const response = await getItemsRequest();
            setItems(response.data);
        } catch (error) {
            setErrors(["Hubo un error al cargar los items"]);
        }
    };

    const getCategories = async () => {
        try {
            const response = await getCategoriesRequest();
            setCategories(response.data);
        } catch (error) {
            setErrors(["Hubo un error al cargar las categorías"]);
        }
    };

    useEffect(() => {
        getItems();
        getCategories();
    }, []);

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [errors]);

    return (
        <ItemsContext.Provider value={{
            items,
            categories,
            getItems,
            getCategories,
            errors
        }}>
            {children}
        </ItemsContext.Provider>
    );
};