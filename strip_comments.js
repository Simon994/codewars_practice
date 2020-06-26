
function solution(input, markers) {

   const singleStringStrip = (string) => {
      let markerFirstIndex = new RegExp (`[${markers.join('')}]`).exec(string);
      markerFirstIndex === null ? markerFirstIndex = string.length : markerFirstIndex = markerFirstIndex.index;
      return string.slice(0, markerFirstIndex).replace(/\s*$/,"");
   }
  
   return input.split("\n").map(singleStringStrip).join("\n");
};

solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]);