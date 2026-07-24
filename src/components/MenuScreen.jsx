import { useNavigate } from "react-router-dom";
import P3Menu from "./P3Menu";
import menuVideo from "../assets/main1.mp4";
import "./MenuScreen.css";

// Landing screen: looping video background + the Persona menu.
export default function MenuScreen() {
  const navigate = useNavigate();
  return (
    <div id="menu-screen">
      <video src={menuVideo} autoPlay loop muted playsInline />
      <div className="menu-vignette" />
      <P3Menu onNavigate={(page) => navigate(`/${page}`)} />
    </div>
  );
}
