import type { Phone } from '../types'

type PhoneProps = {
    phone: Phone;
    addToCart: (item: Phone) => void;
}

export default function Phone({ phone, addToCart }: PhoneProps) {

    const { name, description, price, image } = phone

    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid" src={`/img/${image}.jpg`} alt="phone image" />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                <p>{description}</p>
                <p className="fw-black text-primary fs-3">Bs. {price}</p>
                <button
                    type="button"
                    className="btn btn-dark w-100"
                    onClick={() => addToCart(phone)}>
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )
}
