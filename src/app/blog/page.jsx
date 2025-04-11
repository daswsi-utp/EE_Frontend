import Header from "../Components/Header";
import BlogContent from "./BlogContent";

export default async function Page() {
    return (
        <div>
            <Header/>
            {/*Programar apartir de aqui el contenido de Blog */}
            <BlogContent/>
        </div>
    )
}