import { createContext, useState } from "react";

export const TrackerContext = createContext({
    courses: null,
    setCourses: () => null,
});

export const TrackerProvider = ({ children }) => {
    
    const [ courses, setCourses ] = useState(null);
    const value = { courses, setCourses };

    return <TrackerContext.Provider value={value}>{children}</TrackerContext.Provider>
    
}