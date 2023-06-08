"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';



import lengthOfLongestSubstring from './lengthOfLongestSubstring';
export default function Page() {
  const [message, setMessage] = useState('Initial value');
  let [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  let dataString = "daraasd";
  

  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      first: event.target.first.value,
      last: event.target.last.value,
    };

    
  };

  //let answer = 0, left = 0, right = 0;
  const  algo = function(s) {
    let ans = 0, l = 0, r = 0,ans1=0;
    let n = s.length;
    let map = new Array(256).fill(-1);
    // console.log(map);
    while (r < n) {
      //delay(r,l);
     let r1 = r;
     var l1 = l;
    //  React.useEffect(() => {

      //  setTimeout(() => {
         
        // console.log("l>>",l);
        // console.log("s.charCodeAt(r)>>",s.charCodeAt(r));
        if (map[s.charCodeAt(r1)] != -1) {
            l1 = Math.max(map[s.charCodeAt(r1)] + 1, l);
            // console.log(">>insde the if l>>",l);
        }
        map[s.charCodeAt(r1)] = r1;
        ans = Math.max(ans, r1 - l1 + 1);
        
        // left = l;
        // right = r;
        // console.log("left>>",left);
        // console.log("right>>",right);
        if(ans1 === 0){

        
        useEffect(() => {
          let myInterval = setInterval(() => {
            console.log("r1>>",r1);
            //setLeft(l1);
            setRight(r1);
            if(r1 >= 6){
              ans1 = 6;
              clearInterval(myInterval);
            }
          }, 1000)
          return ()=> {
              clearInterval(myInterval);
            };
          });
        }
       // setLeft(l1);
        
       
      //  }, 5000);
      // }, 0);
      r++;
    }
    return ans;
};

const timeout = (ms) => {
  console.log(right);
  return new Promise(resolve => setTimeout(resolve, ms));
}
// const  delay = (r,l)=> {
//   setTimeout(() => {
//     left = l;
//     right = r;
//     console.log(l,r);
//     console.log(left,right);
//      this.setRight(right);
//     // this.setLeft(left);

    
//   }, 1000);
// }
let count = algo(dataString);
console.log("final left>>",left);
        console.log(" final right>>",right);
  const handleChange = event => {
    setMessage(event.target.value);
  };


  return (
    <div>
      <h2>{dataString}</h2>
      <h2>{count}</h2>
      <h2>{left}</h2>
      <h2>{right}</h2>
      <h2>{message}</h2>
      
wew     
        <label htmlFor="dataString">First Name</label>
        <input type="text" id="dataString" name="dataString" required  onChange={handleChange}
        value={left}
/>

        <br />

        <button type="submit">Submit</button>

    </div>
  );
}
