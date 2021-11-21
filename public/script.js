const base_url = 'http://api.coinlayer.com/api/live';

const key = '2b495c3c9a0426bf1d87cbde8b0584fe';

let url = base_url + '?access_key=' + key

const retrieveCoinList = async () => {
    let res = await fetch(url)
    let data = await res.json()
    //console.log(data)
    appendData(data)
}

function appendData(data) {
    var mainContainer = document.getElementById("coin-results");
      var div = document.createElement("div");
      let items = JSON.stringify(data.rates)
      //console.log(items)
      var itemsSplit = items.split(',') //main
      //console.log(itemsSplit)
      function list(itemsSplit) {
          for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = itemsSplit[i];
        mainContainer.appendChild(div);
          }
      }
      list()
      div.innerHTML = itemsSplit
      mainContainer.appendChild(div);
  }

retrieveCoinList()

//firebase deployment

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6nRCmn3bSKjWr-JF9HZO-l4yyhk3ej9Q",
  authDomain: "eleven-fifty-api2.firebaseapp.com",
  projectId: "eleven-fifty-api2",
  storageBucket: "eleven-fifty-api2.appspot.com",
  messagingSenderId: "914763642337",
  appId: "1:914763642337:web:68c78e2b045894dac48ea0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);