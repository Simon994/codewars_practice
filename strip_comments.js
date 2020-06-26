
function solution(input, markers) {

   const singleStringStrip = (string) => {
      let markerFirstIndex = new RegExp (`[${markers.join('')}]`).exec(string);
      markerFirstIndex === null ? markerFirstIndex = string.length : markerFirstIndex = markerFirstIndex.index;
      return string.slice(0, markerFirstIndex).replace(/\s*$/,"");
   }
  
   return input.split("\n").map(singleStringStrip).join("\n");
};

solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]);


//first, split up string to array, based on new line chars 
let test = "apples, plums % and bananas\npears\noranges !applesauce"
let testArr = test.split('\n');



// 1) for any given string recognise the index of the first char that matches ANY marker char
let test2 = "apples, plums % and bananas";
   //need to recognise ANY marker, so using Regex:
   let test3 = "apples, plums % and ! bananas";
   let arrTest = ["%","!"];
   let regexpFromArr = new RegExp (`[${arrTest.join('')}]`);
   let result3 = regexpFromArr.exec(test3).index   
   //console.log(result3);

// 2) slice string from index recognised by regex exec match
   let slicedStr = test3.slice(0, result3);
   //console.log(slicedStr);

// 3) Strip out any WS at end of line  
   let endTrimmedSlicedStr = slicedStr.replace(/\s*$/,"")
   //console.log(endTrimmedSlicedStr);


//solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]);