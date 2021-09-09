//order_book
const status = {
    "event": 'bts:subscribe',
    "data": {
      "channel": 'order_book_btcusd'
    }
};

//live_order
const status2 = {
    "event": 'bts:subscribe',
    "data": {
        "channel": 'live_orders_btcusd'
    }
};

//Connect to bitstamp.net
const ws = new WebSocket("wss://ws.bitstamp.net");

// call orderBooks from bitstamp using websocket
  export const getOrderBooks = () => {
        ws.onopen(ws.send(JSON.stringify(status)))
            .onmessage((e) => {
                const response = JSON.parse(e.data);
        }); 
  }

 // call liveOrders from bitstamp using websocket
  export const getLiveOrders = () => {
        ws.onopen(ws.send(JSON.stringify(status2)))
            .onmessage((e) => {
                const response = JSON.parse(e.data);
            })
  }