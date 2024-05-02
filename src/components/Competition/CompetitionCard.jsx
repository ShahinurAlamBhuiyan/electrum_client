import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Style.css"

const CompetitionCard = ({ item, activeUpcoming, activePrevious }) => {
    const {competitionType, title, winningTeamName, institutionName, eventDate, location, description, moreInfoLink, images } = item
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    

    return (
        
        <>
        {
            // activePrevious && !activeUpcoming &&

            <div className='competition-card-container'>
                <div className="competition-cards" style={{ display: 'flex', alignItems: 'stretch', margin: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <div className='competition-card-details' style={{ flex: 1 }}>
                        <h1>{title}</h1>
                        {/* <p><strong>Competition Type:</strong> {competitionType}</p> */}
                        <p><strong>Winning Team:</strong> {winningTeamName}</p>
                        <p><strong>Institution:</strong> {institutionName}</p>
                        <p><strong>Event Date:</strong> {eventDate}</p>
                        <p><strong>Location:</strong> {location}</p>
                        <p><strong>Description:</strong> {description}</p>
                        <a href={moreInfoLink}>For More Info</a>
                    </div>
                    <div style={{ flex: 1, width: '50%', paddingRight: '5%' }}>
                        <Slider {...settings}>
                            {images && images.map((image, index) => (
                                <div key={index}>
                                    <img src={image} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto', maxHeight: '300px', borderRadius: '10px' }} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        }
        
        </>
    );
}

export default CompetitionCard;
