/**
 * Created by gmarler on 9/2/15.
 */

var going_up = 1;

var cpu_data = [
  [0]
];

var colorScale = d3.scale.linear()
  .domain([0,1,59,60,89,90,99,100])
  .range(["gray","lime","lime","yellow","yellow","red","red","fuchsia"]);

var tr = d3.select("table tbody").selectAll("tr")
  .data(cpu_data)
  .enter().append("tr");

var td = tr.selectAll("td")
          .data(function(d, i) { console.log("d: " + d);
                                 console.log("i: " + i);
                                 return d; }) // d is cpu_data[i]
         .enter().append("td")
  .style("background-color", function(d) { return colorScale(d); })
  .html(function(d) { return d; });


function change_util() {

  var tr = d3.select("table tbody").selectAll("tr")
    .data(cpu_data);

  var td = tr.selectAll("td")
    .data(function(d, i) { return d; }) // d is cpu_data[i]
    .style("background-color", function(d) { return colorScale(d); })
    .html(function(d) { return d; });

  if ((cpu_data[0][0] >= 0) && (cpu_data[0][0] <= 99) && (going_up == 1)) {
    cpu_data[0][0]++;
  }

  if ((cpu_data[0][0] >= 1) && (cpu_data[0][0] <= 100) && (going_up == 0)) {
    cpu_data[0][0]--;
  }

  if ((cpu_data[0][0] == 0) && (going_up == 0)) {
    going_up = 1;
  }

  if ((cpu_data[0][0] == 100) && (going_up == 1)) {
    going_up = 0;
  }

  // console.log(cpu_data[0][0]);

}

setInterval(change_util, 100);