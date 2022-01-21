export default function Education() {
    return (
        <div className="bg-light rounded-3 border p-3 mb-3 mt-3" id="education">
            <p className="fw-bold fs-2">Education</p>
            <div>
                <p className="fs-6 p-0 m-0"><span className="fw-bold">BitWise Industries - Workforce Training |</span> Aug - Sep 2021</p>
                <p>Training covered JavaScript</p>
                <p className="fs-6 p-0 m-0"><span className="fw-bold">BitWise Clovis Community College |</span> July 2020</p>
                <p>Associates of Art in Two Dimensional Art</p>
            </div>
            <div className="d-grid">
                <a className="btn w100 bg-dark text-warning p-1 fs-3 fw-3" href="#nav">
                    <i className="fas fa-caret-up"></i>
                </a>
            </div>
        </div>
    );
}