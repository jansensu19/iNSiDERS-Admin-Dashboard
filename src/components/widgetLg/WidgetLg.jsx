import "./widgetLg.css"

export default function WidgetLg() {

  const Button = ({type}) =>{
    return <button className={"widgetLgButton " + type}>{type}</button>
  }
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Top 5 Agents</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Agents</th>
          <th className="widgetLgTh">Profit</th>
          <th className="widgetLgTh">Sales</th>
          <th className="widgetLgTh">Transaction</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetLgImg" />
            <span className="widgetLgName">PT Suka Maju Jakarta</span>
          </td>
          <td className="widgetLgDate">Rp 3.700.000</td>
          <td className="widgetLgAmount">Rp 7.230.000</td>
          <td className="widgetLgAmount">43 transactions</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susi Susanti</span>
          </td>
          <td className="widgetLgProfit">Rp 3.550.000</td>
          <td className="widgetLgAmount">Rp 5.230.000</td>
          <td className="widgetLgAmount">37 transactions</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Toko Pulsa III Depok</span>
          </td>
          <td className="widgetLgProfit">Rp 2.860.000</td>
          <td className="widgetLgAmount">Rp 4.500.000</td>
          <td className="widgetLgAmount">38 transactions</td>
          <td className="widgetLgStatus"><Button type="Declined"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetLgImg" />
            <span className="widgetLgName">PT Suka Maju Bogor</span>
          </td>
          <td className="widgetLgProfit">Rp 2.400.000</td>
          <td className="widgetLgAmount">Rp 4.800.000</td>
          <td className="widgetLgAmount">40 transactions</td>
          <td className="widgetLgStatus"><Button type="Declined"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Anton Antoman</span>
          </td>
          <td className="widgetLgProfit">Rp 2.350.000</td>
          <td className="widgetLgAmount">Rp 2.100.000</td>
          <td className="widgetLgAmount">20 transactions</td>
          <td className="widgetLgStatus"><Button type="Pending"/></td>
        </tr>
      </table>
    </div>
  )
}
