import Me from './../images/profile2.png';

export default function Header() {
    return (
        <div className="bg-light rounded-3 border p-3 mb-3 mt-3" id="profile">
            <p className="fw-bold fs-2">Profile</p>
            <div className="d-flex flex-column flex-sm-row mb-3">
                <div className="col-lg-3 me-5">
                    <img className="w-100 border border-dark border-4 rounded3" src={Me} alt="" />
                </div>
                <div className="">
                <p className="fs-3 fw-bold">Personal Summary</p>
                <p>
                    As a paid apprentice working with React and React Native I have worked on some amazing projects. I'm a self motivated front-end developer that thrives on learning new technologies.
                </p>
                </div>
            </div>
            
            <p className="fw-bold fs-4">Skills</p>
            <div className="container-fluid fs-1 text-center">
                <i className="fab fa-html5 p-2"></i>
                <i className="fab fa-css3-alt p-2"></i>
                <i className="fab fa-js p-2"></i>
                <i className="fab fa-react p-2"></i>
                <i className="fab fa-bootstrap p-2"></i>
                <i className="fab fa-git-alt p-2"></i>
                <i className="fab fa-npm p-2"></i>
                <i className="fab fa-python p-2"></i>
            </div>
            <div className="d-grid">
                <a className="btn w100 bg-dark text-warning p-1 fs-3 fw-3" href="#nav">
                    <i className="fas fa-caret-up"></i>
                </a>
            </div>
        </div>
    );
}