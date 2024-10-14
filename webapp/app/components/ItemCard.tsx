import { FunctionComponent } from "react"

const ItemCard: FunctionComponent<{imgSrc:string}> = (imgSrc) => {

    const value = (
        <div className="group relative w-full h-full">
            <img src={imgSrc.imgSrc} alt="Card Image" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <p className="text-white text-center">Your text here</p>
            </div>
        </div>
    )
    return value
}

export default ItemCard