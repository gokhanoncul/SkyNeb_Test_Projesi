import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Row,Col} from "react-bootstrap";
import OrderBook from "./components/OrderBook";
import LiveOrder from "./components/LiveOrder";
import LiveTrade from "./components/LiveTrade";
import { getOrderBooks } from './BitstampWebSocket/api';
import { getLiveOrders } from './BitstampWebSocket/api';
import { useDispatch } from "react-redux";
import { useEffect } from 'react';


function App() {

  // it's for the redux-store.
  // const dispatch = useDispatch();


  // to pull api's from bitstamp.net 
  // useEffect(() => {
  //   getOrderBooks()
  //   getLiveOrders()
  // },[]);

  return (
    <div className="App">
      <Row>
        <Col lg={2} >
          <LiveOrder />
        </Col>

        <Col lg={7} className="p-0">
          <div classNames="w-100 bg-success" style ={{height :"50vh"}}>
            <div className= "tradingview-widget-container">
                <div id="tradingview_5aad3"></div>
            </div>
            <LiveTrade/>
          </div>
         
        </Col>   

        <Col lg={3}>
          <OrderBook />  
        </Col> 
      </Row>
    </div>
  );
}

export default App;


