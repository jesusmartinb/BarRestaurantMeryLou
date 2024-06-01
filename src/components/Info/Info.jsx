import { InfoContainer } from './Info.styles';

const Info = () => {
  return (
    <div className="container-fluid bg-dark text-secondary sticky-top">
        <div className="container">
            <InfoContainer>
                <div>
                    <i className="fa-solid fa-location-dot"></i> AV. DE RIELLS, 114B 17130 L&apos;ESCALA
                </div>
                <div className="d-flex">
                    <div className="me-5"><i className="fa-solid fa-phone"></i> 972793235</div>
                    <div><i className="fa-solid fa-mobile-screen"></i> 607951936</div>
                </div>
            </InfoContainer>
        </div>
    </div>
  )
}

export default Info
