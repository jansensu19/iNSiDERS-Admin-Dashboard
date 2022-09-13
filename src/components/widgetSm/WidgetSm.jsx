import { Visibility } from "@material-ui/icons"
import Maxim from "../../img/maxim.png"
import Telkomsel from "../../img/telkomsel.png"
import Three from "../../img/three.png"
import Ovo from "../../img/ovo.png"
import Pln from "../../img/pln.png"
import "./widgetSm.css"

export default function WidgetSm() {
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">Top 5 Products</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src={Maxim} alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Maxim</span>
                    <span className="widgetSmUserTitle">120 transaction</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src={Telkomsel} alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Telkomsel</span>
                    <span className="widgetSmUserTitle">98 transaction</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src={Three} alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Three</span>
                    <span className="widgetSmUserTitle">74 transaction</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src={Ovo} alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">OVO</span>
                    <span className="widgetSmUserTitle">68 transaction</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src={Pln} alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">PLN Postpaid</span>
                    <span className="widgetSmUserTitle">50 transaction</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}
