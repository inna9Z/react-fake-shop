
import PropTypes from 'prop-types'
import './Laptop.css'

const Laptop = ({ laptop }) => {
    return (
        <div className="box-container">
            <div className="box-card">
                <h2 >{laptop.title}</h2>
                <p >{laptop.description}</p>

                <div>
                    <img src={laptop.images[1]} alt="" />
                </div>
                <p>Price in euros: €{laptop.price}</p>
            </div>
        </div>
    )
}

Laptop.propTypes = {
    laptop: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        images: PropTypes.array.isRequired
    })
}

export default Laptop;
