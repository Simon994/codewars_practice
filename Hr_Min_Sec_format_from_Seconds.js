
//takes in seconds, returns time in 'Hr:Min:Sec' format
function humanReadable(seconds) {

    let hr = Math.floor(seconds/3600)
    , carry =  seconds % 3600
    , min = Math.floor(carry/60)
    , sec = carry % 60; 
    
    
        function pad(num){
            let numStr = num.toString();
            while(numStr.length<2){
                    numStr = '0'+ numStr;
                }
            return (numStr);
            };
  
    return(`${pad(hr)}:${pad(min)}:${pad(sec)}`);
  }
