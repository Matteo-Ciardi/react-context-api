import './DetailCard.css'

const DetailCard = (props) => {

    const { detail } = props;

    return (
        <>
            <div className="detail-card">
                <div className='detail-image-box'>
                    <img src={detail.image} className="detail-image"></img>
                </div>
                <div className='detail-info'>
                    <h1 className='detail-title'>{detail.title}</h1>

                    <p className="detail-rating">
                        <i className="fa-solid fa-star" style={{ color: "#e6da00ff" }}></i>
                        {detail.rating?.rate} / 5
                        <span className="rating-count"> ({detail.rating?.count} recensioni)</span>
                    </p>

                    <div className='buy'>
                        <p className='detail-price'>
                            € {detail.price.toFixed(2)}
                        </p>
                        <button className='buy-button'>ACQUISTA</button>
                    </div>

                    <p className='detail-description'>
                        <strong>INFORMAZIONI:</strong><br />
                        {detail.description}
                    </p>

                </div>
            </div>
        </>
    )
}

export default DetailCard

