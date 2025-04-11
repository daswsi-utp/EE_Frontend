import Header from "../Components/Header";
import OffersContent from "./OffersContent";

export default async function Page() {
    return (
        <div>
            <Header/>
            {/*Programar apartir de aqui el contenido de ofertas */}
            <OffersContent/>
        </div>
    )
}