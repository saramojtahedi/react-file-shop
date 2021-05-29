import { toast } from "react-toastify";
import { deleteCourse, getCourses, newCourse, updateCourse } from "../courseService";

export const getAllCourses = () => {
    return async dispatch => {
        const {data} = await getCourses()
        await dispatch({ type: "INIT", payload: data.courses });
    }
}

export const createNewCourse = (course) => {
    return async (dispatch , getState) => {
        const {data , status} = await newCourse(course)
        if( status === 201) {
            console.log('done!')
            await dispatch({ type: "ADD_COURSE", payload: [...getState().courses , data.course] });
        }
    }
}

export const handleCourseUpdate = (courseId, updatedCourse) => {
    return async (dispatch , getState) => {
        const courses = [...getState().courses]
        const updatedCourses = [...courses]
        const courseIndex = updatedCourses.findIndex(
            (course) => course._id == courseId
        );
        let course = updatedCourses[courseIndex]
        course = { ...Object.fromEntries(updatedCourse) };
        updatedCourses[courseIndex] = course

        try {
            await dispatch({
                type: "UPDATE_COURSE" , payload: [...updatedCourses]
            })
            const {data, status} = await updateCourse(
                courseId, updatedCourse
            )
            if(status === 200){
                toast.success("دوره با موفقیت به روز شد")
            }
        } catch (err) {
            await dispatch({type:"UPDATE_COURSE", payload: [...courses]})
        }
    }
}


export const handleCourseDelete = (courseId) => {
    return async (dispatch , getState) => {
        const courses = [...getState().courses];
        const filteredCourses = courses.filter(course => course._id !== courseId)
        try {
            await dispatch({ type: "DELETE_COURSE", payload: [...filteredCourses] });
            const {status} = await deleteCourse(courseId);
            if(status === 200)  toast.success("دوره با موفقیت حذف شد")
        } catch (err) {
            await dispatch({type: "DELETE_COURSE" , payload:[...courses]})
        }
    }
}



