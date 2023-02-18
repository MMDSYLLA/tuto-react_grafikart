//====== indicateur simple de température d'ébullition de l'eau=====
// ======correspond à app7_1.js=======
function BoilingVerdict({celcius}) {
        if(celcius>=100) {
          return <div className="alert alert-success"> L'eau bout </div>
        }
       return <div className=" alert alert-info"> L'eau ne bout pas</div>
      }

       ReactDOM.render(<BoilingVerdict celcius={90}/>, document.getElementById('app'))