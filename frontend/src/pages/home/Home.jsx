import Feed from "../../components/feed/Feed";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import "./home.css";

export default function Home() {
    return (
        // Fragments (For a component to return multiple elements) - https://reactjs.org/docs/fragments.html
        <>
            <Topbar />
            <div className="homeContainer">
                <Leftbar />
                <Feed />
                <Rightbar />
            </div>
        </>
    )
}
