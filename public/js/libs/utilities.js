var Utilities = (function(doc){

  'use strict';

  var getCanvasContext = function(canvasID) {
    return doc.getElementById(canvasID).getContext('2d');
  }

  var unique = function(array1,array2) {
    var
      output = [],
      index  = 0,
      len1   = array1.length,
      len2   = array2.length;

    while ( true ) {
      if ( index > len1 && index > len2 ) break;

      if ( array1[index] ) {
        if ( output.indexOf(array1[index]) === -1 ) {
          output.push(array1[index]);
        }
      }

      if ( array2[index] ) {
        if ( output.indexOf(array2[index]) === -1 ) {
          output.push(array2[index]);
        }
      }

      index++;
    }

    return output;
  }

  var map = function(array,fn) {
    var
      output = [],
      len    = array.length,
      i      = 0;

    for ( ; i < len ; i++ ) {
      output[i] = fn(array[i],i,array);
    }

    return output;
  }

  var find = function(array,fn) {
    for ( var i = 0 , len = array.length ; i < len ; i++ ) {
      var result = fn(array[i],i);

      if ( result ) {
        return array[i];
      }
    }
  }

  var findIndex = function(array,fn) {
    for ( var i = 0 , len = array.length ; i < len ; i++ ) {
      var result = fn(array[i],i);

      if ( result ) {
        return i;
      }
    }

    return -1;
  }

  var keys = function(obj) {
    var output = [];

    for ( var key in obj ) {
      if (obj.hasOwnProperty(key)) {
        output.push(key);
      }
    }

    return output;
  }

  var makeChart = function(ctx,opts) {
    /*
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    } */

    return new Chart(ctx,{
      type:opts.type,
      data: {
        labels:opts.labels,
        datasets:[{
          label:opts.label,
          data:opts.datasets,
          backgroundColor: [
             'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
    });
  }
  
  return {
    getCanvasContext:getCanvasContext,
    makeChart:makeChart,
    map:map,
    keys:keys,
    find:find,
    findIndex:findIndex,
    unique:unique
  };

}(document));