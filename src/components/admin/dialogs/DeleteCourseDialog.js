import React, { useEffect, useState } from "react";
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import { useDispatch } from "react-redux";
import { handleCourseDelete } from "../../../redux/actions/courses";

const handleSubmit = (event) => {
    event.preventDefault();
};

const DeleteCourseDialog = ({ showDialog, closeDialog, course }) => {

    const dispatch = useDispatch();

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
                <div className="inner form-layer">
                    <form onSubmit={handleSubmit}>
                        <h4 className="text-center" style={{ marginBottom: "20px" }}> میخواهید دوره را حذف کنید ؟ </h4>
                        <button
                            type="submit"
                            className="btn btn-success "
                            style={{ margin: "1em" }}
                            onClick={() => dispatch(handleCourseDelete(course._id)) && closeDialog()}
                        >
                            حذف دوره
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

export default DeleteCourseDialog;
