import React from 'react'

function Home() {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide container">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://img.freepik.com/premium-psd/world-literature-day-banner-with-bookshelf-background_1262006-242.jpg" className="d-block w-100" alt="Slider-img"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://previews.123rf.com/images/leoedition/leoedition1708/leoedition170800391/84002250-banner-school-library-book-shelf-or-bookcase-on-the-background.jpg" className="d-block w-100" alt="Slider-img"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://media.istockphoto.com/id/1275658370/vector/online-reading-and-education.jpg?s=612x612&w=0&k=20&c=QaMStLKmZeR6KxyqhpFxoCLHZNCM5DkBqc0yFvRfg4w=" className="d-block w-100" alt="Slider-img"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Home
