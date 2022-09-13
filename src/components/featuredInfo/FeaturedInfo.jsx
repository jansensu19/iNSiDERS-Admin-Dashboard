import "./featureInfo.css"
import {ArrowDownward, ArrowRightAlt, ArrowUpward} from "@material-ui/icons"

export default function FeaturedInfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Profit</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">Rp 11.500.000</span>
                <span className="featuredMoneyRate">
                    0.3%<ArrowDownward className="featuredIcon negative"/>
                </span>
            </div>
            <span className="featuredSub">Compared to 7 days ago</span>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">Rp 56.000.000</span>
                <span className="featuredMoneyRate">
                    0.5%<ArrowUpward className="featuredIcon"/>
                </span>
            </div>
            <span className="featuredSub">Compared to 7 days ago</span>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Transaction</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">1.090</span>
                <span className="featuredMoneyRate">
                    <ArrowRightAlt className="featuredIcon same"/>
                </span>
            </div>
            <span className="featuredSub">same as 7 days ago</span>
        </div>
    </div>
  )
}
