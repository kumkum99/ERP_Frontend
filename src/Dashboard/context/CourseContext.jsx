import React, { createContext, useState, useContext } from 'react';

// Create CourseContext
const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
    const [courses, setCourses] = useState([]);

    const updateCourseProgress = (courseName, progress, completionDate) => {
        setCourses(prevCourses => {
            const courseIndex = prevCourses.findIndex(course => course.courseName === courseName);
            if (courseIndex > -1) {
                const updatedCourses = [...prevCourses];
                updatedCourses[courseIndex] = { ...updatedCourses[courseIndex], progress, completionDate };
                return updatedCourses;
            } else {
                return [...prevCourses, { courseName, progress, completionDate }];
            }
        });
    };

    return (
        <CourseContext.Provider value={{ courses, updateCourseProgress }}>
            {children}
        </CourseContext.Provider>
    );
};

export const useCourses = () => useContext(CourseContext);
