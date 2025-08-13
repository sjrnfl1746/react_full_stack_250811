import {useParams} from "react-router-dom";
import ReadComponent from "../../components/todo/ReadComponent.jsx";

const ReadPage = () => {
    const {tno} = useParams();

    return (
        <div className="text-3xl font-extrabold w-full bg-white mt-6">
            <div className={"text-2xl"}>
                Todo Read Page Component {tno}
            </div>
            <ReadComponent tno={tno} />
        </div>
    )
}

export default ReadPage