import React from 'react'

function MainPage() {
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>


                <div id="carouselExample" class="carousel slide my-4">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://img.freepik.com/premium-vector/web-development-coding-programming-futuristic-banner-computer-code-laptop_3482-5582.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://img.freepik.com/premium-vector/web-development-coding-programming-futuristic-banner-computer-code-computer_3482-6985.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://img.freepik.com/premium-vector/web-development-coding-programming-futuristic-banner-hand-touching-computer-code_3482-7055.jpg" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <section className='my-5'>
                    <div>
                        <h1 className='text-center mt-5 mb-3'>About Our Team Members</h1>
                    </div>
                    <div class="row row-cols-1 row-cols-md-2 g-4">
                        <div class="col">
                            <div class="card">
                                <img src="https://e-tuitions.com/images/1708428295244.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src="https://e-tuitions.com/images/1708428295244.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src="https://e-tuitions.com/images/1708428295244.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src="https://e-tuitions.com/images/1708428295244.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div>
                    <footer className="bg-dark text-white pt-4">
                        <div className="container">
                            <div className="row">
                                {/* About Us Section */}
                                <div className="col-md-4">
                                    <h5>About Us</h5>
                                    <p>
                                        We provide top-notch web development services to help you create a
                                        modern and responsive online presence.
                                    </p>
                                </div>
                                {/* Quick Links Section */}
                                <div className="col-md-4">
                                    <h5>Quick Links</h5>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#" className="text-white text-decoration-none">
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-white text-decoration-none">
                                                About
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-white text-decoration-none">
                                                Services
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-white text-decoration-none">
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* Contact Section */}
                                <div className="col-md-4">
                                    <h5>Contact Us</h5>
                                    <ul className="list-unstyled">
                                        <li>
                                            <i className="bi bi-geo-alt-fill"></i> 123 Street, City, Country
                                        </li>
                                        <li>
                                            <i className="bi bi-telephone-fill"></i> +1 234 567 890
                                        </li>
                                        <li>
                                            <i className="bi bi-envelope-fill"></i> info@example.com
                                        </li>
                                    </ul>
                                    {/* Social Media Icons */}
                                    <div>
                                        <a href="#" className="text-white me-2">
                                            <i className="bi bi-facebook"></i>
                                        </a>
                                        <a href="#" className="text-white me-2">
                                            <i className="bi bi-twitter"></i>
                                        </a>
                                        <a href="#" className="text-white me-2">
                                            <i className="bi bi-instagram"></i>
                                        </a>
                                        <a href="#" className="text-white">
                                            <i className="bi bi-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <hr className="bg-light" />
                            {/* Copyright Section */}
                            <div className="text-center py-3">
                                <p className="mb-0">&copy; 2025 Your Company. All rights reserved.</p>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>

        </>
    )
}

export default MainPage
