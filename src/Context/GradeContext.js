import { createContext, useState } from "react";

export const GradeContext = createContext({
    grades: null,
    setGrades: () => null,
});

export const GradeProvider = ({ children }) => {

    const [ grades, setGrades ] = useState(null);
    const value = { grades, setGrades };

    return <GradeContext.Provider value={value}>{children}</GradeContext.Provider>
}