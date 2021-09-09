import { Card } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';
import "./style.css";


export default function OrderBook() {
    return (
        <div className="order-book">
            <table style={{width : "100%", fontSize : "1.5rem"}}>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>

                <tr className="active">
                        <td><AiFillStar/> ETH/BTC</td>
                        <td style={{color:"green"}}>0.0002025</td>
                        <td className="stonks">-2.58%</td>
                    </tr>
                    <tr className="active">
                        <td><AiFillStar/> POLY/BTC</td>
                        <td style={{color:"green"}}>0.0000125</td>
                        <td className="not-stonks">-2.58%</td>
                    </tr>
                    <tr className="active">
                        <td><AiFillStar/> CVC/BTC</td>
                        <td>0.0000078</td>
                        <td className="stonks">-2.58%</td>
                    </tr>
                    <tr className="active">
                        <td><AiFillStar/> HIVE/BTC</td>
                        <td>0.0000124</td>
                        <td className="not-stonks">-2.58%</td>
                    </tr>
                    <tr className="active">
                        <td><AiFillStar/> ARDR/BTC</td>
                        <td>0.0000968</td>
                        <td className="not-stonks">-2.58%</td>
                    </tr>
                    <tr className="active">
                        <td><AiFillStar/> FTM/BTC</td>
                        <td style={{color:"green"}}>0.0000037</td>
                        <td className="not-stonks">-2.58%</td>
                    </tr>
                    <tr className="active">
                        <td><AiFillStar/> STMX/BTC</td>
                        <td>0.0000101</td>
                        <td className="not-stonks">-2.58%</td>
                    </tr>
                    <tr className="active">
                        <td><AiFillStar/> TWT/BTC</td>
                        <td>0.0000857</td>
                        <td className="not-stonks">-2.58%</td>
                    </tr>
                    <tr className="active">
                        <td><AiFillStar/> POWR/BTC</td>
                        <td>0.0001001</td>
                        <td className="not-stonks">-2.58%</td>
                    </tr>
                    <tr className="active">
                        <td><AiFillStar/> IOST/BTC</td>
                        <td style={{color:"green"}}>0.0000002</td>
                        <td className="not-stonks">-2.58%</td>
                    </tr>
                    <tr className="active">
                        <td><AiFillStar/> AXS/BTC</td>
                        <td style={{color:"green"}}>0.0000107</td>
                        <td className="not-stonks">-2.58%</td>
                    </tr>
                    <tr className="active">
                        <td><AiFillStar/> STEEM/BTC</td>
                        <td style={{color:"green"}}>0.0000055</td>
                        <td className="not-stonks">-2.58%</td>
                    </tr>
                    <tr className="active">
                        <td><AiFillStar/> ETH/BTC</td>
                        <td style={{color:"green"}}>0.0000651</td>
                        <td className="not-stonks">-2.58%</td>
                    </tr>
            </table>
            <table className="piyasaIslemleri mt-3" style={{width : "100%", fontSize : "1.5rem"}}>
                <thead>
                    <tr>
                        <th style={{color:"yellow"}}>Piyasa Alım Satımları</th>
                        <th style={{float:"right", color:"gray"}}>Alım Satımlarım</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{color:"#fff"}}>Fiyat(USDT)</td>    
                        <td style={{color:"#fff"}}>Miktar(BTC)</td>  
                        <td style={{color:"#fff"}}>Saat</td>
                    </tr>
                    <tr>
                        <td style={{color:"red"}}>50.256.58</td>    
                        <td>0.24360</td>  
                        <td>15:55:16</td>
                    </tr>
                    <tr>
                        <td style={{color:"red"}}>50.256.58</td>    
                        <td>0.87821</td>  
                        <td>15:56:16</td>
                    </tr>
                    <tr>
                        <td style={{color:"green"}}>50.256.58</td>    
                        <td>0.2889960</td>  
                        <td>15:57:16</td>
                    </tr>
                    <tr>
                        <td style={{color:"green"}}>50.256.58</td>    
                        <td>0.77521</td>  
                        <td>15:58:16</td>
                    </tr>
                    <tr>
                        <td style={{color:"red"}}>50.256.58</td>    
                        <td>0.123456</td>  
                        <td>15:59:16</td>
                    </tr>
                </tbody>
            </table>

            <table style={{width : "100%", fontSize : "1.5rem"}} className="mt-3">
                <thead>
                    <tr>
                        <th style={{color:"gray"}}>Piyasa İşlemleri</th>
                        <th></th>
                        <th>
                        <i className="fas fa-chevron-up"></i>
                        </th>
                    </tr>
                </thead>
                <tbody>
                     <tr>
                        <td>BEAM/BTC</td>    
                        <td style={{color:"green"}}>+6.09%</td>  
                        <td>
                        <i className="fas fa-ellipsis-h" style={{color:"green"}}></i>
                        <i className="fas fa-chevron-up" style={{color:"green"}}></i>
                        <i className="fas fa-ellipsis-h" style={{color:"green"}}></i>
                        </td>
                    </tr>
                    <tr>
                        <td>BNBUP/USDT</td>    
                        <td style={{color:"green"}}>+6.33%</td>  
                        <td>
                        <i className="fas fa-ellipsis-h" style={{color:"green"}}></i>
                        <i className="fas fa-chevron-up" style={{color:"green"}}></i>
                        <i className="fas fa-ellipsis-h" style={{color:"green"}}></i>
                        </td>
                    </tr>
                </tbody>
            </table>
           </div>
    );
}
