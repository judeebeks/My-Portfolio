const nav = document.querySelector(".navbar");
console.log(nav);

const createNav = (nav) => {
    nav.innerHTML = `<div class="container">
            <a class="navbar-brand" href="index.html"><img src="../img/judelogo.png" height="80" alt=""></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About Me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact Me</a>
                    </li>
                </ul>
            </div>
        </div>`;
};

createNav(nav);