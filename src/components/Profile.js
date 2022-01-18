export default function Header() {
    return (
        <div class="bg-light rounded-3 border p-3 mb-3 mt-3" id="profile">
            <p class="fw-bold fs-2">Profile</p>
            <p>
                Jason is a highly efficient and self-motivated individual looking for a position to gain practical experience and to grow with.
            </p>
            <p class="fw-bold fs-4">Skills</p>
            <div class="container-fluid fs-1">
                <i class="fab fa-html5"></i>
                <i class="fab fa-css3-alt"></i>
                <i class="fab fa-js"></i>
                <i class="fab fa-react"></i>
                <i class="fab fa-bootstrap"></i>
                <i class="fab fa-git-alt"></i>
                <i class="fab fa-npm"></i>
            </div>
            <div class="d-grid">
                <a class="btn w100 bg-dark text-warning p-1 fs-3 fw-3" href="#nav">
                    <i class="fas fa-caret-up"></i>
                </a>
            </div>
        </div>
    );
}