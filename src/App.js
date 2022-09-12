import logo from './logo.svg';
import './App.css'; 
//const puppeteer = require('puppeteer');
function hello(){
  alert('hey');
}
async function scrape(URL) {
  /*const browser = await puppeteer.launch({})
  const page = await browser.newPage();

  await page.goto(URL.value);
  var element = await page.waitForSelector("#user_history > div > div.scrolling-table > table > tbody");
  console.log(element);
  browser.close();*/
}
function App() {
  return (
    <div>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta>
        <title>Draft Yeilds</title>
        <link rel="stylesheet" href="css/style.css"></link>
        <script src="basis.js"> </script>
        <script src="node_modules/pupeteer/package.json"></script>
        <script>
          const req= 1;
          function print_request(){
            console.log(req)}
        </script>
       
        <h1>
            Please enter 17 lands url.
        </h1>
        <button onclick="print_request()">
        </button>
    </div>    
    
  );

};

export default App;
