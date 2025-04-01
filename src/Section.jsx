import './Section.css'

function Section({ id, name, status, headline, testimonial }) {
    return (
        <div className={`section section-0${id}`}>
            <div className='profile'>
                <img src="" alt="" />
                <div className='name'>
                    <h4>{name}</h4>
                    <h5>{status}</h5>
                </div>
            </div>
            <h2>{headline}</h2>
            <p>"{testimonial}"</p>
        </div>
    )
}

export default Section