import http from "./httpService";

export const getCourses = () => {
    return http.get('https://toplearnapi.ghorbany.dev/api/courses')
}

export const getCourse = (courseId) => {
    return http.get(`https://toplearnapi.ghorbany.dev/api/course/${courseId}`);
};

export const newCourse = (course) => {
    return http.post(`https://toplearnapi.ghorbany.dev/api/course` , course);
};

export const deleteCourse = (courseId) => {
    return http.delete(`https://toplearnapi.ghorbany.dev/api/course/${courseId}`);
};

export const updateCourse = (courseId , course) => {
    return http.put(`https://toplearnapi.ghorbany.dev/api/course/${courseId}` , course);
};