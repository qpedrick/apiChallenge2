const base_url = 'http://api.coinlayer.com/api/live';

const key = '2b495c3c9a0426bf1d87cbde8b0584fe';

let url = base_url + '?access_key=' + key

const retrieveCoinList = async () => {
    let res = await fetch(url)
    let data = await res.json()
    console.log(data)
    appendData(data)
}

// function appendData(data) {
//     var mainContainer = document.getElementById("coin-results");
//       var div = document.createElement("div");
//       let items = JSON.stringify(data.rates)
//       //console.log(items)
//       var itemsSplit = items.split(',') //main
//       //console.log(itemsSplit)
//       function list(itemsSplit) {
//           for (var i = 0; i < data.length; i++) {
//         var div = document.createElement("div");
//         div.innerHTML = itemsSplit[i];
//         mainContainer.appendChild(div);
//           }
//       }
//       list()
//       div.innerHTML = itemsSplit
//       mainContainer.appendChild(div);
//   }

  function appendData(data) {
      var div1 = document.getElementById("bitcoin");
      let bitcoin = data.rates.BTC
      var div2 = document.getElementById('ethereum');
      let ethereum = data.rates.ETH
      var div3 = document.getElementById('doge');
      let doge = data.rates.DOGE
      div1.innerHTML = bitcoin.toLocaleString('us-US', {style: 'currency', currency: 'USD'})
      div2.innerHTML = ethereum.toLocaleString('us-US', {style: 'currency', currency: 'USD'})
      div3.innerHTML = doge.toLocaleString('us-US', {style: 'currency', currency: 'USD'})
  }

retrieveCoinList()

function displayResults(json) {
  const result1 = document.getElementById('results1')
  result1.innerHTML = json.Global.TotalConfirmed
  const result2 = document.getElementById('results2')
  result2.innerHTML = json.Global.TotalDeaths
}

  document.getElementById('results').addEventListener('click',() =>
  document.createElement('results'))

//firebase deployment

// Your web app's Firebase configuration
/*const firebaseConfig = {
  apiKey: "AIzaSyA6nRCmn3bSKjWr-JF9HZO-l4yyhk3ej9Q",
  authDomain: "eleven-fifty-api2.firebaseapp.com",
  projectId: "eleven-fifty-api2",
  storageBucket: "eleven-fifty-api2.appspot.com",
  messagingSenderId: "914763642337",
  appId: "1:914763642337:web:68c78e2b045894dac48ea0"
};*/

// Initialize Firebase
//const app = initializeApp(firebaseConfig);