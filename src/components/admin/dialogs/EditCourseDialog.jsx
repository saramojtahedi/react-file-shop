import React, { useEffect, useState } from "react";
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import { useDispatch } from "react-redux";
import { handleCourseUpdate } from "../../../redux/actions/courses";

const EditCourseDialog = ({ showDialog, closeDialog, course }) => {
    const [courseId, setCourseId] = useState();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [imageUrl, setImageUrl] = useState();
    const [info, setInfo] = useState();

    const dispatch = useDispatch();

    useEffect(() => {
        setCourseId(course._id);
        setTitle(course.title);
        setPrice(course.price);
        setImageUrl(course.imageUrl);
        setInfo(course.info);

        return () => {
            setCourseId();
            setTitle();
            setPrice();
            setImageUrl();
            setInfo();
        };
    }, [course]);

    const handleSubmit = (event) => {
        event.preventDefault();
        let data = new FormData();
        data.append("title", title);
        data.append("price", price);
        if (event.target.imageUrl.files[0])
            data.append("imageUrl", event.target.imageUrl.files[0]);
        else data.append("imageUrl", imageUrl);
        data.append("info", info);
        console.log(data);
        dispatch(handleCourseUpdate(courseId, data));
        closeDialog();
    };

    return (
        <DialogOverlay
            isOpen={showDialog}
            onDismiss={closeDialog}
            style={{ background: "hsla(0, 100%, 100%, 0.9)" }}
        >
            <DialogContent
                style={{
                    border: "solid 5px hsla(0, 0%, 0%, 0.5)",
                    borderRadius: "10px",
                    boxShadow: "0px 10px 50px hsla(0, 0%, 0%, 0.33)",
                }}
            >
                <h5 className="text-center" style={{ marginBottom: "20px" }}> ویرایش دوره </h5>
                <div className="inner form-layer">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="title"
                            style={{ marginBottom: 3 }}
                            className="form-control"
                            placeholder="عنوان دوره"
                            aria-describedby="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <input
                            type="text"
                            name="price"
                            style={{ marginBottom: 3 }}
                            className="form-control"
                            placeholder="قیمت دوره به تومان"
                            aria-describedby="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />

                        <input
                            type="file"
                            name="imageUrl"
                            style={{ marginBottom: 3 }}
                            className="form-control mb-2"
                            aria-describedby="imageUrl"
                        />
                        <textarea
                            name="info"
                            placeholder="توضیحات دوره"
                            className="form-control"
                            style={{ marginBottom: 3 }}
                            value={info}
                            onChange={(e) => setInfo(e.target.value)}
                        />

                        <button
                            type="submit"
                            className="btn btn-success "
                            style={{ margin: "1em" }}
                        >
                            ویرایش دوره
                        </button>
                        <button
                            className="btn btn-warning mr-5"
                            style={{ margin: "1em" }}
                            onClick={closeDialog}
                        >
                            انصراف
                        </button>
                    </form>
                </div>
            </DialogContent>
        </DialogOverlay>
    );
};

export default EditCourseDialog;
