'use client'
import { useState } from "react";
function Summary({ formData }) {
    return (
        <div id="summary">
            <h2>Summary</h2>
            <p>Form Type: {formData.step == 2 ? "Form A" : "Form B"} </p>
            <p>Age: {formData.age}</p>


            {formData == 2 ? <p>DC Shows: {formData.val}</p> : <p>Marvel Shows: {formData.val}</p>}
        </div>
    );
}
export default Summary;