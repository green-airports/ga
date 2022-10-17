let button = document.getElementById("btn");
button.addEventListener("click", () => {
  let arr = [];
  let result = document.getElementById("result");
  result.style.visibility = "visible";
  arr.push(document.getElementById("nor").value);
  arr.push(document.getElementById("yor").value);
  arr.push(document.getElementById("tor").value);
  arr.push(document.getElementById("am").value);
  arr.push(document.getElementById("pf").value);
  arr.push(document.getElementById("cf").value);
  arr.push(document.getElementById("pn").value);
  arr.push(document.getElementById("ct").value);
  arr.push(document.getElementById("eu").value);
  arr.push(document.getElementById("eupp").value);
  arr.push(document.getElementById("ess").value);
  arr.push(document.getElementById("wu").value);
  arr.push(document.getElementById("ws").value);
  arr.push(document.getElementById("wupp").value);
  arr.push(document.getElementById("wg").value);
  arr.push(document.getElementById("wr").value);
  arr.push(document.getElementById("swg").value);
  arr.push(document.getElementById("swpp").value);
  arr.push(document.getElementById("wrr").value);
  arr.push(document.getElementById("hwg").value);
  arr.push(document.getElementById("s1e").value);
  arr.push(document.getElementById("s2e").value);
  arr.push(document.getElementById("s12").value);
  arr.push(document.getElementById("s3").value);
  arr.push(document.getElementById("tge").value);
  arr.push(document.getElementById("ghg").value);
  arr.push(document.getElementById("cepp").value);

  //   Check all the conditions and display a section at the bottom
  //rule1
  if (
    arr[3] >39.3 &&
    arr[5] < 52.4 &&
    arr[7]<10.4 &&
    arr[8] <710 &&
    arr[19] < 695&&
    arr[21] >35.5 &&
    arr[21] <130.85 &&
    arr[22] >59 &&
    arr[22] <98

  ) {
    result.innerText = "Your airport's green performance is rated 0.5 out of 5 stars.";
    return;
  } 
  //rule2
  else if (
    arr[3] >39.3 &&
    arr[5] < 52.4 &&
    arr[7]>10.4 &&
    arr[8] >82.3 &&
    arr[8] < 710 &&
    arr[11] <113.5 &&
    arr[21] <130.85 &&
    arr[22] >59
  ) {
    result.innerText = "Your airport's green performance is rated 0.5 out of 5 stars.";
    return;
  } 
  //rule3
  else if (
    arr[3]  >141.3 &&
    arr[4] <190.5&&
    arr[5] > 30.5 &&
    arr[5] < 52.4 &&
    arr[7] <1.425&&
    arr[8] <6.96 &&
    arr[9] >2.35&&
    arr[10] >10.01&&
    arr[17] >0.171 &&
    arr[19] >695 &&
    arr[21] <130.85 &&
    arr[22] >59 &&
    arr[23] <226.26

  ) {
    result.innerText = "Your airport's green performance is rated 0.5 out of 5 stars.";
    return;
  }
 //rule4
  else if (
    arr[3]  >141.3 &&
    arr[3] < 201 &&
    arr[4] >190.5&&
    arr[5] > 30.5 &&
    arr[5] < 52.4 &&
    arr[7] <1.425&&
    arr[8] <710 &&
    arr[9] >2.35&&
    arr[17] >0.171 &&
    arr[19] >695 &&
    arr[19] < 1070 &&
    arr[21] <130.85 &&
    arr[22] >59 
    
  ) {
    result.innerText = "Your airport's green performance is rated 0.5 out of 5 stars.";
    return;
  }
  //rule5
  else if (
    arr[3] >39.3 &&
    arr[5] > 52.4 &&
    arr[18] >33.5 &&
    arr[21] <130.85 &&
    arr[22] >59 

    
  ) {
    result.innerText = "Your airport's green performance is rated 5 out of 5 stars.";
    return;
  }
  
//rule 6
  else if (
    arr[7] <1.715 &&
    arr[15] >2.4 &&
    arr[21] >130.85 &&
    arr[22] <207 

  ) {
    result.innerText = "Your airport's green performance is rated 5 out of 5 stars.";
    return;
  }
//rule 7
  else if (
   arr[5] <49.1&&
   arr[6] <110&&
   arr[7] >1.715 &&
   arr[12] >18 &&
   arr[21] >130.85

  ) {
    result.innerText = "Your airport's green performance is rated 5 out of 5 stars.";
    return;
  }
  
//rule 8
  else if (
    arr[5] >49.1&&
    arr[6] <110&&
    arr[7] >1.715 &&
    arr[12] >18 &&
    arr[14] > 2.06 &&
    arr[21] >130.85
  ) {
    result.innerText = "Your airport's green performance is rated 5 out of 5 stars.";
    return;
  }

  //rule 9
  else if (
    arr[3] > 39.3 &&
    arr[3] < 50 &&
    arr[8] > 43 &&
    arr[20] <6.5 &&
    arr[21] <130.85 &&
    arr[22] <59 &&
    arr[26] >1.15 
  ) {
    result.innerText = "Your airport's green performance is rated 5 out of 5 stars.";
    return;
  }
  //rule 10
  else if (
    arr[3] > 50 &&
    arr[4] <139 &&
    arr[8] > 43 &&
    arr[20] <6.5 &&
    arr[21] <130.85 &&
    arr[22] > 5.5 &&
    arr[22] < 59 &&
    arr[26] >1.15

  ) {
    result.innerText = "Your airport's green performance is rated 5 out of 5 stars.";
    return;
  }

  //rule11
  else if (
    arr[3] > 181 &&
    arr[5] <52.4 &&
    arr[8] > 730 &&
    arr[8] < 968.75 &&
    arr[9] > 9.7 &&
    arr[21] <130.85 &&
    arr[22] > 59 &&
    arr[26] >2.28 
  ) {
    result.innerText = "Your airport's green performance is rated 5 out of 5 stars.";
    return;
  }
//rule 12

else if (
  arr[3] > 39.3 &&
  arr[5] >30.5 &&
  arr[5] <52.4 &&
  arr[7] < 10.4 &&
  arr[8] <710 &&
  arr[9] >2.35 &&
  arr[12] >10 &&
  arr[16] >0.317 &&
  arr[19] >695 &&
  arr[21] <130.85 &&
  arr[22] > 59 

 
) {
  result.innerText = "Your airport's green performance is rated 5 out of 5 stars.";
  return;
}
//rule13
else if (
  arr[3] > 141.3 &&
  arr[5] < 30.5 &&
  arr[6] <102 &&
  arr[7] >1.425 &&
  arr[8] <710 &&
  arr[9] >2.35 &&
  arr[9] < 8.4 &&
  arr[19] >695 &&
  arr[21] <130.85 &&
  arr[22] > 59 

  ) {
  result.innerText = "Your airport's green performance is rated 5 out of 5 stars.";
  return;
}

//rule14
else if (
  arr[3] > 141.3 &&
  arr[4] < 190.5 &&
  arr[5] < 30.5 &&
  arr[7] <1.425 &&
  arr[8] <710 &&
  arr[8] > 6.96 &&
  arr[9] >2.35 &&
  arr[11] >2.22 &&
  arr[15] >765 &&
  arr[17] >0.171 &&
  arr[19] >1700 &&
  arr[21] <130.85 &&
  arr[22] > 59 &&
  arr[23] > 226.26 &&
  arr[23] < 750
  ) {
  result.innerText = "Your airport's green performance is rated 5 out of 5 stars.";
  return;
}

  else {
    result.innerText = "No label";
    return;
  }
});
