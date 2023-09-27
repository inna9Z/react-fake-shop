
import PropTypes from 'prop-types'

const Vegetable = ({ vegetable }) => {

    return (
        <div className='box-container'>
            <div className="box-card">
                <h2>{vegetable.title}</h2>
                <p>{vegetable.description}</p>
                <div>
                    <img src={vegetable.images[1]} alt="" />
                </div>
                <p className="price">Price in euros: €{vegetable.price}</p>
            </div>
        </div>

    )
}

Vegetable.propTypes = {
    vegetable: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        images: PropTypes.array.isRequired
    })
}

export default Vegetable
