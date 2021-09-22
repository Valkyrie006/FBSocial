import "./profile.css";
import Feed from "../../components/feed/Feed";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=Joey`);
            setUser(res.data);
        }
        fetchUser();
        console.log(user);
    }, [])
    return (
        // Fragments (For a component to return multiple elements) - https://reactjs.org/docs/fragments.html
        <>
            <Topbar />
            <div className="profile">
                <Leftbar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={user.coverPicture || PF+"person/noCover.png"} alt="" className="profileCoverImg" />
                            <img src={user.profilePicture || PF+"person/noAvatar.png"} alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">{user.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username="Joey"/>
                        <Rightbar user={user} />
                    </div>
                </div>

            </div>
        </>
    )
}
