
import PropTypes from 'prop-types'

const Smartphone = ({ smartphone }) => {

    return (


        <div className="box-container">
            <div className="box-card">
                <h2>{smartphone.title}</h2>
                <p>{smartphone.description}</p>
                <div>
                    <img src={smartphone.images[1]} alt="" />
                </div>
                <p>Price in euros: €{smartphone.price}</p>
            </div>
        </div>



    )
}

Smartphone.propTypes = {
    smartphone: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        images: PropTypes.array.isRequired
    })
}

export default Smartphone;
