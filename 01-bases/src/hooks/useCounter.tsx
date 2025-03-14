import { useState } from "react";

export const useCounter = () => {

    const [count, setCount] = useState<number>(10);

    const increaseBy = (value: number) => {
        //setcount(count + value);
        //setcount((current) => current + value);  | current es el valor actual
        setCount(Math.max(value + count, 0));
    }

    return {
        //Propiedades que se retornan
        count,

        //Funciones que se retornan
        increaseBy
    }
}
