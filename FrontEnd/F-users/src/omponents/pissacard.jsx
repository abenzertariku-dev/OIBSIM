export default function PissaCard({item}){
    return(
        <div className="p-7 rounded-2xl shadow-amber-950">
            <h2>{item.Name}</h2>
            <h3>{item.Price}ETB</h3>
            <p>{item.Discription}</p>
            <img src={item.Image} alt={item.Name} className="text-2xl w-9 h-12 rounded-2xl" />
        </div>   
    )
}