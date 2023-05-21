export default function Location(props) {
    return (
        <div className="card">
            <img src={props.item.imageUrl} className="card-img" />
            <div className="card-details">
                <div className="card-location-container">
                    <p className="card-location"><i className="fa fa-location-dot"></i>{props.item.location}</p>
                    <a className="card-gMaps" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h3 className="card-title">{props.item.title}</h3>
                <h4 className="card-date">{props.item.startDate} - {props.item.endDate}</h4>
                <p className="card-desc">{props.item.description}</p>
            </div>
        </div>
    )
}