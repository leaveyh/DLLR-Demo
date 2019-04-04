
var togNum = 1;
var togNum1 = 1;
    d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vSYGyb5ZuboimWwbEHuGueIRIC3MF-JnriyRzfPMfCJxJkDfJ_ikrO_8WG-OAXRYa2cam-F-rp1De6F/pub?gid=1487184230&single=true&output=csv", function (data) {
        
        //chart 0
        
        var svg0 = dimple.newSvg("#Chart0", "100%", 400);
        var svg1 = dimple.newSvg("#Chart2", "100%", 400);
        var svg3 = dimple.newSvg("#Chart3", "100%", 400);
        var svg4 = dimple.newSvg("#Chart4", "100%", 400);
        var svg5 = dimple.newSvg("#ChartFive", "100%", 400);
        var svg8 = dimple.newSvg("#Chart8", "100%", 400);
        var svg9 = dimple.newSvg("#Chart9", "100%", 400);    
        var svg7 = dimple.newSvg("#Chart7", "100%", 400);
        var svg10 = dimple.newSvg("#Chart10", "100%", 400);
        var svg11 = dimple.newSvg("#Chart11", "100%", 400);   
        var svg12 = dimple.newSvg("#Chart12", "100%", 400);
        var svg13 = dimple.newSvg("#Chart13", "100%", 400);
        var svg14 = dimple.newSvg("#Chart14", "100%", 400); 
        var svg15 = dimple.newSvg("#Chart15", "100%", 450);
        var svg71 = dimple.newSvg("#Chart17", "100%", 400);
        var svg81 = dimple.newSvg("#Chart18", "100%", 400);
        var svg91 = dimple.newSvg("#Chart19", "100%", 400);
        
        var print0 = dimple.newSvg("#Print0", 750, 400);
        var print1 = dimple.newSvg("#Print2", 750, 400);
        var print3 = dimple.newSvg("#Print3", 750, 400);
        var print4 = dimple.newSvg("#Print4", 750, 400);
        var print5 = dimple.newSvg("#PrintFive", 750, 400);
        var print8 = dimple.newSvg("#Print8", 750, 400);
        var print9 = dimple.newSvg("#Print9", 750, 400);    
        var print7 = dimple.newSvg("#Print7", 750, 400);
        var print10 = dimple.newSvg("#Print10", 750, 400);
        var print11 = dimple.newSvg("#Print11", 750, 400);   
        var print12 = dimple.newSvg("#Print12", 750, 400);
        var print13 = dimple.newSvg("#Print13", 750, 400);
        var print14 = dimple.newSvg("#Print14", 750, 400); 
        var print15 = dimple.newSvg("#Print15", 750, 450);
        var print71 = dimple.newSvg("#Print17", 750, 400);
        var print81 = dimple.newSvg("#Print18", 750, 400);
        var print91 = dimple.newSvg("#Print19", 750, 400);
        
        pData = dimple.filterData(dimple.filterData(dimple.filterData(data, "Time", ["2016","2017"]), "Indicator", "Total Population"), "Location", CountyName2);
        
        wData = dimple.filterData(dimple.filterData(dimple.filterData(data, "Time", ["2016","2017"]), "Indicator", "Median Household Income"), "Location", CountyName2);
        
        
        var chart0 = new dimple.chart(svg0, pData);
                        chart0.setBounds("11%", "12%", "35%", "65%")
                        var x0 = chart0.addCategoryAxis("x", "Time");
                         var y0 = chart0.addMeasureAxis("y", "Amount");
                        
                        y0.tickFormat = ',f';
                       var s0 = chart0.addSeries("Indicator", dimple.plot.bar);
                        s0.lineMarkers = true;
                        x0.addOrderRule(["2007-2011", "2012-2016"]);
                        chart0.draw();
                        y0.title = "Total Population";
        
        
        
        
        var chart01 = new dimple.chart(svg0, wData);
                            chart01.setBounds("56%", "12%", "35%", "65%")
                          var x01 = chart01.addCategoryAxis("x", "Time");
                            var pY = chart01.addMeasureAxis("y", "Amount");
                           var s01 = chart01.addSeries("Indicator", dimple.plot.bar);
               //            var ethLegend = chart5.addLegend("86%", "70%", "26%", "10%", "right");
        
                            s01.lineMarkers = true;
                            x01.addOrderRule(["2007-2011", "2012-2016"]);
                            pY.tickFormat = '$,f';
                            pY.title = "Median Household Income"
                            chart01.draw();
        
        var pchart0 = new dimple.chart(print0, pData);
                        pchart0.setBounds("15%", "12%", "35%", 300)
                        var px0 = pchart0.addCategoryAxis("x", "Time");
                         var py0 = pchart0.addMeasureAxis("y", "Amount");
                        
                        py0.tickFormat = ',f';
                       var ps0 = pchart0.addSeries("Indicator", dimple.plot.bar);
                        ps0.lineMarkers = true;
                        px0.addOrderRule(["2007-2011", "2012-2016"]);
                        pchart0.draw();
                        py0.title = "Total Population";
        
        
        
        
        var pchart01 = new dimple.chart(print0, wData);
                            pchart01.setBounds("65%", "12%", "35%", 300)
                          var px01 = pchart01.addCategoryAxis("x", "Time");
                            var ppY = pchart01.addMeasureAxis("y", "Amount");
                           var ps01 = pchart01.addSeries("Indicator", dimple.plot.bar);
               //            var ethLegend = chart5.addLegend("86%", "70%", "26%", "10%", "right");
        
                            ps01.lineMarkers = true;
                            px01.addOrderRule(["2007-2011", "2012-2016"]);
                            ppY.tickFormat = '$,f';
                            ppY.title = "Median Household Income"
                            pchart01.draw();
        
        
        
        /*svg0.append("text")
                       .attr("x", (chart0._xPixels() + chart0._widthPixels() / 2)-200)
                       .attr("y", chart0._yPixels() - 20)
                       .style("text-anchor", "left")
                       .style("font-family", "sans-serif")
                       .style("font-size", "15px")
                       .text("Population")
        
        svg0.append("text")
                       .attr("x", (chart01._xPixels() + chart01._widthPixels() / 2)-200)
                       .attr("y", chart01._yPixels() - 20)
                       .style("text-anchor", "left")
                       .style("font-family", "sans-serif")
                        .style("font-size", "15px")
                       .text("Median Household Income")*/
        
        //chart 1
                    
             //       var County = "Allegany County, MD";
                    
             //       dataCounty = dimple.filterData(data, "Location", County);
        
                    Allegany = dimple.filterData(data, "Location", CountyName1);
        
                 /**   MonthYears = dimple.filterData(Allegany, "Time", ["Jan\n2014", "Feb\n2014", "Mar\n2014", "Apr\n2014", "May\n2014", "Jun\n2014", "Jul\n2014", "Aug\n2014", "Sep\n2014", "Oct\n2014", "Nov\n2014", "Dec\n2014", "Jan\n2016", "Feb\n2016", "Mar\n2016", "Apr\n2016", "May\n2016", "Jun\n2016", "Jul\n2016", "Aug\n2016", "Sep\n2016", "Oct\n2016", "Nov\n2016", "Dec\n2016"]);
                 
                 **/
        
                MonthYears = dimple.filterData(Allegany, "Time", ["Jan\n2015", "Feb\n2015", "Mar\n2015", "Apr\n2015", "May\n2015", "Jun\n2015", "Jul\n2015", "Aug\n2015", "Sep\n2015", "Oct\n2015", "Nov\n2015", "Dec\n2015", "Jan\n2016", "Feb\n2016", "Mar\n2016", "Apr\n2016", "May\n2016", "Jun\n2016", "Jul\n2016", "Aug\n2016", "Sep\n2016", "Oct\n2016", "Nov\n2016", "Dec\n2016", "Jan\n2017", "Feb\n2017", "Mar\n2017", "Apr\n2017", "May\n2017", "Jun\n2017", "Jul\n2017", "Aug\n2017", "Sep\n2017", "Oct\n2017", "Nov\n2017", "Dec\n2017"]);
        
        //2014-2015
        
                    LaborForce = dimple.filterData(MonthYears, "Indicator Value", "Labor Force");
        
                    
        
                    Employed = dimple.filterData(MonthYears, "Indicator Value", "Employed");
        
                    Unemployed = dimple.filterData(MonthYears, "Indicator Value", "Unemployed");
        
                    UnemployRate = dimple.filterData(MonthYears, "Indicator Value", "Unemployment Rate");
        
                    
                    
        
        //2014
                    
                    MonthYears2014 = dimple.filterData(Allegany, "Time", ["Jan\n2015", "Feb\n2015", "Mar\n2015", "Apr\n2015", "May\n2015", "Jun\n2015", "Jul\n2015", "Aug\n2015", "Sep\n2015", "Oct\n2015", "Nov\n2015", "Dec\n2015"]);
        
                    LaborForce2014 = dimple.filterData(MonthYears2014, "Indicator Value", "Labor Force");
        
                    Employed2014 = dimple.filterData(MonthYears2014, "Indicator Value", "Employed");
        
                    Unemployed2014 = dimple.filterData(MonthYears2014, "Indicator Value", "Unemployed");
        
                    UnemployRate2014 = dimple.filterData(MonthYears2014, "Indicator Value", "Unemployment Rate");
        
        
        //2015
                    MonthYears2015 = dimple.filterData(Allegany, "Time", ["Jan\n2016", "Feb\n2016", "Mar\n2016", "Apr\n2016", "May\n2016", "Jun\n2016", "Jul\n2016", "Aug\n2016", "Sep\n2016", "Oct\n2016", "Nov\n2016", "Dec\n2016"]);
        
                    LaborForce2015 = dimple.filterData(MonthYears2015, "Indicator Value", "Labor Force");
        
                    Employed2015 = dimple.filterData(MonthYears2015, "Indicator Value", "Employed");
        
                    Unemployed2015 = dimple.filterData(MonthYears2015, "Indicator Value", "Unemployed");
        
                    UnemployRate2015 = dimple.filterData(MonthYears2015, "Indicator Value", "Unemployment Rate");
        
        //2016
        
                    MonthYears2016 = dimple.filterData(Allegany, "Time", ["Jan\n2017", "Feb\n2017", "Mar\n2017", "Apr\n2017", "May\n2017", "Jun\n2017", "Jul\n2017", "Aug\n2017", "Sep\n2017", "Oct\n2017", "Nov\n2017", "Dec\n2017"]);
        
                    LaborForce2016 = dimple.filterData(MonthYears2016, "Indicator Value", "Labor Force");
        
                    Employed2016 = dimple.filterData(MonthYears2016, "Indicator Value", "Employed");
        
                    Unemployed2016 = dimple.filterData(MonthYears2016, "Indicator Value", "Unemployed");
        
                    UnemployRate2016 = dimple.filterData(MonthYears2016, "Indicator Value", "Unemployment Rate");
        
        
                    
                    

                    
        
                       
        
         //end chart 1           
        
        //Chart 2 
        
        
                            
                            
                            years = dimple.filterData(data, "Time", ["2013", "2014", "2015"]);
                            longTermLocation = dimple.filterData(years, "Indicator", "Long Term Unemployed");
                            
                            
                            var chart1 = new dimple.chart(svg1, longTermLocation);
                            chart1.setBounds("9%", "12%", "85%", "70%")
                            var x1 = chart1.addCategoryAxis("x", ["Time", "Location"]);
                            var y1 = chart1.addMeasureAxis("y", "Amount");
                            
                        
                           var lines2 = chart1.addSeries("Location", dimple.plot.line);
        
                            lines2.aggregate = dimple.aggregateMethod.min;
        
                           y1.tickFormat = ',f'; 
                            y1.title = "Totals";
                            x1.title = " ";
                           
                            lines2.lineMarkers = true;
                            chart1.addLegend("20%", "1%", "50%", "50%", "right");
                            chart1.draw();
        
                            var pchart1 = new dimple.chart(print1, longTermLocation);
                            pchart1.setBounds("9%", "12%", "85%", 300)
                            var px1 = pchart1.addCategoryAxis("x", ["Time", "Location"]);
                            var py1 = pchart1.addMeasureAxis("y", "Amount");
                            
                        
                           var plines2 = pchart1.addSeries("Location", dimple.plot.line);
        
                            plines2.aggregate = dimple.aggregateMethod.min;
        
                           py1.tickFormat = ',f'; 
                            py1.title = "Totals";
                            px1.title = " ";
                           
                            plines2.lineMarkers = true;
                            pchart1.addLegend("20%", "1%", "50%", "50%", "right");
                            pchart1.draw();
        
        
                  //chart 2 end
        
                //chart 3 
                
               
                            
            /**                EduAttainment = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator Value", ["Less than high school graduate", "High school graduate (includes equivalency)", "Some college or associate's degree", "Bachelor's degree or higher"]), "Location", CountyName2), "Employment Status", ["Unemployed", "Not in Labor Force", "Employed"]);
                            
                            
                            
        
                            var chart2 = new dimple.chart(svg3, EduAttainment);
                            chart2.setBounds("7%", 65, "40%", 500)
                            var edX = chart2.addCategoryAxis("x", ["Time", "Employment Status"]);
                            var eduY = chart2.addMeasureAxis("y", "Amount");
                            chart2.addSeries("Indicator Value", dimple.plot.bar);
                            edX.addOrderRule(["Less than high school graduate", "High school graduate (includes equivalency)", "Some college or associate's degree", "Bachelor's degree or higher"]);
                      var edLegend = chart2.addLegend("0%", "83%", "50%", "70%", "right");
                            chart2.draw();
                            
                            eduY.tickFormat = ',1f';
                            
               **/
               
               genderRate = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Time", "2017"), "Indicator Status", ["Male", "Female"]), "Location", CountyName2), "Indicator", "Unemployment By Gender")
                            
                            genderRate1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Time", "2016"), "Indicator Status", ["Male", "Female"]), "Location", CountyName2), "Indicator", "Unemployment By Gender");
        
                            var chart3 = new dimple.chart(svg3, genderRate);
                            chart3.setBounds("9%", "12%", "80%", "65%")
                            var ggx = chart3.addCategoryAxis("x", "Indicator Status");
                            var genY = chart3.addMeasureAxis("y", "Unemployment Rate");
                           // genY.overrideMax = .30;
                            chart3.addSeries("Indicator Status", dimple.plot.bar);
                           // var genLegend = chart3.addLegend("38%", "10%", "50%", "70%", "right");
                            genY.tickFormat = '.1%';
                            chart3.assignColor("Male", "#3366ff","black", 0.7);
                            chart3.assignColor("Female", "pink","black", 0.7);
                            ggx.title = "Gender";
                            chart3.draw();
        
                            var pchart3 = new dimple.chart(print3, genderRate);
                            pchart3.setBounds("9%", "12%", "80%", 300)
                            var pggx = pchart3.addCategoryAxis("x", "Indicator Status");
                            var pgenY = pchart3.addMeasureAxis("y", "Unemployment Rate");
                           // genY.overrideMax = .30;
                            pchart3.addSeries("Indicator Status", dimple.plot.bar);
                           // var genLegend = chart3.addLegend("38%", "10%", "50%", "70%", "right");
                            pgenY.tickFormat = '.1%';
                            pchart3.assignColor("Male", "#3366ff","black", 0.7);
                            pchart3.assignColor("Female", "pink","black", 0.7);
                            pggx.title = "Gender";
                            pchart3.draw();
        
                            
        
                            

        
        
     /**   svg3.append("text")
                       .attr("x", (chart2._xPixels() + chart2._widthPixels() / 2)-200)
                       .attr("y", chart2._yPixels() - 20)
                       .style("text-anchor", "left")
                       .style("font-family", "sans-serif")
                       .text("Educational Attainment") **/
        
       /* svg3.append("text")  
                       .attr("x", (chart3._xPixels() + chart3._widthPixels() / 2)-100)
                       .attr("y", chart3._yPixels() - 20)
                       .style("text-anchor", "left")
                       .style("font-family", "sans-serif")
                       .style("font-size", "15px")
                       .text("Gender")*/
        
                //chart 3 end
        
                //chart 4
                            raceData = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Time", "2017"), "Indicator", "Unemployment By Race"), "Location", CountyName2), "Indicator Status", [ "White", "Black", "Asian", "Hispanic"]);
        
                            raceData1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Time", "2016"), "Indicator", "Unemployment By Race"), "Location", CountyName2), "Indicator Status", [ "White", "Black", "Asian", "Hispanic"]);
        
        
                            
                            var chart4 = new dimple.chart(svg4, raceData);
                            chart4.setBounds("11%", "12%", "35%", "65%")
                            var raceX = chart4.addCategoryAxis("x", "Indicator Status");
                            var raceY = chart4.addMeasureAxis("y", "Unemployment Rate");
                            //raceY.overrideMax = .50;
                            chart4.addSeries("Indicator Status", dimple.plot.bar);
                     //       var raceLegend = chart4.addLegend("0%", "70%", "47%", "70%", "right");
        
                            raceY.tickFormat = '.1%';
                            raceX.title = " ";
                            raceX.addOrderRule(["White", "Black", "Asian", "Hispanic"]);
        
                            chart4.assignColor("White", "#99ccff","black", 0.7);
                            chart4.assignColor("Black", "#ff8566","black", 0.7);
                            chart4.assignColor("Asian", "#4dffa6","black", 0.7);
                            chart4.assignColor("Hispanic", "#a366ff","black", 0.7);
                            chart4.draw();
        
                            var pchart4 = new dimple.chart(print4, raceData);
                            pchart4.setBounds("11%", "12%", "35%", 250)
                            var praceX = pchart4.addCategoryAxis("x", "Indicator Status");
                            var praceY = pchart4.addMeasureAxis("y", "Unemployment Rate");
                            //raceY.overrideMax = .50;
                            pchart4.addSeries("Indicator Status", dimple.plot.bar);
                     //       var raceLegend = chart4.addLegend("0%", "70%", "47%", "70%", "right");
        
                            praceY.tickFormat = '.1%';
                            praceX.title = " ";
                            praceX.addOrderRule(["White", "Black", "Asian", "Hispanic"]);
        
                            pchart4.assignColor("White", "#99ccff","black", 0.7);
                            pchart4.assignColor("Black", "#ff8566","black", 0.7);
                            pchart4.assignColor("Asian", "#4dffa6","black", 0.7);
                            pchart4.assignColor("Hispanic", "#a366ff","black", 0.7);
                            pchart4.draw();
                            
                            
                            ethData = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Time", "2017"), "Indicator", "Unemployment By Race"), "Location", CountyName2), "Indicator Status", ["White", "Hispanic"]);
        
        
                            ethData1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Time", "2016"), "Indicator", "Unemployment By Race"), "Location", CountyName2), "Indicator Status", ["White", "Hispanic"]);
        
                            var chart5 = new dimple.chart(svg4, ethData);
                            chart5.setBounds("56%", "12%", "35%", "65%")
                            var ethX = chart5.addCategoryAxis("x", "Indicator Status")
                            var ethY = chart5.addMeasureAxis("y", "Unemployment Rate"); 
                            //ethY.overrideMax = .30;
                            chart5.addSeries("Indicator Status", dimple.plot.bar);
               //            var ethLegend = chart5.addLegend("86%", "70%", "26%", "10%", "right");
        
                            ethY.tickFormat = '.1%';
                            ethX.title = " ";
                            ethX.addOrderRule(["White", "Hispanic"]);
                            chart5.assignColor("White", "#99ccff","black", 0.7);
                            chart5.assignColor("Hispanic", "#a366ff","black", 0.7);
                            chart5.draw();
        
                            var pchart5 = new dimple.chart(print4, ethData);
                            pchart5.setBounds("56%", "12%", "35%", 300)
                            var pethX = pchart5.addCategoryAxis("x", "Indicator Status")
                            var pethY = pchart5.addMeasureAxis("y", "Unemployment Rate"); 
                            //ethY.overrideMax = .30;
                           pchart5.addSeries("Indicator Status", dimple.plot.bar);
               //            var ethLegend = chart5.addLegend("86%", "70%", "26%", "10%", "right");
        
                            pethY.tickFormat = '.1%';
                            pethX.title = " ";
                            pethX.addOrderRule(["White", "Hispanic"]);
                            pchart5.assignColor("White", "#99ccff","black", 0.7);
                            pchart5.assignColor("Hispanic", "#a366ff","black", 0.7);
                            pchart5.draw();
        
       /* svg4.append("text")
                       .attr("x", (chart4._xPixels() + chart4._widthPixels() / 2)-200)
                       .attr("y", chart4._yPixels() - 20)
                       .style("text-anchor", "left")
                       .style("font-family", "sans-serif")
                       .style("font-size", "15px")
                       .text("Race")
        
        svg4.append("text")  
                       .attr("x", (chart5._xPixels() + chart5._widthPixels() / 2)-200)
                       .attr("y", chart5._yPixels() - 20)
                       .style("text-anchor", "left")
                       .style("font-family", "sans-serif")
                       .style("font-size", "15px")
                       .text("Ethnicity")*/
        
                //chart 4 end
        
        //chart 5
        
                    
                            
                            vetData = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Unemployment By Veteran Status"), "Location", CountyName2), "Time", "2017");
        
        
                            vetData1 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Unemployment By Veteran Status"), "Location", CountyName2), "Time", "2016");
        
                            var chart7 = new dimple.chart(svg5, vetData);
                            chart7.setBounds("9%", "12%", "80%", "65%")
                            var vetX = chart7.addCategoryAxis("x", "Indicator Status")
                            var vetY = chart7.addMeasureAxis("y", "Unemployment Rate");
                           // vetY.overrideMax = .30;
                            chart7.addSeries("Indicator Status", dimple.plot.bar);
                            vetY.tickFormat = '.1%';
                            vetX.title = " ";
                            chart7.assignColor("Veteran", "#248f24","black", 0.7);
                            chart7.assignColor("Non Veteran", "#33cccc","black", 0.7);
                            vetX.addOrderRule(["Veteran", "Non Veteran"]);
                       //     var vetLegend = chart7.addLegend("16%", "90%", "50%", "70%", "right");
                            chart7.draw();
        
                            var pchart7 = new dimple.chart(print5, vetData);
                            pchart7.setBounds("9%", "12%", "80%", 300)
                            var pvetX = pchart7.addCategoryAxis("x", "Indicator Status")
                            var pvetY = pchart7.addMeasureAxis("y", "Unemployment Rate");
                           // vetY.overrideMax = .30;
                            pchart7.addSeries("Indicator Status", dimple.plot.bar);
                            pvetY.tickFormat = '.1%';
                            pvetX.title = " ";
                            pchart7.assignColor("Veteran", "#248f24","black", 0.7);
                            pchart7.assignColor("Non Veteran", "#33cccc","black", 0.7);
                            pvetX.addOrderRule(["Veteran", "Non Veteran"]);
                       //     var vetLegend = chart7.addLegend("16%", "90%", "50%", "70%", "right");
                            pchart7.draw();
                            
                            
                            
        
        /*svg5.append("text")  
                       .attr("x", (chart7._xPixels() + chart7._widthPixels() / 2)-200)
                       .attr("y", chart7._yPixels() - 20)
                       .style("text-anchor", "left")
                       .style("font-family", "sans-serif")
                       .style("font-size", "15px")
                       .text("Veteran Status")*/
        
        
 d3.select("#btn3").on("change", function() {
  
  
	var e3 = document.getElementById("btn3");
  var strUser3 = e3.options[e3.selectedIndex].text;
  
   if(strUser3 == "2017"){
        chart3.data = genderRate;
        chart4.data = raceData;
        chart5.data = ethData;
        chart7.data = vetData;
        
   }
        
    if(strUser3 == "2016"){
        chart3.data = genderRate1;
        chart4.data = raceData1;
        chart5.data = ethData1;
        chart7.data = vetData1;
    }
     
     pchart3.data = chart3.data;
     pchart4.data = chart4.data;
     pchart5.data = chart5.data;
     pchart7.data = chart7.data;
     
     pchart3.draw(1000);
     pchart4.draw(1000);
     pchart5.draw(1000);
     pchart7.draw(1000);
         
     
     chart3.draw(1000);
     chart4.draw(1000);
     chart5.draw(1000);
     chart7.draw(1000);
     
 });
        
d3.select("#btn31").on("change", function() {
  
  
	var e3 = document.getElementById("btn31");
  var strUser3 = e3.options[e3.selectedIndex].text;
  
   if(strUser3 == "2017"){
        chart3.data = genderRate;
        chart4.data = raceData;
        chart5.data = ethData;
        chart7.data = vetData;
        
   }
        
    if(strUser3 == "2016"){
        chart3.data = genderRate1;
        chart4.data = raceData1;
        chart5.data = ethData1;
        chart7.data = vetData1;
    }
    
    pchart3.data = chart3.data;
     pchart4.data = chart4.data;
     pchart5.data = chart5.data;
     pchart7.data = chart7.data;
     
     pchart3.draw(1000);
     pchart4.draw(1000);
     pchart5.draw(1000);
     pchart7.draw(1000);
         
     
     chart3.draw(1000);
     chart4.draw(1000);
     chart5.draw(1000);
     chart7.draw(1000);
     
 });
        
d3.select("#btn32").on("change", function() {
  
  
	var e3 = document.getElementById("btn32");
  var strUser3 = e3.options[e3.selectedIndex].text;
  
   if(strUser3 == "2017"){
        chart3.data = genderRate;
        chart4.data = raceData;
        chart5.data = ethData;
        chart7.data = vetData;
        
   }
        
    if(strUser3 == "2016"){
        chart3.data = genderRate1;
        chart4.data = raceData1;
        chart5.data = ethData1;
        chart7.data = vetData1;
    }
         
    pchart3.data = chart3.data;
     pchart4.data = chart4.data;
     pchart5.data = chart5.data;
     pchart7.data = chart7.data;
     
     pchart3.draw(1000);
     pchart4.draw(1000);
     pchart5.draw(1000);
     pchart7.draw(1000);
     
     chart3.draw(1000);
     chart4.draw(1000);
     chart5.draw(1000);
     chart7.draw(1000);
     
 });        

       
       
       
            
  Unemploy = dimple.filterData(MonthYears, "Indicator Value", "Unemployment Rate");
  //chart2.addSeries("Location", dimple.plot.line);



                            
                           
        
        //chart 5 end
        
        //Chart 6 - QCEW
        
        //var svg6 = dimple.newSvg("#Chart6", "100%", 650);        
                            
                            Qdata1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Employment by Industry Annual Average"), "Indicator Value", ["Accommodation and food services", "Administrative and waste services", "Agriculture, forestry, fishing and hunting", "Arts, entertainment, and recreation", "Construction", "Educational services", "Finance and insurance", "Health care and social assistance", "Information", "Management of companies and enterprises", "Manufacturing", "Mining, quarrying, and oil and gas extraction", "Other services, except public administration", "Professional and technical services", "Public administration", "Real eMaryland State and rental and leasing", "Retail trade", "Transportation and warehousing", "Utilities", "Wholesale trade"]), "Location", CountyName2), "Time", "2014"  );
        
                            Qdata11 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Over-the-Year Employment Change by Industry"), "Indicator Value", ["Accommodation and food services", "Administrative and waste services", "Agriculture, forestry, fishing and hunting", "Arts, entertainment, and recreation", "Construction", "Educational services", "Finance and insurance", "Health care and social assistance", "Information", "Management of companies and enterprises", "Manufacturing", "Mining, quarrying, and oil and gas extraction", "Other services, except public administration", "Professional and technical services", "Public administration", "Real eMaryland State and rental and leasing", "Retail trade", "Transportation and warehousing", "Utilities", "Wholesale trade"]), "Location", CountyName2), "Time", "2014"  );
        
                            Qdata2 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Employment by Industry Annual Average"), "Indicator Value", ["Accommodation and food services", "Administrative and waste services", "Agriculture, forestry, fishing and hunting", "Arts, entertainment, and recreation", "Construction", "Educational services", "Finance and insurance", "Health care and social assistance", "Information", "Management of companies and enterprises", "Manufacturing", "Mining, quarrying, and oil and gas extraction", "Other services, except public administration", "Professional and technical services", "Public administration", "Real eMaryland State and rental and leasing", "Retail trade", "Transportation and warehousing", "Utilities", "Wholesale trade"]), "Location", CountyName2), "Time", "2015"  );
        
                            Qdata21 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Over-the-Year Employment Change by Industry"), "Indicator Value", ["Accommodation and food services", "Administrative and waste services", "Agriculture, forestry, fishing and hunting", "Arts, entertainment, and recreation", "Construction", "Educational services", "Finance and insurance", "Health care and social assistance", "Information", "Management of companies and enterprises", "Manufacturing", "Mining, quarrying, and oil and gas extraction", "Other services, except public administration", "Professional and technical services", "Public administration", "Real eMaryland State and rental and leasing", "Retail trade", "Transportation and warehousing", "Utilities", "Wholesale trade"]), "Location", CountyName2), "Time", "2015"  );
        
                            Qdata3 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Employment by Industry Annual Average"), "Indicator Value", ["Accommodation and food services", "Administrative and waste services", "Agriculture, forestry, fishing and hunting", "Arts, entertainment, and recreation", "Construction", "Educational services", "Finance and insurance", "Health care and social assistance", "Information", "Management of companies and enterprises", "Manufacturing", "Mining, quarrying, and oil and gas extraction", "Other services, except public administration", "Professional and technical services", "Public administration", "Real eMaryland State and rental and leasing", "Retail trade", "Transportation and warehousing", "Utilities", "Wholesale trade"]), "Location", CountyName3), "Time", "2016"  );
        
                            Qdata31 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Over-the-Year Employment Change by Industry"), "Indicator Value", ["Accommodation and food services", "Administrative and waste services", "Agriculture, forestry, fishing and hunting", "Arts, entertainment, and recreation", "Construction", "Educational services", "Finance and insurance", "Health care and social assistance", "Information", "Management of companies and enterprises", "Manufacturing", "Mining, quarrying, and oil and gas extraction", "Other services, except public administration", "Professional and technical services", "Public administration", "Real eMaryland State and rental and leasing", "Retail trade", "Transportation and warehousing", "Utilities", "Wholesale trade"]), "Location", CountyName3), "Time", "2016"  );
        
                         /**   var chart8 = new dimple.chart(svg6, Qdata3);
                            chart8.setBounds("12%", 65, "30%", 500)
                            var x2 = chart8.addCategoryAxis("x", ["Time", "Indicator Value"]);
                            var y2 = chart8.addMeasureAxis("y", "Amount");
                            y2.tickFormat = ',f';
                            chart8.addSeries("Indicator Value", dimple.plot.bar);
                            var qLegend = chart8.addLegend(375,55,300,500);
                            qLegend.fontSize = "1px";
                            chart8.draw();
                            
                            **/
        
         //chart 8 button
        
        d3.select("#btn7").on("change", function() {
  
  
	var e7 = document.getElementById("btn7");
    var e10 = document.getElementById("btn10");
  var strUser7 = e7.options[e7.selectedIndex].text;
  var strUser10 = e10.options[e10.selectedIndex].text;
   if(strUser7 == "2014"){
        chart8.data = Qdata1;
        if(strUser10 == "Industry Employment Change"){
            chart8.data = Qdata11;
        }
   }
        
    if(strUser7 == "2015"){
        chart8.data = Qdata2;
       if(strUser10 == "Industry Employment Change"){
            chart8.data = Qdata21;
        }
    }
            
    if(strUser7 == "2016"){
        chart8.data = Qdata3;
        if(strUser10 == "Industry Employment Change"){
            chart8.data = Qdata31;
        }
    }
     pchart8.data = chart8.data;
     pchart8.draw(1000);
            
     chart8.draw(1000);
     
 });
        
d3.select("#btn10").on("change", function() {
  
  
	var e7 = document.getElementById("btn7");
    var e10 = document.getElementById("btn10");
  var strUser7 = e7.options[e7.selectedIndex].text;
  var strUser10 = e10.options[e10.selectedIndex].text;
   if(strUser7 == "2014"){
        chart8.data = Qdata1;
        if(strUser10 == "Industry Employment Change"){
            chart8.data = Qdata11;
        }
   }
        
    if(strUser7 == "2015"){
        chart8.data = Qdata2;
       if(strUser10 == "Industry Employment Change"){
            chart8.data = Qdata21;
        }
    }
            
    if(strUser7 == "2016"){
        chart8.data = Qdata3;
        if(strUser10 == "Industry Employment Change"){
            chart8.data = Qdata31;
        }
    }
     pchart8.data = chart8.data;
     pchart8.draw(1000);
         
     chart8.draw(1000);
     
 });
        

                            
                            
        
                            DisAttainment1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Employment Status By Disability Status"), "Location", CountyName2), "Employment Status", ["Unemployed", "Labor Force", "Employed"]),"Time", "2016");
        
                            DisAttainment = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Employment Status By Disability Status"), "Location", CountyName2), "Employment Status", ["Unemployed", "Labor Force", "Employed"]),"Time", "2017");
                            
        
                            var chart10 = new dimple.chart(svg8, DisAttainment);
                            chart10.setBounds("11%", "12%", "35%", "65%")
                            var disX = chart10.addCategoryAxis("x", "Employment Status");
                            var disY = chart10.addMeasureAxis("y", "Amount");
                           var disSeries = chart10.addSeries("Indicator Status", dimple.plot.bar);
                            //disSeries.addOrderRule(["Labor Force", "Employed", "Unemployed"]);
        
                       //     edX.addOrderRule(["Less than high school graduate", "High school graduate (includes equivalency)", "Some college or associate's degree", "Bachelor's degree or higher"]);
                     // var disLegend = chart10.addLegend("0%", "83%", "50%", "70%", "right");
        
                            disSeries.lineWeight = 0;
                            chart10.draw();
                            disY.tickFormat = ',f';
                            disY.title = "Totals";
                            disX.title = "Employment by Disability Status";
        
                            var pchart10 = new dimple.chart(print8, DisAttainment);
                            pchart10.setBounds("15%", "12%", "30%", 250)
                            var pdisX = pchart10.addCategoryAxis("x", "Employment Status");
                            var pdisY = pchart10.addMeasureAxis("y", "Amount");
                           var pdisSeries = pchart10.addSeries("Indicator Status", dimple.plot.bar);
                            //disSeries.addOrderRule(["Labor Force", "Employed", "Unemployed"]);
        
                       //     edX.addOrderRule(["Less than high school graduate", "High school graduate (includes equivalency)", "Some college or associate's degree", "Bachelor's degree or higher"]);
                     // var disLegend = chart10.addLegend("0%", "83%", "50%", "70%", "right");
        
                            pdisSeries.lineWeight = 0;
                            pchart10.draw();
                            pdisY.tickFormat = ',f';
                            pdisY.title = "Employment by Disability Status";
                            pdisX.title = "Employment by Disability Status";
        
                            
                            
                            
                            
                            povRate = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Employment Status By Poverty Status"), "Location", CountyName2), "Employment Status", ["Unemployed", "Labor Force", "Employed"]),"Time", "2017");
                            
                            povRate1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Employment Status By Poverty Status"), "Location", CountyName2), "Employment Status", ["Unemployed", "Labor Force", "Employed"]),"Time", "2016");
        
                            var chart11 = new dimple.chart(svg8, povRate);
                            chart11.setBounds("56%", "12%", "35%", "65%")
                            var povX = chart11.addCategoryAxis("x", "Employment Status");
                            var povY = chart11.addMeasureAxis("y", "Amount");
                           // povY.overrideMax = .30;
                          //  genY.titleShape.text("Percentage");
        
                            chart11.addSeries("Indicator Status", dimple.plot.bar);
                           // var genLegend = chart3.addLegend("38%", "10%", "50%", "70%", "right");
        
                            
                            chart11.draw();
                            povY.tickFormat = ',f';
                            povY.title = "Totals";
                            povX.title = "Employment by Poverty Status";
        
                            var pchart11 = new dimple.chart(print8, povRate);
                            pchart11.setBounds("62%", "12%", "30%", 250)
                            var ppovX = pchart11.addCategoryAxis("x", "Employment Status");
                            var ppovY = pchart11.addMeasureAxis("y", "Amount");
                           // povY.overrideMax = .30;
                          //  genY.titleShape.text("Percentage");
        
                            pchart11.addSeries("Indicator Status", dimple.plot.bar);
                           // var genLegend = chart3.addLegend("38%", "10%", "50%", "70%", "right");
        
                            
                            pchart11.draw();
                            ppovY.tickFormat = ',f';
                            ppovY.title = "Employment by Poverty Status";
                            ppovX.title = "Employment by Poverty Status";
        
        d3.select("#btn91").on("change", function() {
  
  
	var e7 = document.getElementById("btn91");
  var strUser7 = e7.options[e7.selectedIndex].text;
  
   if(strUser7 == "2016"){
        chart10.data = DisAttainment1;
        chart11.data = povRate1;
        
   }
        
    if(strUser7 == "2017"){
        chart10.data = DisAttainment;
        chart11.data = povRate;
    }
    
            
     pchart10.data = chart10.data;
     pchart11.data = chart11.data;
     pchart10.draw(1000);
     pchart11.draw(1000);
    
     chart10.draw(1000);
     chart11.draw(1000);
     
 });
        
                            
        
                            

        
        
       /* svg8.append("text")
                       .attr("x", (chart10._xPixels() + chart10._widthPixels() / 2)-200)
                       .attr("y", chart10._yPixels() - 20)
                       .style("text-anchor", "left")
                       .style("font-family", "sans-serif")
        .style("font-size", "15px")
                       .text("Disability Status")
        
        svg8.append("text")  
                       .attr("x", (chart11._xPixels() + chart11._widthPixels() / 2)-100)
                       .attr("y", chart11._yPixels() - 20)
                       .style("text-anchor", "left")
                       .style("font-family", "sans-serif")
        .style("font-size", "15px")
                       .text("Poverty Status")*/
        
        
                            
                            TanfAttainment2 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Number of TANF Recipient Workers"), "Location", CountyName2), "Employment Status", "Employed"),"Time", ["2015Q3", "2015Q4","2016Q1","2016Q2","2016Q3", "2016Q4", "2017Q1", "2017Q2"]);
        
                            TanfAttainment1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Number of TANF Recipient Workers"), "Location", CountyName2), "Employment Status", "Employed"),"Time", ["2015Q3", "2015Q4","2016Q1","2016Q2"]);
        
                            TanfAttainment = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Number of TANF Recipient Workers"), "Location", CountyName2), "Employment Status", "Employed"),"Time", ["2016Q3", "2016Q4", "2017Q1", "2017Q2"]);
                            
        
                            var chart12 = new dimple.chart(svg9, TanfAttainment2);
                            chart12.setBounds("9%", "12%", "37%", "65%")
                            var tanfX = chart12.addCategoryAxis("x", "Time");
                            var tanfY = chart12.addMeasureAxis("y", "Amount");
                           var tanfSeries = chart12.addSeries("Indicator", dimple.plot.line);
                            //disSeries.addOrderRule(["Labor Force", "Employed", "Unemployed"]);
                            tanfX.addOrderRule(["2015Q3", "2015Q4","2016Q1","2016Q2","2016Q3", "2016Q4", "2017Q1", "2017Q2"]);
                       //     edX.addOrderRule(["Less than high school graduate", "High school graduate (includes equivalency)", "Some college or associate's degree", "Bachelor's degree or higher"]);
                  //    var disLegend = chart12.addLegend("0%", "83%", "50%", "70%", "right");
                            tanfY.tickFormat = ',2f';
                            tanfSeries.lineMarkers = true;
                            chart12.draw();
        
                            var pchart12 = new dimple.chart(print9, TanfAttainment2);
                            pchart12.setBounds("10%", "12%", "35%", 250)
                            var ptanfX = pchart12.addCategoryAxis("x", "Time");
                            var ptanfY = pchart12.addMeasureAxis("y", "Amount");
                           var ptanfSeries = pchart12.addSeries("Indicator", dimple.plot.line);
                            //disSeries.addOrderRule(["Labor Force", "Employed", "Unemployed"]);
                            ptanfX.addOrderRule(["2015Q3", "2015Q4","2016Q1","2016Q2","2016Q3", "2016Q4", "2017Q1", "2017Q2"]);
                       //     edX.addOrderRule(["Less than high school graduate", "High school graduate (includes equivalency)", "Some college or associate's degree", "Bachelor's degree or higher"]);
                  //    var disLegend = chart12.addLegend("0%", "83%", "50%", "70%", "right");
        
                            ptanfSeries.lineMarkers = true;
                            pchart12.draw();
        
                            
                            
                            ptanfY.tickFormat = ',2f';
                            ptanfY.title = "TANF Workers";
        
                            pTanfRate2 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Percentage of Workforce Training Program/Service Participants in TANF"), "Location", CountyName2), "Employment Status", "Employed"),"Time", ["2015Q3", "2015Q4","2016Q1","2016Q2","2016Q3", "2016Q4", "2017Q1", "2017Q2"]);
                            
                            pTanfRate1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Percentage of Workforce Training Program/Service Participants in TANF"), "Location", CountyName2), "Employment Status", "Employed"),"Time", ["2015Q3", "2015Q4","2016Q1","2016Q2"]);
                            
                            pTanfRate = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Percentage of Workforce Training Program/Service Participants in TANF"), "Location", CountyName2), "Employment Status", "Employed"),"Time", ["2016Q3", "2016Q4", "2017Q1", "2017Q2"]);
        
                            var chart13 = new dimple.chart(svg9, pTanfRate2);
                            chart13.setBounds("58%", "12%", "37%", "65%")
                            var ptanfX = chart13.addCategoryAxis("x", "Time");
                            var pTanfY = chart13.addMeasureAxis("y", "Amount");
                           //pTanfY.overrideMax = .30;
                          //  genY.titleShape.text("Percentage");
                            ptanfX.addOrderRule(["2015Q3", "2015Q4","2016Q1","2016Q2","2016Q3", "2016Q4", "2017Q1", "2017Q2"]);
        
        var pTanfseries = chart13.addSeries("Indicator", dimple.plot.line);
                            pTanfseries.lineMarkers = true;
                           // var genLegend = chart3.addLegend("38%", "10%", "50%", "70%", "right");
                            pTanfY.tickFormat = '.1%';
                            pTanfY.title = "Workforce/Service in TANF";
        
                            
                            chart13.draw();
        
                            var pchart13 = new dimple.chart(print9, pTanfRate2);
                            pchart13.setBounds("58%", "12%", "35%", 250)
                            var pptanfX = pchart13.addCategoryAxis("x", "Time");
                            var ppTanfY = pchart13.addMeasureAxis("y", "Amount");
                           //pTanfY.overrideMax = .30;
                          //  genY.titleShape.text("Percentage");
                            pptanfX.addOrderRule(["2015Q3", "2015Q4","2016Q1","2016Q2","2016Q3", "2016Q4", "2017Q1", "2017Q2"]);
        
        var ppTanfseries = pchart13.addSeries("Indicator", dimple.plot.line);
                            ppTanfseries.lineMarkers = true;
                           // var genLegend = chart3.addLegend("38%", "10%", "50%", "70%", "right");
                            ppTanfY.tickFormat = '.2%';
                            ppTanfY.title = "Workforce/Service in TANF";
        
                            
                            pchart13.draw();
        
                            
        
                            

        
        
        /*svg9.append("text")
                       .attr("x", (chart10._xPixels() + chart10._widthPixels() / 2)-200)
                       .attr("y", chart10._yPixels() - 20)
                       .style("text-anchor", "left")
                       .style("font-family", "sans-serif")
        .style("font-size", "15px")
                       .text("TANF Recipient Workers")
        
        svg9.append("text")  
                       .attr("x", (chart11._xPixels() + chart11._widthPixels() / 2)-100)
                       .attr("y", chart11._yPixels() - 20)
                       .style("text-anchor", "left")
                       .style("font-family", "sans-serif")
        .style("font-size", "15px")
                       .text("Service Participants in TANF by Percentage")*/
        
 d3.select("#btn8").on("change", function() {
  
  
  var e8 = document.getElementById("btn8");
  var strUser8 = e8.options[e8.selectedIndex].text;
  
   if(strUser8 == "All"){
       chart12.data = TanfAttainment2;
       chart13.data = pTanfRate2;
       //chart14.data = mTanfData2;
   }
     
   if(strUser8 == "2015Q3-2016Q2"){
        chart12.data = TanfAttainment1;
        chart13.data = pTanfRate1;
        //chart14.data = mTanfData1;
        
   }
        
    if(strUser8 == "2016Q3-2017Q2"){
        chart12.data = TanfAttainment;
        chart13.data = pTanfRate;
       // chart14.data = mTanfData;
    }
     
     pchart12.data = chart12.data;
     pchart13.data = chart13.data;
     pchart12.draw(1000);
     pchart13.draw(1000);
         
     chart12.draw(1000);
     chart13.draw(1000);
    // chart14.draw(1000);
     
 });
        
        //Chart 6 - end
        
        //chart 9 OTM
        
        
         
        
        Cdata = dimple.filterData(dimple.filterData(data, "Location", CountyName1), "Indicator", ["Out-Commuters", "In-Commuters"]);
        
        var chart9 = new dimple.chart(svg7, Cdata);
                            chart9.setBounds("11%", "12%", "80%", "65%")
                         var x3 = chart9.addCategoryAxis("x", "Time");
                         var y3 = chart9.addMeasureAxis("y", "Amount");
                            
                           var lines3 = chart9.addSeries("Indicator", dimple.plot.line);
                            
                            lines3.lineMarkers = true;
                            y3.tickFormat = ',f';
                            chart9.addLegend("10%", "5%", "50%", "50%", "right");
        
                            chart9.draw();
        
                            var pchart9 = new dimple.chart(print7, Cdata);
                            pchart9.setBounds("11%", "12%", "80%", 300)
                         var px3 = pchart9.addCategoryAxis("x", "Time");
                         var py3 = pchart9.addMeasureAxis("y", "Amount");
                            
                           var plines3 = pchart9.addSeries("Indicator", dimple.plot.line);
                            
                            plines3.lineMarkers = true;
                            py3.tickFormat = ',f';
                            pchart9.addLegend("10%", "5%", "50%", "50%", "right");
        
                            pchart9.draw();
        
        
        
                            mTanfData2 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Percentage of TANF Recipients among Maryland Workers"), "Location", CountyName2), "Time", ["2015Q3", "2015Q4","2016Q1","2016Q2","2016Q3", "2016Q4", "2017Q1", "2017Q2"]);
                            
                            mTanfData1 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Percentage of TANF Recipients among Maryland Workers"), "Location", CountyName2), "Time", ["2015Q3", "2015Q4","2016Q1","2016Q2"]);
        
        
                            mTanfData = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Percentage of TANF Recipients among Maryland Workers"), "Location", CountyName2), "Time", ["2016Q3", "2016Q4", "2017Q1", "2017Q2"]);
        
                            var chart14 = new dimple.chart(svg10, mTanfData2);
                            chart14.setBounds("11%", "12%", "80%", "65%")
                            var mTanfX = chart14.addCategoryAxis("x", "Time")
                            var mTanfY = chart14.addMeasureAxis("y", "Amount");
                            mTanfY.overrideMax = .003;
                            var mTanfLine = chart14.addSeries("Indicator", dimple.plot.line);
                            mTanfY.tickFormat = '.2%';
                            mTanfLine.lineMarkers = true;
                            mTanfX.addOrderRule(["2015Q3", "2015Q4","2016Q1","2016Q2","2016Q3", "2016Q4", "2017Q1", "2017Q2"]);
        
                       //     var vetLegend = chart7.addLegend("16%", "90%", "50%", "70%", "right");
                            chart14.draw();
        
                            var pchart14 = new dimple.chart(print10, mTanfData2);
                            pchart14.setBounds("11%", "12%", "80%", 300)
                            var pmTanfX = pchart14.addCategoryAxis("x", "Time")
                            var pmTanfY = pchart14.addMeasureAxis("y", "Amount");
                            pmTanfY.overrideMax = .003;
                            var pmTanfLine = pchart14.addSeries("Indicator", dimple.plot.line);
                            pmTanfY.tickFormat = '.4%';
                            pmTanfLine.lineMarkers = true;
                            pmTanfX.addOrderRule(["2015Q3", "2015Q4","2016Q1","2016Q2","2016Q3", "2016Q4", "2017Q1", "2017Q2"]);
        
                       //     var vetLegend = chart7.addLegend("16%", "90%", "50%", "70%", "right");
                            pchart14.draw();
                            
                            
                            
        
        /*svg10.append("text")  
                       .attr("x", (chart14._xPixels() + chart14._widthPixels() / 2)-200)
                       .attr("y", chart14._yPixels() - 20)
                       .style("text-anchor", "left")
                       .style("font-family", "sans-serif")
        .style("font-size", "15px")
                       .text("TANF Recipients among Maryland Workers")*/
        
       
             
                            
                    
                            mAppData = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator Value", "Program Completers"), "Location", CountyName2), "Time", ["FY15", "FY16", "FY17"]);
        
                            var chart15 = new dimple.chart(svg11, mAppData);
                            chart15.setBounds("11%", "21%", "80%", "65%")
                            var mAppx = chart15.addCategoryAxis("x", "Time")
                            var mAppY = chart15.addMeasureAxis("y", "Amount");
                            var mAppLines = chart15.addSeries("Indicator Value", dimple.plot.bar);
                            mAppY.tickFormat = ',f';
                            //mAppLines.lineMarkers = true;
                            mAppx.addOrderRule(["FY15", "FY16"]);
                            mAppx.title = " ";
                            mAppY.title = "Totals";
                       //     var vetLegend = chart7.addLegend("16%", "90%", "50%", "70%", "right");
                            chart15.draw();
        
                            var pchart15 = new dimple.chart(print11, mAppData);
                            pchart15.setBounds("11%", "21%", "80%", 250)
                            var pmAppx = pchart15.addCategoryAxis("x", "Time")
                            var pmAppY = pchart15.addMeasureAxis("y", "Amount");
                            var pmAppLines = pchart15.addSeries("Indicator Value", dimple.plot.bar);
                            pmAppY.tickFormat = ',f';
                            //pmAppLines.lineMarkers = true;
                            pmAppx.addOrderRule(["FY15", "FY16"]);
                            pmAppx.title = " ";
                            pmAppY.title = "Totals";
                       //     var vetLegend = chart7.addLegend("16%", "90%", "50%", "70%", "right");
                            pchart15.draw();
                            
                            
                            
        
        /*svg11.append("text")  
                       .attr("x", (chart15._xPixels() + chart15._widthPixels() / 2)-200)
                       .attr("y", chart15._yPixels() - 20)
                       .style("text-anchor", "left")
                       .style("font-family", "sans-serif")
        .style("font-size", "15px")
                       .text("Apprenticeship Program Completers in Maryland")*/
        
                
                   
        
   /**     edLegend.shapes.style("visibility", "hidden");
        ethLegend.shapes.style("visibility", "hidden");
        genLegend.shapes.style("visibility", "hidden");
        raceLegend.shapes.style("visibility", "hidden");
        vetLegend.shapes.style("visibility", "hidden");
        qLegend.shapes.style("visibility", "hidden"); **/
        
        d3.select("#btn5").on("click", function(){
            if(togNum == 1)
                {
                    edLegend.shapes.style("visibility", "hidden");
        //            ethLegend.shapes.style("visibility", "hidden");
        //            genLegend.shapes.style("visibility", "hidden");
        //            raceLegend.shapes.style("visibility", "hidden");
        //            vetLegend.shapes.style("visibility", "hidden");
                    togNum = 0;
                    
                }else if(togNum == 0)
                {
                    edLegend.shapes.style("visibility", "visible");
       //             ethLegend.shapes.style("visibility", "visible");
       //             genLegend.shapes.style("visibility", "visible");
       //             raceLegend.shapes.style("visibility", "visible");
       //             vetLegend.shapes.style("visibility", "visible");
                    togNum = 1;
                }
        });
        
         d3.select("#btn6").on("click", function(){
            if(togNum1 == 1)
                {
                    togNum1 = 0;
                    qLegend.shapes.style("visibility", "hidden");
                    
                    
                }else if(togNum1 == 0)
                {
                    togNum1 = 1;
                    qLegend.shapes.style("visibility", "visible");
                }
        });
        
        
                            
                            
        
                            workData = dimple.filterData(dimple.filterData(dimple.filterData(data, "Time", ["2016-Q1","2016-Q2","2016-Q3","2016-Q4","2017-Q1","2017-Q2","2017-Q3", "2017-Q4", "2018-Q1"]), "Indicator", ["Maryland Workers by Age", "Maryland Workers by Gender", "Maryland Workers by Industry"]), "Location", CountyName1);
        
                            workData1 = dimple.filterData(dimple.filterData(workData, "Time", "2016-Q1"), "Indicator", "Maryland Workers by Age");

                            workData2 = dimple.filterData(dimple.filterData(workData, "Time", "2016-Q2"), "Indicator", "Maryland Workers by Age");

                            workData3 = dimple.filterData(dimple.filterData(workData, "Time", "2016-Q3"), "Indicator", "Maryland Workers by Age");

                            workData4 = dimple.filterData(dimple.filterData(workData, "Time", "2016-Q4"), "Indicator", "Maryland Workers by Age");

                            workData5 = dimple.filterData(dimple.filterData(workData, "Time", "2017-Q1"), "Indicator", "Maryland Workers by Age");

                            workData6 = dimple.filterData(dimple.filterData(workData, "Time", "2017-Q2"), "Indicator", "Maryland Workers by Age");
                        
                            workData7 = dimple.filterData(dimple.filterData(workData, "Time", "2017-Q3"), "Indicator", "Maryland Workers by Age");
        
                            workData8 = dimple.filterData(dimple.filterData(workData, "Time", "2017-Q4"), "Indicator", "Maryland Workers by Age");

                            /*workData9 = dimple.filterData(dimple.filterData(workData, "Time", "2018-Q1"), "Indicator", "Maryland Workers by Age");

                            workData10 = dimple.filterData(dimple.filterData(workData, "Time", "2016Q4"), "Indicator", "Maryland Workers by Age");

                            workData01 = dimple.filterData(dimple.filterData(workData, "Time", "2017Q1"), "Indicator", "Maryland Workers by Age");

                            workData02 = dimple.filterData(dimple.filterData(workData, "Time", "2017Q2"), "Indicator", "Maryland Workers by Age");*/

                            workData11 = dimple.filterData(dimple.filterData(workData, "Time", "2016-Q1"), "Indicator", "Maryland Workers by Gender");

                            workData21 = dimple.filterData(dimple.filterData(workData, "Time", "2016-Q2"), "Indicator", "Maryland Workers by Gender");

                            workData31 = dimple.filterData(dimple.filterData(workData, "Time", "2016-Q3"), "Indicator", "Maryland Workers by Gender");

                            workData41 = dimple.filterData(dimple.filterData(workData, "Time", "2016-Q4"), "Indicator", "Maryland Workers by Gender");

                            workData51 = dimple.filterData(dimple.filterData(workData, "Time", "2017-Q1"), "Indicator", "Maryland Workers by Gender");

                            workData61 = dimple.filterData(dimple.filterData(workData, "Time", "2017-Q2"), "Indicator", "Maryland Workers by Gender");

                            workData71 = dimple.filterData(dimple.filterData(workData, "Time", "2017-Q3"), "Indicator", "Maryland Workers by Gender");
        
                            workData81 = dimple.filterData(dimple.filterData(workData, "Time", "2017-Q4"), "Indicator", "Maryland Workers by Gender");

                            workData82 = dimple.filterData(dimple.filterData(workData, "Time", "2018-Q1"), "Indicator", "Maryland Workers by Gender");

                            /*workData83 = dimple.filterData(dimple.filterData(workData, "Time", "2016Q4"), "Indicator", "Maryland Workers by Gender");

                            workData84 = dimple.filterData(dimple.filterData(workData, "Time", "2017Q1"), "Indicator", "Maryland Workers by Gender");

                            workData85 = dimple.filterData(dimple.filterData(workData, "Time", "2017Q2"), "Indicator", "Maryland Workers by Gender");*/
        
                            var wChart = new dimple.chart(svg12, workData8);
                            wChart.setBounds("11%", "12%", "35%", "65%")
                            var edX = wChart.addCategoryAxis("x", "Indicator Value");
                            var eduY = wChart.addMeasureAxis("y", "Amount");
                           var edSeries = wChart.addSeries("Indicator Value", dimple.plot.bar);
                            eduY.title = "Number of Workers";
                            edX.title = " ";
                            edX.addOrderRule(["Age 14-18", "Age 19-21", "Age 22-24", "Age 25-34", "Age 35-44", "Age 45-54", "Age 55-64", "Age 65-99", "Female", "Male"]);
                     // var edLegend = wChart.addLegend("0%", "83%", "50%", "70%", "right");
        
                            wChart.assignColor("Age 14-18", "#4dc3ff", "black", 0.7);
                            wChart.assignColor("Age 19-21", "#ff5c33", "black", 0.7);
                            wChart.assignColor("Age 22-24", "#66ff66", "black", 0.7);
                            wChart.assignColor("Age 25-34", "#ffdb4d", "black", 0.7);
                            wChart.assignColor("Age 35-44", "#ffb84d", "black", 0.7);
                            wChart.assignColor("Age 45-54", "#00cccc", "black", 0.7);
                            wChart.assignColor("Age 55-64", "#6666ff", "black", 0.7);
                            wChart.assignColor("Age 65-99", "#ffcc99", "black", 0.7);
                            wChart.assignColor("Male", "#3366ff","black", 0.7);
                            wChart.assignColor("Female", "pink","black", 0.7);
                      
                            wChart.draw();
        
                            edX.addOrderRule(["Age 14-18", "Age 19-21", "Age 22-24", "Age 25-34", "Age 35-44", "Age 45-54", "Age 55-64", "Age 65-99", "Female", "Male"]);
        
                            
                            
                            eduY.tickFormat = ',f';
        
                            var pwChart = new dimple.chart(print12, workData8);
                            pwChart.setBounds("12%", "12%", "35%", 250)
                            var pedX = pwChart.addCategoryAxis("x", "Indicator Value");
                            var peduY = pwChart.addMeasureAxis("y", "Amount");
                           var pedSeries = pwChart.addSeries("Indicator Value", dimple.plot.bar);
                            peduY.title = "Number of Workers";
                            pedX.title = " ";
                            pedX.addOrderRule(["Age 14-18", "Age 19-21", "Age 22-24", "Age 25-34", "Age 35-44", "Age 45-54", "Age 55-64", "Age 65-99", "Female", "Male"]);
        
                            pwChart.assignColor("Age 14-18", "#4dc3ff", "black", 0.7);
                            pwChart.assignColor("Age 19-21", "#ff5c33", "black", 0.7);
                            pwChart.assignColor("Age 22-24", "#66ff66", "black", 0.7);
                            pwChart.assignColor("Age 25-34", "#ffdb4d", "black", 0.7);
                            pwChart.assignColor("Age 35-44", "#ffb84d", "black", 0.7);
                            pwChart.assignColor("Age 45-54", "#00cccc", "black", 0.7);
                            pwChart.assignColor("Age 55-64", "#6666ff", "black", 0.7);
                            pwChart.assignColor("Age 65-99", "#ffcc99", "black", 0.7);
                            pwChart.assignColor("Male", "#3366ff","black", 0.7);
                            pwChart.assignColor("Female", "pink","black", 0.7);
                            
                      
                            pwChart.draw();
        
                            pedX.addOrderRule(["Age 14-18", "Age 19-21", "Age 22-24", "Age 25-34", "Age 35-44", "Age 45-54", "Age 55-64", "Age 65-99", "Female", "Male"]);
        
                            
                            
                            peduY.tickFormat = ',f';

                            averageData = dimple.filterData(dimple.filterData(dimple.filterData(data, "Time", ["2016-Q1", "2016-Q2", "2016-Q3", "2016-Q4", "2017-Q1", "2017-Q2", "2017-Q3", "2017-Q4", "2018-Q1", "2016Q4"]), "Indicator", ["Maryland Average Monthly Earnings by Age", "Maryland Average Monthly Earnings by Gender", "Maryland Workers by Industry"]), "Location", CountyName1);
                            
                            averageData1 = dimple.filterData(dimple.filterData(averageData, "Time", "2016-Q1"), "Indicator", "Maryland Average Monthly Earnings by Age");
                            
                            averageData2 = dimple.filterData(dimple.filterData(averageData, "Time", "2016-Q2"), "Indicator", "Maryland Average Monthly Earnings by Age");

                            averageData3 = dimple.filterData(dimple.filterData(averageData, "Time", "2016-Q3"), "Indicator", "Maryland Average Monthly Earnings by Age");

                            averageData4 = dimple.filterData(dimple.filterData(averageData, "Time", "2016-Q4"), "Indicator", "Maryland Average Monthly Earnings by Age");

                            averageData5 = dimple.filterData(dimple.filterData(averageData, "Time", "2017-Q1"), "Indicator", "Maryland Average Monthly Earnings by Age");

                            averageData6 = dimple.filterData(dimple.filterData(averageData, "Time", "2017-Q2"), "Indicator", "Maryland Average Monthly Earnings by Age");

                            averageData7 = dimple.filterData(dimple.filterData(averageData, "Time", "2017-Q3"), "Indicator", "Maryland Average Monthly Earnings by Age");
        
                            averageData8 = dimple.filterData(dimple.filterData(averageData, "Time", "2017-Q4"), "Indicator", "Maryland Average Monthly Earnings by Age");
        
                            averageData9 = dimple.filterData(dimple.filterData(averageData, "Time", "2018-Q1"), "Indicator", "Maryland Average Monthly Earnings by Age");
        
                            averageData10 = dimple.filterData(dimple.filterData(averageData, "Time", "2016Q4"), "Indicator", "Maryland Average Monthly Earnings by Age");

                            averageData11 = dimple.filterData(dimple.filterData(averageData, "Time", "2016-Q1"), "Indicator", "Maryland Average Monthly Earnings by Gender");

                            averageData21 = dimple.filterData(dimple.filterData(averageData, "Time", "2016-Q2"), "Indicator", "Maryland Average Monthly Earnings by Gender");

                            averageData31 = dimple.filterData(dimple.filterData(averageData, "Time", "2016-Q3"), "Indicator", "Maryland Average Monthly Earnings by Gender");

                            averageData41 = dimple.filterData(dimple.filterData(averageData, "Time", "2016-Q4"), "Indicator", "Maryland Average Monthly Earnings by Gender");

                            averageData51 = dimple.filterData(dimple.filterData(averageData, "Time", "2017-Q1"), "Indicator", "Maryland Average Monthly Earnings by Gender");

                            averageData61 = dimple.filterData(dimple.filterData(averageData, "Time", "2017-Q2"), "Indicator", "Maryland Average Monthly Earnings by Gender");

                            averageData71 = dimple.filterData(dimple.filterData(averageData, "Time", "2017-Q3"), "Indicator", "Maryland Average Monthly Earnings by Gender");
        
                            averageData81 = dimple.filterData(dimple.filterData(averageData, "Time", "2017-Q4"), "Indicator", "Maryland Average Monthly Earnings by Gender");
        
                            averageData82 = dimple.filterData(dimple.filterData(averageData, "Time", "2018-Q1"), "Indicator", "Maryland Average Monthly Earnings by Gender");
        
                            averageData83 = dimple.filterData(dimple.filterData(averageData, "Time", "2016Q4"), "Indicator", "Maryland Average Monthly Earnings by Gender");
        
                            var avgChart = new dimple.chart(svg12, averageData8);
                            avgChart.setBounds("56%", "12%", "35%", "65%")
                            var genX = avgChart.addCategoryAxis("x", "Indicator Value");
                            var genY = avgChart.addMeasureAxis("y", "Amount");
                            genY.title = "Average Monthly Earnings";
                        
                          //  genY.titleShape.text("Percentage");
        
                            avgChart.addSeries("Indicator Value", dimple.plot.bar);
                           // var genLegend = avgChart.addLegend("38%", "10%", "50%", "70%", "right");
                            avgChart.assignColor("Age 14-18", "#4dc3ff", "black", 0.7);
                            avgChart.assignColor("Age 19-21", "#ff5c33", "black", 0.7);
                            avgChart.assignColor("Age 22-24", "#66ff66", "black", 0.7);
                            avgChart.assignColor("Age 25-34", "#ffdb4d", "black", 0.7);
                            avgChart.assignColor("Age 35-44", "#ffb84d", "black", 0.7);
                            avgChart.assignColor("Age 45-54", "#00cccc", "black", 0.7);
                            avgChart.assignColor("Age 55-64", "#6666ff", "black", 0.7);
                            avgChart.assignColor("Age 65-99", "#ffcc99", "black", 0.7);
                            avgChart.assignColor("Male", "#3366ff","black", 0.7);
                            avgChart.assignColor("Female", "pink","black", 0.7);
                            
                            avgChart.draw();
        
                            genX.addOrderRule(["Age 14-18", "Age 19-21", "Age 22-24", "Age 25-34", "Age 35-44", "Age 45-54", "Age 55-64", "Age 65-99", "Female", "Male"]);
        
                            
                            genY.tickFormat = '$,f';
                            genX.title = " ";
        
                            var pavgChart = new dimple.chart(print12, averageData8);
                            pavgChart.setBounds("60%", "12%", "35%", 250)
                            var pgenX = pavgChart.addCategoryAxis("x", "Indicator Value");
                            var pgenY = pavgChart.addMeasureAxis("y", "Amount");
                            pgenY.title = "Average Monthly Earnings";
                        
                          //  genY.titleShape.text("Percentage");
        
                            pavgChart.addSeries("Indicator Value", dimple.plot.bar);
                           // var genLegend = avgChart.addLegend("38%", "10%", "50%", "70%", "right");
                            pavgChart.assignColor("Age 14-18", "#4dc3ff", "black", 0.7);
                            pavgChart.assignColor("Age 19-21", "#ff5c33", "black", 0.7);
                            pavgChart.assignColor("Age 22-24", "#66ff66", "black", 0.7);
                            pavgChart.assignColor("Age 25-34", "#ffdb4d", "black", 0.7);
                            pavgChart.assignColor("Age 35-44", "#ffb84d", "black", 0.7);
                            pavgChart.assignColor("Age 45-54", "#00cccc", "black", 0.7);
                            pavgChart.assignColor("Age 55-64", "#6666ff", "black", 0.7);
                            pavgChart.assignColor("Age 65-99", "#ffcc99", "black", 0.7);
                            pavgChart.assignColor("Male", "#3366ff","black", 0.7);
                            pavgChart.assignColor("Female", "pink","black", 0.7);
                            pavgChart.draw();
                            
                            pavgChart.draw();
                            pgenX.addOrderRule(["Age 14-18", "Age 19-21", "Age 22-24", "Age 25-34", "Age 35-44", "Age 45-54", "Age 55-64", "Age 65-99", "Female", "Male"]);
        
                            
                            pgenY.tickFormat = '$,f';
                            pgenX.title = " ";
                            

        
        
        
        
                //chart 3 end
        
                //chart 4
        
        


                            jobData = dimple.filterData(dimple.filterData(dimple.filterData(data, "Time", ["2016-Q1", "2016-Q2", "2016-Q3", "2016-Q4", "2017-Q1", "2017-Q2", "2017-Q3", "2017-Q4", "2018-Q1"]), "Indicator", ["Maryland Job Net Change by Education", "Maryland Job Net Change by Gender", "Maryland Job Net Change by Industry"]), "Location", CountyName2);

                            jobData1 = dimple.filterData(dimple.filterData(jobData, "Time", "2016-Q1"), "Indicator", "Maryland Job Net Change by Education");

                            jobData2 = dimple.filterData(dimple.filterData(jobData, "Time", "2016-Q2"), "Indicator", "Maryland Job Net Change by Education");

                            jobData3 = dimple.filterData(dimple.filterData(jobData, "Time", "2016-Q3"), "Indicator", "Maryland Job Net Change by Education");

                            jobData4 = dimple.filterData(dimple.filterData(jobData, "Time", "2016-Q4"), "Indicator", "Maryland Job Net Change by Education");

                            jobData5 = dimple.filterData(dimple.filterData(jobData, "Time", "2017-Q1"), "Indicator", "Maryland Job Net Change by Education");

                            jobData6 = dimple.filterData(dimple.filterData(jobData, "Time", "2017-Q2"), "Indicator", "Maryland Job Net Change by Education");

                            jobData7 = dimple.filterData(dimple.filterData(jobData, "Time", "2017-Q3"), "Indicator", "Maryland Job Net Change by Education");
        
                            jobData8 = dimple.filterData(dimple.filterData(jobData, "Time", "2017-Q4"), "Indicator", "Maryland Job Net Change by Education");
        
                            jobData9 = dimple.filterData(dimple.filterData(jobData, "Time", "2018-Q1"), "Indicator", "Maryland Job Net Change by Education");
        
                            //jobData10 = dimple.filterData(dimple.filterData(jobData, "Time", "2016Q4"), "Indicator", "Maryland Job Net Change by Education");

                            jobData11 = dimple.filterData(dimple.filterData(jobData, "Time", "2016-Q1"), "Indicator", "Maryland Job Net Change by Gender");

                            jobData21 = dimple.filterData(dimple.filterData(jobData, "Time", "2016-Q2"), "Indicator", "Maryland Job Net Change by Gender");

                            jobData31 = dimple.filterData(dimple.filterData(jobData, "Time", "2016-Q3"), "Indicator", "Maryland Job Net Change by Gender");

                            jobData41 = dimple.filterData(dimple.filterData(jobData, "Time", "2016-Q4"), "Indicator", "Maryland Job Net Change by Gender");

                            jobData51 = dimple.filterData(dimple.filterData(jobData, "Time", "2017-Q1"), "Indicator", "Maryland Job Net Change by Gender");

                            jobData61 = dimple.filterData(dimple.filterData(jobData, "Time", "2017-Q2"), "Indicator", "Maryland Job Net Change by Gender");

                            jobData71 = dimple.filterData(dimple.filterData(jobData, "Time", "2017-Q3"), "Indicator", "Maryland Job Net Change by Gender");
        
                            jobData81 = dimple.filterData(dimple.filterData(jobData, "Time", "2017-Q4"), "Indicator", "Maryland Job Net Change by Gender");
        
                            jobData82 = dimple.filterData(dimple.filterData(jobData, "Time", "2018-Q1"), "Indicator", "Maryland Job Net Change by Gender");
        
                         //   jobData83 = dimple.filterData(dimple.filterData(jobData, "Time", "2016Q4"), "Indicator", "Maryland Job Net Change by Gender");
        
        
                            
                            var jc = new dimple.chart(svg13, jobData8);
                            jc.setBounds("56%", "8%", "35%", "45%")
                            var rX = jc.addCategoryAxis("x", "Indicator Value");
                            var raceY = jc.addMeasureAxis("y", "Amount");
                            var rSeries = jc.addSeries("Indicator Value", dimple.plot.bar);
                            
                            rX.title = " ";
                            raceY.title = "Job Net Change";
                            
                     //       var raceLegend = jc.addLegend("0%", "70%", "47%", "70%", "right");
        
                            jc.assignColor("Less than High school", "#4dc3ff", "black", 0.7);
                            jc.assignColor("High school", "#ff5c33", "black", 0.7);
                            jc.assignColor("Some college", "#66ff66", "black", 0.7);
                            jc.assignColor("Bachelor's or Higher", "#ffdb4d", "black", 0.7);
                            jc.assignColor("N/A", "#919191", "black", 0.7);
                            
                            jc.assignColor("Male", "#3366ff","black", 0.7);
                            jc.assignColor("Female", "pink","black", 0.7);
        
                            
                            jc.draw();
        
                            rX.addOrderRule(["Less than High school", "High school", "Some college", "Bachelor's or Higher", "N/A", "Female", "Male"]);
        
                            raceY.tickFormat = ',f';
        
                            var pjc = new dimple.chart(print13, jobData8);
                            pjc.setBounds("60%", "8%", "35%", 200)
                            var prX = pjc.addCategoryAxis("x", "Indicator Value");
                            var praceY = pjc.addMeasureAxis("y", "Amount");
                            var prSeries = pjc.addSeries("Indicator Value", dimple.plot.bar);
                            
                            prX.title = " ";
                            praceY.title = "Job Net Change";
                             pjc.assignColor("Less than High school", "#4dc3ff", "black", 0.7);
                            pjc.assignColor("High school", "#ff5c33", "black", 0.7);
                            pjc.assignColor("Some college", "#66ff66", "black", 0.7);
                            pjc.assignColor("Bachelor's or Higher", "#ffdb4d", "black", 0.7);
                            pjc.assignColor("N/A", "#919191", "black", 0.7);
                            
                            pjc.assignColor("Male", "#3366ff","black", 0.7);
                            pjc.assignColor("Female", "pink","black", 0.7);
                            pjc.draw();
        
                            prX.addOrderRule(["Less than High school", "High school", "Some college", "Bachelor's or Higher", "N/A", "Female", "Male"]);
        
                            praceY.tickFormat = ',f';
                            
                            
                             newHireData = dimple.filterData(dimple.filterData(dimple.filterData(data, "Time", ["2016-Q1", "2016-Q2", "2016-Q3", "2016-Q4", "2017-Q1", "2017-Q2", "2017-Q3", "2017-Q4", "2018-Q1"]), "Indicator", ["Maryland New Hires by Education", "Maryland New Hires by Gender", "Maryland New Hires by Industry"]), "Location", CountyName2);

                            newHireData1 = dimple.filterData(dimple.filterData(newHireData, "Time", "2016-Q1"), "Indicator", "Maryland New Hires by Education");

                            newHireData2 = dimple.filterData(dimple.filterData(newHireData, "Time", "2016-Q2"), "Indicator", "Maryland New Hires by Education");

                            newHireData3 = dimple.filterData(dimple.filterData(newHireData, "Time", "2016-Q3"), "Indicator", "Maryland New Hires by Education");

                            newHireData4 = dimple.filterData(dimple.filterData(newHireData, "Time", "2016-Q4"), "Indicator", "Maryland New Hires by Education");

                            newHireData5 = dimple.filterData(dimple.filterData(newHireData, "Time", "2017-Q1"), "Indicator", "Maryland New Hires by Education");

                            newHireData6 = dimple.filterData(dimple.filterData(newHireData, "Time", "2017-Q2"), "Indicator", "Maryland New Hires by Education");

                            newHireData7 = dimple.filterData(dimple.filterData(newHireData, "Time", "2017-Q3"), "Indicator", "Maryland New Hires by Education");
        
                            newHireData8 = dimple.filterData(dimple.filterData(newHireData, "Time", "2017-Q4"), "Indicator", "Maryland New Hires by Education");
        
                            newHireData9 = dimple.filterData(dimple.filterData(newHireData, "Time", "2018-Q1"), "Indicator", "Maryland New Hires by Education");
        
                            /*newHireData10 = dimple.filterData(dimple.filterData(newHireData, "Time", "2016Q4"), "Indicator", "Maryland New Hires by Education");
        
                            newHireData01 = dimple.filterData(dimple.filterData(newHireData, "Time", "2017Q1"), "Indicator", "Maryland New Hires by Education");
        
                            newHireData02 = dimple.filterData(dimple.filterData(newHireData, "Time", "2017Q2"), "Indicator", "Maryland New Hires by Education");
*/
                            newHireData11 = dimple.filterData(dimple.filterData(newHireData, "Time", "2016-Q1"), "Indicator", "Maryland New Hires by Gender");

                            newHireData21 = dimple.filterData(dimple.filterData(newHireData, "Time", "2016-Q2"), "Indicator", "Maryland New Hires by Gender");

                            newHireData31 = dimple.filterData(dimple.filterData(newHireData, "Time", "2016-Q3"), "Indicator", "Maryland New Hires by Gender");

                            newHireData41 = dimple.filterData(dimple.filterData(newHireData, "Time", "2016-Q4"), "Indicator", "Maryland New Hires by Gender");

                            newHireData51 = dimple.filterData(dimple.filterData(newHireData, "Time", "2017-Q1"), "Indicator", "Maryland New Hires by Gender");

                            newHireData61 = dimple.filterData(dimple.filterData(newHireData, "Time", "2017-Q2"), "Indicator", "Maryland New Hires by Gender");

                            newHireData71 = dimple.filterData(dimple.filterData(newHireData, "Time", "2017-Q3"), "Indicator", "Maryland New Hires by Gender");
        
                            newHireData81 = dimple.filterData(dimple.filterData(newHireData, "Time", "2017-Q4"), "Indicator", "Maryland New Hires by Gender");
        
                            newHireData82 = dimple.filterData(dimple.filterData(newHireData, "Time", "2018-Q1"), "Indicator", "Maryland New Hires by Gender");
        
                            /*newHireData83 = dimple.filterData(dimple.filterData(newHireData, "Time", "2016Q4"), "Indicator", "Maryland New Hires by Gender");
        
                            newHireData84 = dimple.filterData(dimple.filterData(newHireData, "Time", "2017Q1"), "Indicator", "Maryland New Hires by Gender");
        
                            newHireData85 = dimple.filterData(dimple.filterData(newHireData, "Time", "2017Q2"), "Indicator", "Maryland New Hires by Gender");*/
        
                            var newHireChart = new dimple.chart(svg13, newHireData8);
                            newHireChart.setBounds("11%", "8%", "35%", "45%")
                            var ethX = newHireChart.addCategoryAxis("x", "Indicator Value")
                            var ethY = newHireChart.addMeasureAxis("y", "Amount");
                          //  ethY.overrideMax = .30;
                            ethX.title = " ";
                            ethY.title = "New Hires";
                            newHireChart.addSeries("Indicator Value", dimple.plot.bar);
               //            var ethLegend = newHireChart.addLegend("86%", "70%", "26%", "10%", "right");
                            
                            ethY.tickFormat = ',f';
                            newHireChart.assignColor("Less than High school", "#4dc3ff", "black", 0.7);
                            newHireChart.assignColor("High school", "#ff5c33", "black", 0.7);
                            newHireChart.assignColor("Some college", "#66ff66", "black", 0.7);
                            newHireChart.assignColor("Bachelor's or Higher", "#ffdb4d", "black", 0.7);
                            newHireChart.assignColor("N/A", "#919191", "black", 0.7);
                            
                            newHireChart.assignColor("Male", "#3366ff","black", 0.7);
                            newHireChart.assignColor("Female", "pink","black", 0.7);
                            newHireChart.draw();
        
                            ethX.addOrderRule(["Less than High school", "High school", "Some college", "Bachelor's or Higher", "N/A", "Female", "Male"]);
        
                            var pnewHireChart = new dimple.chart(print13, newHireData8);
                            pnewHireChart.setBounds("14%", "8%", "35%", 200)
                            var pethX = pnewHireChart.addCategoryAxis("x", "Indicator Value")
                            var pethY = pnewHireChart.addMeasureAxis("y", "Amount");
                          //  ethY.overrideMax = .30;
                            pethX.title = " ";
                            pethY.title = "New Hires";
                            pnewHireChart.addSeries("Indicator Value", dimple.plot.bar);
               //            var ethLegend = newHireChart.addLegend("86%", "70%", "26%", "10%", "right");
                            
                            pethY.tickFormat = ',f';
                            pnewHireChart.assignColor("Less than High school", "#4dc3ff", "black", 0.7);
                            pnewHireChart.assignColor("High school", "#ff5c33", "black", 0.7);
                            pnewHireChart.assignColor("Some college", "#66ff66", "black", 0.7);
                            pnewHireChart.assignColor("Bachelor's or Higher", "#ffdb4d", "black", 0.7);
                            pnewHireChart.assignColor("N/A", "#919191", "black", 0.7);
                            
                            pnewHireChart.assignColor("Male", "#3366ff","black", 0.7);
                            pnewHireChart.assignColor("Female", "pink","black", 0.7);
        
                            pnewHireChart.draw();
        
                            pethX.addOrderRule(["Less than High school", "High school", "Some college", "Bachelor's or Higher", "N/A", "Female", "Male"]);
        
        /*svg13.append("text")
                       .attr("x", (jc._xPixels() + jc._widthPixels() / 2)-200)
                       .attr("y", jc._yPixels() - 20)
                       .style("text-anchor", "left")
                       .style("font-family", "sans-serif")
        .style("font-size", "15px")
                       .text("Job Net Changes")
        
        svg13.append("text")  
                       .attr("x", (newHireChart._xPixels() + newHireChart._widthPixels() / 2)-200)
                       .attr("y", newHireChart._yPixels() - 20)
                       .style("text-anchor", "left")
                       .style("font-family", "sans-serif")
        .style("font-size", "15px")
                       .text("New Hires")*/
        
                //chart 4 end
        
        //chart 5
        
               
                            
                            turnOverData = dimple.filterData(dimple.filterData(dimple.filterData(data, "Time", ["2016-Q1", "2016-Q2", "2016-Q3", "2016-Q4", "2017-Q1", "2017-Q2", "2017-Q3", "2017-Q4", "2018-Q1"]), "Indicator", ["Maryland Turnover Rate by Education", "Maryland Turnover Rate by Gender", "Maryland Workers by Industry"]), "Location", CountyName2);

                            turnOverData1 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2016-Q1"), "Indicator", "Maryland Turnover Rate by Education");

                            turnOverData2 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2016-Q2"), "Indicator", "Maryland Turnover Rate by Education");

                            turnOverData3 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2016-Q3"), "Indicator", "Maryland Turnover Rate by Education");

                            turnOverData4 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2016-Q4"), "Indicator", "Maryland Turnover Rate by Education");

                            turnOverData5 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2017-Q1"), "Indicator", "Maryland Turnover Rate by Education");

                            turnOverData6 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2017-Q2"), "Indicator", "Maryland Turnover Rate by Education");

                            turnOverData7 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2017-Q3"), "Indicator", "Maryland Turnover Rate by Education");
        
                            turnOverData8 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2017-Q4"), "Indicator", "Maryland Turnover Rate by Education");
        
                            turnOverData9 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2018-Q1"), "Indicator", "Maryland Turnover Rate by Education");
        
                           /* turnOverData10 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2016Q4"), "Indicator", "Maryland Turnover Rate by Education");*/

                            turnOverData11 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2016-Q1"), "Indicator", "Maryland Turnover Rate by Gender");

                            turnOverData21 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2016-Q2"), "Indicator", "Maryland Turnover Rate by Gender");

                            turnOverData31 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2016-Q3"), "Indicator", "Maryland Turnover Rate by Gender");

                            turnOverData41 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2016-Q4"), "Indicator", "Maryland Turnover Rate by Gender");

                            turnOverData51 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2017-Q1"), "Indicator", "Maryland Turnover Rate by Gender");

                            turnOverData61 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2017-Q2"), "Indicator", "Maryland Turnover Rate by Gender");

                            turnOverData71 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2017-Q3"), "Indicator", "Maryland Turnover Rate by Gender");
        
                            turnOverData81 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2017-Q4"), "Indicator", "Maryland Turnover Rate by Gender");
        
                            turnOverData82 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2018-Q1"), "Indicator", "Maryland Turnover Rate by Gender");
        
                          /*  turnOverData83 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2016Q4"), "Indicator", "Maryland Turnover Rate by Gender");*/
        
                            var turnChart = new dimple.chart(svg14, turnOverData7);
                            turnChart.setBounds("9%", "12%", "80%", "45%")
                            var vetX = turnChart.addCategoryAxis("x", "Indicator Value")
                           
                            
                            var vetY = turnChart.addMeasureAxis("y", "Amount");
                          //  vetY.overrideMax = .30;
                            turnChart.addSeries("Indicator Value", dimple.plot.bar);
                       //      vetX.addOrderRule(["Veteran, Non Veteran"]);
                            vetY.tickFormat = '.2%';
                            vetY.title = "Turnover Rate";
                            vetX.title = " ";
                            
                       //     var vetLegend = turnChart.addLegend("16%", "90%", "50%", "70%", "right");
                            turnChart.assignColor("Less than High school", "#4dc3ff", "black", 0.7);
                            turnChart.assignColor("High school", "#ff5c33", "black", 0.7);
                            turnChart.assignColor("Some college", "#66ff66", "black", 0.7);
                            turnChart.assignColor("Bachelor's or Higher", "#ffdb4d", "black", 0.7);
                            turnChart.assignColor("N/A", "#919191", "black", 0.7);
                            
                            turnChart.assignColor("Male", "#3366ff","black", 0.7);
                            turnChart.assignColor("Female", "pink","black", 0.7);
                            turnChart.draw();
                            vetX.title = " ";
        
                            vetX.addOrderRule(["Less than High school", "High school", "Some college", "Bachelor's or Higher", "N/A", "Female", "Male"]);
        
        
                            vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                            
        var pturnChart = new dimple.chart(print14, turnOverData7);
                            pturnChart.setBounds("14%", "12%", "80%", 150)
                            var pvetX = pturnChart.addCategoryAxis("x", "Indicator Value")
                           
                            
                            var pvetY = pturnChart.addMeasureAxis("y", "Amount");
                          //  vetY.overrideMax = .30;
                            pturnChart.addSeries("Indicator Value", dimple.plot.bar);
                       //      vetX.addOrderRule(["Veteran, Non Veteran"]);
                            pvetY.tickFormat = '.2%';
                            pvetY.title = "Turnover Rate";
                            pvetX.title = " ";
                            pturnChart.assignColor("Less than High school", "#4dc3ff", "black", 0.7);
                            pturnChart.assignColor("High school", "#ff5c33", "black", 0.7);
                            pturnChart.assignColor("Some college", "#66ff66", "black", 0.7);
                            pturnChart.assignColor("Bachelor's or Higher", "#ffdb4d", "black", 0.7);
                            pturnChart.assignColor("N/A", "#919191", "black", 0.7);
                            
                            pturnChart.assignColor("Male", "#3366ff","black", 0.7);
                            pturnChart.assignColor("Female", "pink","black", 0.7);
                            
                       //     var vetLegend = turnChart.addLegend("16%", "90%", "50%", "70%", "right");
                            pturnChart.draw();
                            pvetX.title = " ";
        
                            pvetX.addOrderRule(["Less than High school", "High school", "Some college", "Bachelor's or Higher", "N/A", "Female", "Male"]);
        
        
                            pvetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                            
        
        /*svg14.append("text")  
                       .attr("x", (turnChart._xPixels() + turnChart._widthPixels() / 2)-200)
                       .attr("y", turnChart._yPixels() - 20)
                       .style("text-anchor", "left")
                       .style("font-family", "sans-serif")
        .style("font-size", "15px")
                       .text("Turnover Rate")*/
        
                
        
        
       
       
            
  
  //wChart.addSeries("Location", dimple.plot.line);


   

                            
                           
        
        //chart 5 end
        
        //Chart 6 - QCEW
        
                
                            
                            wdata1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Workers by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2016-Q1"  );
        
                            wdata2 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Workers by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2016-Q2"  );
        
                            wdata3 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Workers by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2016-Q3"  );
        
                            wdata4 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Workers by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2016-Q4"  );
        
                            wdata5 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Workers by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2017-Q1"  );
        
                            wdata6 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Workers by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2017-Q2"  );
                    
                            wdata7 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Workers by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2017-Q3"  );
                    
                    
                            wdata8 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Workers by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2017-Q4"  );
                    
                            wdata9 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Workers by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2018-Q1"  );
                    
                           /* wdata10 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Workers by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2016Q4"  );
                    
                            wdata01 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Workers by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2017Q1"  );
                    
                            wdata02 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Workers by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2017Q2"  );*/
        
                            avgdata1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Average Monthly Earnings by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2016-Q1"  );
        
                            avgdata2 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Average Monthly Earnings by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2016-Q2"  );
        
                            avgdata3 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Average Monthly Earnings by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2016-Q3"  );
        
                            avgdata4 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Average Monthly Earnings by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2016-Q4"  );
        
                            avgdata5 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Average Monthly Earnings by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2017-Q1"  );
        
                            avgdata6 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Average Monthly Earnings by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2017-Q2"  );
                    
                            avgdata7 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Average Monthly Earnings by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2017-Q3"  );
                    
                            avgdata8 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Average Monthly Earnings by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2017-Q4"  );
                    
                            avgdata9 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Average Monthly Earnings by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2018-Q1"  );
                    
                            /*avgdata10 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Average Monthly Earnings by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2016Q4"  );

                            */
        
                            netdata1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Job Net Change by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2016-Q1"  );
        
                            netdata2 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Job Net Change by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2016-Q2"  );
        
                            netdata3 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Job Net Change by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2016-Q3"  );
        
                            netdata4 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Job Net Change by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2016-Q4"  );
        
                            netdata5 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Job Net Change by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2017-Q1"  );
        
                            netdata6 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Job Net Change by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2017-Q2"  );
                    
                            netdata7 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Job Net Change by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2017-Q3"  );
                    
                            netdata8 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Job Net Change by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2017-Q4"  );
                    
                            netdata9 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Job Net Change by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2018-Q1"  );
                    
                            /*netdata10 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Job Net Change by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2016Q4"  );*/
        
                            turndata1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Turnover Rate by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2016-Q1"  );
        
                            turndata2 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Turnover Rate by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2016-Q2"  );
        
                            turndata3 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Turnover Rate by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2016-Q3"  );
        
                            turndata4 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Turnover Rate by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2016-Q4"  );
        
                            turndata5 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Turnover Rate by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2017-Q1"  );
        
                            turndata6 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Turnover Rate by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2017-Q2"  );
                    
                            turndata7 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Turnover Rate by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2017-Q3"  );
                    
                            turndata8 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Turnover Rate by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2017-Q4"  );
                    
                            turndata9 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Turnover Rate by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2018-Q1"  );
                    
                            /*turndata10 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Turnover Rate by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2016Q4"  );*/
        
                            hiredata1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland New Hires by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2016-Q1"  );
        
                            hiredata2 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland New Hires by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2016-Q2"  );
        
                            hiredata3 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland New Hires by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2016-Q3"  );
        
                            hiredata4 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland New Hires by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2016-Q4"  );
        
                            hiredata5 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland New Hires by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2017-Q1"  );
        
                            hiredata6 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland New Hires by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2017-Q2"  );
                    
                            hiredata7 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland New Hires by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2017-Q3"  );
                    
                            hiredata8 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland New Hires by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2017-Q4"  );
                    
                            hiredata9 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland New Hires by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2018-Q1"  );
                    
                            /*hiredata10 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland New Hires by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2016Q4"  );
                    
                            hiredata01 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland New Hires by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2017Q1"  );
                    
                            hiredata02 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland New Hires by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName1), "Time", "2017Q2"  );*/
        
                            
        
                            var wiaChart = new dimple.chart(svg15, wdata8);
                            wiaChart.setBounds("9%", "12%", "50%", "50%")
                            
                            var x2 = wiaChart.addCategoryAxis("x", ["Time", "Indicator Value"]);
                            //wiaChart.addCategoryAxis("x", "Time");
                            var y2 = wiaChart.addMeasureAxis("y", "Amount");
                            y2.tickFormat = ',f';
                            var series8 = wiaChart.addSeries("Indicator Value", dimple.plot.bar);
                            var qLegend = wiaChart.addLegend("65%", "5%", "40%", "95%");
                            qLegend.fontSize = "1px";
                            series8.addOrderRule(true);
        
                            x2.title = " ";
                            var e71 = document.getElementById("btn101");
                            var strUser71 = e71.options[e71.selectedIndex].text;
                            y2.title = strUser71;
        
                            wiaChart.assignColor("Accommodation and Food Services", "red", "black", 0.8);
                            wiaChart.assignColor("Administrative and Support and Waste Management and Remediation Services", "Green", "black", 0.8);
                            wiaChart.assignColor("Agriculture, Forestry, Fishing and Hunting", "Yellow", "black", 0.8);
                            wiaChart.assignColor("Arts, Entertainment, and Recreation", "blue", "black", 0.8);
                            wiaChart.assignColor("Construction", "Orange", "black", 0.8);
                            wiaChart.assignColor("Educational Services", "Purple", "black", 0.8);
                            wiaChart.assignColor("Finance and Insurance", "Cyan", "black", 0.8);
                            wiaChart.assignColor("Health Care and Social Assistance", "Magenta", "black", 0.8);
        
        //needs new colors
                            wiaChart.assignColor("Information", "Lime","black", 0.8);
                            wiaChart.assignColor("Management of Companies and Enterprises", "Pink","black", 0.8);
        
        
                            wiaChart.assignColor("Manufacturing", "Teal", "black", 0.8);
                            wiaChart.assignColor("Mining, Quarrying, and Oil and Gas Extraction", "Lavender", "black", 0.8);
                            wiaChart.assignColor("Other Services (except Public Administration)", "Brown", "black", 0.8);
                            wiaChart.assignColor("Professional, Scientific, and Technical Services", "Beige", "black", 0.8);
                            wiaChart.assignColor("Public Administration", "Maroon", "black", 0.8);
                            wiaChart.assignColor("Real Estate and Rental and Leasing", "#aaffc3", "black", 0.8);
                            wiaChart.assignColor("Retail Trade", "Olive", "black", 0.8);
                            wiaChart.assignColor("Transportation and Warehousing", "Coral", "black", 0.8);
                            wiaChart.assignColor("Utilities", "Navy","black", 0.8);
                            wiaChart.assignColor("Wholesale Trade", "Grey","black", 0.8);
                            wiaChart.draw();
                    
                            x2.addOrderRule("Indicator Value");
                            //x2.addGroupOrderRule("Time", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]);
        
                            var pwiaChart = new dimple.chart(print15, wdata8);
                            pwiaChart.setBounds("9%", "12%", "50%", 300)
                            var px2 = pwiaChart.addCategoryAxis("x", ["Time", "Indicator Value"]);
                            var py2 = pwiaChart.addMeasureAxis("y", "Amount");
                            py2.tickFormat = ',f';
                            var pseries8 = pwiaChart.addSeries("Indicator Value", dimple.plot.bar);
                            var pqLegend = pwiaChart.addLegend("65%", "5%", "40%", "95%");
                            pqLegend.fontSize = "1px";
                            pseries8.addOrderRule(true);
        
                            px2.title = " ";
                            var pe71 = document.getElementById("btn101");
                            var pstrUser71 = pe71.options[pe71.selectedIndex].text;
                            py2.title = pstrUser71;
                            pwiaChart.assignColor("Accommodation and Food Services", "red", "black", 0.8);
                            pwiaChart.assignColor("Administrative and Support and Waste Management and Remediation Services", "Green", "black", 0.8);
                            pwiaChart.assignColor("Agriculture, Forestry, Fishing and Hunting", "Yellow", "black", 0.8);
                            pwiaChart.assignColor("Arts, Entertainment, and Recreation", "blue", "black", 0.8);
                            pwiaChart.assignColor("Construction", "Orange", "black", 0.8);
                            pwiaChart.assignColor("Educational Services", "Purple", "black", 0.8);
                            pwiaChart.assignColor("Finance and Insurance", "Cyan", "black", 0.8);
                            pwiaChart.assignColor("Health Care and Social Assistance", "Magenta", "black", 0.8);
        
        //needs new colors
                            pwiaChart.assignColor("Information", "Lime","black", 0.8);
                            pwiaChart.assignColor("Management of Companies and Enterprises", "Pink","black", 0.8);
        
        
                            pwiaChart.assignColor("Manufacturing", "Teal", "black", 0.8);
                            pwiaChart.assignColor("Mining, Quarrying, and Oil and Gas Extraction", "Lavender", "black", 0.8);
                            pwiaChart.assignColor("Other Services (except Public Administration)", "Brown", "black", 0.8);
                            pwiaChart.assignColor("Professional, Scientific, and Technical Services", "Beige", "black", 0.8);
                            pwiaChart.assignColor("Public Administration", "Maroon", "black", 0.8);
                            pwiaChart.assignColor("Real Estate and Rental and Leasing", "#aaffc3", "black", 0.8);
                            pwiaChart.assignColor("Retail Trade", "Olive", "black", 0.8);
                            pwiaChart.assignColor("Transportation and Warehousing", "Coral", "black", 0.8);
                            pwiaChart.assignColor("Utilities", "Navy","black", 0.8);
                            pwiaChart.assignColor("Wholesale Trade", "Grey","black", 0.8);
        
                            pwiaChart.draw();
        
        
        //seperation
        
                          isepdata1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016-Q1"  );
        
                           isepdata2 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016-Q2"  );

                           isepdata3 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016-Q3"  );

                           isepdata4 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016-Q4"  );

                           isepdata5 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017-Q1"  );

                           isepdata6 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017-Q2"  );

                           isepdata7 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017-Q3"  );

                           isepdata8 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017-Q4"  );
        
                           asepdata1 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation by Age"), "Location", CountyName2), "Time", "2016-Q1");
        
                           asepdata2 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation by Age"), "Location", CountyName2), "Time", "2016-Q2");

                           asepdata3 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation by Age"), "Location", CountyName2), "Time", "2016-Q3");

                           asepdata4 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation by Age"), "Location", CountyName2), "Time", "2016-Q4");

                           asepdata5 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation by Age"), "Location", CountyName2), "Time", "2017-Q1");
                           asepdata6 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation by Age"), "Location", CountyName2), "Time", "2017-Q2");

                           asepdata7 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation by Age"), "Location", CountyName2), "Time", "2017-Q3");

                           asepdata8 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation by Age"), "Location", CountyName2), "Time", "2017-Q4");
        
                           gsepdata1 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation by Gender"), "Location", CountyName2), "Time", "2016-Q1");
        
                           gsepdata2 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation by Gender"), "Location", CountyName2), "Time", "2016-Q2");

                           gsepdata3 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation by Gender"), "Location", CountyName2), "Time", "2016-Q3");

                           gsepdata4 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation by Gender"), "Location", CountyName2), "Time", "2016-Q4");

                           gsepdata5 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation by Gender"), "Location", CountyName2), "Time", "2017-Q1");
                           gsepdata6 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation by Gender"), "Location", CountyName2), "Time", "2017-Q2");

                           gsepdata7 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation by Gender"), "Location", CountyName2), "Time", "2017-Q3");

                           gsepdata8 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation by Gender"), "Location", CountyName2), "Time", "2017-Q4");
        
                           esepdata1 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation by Education"), "Location", CountyName2), "Time", "2016-Q1");
        
                           esepdata2 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation by Education"), "Location", CountyName2), "Time", "2016-Q2");

                           esepdata3 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation by Education"), "Location", CountyName2), "Time", "2016-Q3");

                           esepdata4 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation by Education"), "Location", CountyName2), "Time", "2016-Q4");

                           esepdata5 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation by Education"), "Location", CountyName2), "Time", "2017-Q1");
                           esepdata6 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation by Education"), "Location", CountyName2), "Time", "2017-Q2");

                           esepdata7 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation by Education"), "Location", CountyName2), "Time", "2017-Q3");

                           esepdata8 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation by Education"), "Location", CountyName2), "Time", "2017-Q4");

                          

        
                             var chart61 = new dimple.chart(svg71, isepdata8);
                            chart61.setBounds("9%", "12%", "50%", "50%")
                            var px2 = chart61.addCategoryAxis("x", ["Time", "Indicator Value"]);
                            var sepy2 = chart61.addMeasureAxis("y", "Amount");
                            py2.tickFormat = ',f';
                            var pseries8 = chart61.addSeries("Indicator Value", dimple.plot.bar);
                            var pqLegend = chart61.addLegend("65%", "5%", "40%", "95%");
                            pqLegend.fontSizechart61 = "1px";
                            pseries8.addOrderRule(true);
        
                            chart61.assignColor("Accommodation and Food Services", "red", "black", 0.8);
                            chart61.assignColor("Administrative and Support and Waste Management and Remediation Services", "Green", "black", 0.8);
                            chart61.assignColor("Agriculture, Forestry, Fishing and Hunting", "Yellow", "black", 0.8);
                            chart61.assignColor("Arts, Entertainment, and Recreation", "blue", "black", 0.8);
                            chart61.assignColor("Construction", "Orange", "black", 0.8);
                            chart61.assignColor("Educational Services", "Purple", "black", 0.8);
                            chart61.assignColor("Finance and Insurance", "Cyan", "black", 0.8);
                            chart61.assignColor("Health Care and Social Assistance", "Magenta", "black", 0.8);
        
        //needs new colors
                            chart61.assignColor("Information", "Lime","black", 0.8);
                            chart61.assignColor("Management of Companies and Enterprises", "Pink","black", 0.8);
        
        
                            chart61.assignColor("Manufacturing", "Teal", "black", 0.8);
                            chart61.assignColor("Mining, Quarrying, and Oil and Gas Extraction", "Lavender", "black", 0.8);
                            chart61.assignColor("Other Services (except Public Administration)", "Brown", "black", 0.8);
                            chart61.assignColor("Professional, Scientific, and Technical Services", "Beige", "black", 0.8);
                            chart61.assignColor("Public Administration", "Maroon", "black", 0.8);
                            chart61.assignColor("Real Estate and Rental and Leasing", "#aaffc3", "black", 0.8);
                            chart61.assignColor("Retail Trade", "Olive", "black", 0.8);
                            chart61.assignColor("Transportation and Warehousing", "Coral", "black", 0.8);
                            chart61.assignColor("Utilities", "Navy","black", 0.8);
                            chart61.assignColor("Wholesale Trade", "Grey","black", 0.8);
                            chart61.assignColor("Less than High school", "#4dc3ff", "black", 0.7);
                            chart61.assignColor("High school", "#ff5c33", "black", 0.7);
                            chart61.assignColor("Some college", "#66ff66", "black", 0.7);
                            chart61.assignColor("Bachelor's or Higher", "#ffdb4d", "black", 0.7);
                            chart61.assignColor("N/A", "#919191", "black", 0.7);
                            chart61.assignColor("Age 14-18", "#4dc3ff", "black", 0.7);
                            chart61.assignColor("Age 19-21", "#ff5c33", "black", 0.7);
                            chart61.assignColor("Age 22-24", "#66ff66", "black", 0.7);
                            chart61.assignColor("Age 25-34", "#ffdb4d", "black", 0.7);
                            chart61.assignColor("Age 35-44", "#ffb84d", "black", 0.7);
                            chart61.assignColor("Age 45-54", "#00cccc", "black", 0.7);
                            chart61.assignColor("Age 55-64", "#6666ff", "black", 0.7);
                            chart61.assignColor("Age 65-99", "#ffcc99", "black", 0.7);
                            
                            chart61.assignColor("Male", "#3366ff","black", 0.7);
                            chart61.assignColor("Female", "pink","black", 0.7);
                            
                            var pe712 = document.getElementById("btn102");
                            var pstrUser712 = pe712.options[pe712.selectedIndex].text;
                            sepy2.title = pstrUser712;
                            px2.title = " ";
        
                            chart61.draw();
        
                            var pchart61 = new dimple.chart(print71, isepdata8);
                            pchart61.setBounds("9%", "12%", "50%", 300)
                            var px2 = pchart61.addCategoryAxis("x", ["Time", "Indicator Value"]);
                            var psepy2 = pchart61.addMeasureAxis("y", "Amount");
                            py2.tickFormat = ',f';
                            var pseries8 = pchart61.addSeries("Indicator Value", dimple.plot.bar);
                            var pqLegend = pchart61.addLegend("65%", "5%", "40%", "95%");
                            pqLegend.fontSize = "1px";
                            pseries8.addOrderRule(true);
        
                            pchart61.assignColor("Accommodation and Food Services", "red", "black", 0.8);
                            pchart61.assignColor("Administrative and Support and Waste Management and Remediation Services", "Green", "black", 0.8);
                            pchart61.assignColor("Agriculture, Forestry, Fishing and Hunting", "Yellow", "black", 0.8);
                            pchart61.assignColor("Arts, Entertainment, and Recreation", "blue", "black", 0.8);
                            pchart61.assignColor("Construction", "Orange", "black", 0.8);
                            pchart61.assignColor("Educational Services", "Purple", "black", 0.8);
                            pchart61.assignColor("Finance and Insurance", "Cyan", "black", 0.8);
                            pchart61.assignColor("Health Care and Social Assistance", "Magenta", "black", 0.8);
        
        //needs new colors
                            pchart61.assignColor("Information", "Lime","black", 0.8);
                            pchart61.assignColor("Management of Companies and Enterprises", "Pink","black", 0.8);
        
        
                            pchart61.assignColor("Manufacturing", "Teal", "black", 0.8);
                            pchart61.assignColor("Mining, Quarrying, and Oil and Gas Extraction", "Lavender", "black", 0.8);
                            pchart61.assignColor("Other Services (except Public Administration)", "Brown", "black", 0.8);
                            pchart61.assignColor("Professional, Scientific, and Technical Services", "Beige", "black", 0.8);
                            pchart61.assignColor("Public Administration", "Maroon", "black", 0.8);
                            pchart61.assignColor("Real Estate and Rental and Leasing", "#aaffc3", "black", 0.8);
                            pchart61.assignColor("Retail Trade", "Olive", "black", 0.8);
                            pchart61.assignColor("Transportation and Warehousing", "Coral", "black", 0.8);
                            pchart61.assignColor("Utilities", "Navy","black", 0.8);
                            pchart61.assignColor("Wholesale Trade", "Grey","black", 0.8);
                            pchart61.assignColor("Less than High school", "#4dc3ff", "black", 0.7);
                            pchart61.assignColor("High school", "#ff5c33", "black", 0.7);
                            pchart61.assignColor("Some college", "#66ff66", "black", 0.7);
                            pchart61.assignColor("Bachelor's or Higher", "#ffdb4d", "black", 0.7);
                            pchart61.assignColor("N/A", "#919191", "black", 0.7);
                            pchart61.assignColor("Age 14-18", "#4dc3ff", "black", 0.7);
                            pchart61.assignColor("Age 19-21", "#ff5c33", "black", 0.7);
                            pchart61.assignColor("Age 22-24", "#66ff66", "black", 0.7);
                            pchart61.assignColor("Age 25-34", "#ffdb4d", "black", 0.7);
                            pchart61.assignColor("Age 35-44", "#ffb84d", "black", 0.7);
                            pchart61.assignColor("Age 45-54", "#00cccc", "black", 0.7);
                            pchart61.assignColor("Age 55-64", "#6666ff", "black", 0.7);
                            pchart61.assignColor("Age 65-99", "#ffcc99", "black", 0.7);
                            
                            pchart61.assignColor("Male", "#3366ff","black", 0.7);
                            pchart61.assignColor("Female", "pink","black", 0.7);
                            
                            var pe712 = document.getElementById("btn102");
                            var pstrUser712 = pe712.options[pe712.selectedIndex].text;
                            py2.title = pstrUser712;
                            px2.title = " ";
        
                            pchart61.draw();
        
        
        //chart 8 button
        
        //new apprenticeship programs
        
        aprog1 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "New Maryland Apprenticeship Programs"), "Location", CountyName2), "Time", "2016");
        
        aprog2 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "New Maryland Apprenticeship Programs"), "Location", CountyName2), "Time", "2017");
        
        aprog3 = dimple.filterData(dimple.filterData(data, "Indicator", "New Maryland Apprenticeship Programs"), "Location", CountyName2);
        
                            var aprogChart = new dimple.chart(svg81, aprog3);
                            aprogChart.setBounds("9%", "12%", "80%", "60%")
                            var px2 = aprogChart.addCategoryAxis("x", ["Time", "Indicator Value"]);
                            var py2 = aprogChart.addMeasureAxis("y", "Amount");
                            py2.tickFormat = ',f';
                            var prog8 = aprogChart.addSeries("Indicator Value", dimple.plot.bar);
                            //var pqLegend = aprogChart.addLegend("65%", "5%", "40%", "95%");
                            pqLegend.fontSizechart61 = "1px";
                            prog8.addOrderRule(true);
        
                            aprogChart.draw();
        
                            var paprogChart = new dimple.chart(print81, aprog3);
                            paprogChart.setBounds("10%", "12%", "50%", 300)
                            var px2 = paprogChart.addCategoryAxis("x", ["Time", "Indicator Value"]);
                            var py2 = paprogChart.addMeasureAxis("y", "Amount");
                            py2.tickFormat = ',f';
                            var pprog8 = paprogChart.addSeries("Indicator Value", dimple.plot.bar);
                            //var pqLegend = paprogChart.addLegend("65%", "5%", "40%", "95%");
                            pqLegend.fontSize = "1px";
                            pprog8.addOrderRule(true);
        
                            paprogChart.draw();

        //Maryland Apprentices
        
         aNew1 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Apprentices"), "Location", CountyName2), "Time", "2016");
        
        aNew2 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Apprentices"), "Location", CountyName2), "Time", "2017");
        
        aNew3 = dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Apprentices"), "Location", CountyName2)
        
                            var aNewChart = new dimple.chart(svg91, aNew3);
                            aNewChart.setBounds("10%", "12%", "80%", "60%")
                            var px2 = aNewChart.addCategoryAxis("x", ["Time", "Indicator Value"]);
                            var py2 = aNewChart.addMeasureAxis("y", "Amount");
                            py2.tickFormat = ',f';
                            var newApp = aNewChart.addSeries("Indicator Value", dimple.plot.bar);
                            
                            //var pqLegend = aNewChart.addLegend("65%", "5%", "40%", "95%");
                            pqLegend.fontSizechart61 = "1px";
                            newApp.addOrderRule(["New Apprentices", "Active Apprentices"]);
        
                            aNewChart.draw();
        
                             var paNewChart = new dimple.chart(print91, aNew3);
                            paNewChart.setBounds("9%", "12%", "50%", "50%")
                            var px2 = paNewChart.addCategoryAxis("x", ["Time", "Indicator Value"]);
                            var py2 = paNewChart.addMeasureAxis("y", "Amount");
                            py2.tickFormat = ',f';
                            var pseries8 = paNewChart.addSeries("Indicator Value", dimple.plot.bar);
                            //var pqLegend = paNewChart.addLegend("65%", "5%", "40%", "95%");
                            pqLegend.fontSizechart61 = "1px";
                            pseries8.addOrderRule(true);
        
                            paNewChart.draw();
        
        //chart 8 button
        
d3.select("#btn17").on("change", function() {
    dataSwapi();
 });
        
d3.select("#btn101").on("change", function() {
    dataSwapi();
});
        
        d3.select("#btn18").on("change", function() {
    dataSwapi2();
});
        
        d3.select("#btn102").on("change", function() {
    dataSwapi2();
});
        
        //Chart 6 - end
        
        //chart 9 OTM
        
        
        
        
        d3.select("#btn9").on("change", function() {
  
  
	var e7 = document.getElementById("btn9");
  var strUser7 = e7.options[e7.selectedIndex].text;
  
   
 });
        

window.dataSwapi = function () {
    y2.tickFormat = ',f';
  
  
	var e7 = document.getElementById("btn17");
    var e10 = document.getElementById("btn101");
  var strUser7 = e7.options[e7.selectedIndex].text;
  var strUser10 = e10.options[e10.selectedIndex].text;
    y2.title = strUser10;
   if(strUser7 == "2016-Q1"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           wiaChart.data = avgdata1;
       }
       if(strUser10 == "Job Net Changes"){
           wiaChart.data = netdata1;
       }
       if(strUser10 == "New Hires"){
           wiaChart.data = hiredata1;
       }
       if(strUser10 == "Turnover Rate"){
           y2.tickFormat ='.1%';
           wiaChart.data = turndata1;
       }
       if(strUser10 == "Workers"){
           wiaChart.data = wdata1;
       }
        
   }
            
   if(strUser7 == "2016-Q2"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           wiaChart.data = avgdata2;
       }
       if(strUser10 == "Job Net Changes"){
           wiaChart.data = netdata2;
       }
       if(strUser10 == "New Hires"){
           wiaChart.data = hiredata2;
       }
       if(strUser10 == "Turnover Rate"){
           y2.tickFormat ='.1%';
           wiaChart.data = turndata2;
       }
       if(strUser10 == "Workers"){
           wiaChart.data = wdata2;
       }
        
   }
            
  if(strUser7 == "2016-Q3"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           wiaChart.data = avgdata3;
       }
       if(strUser10 == "Job Net Changes"){
           wiaChart.data = netdata3;
       }
       if(strUser10 == "New Hires"){
           wiaChart.data = hiredata3;
       }
       if(strUser10 == "Turnover Rate"){
           y2.tickFormat ='.1%';
           wiaChart.data = turndata3;
       }
       if(strUser10 == "Workers"){
           wiaChart.data = wdata3;
       }
        
   }
    
if(strUser7 == "2016-Q4"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           wiaChart.data = avgdata4;
       }
       if(strUser10 == "Job Net Changes"){
           wiaChart.data = netdata4;
       }
       if(strUser10 == "New Hires"){
           wiaChart.data = hiredata4;
       }
       if(strUser10 == "Turnover Rate"){
           y2.tickFormat ='.1%';
           wiaChart.data = turndata4;
       }
       if(strUser10 == "Workers"){
           wiaChart.data = wdata4;
       }
        
   }
            
if(strUser7 == "2017-Q1"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           wiaChart.data = avgdata5;
       }
       if(strUser10 == "Job Net Changes"){
           wiaChart.data = netdata5;
       }
       if(strUser10 == "New Hires"){
           wiaChart.data = hiredata5;
       }
       if(strUser10 == "Turnover Rate"){
           y2.tickFormat ='.1%';
           wiaChart.data = turndata5;
       }
       if(strUser10 == "Workers"){
           wiaChart.data = wdata5;
       }
        
   }
            
if(strUser7 == "2017-Q2"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           wiaChart.data = avgdata6;
       }
       if(strUser10 == "Job Net Changes"){
           wiaChart.data = netdata6;
       }
       if(strUser10 == "New Hires"){
           wiaChart.data = hiredata6;
       }
       if(strUser10 == "Turnover Rate"){
           y2.tickFormat ='.1%';
           wiaChart.data = turndata6;
       }
       if(strUser10 == "Workers"){
           wiaChart.data = wdata6;
       }
        
   }
            
if(strUser7 == "2017-Q3"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           wiaChart.data = avgdata7;
       }
       if(strUser10 == "Job Net Changes"){
           wiaChart.data = netdata7;
       }
       if(strUser10 == "New Hires"){
           wiaChart.data = hiredata7;
       }
       if(strUser10 == "Turnover Rate"){
           y2.tickFormat ='.1%';
           wiaChart.data = turndata7;
       }
       if(strUser10 == "Workers"){
           wiaChart.data = wdata7;
       }
        
   }
    
    if(strUser7 == "2017-Q4"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           wiaChart.data = avgdata8;
       }
       if(strUser10 == "Job Net Changes"){
           wiaChart.data = netdata8;
       }
       if(strUser10 == "New Hires"){
           wiaChart.data = hiredata8;
       }
       if(strUser10 == "Turnover Rate"){
           y2.tickFormat ='.1%';
           wiaChart.data = turndata7;
       }
       if(strUser10 == "Workers"){
           wiaChart.data = wdata8;
       }
        
   }
    
    if(strUser7 == "2018-Q1"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           wiaChart.data = avgdata9;
       }
       if(strUser10 == "Job Net Changes"){
           wiaChart.data = netdata9;
       }
       if(strUser10 == "New Hires"){
           wiaChart.data = hiredata9;
       }
       if(strUser10 == "Turnover Rate"){
           y2.tickFormat ='.1%';
           wiaChart.data = turndata9;
       }
       if(strUser10 == "Workers"){
           wiaChart.data = wdata9;
       }
        
   }
    
    if(strUser7 == "2016Q4"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           wiaChart.data = avgdata10;
       }
       if(strUser10 == "Job Net Changes"){
           wiaChart.data = netdata10;
       }
       if(strUser10 == "New Hires"){
           wiaChart.data = hiredata10;
       }
       if(strUser10 == "Turnover Rate"){
           y2.tickFormat ='.1%';
           wiaChart.data = turndata10;
       }
       if(strUser10 == "Workers"){
           wiaChart.data = wdata10;
       }
        
        
   }
    
    if(strUser7 == "2017Q1"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           wiaChart.data = avgdata10;
       }
       if(strUser10 == "Job Net Changes"){
           wiaChart.data = netdata10;
       }
       if(strUser10 == "New Hires"){
           wiaChart.data = hiredata01;
       }
       if(strUser10 == "Turnover Rate"){
           y2.tickFormat ='.1%';
           wiaChart.data = turndata10;
       }
       if(strUser10 == "Workers"){
           wiaChart.data = wdata01;
       }
        
   }
    
    if(strUser7 == "2017Q2"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           wiaChart.data = avgdata10;
       }
       if(strUser10 == "Job Net Changes"){
           wiaChart.data = netdata10;
       }
       if(strUser10 == "New Hires"){
           wiaChart.data = hiredata02;
       }
       if(strUser10 == "Turnover Rate"){
           y2.tickFormat ='.1%';
           wiaChart.data = turndata10;
       }
       if(strUser10 == "Workers"){
           wiaChart.data = wdata02;
       }
        
   }
    py2.tickFormat = y2.tickFormat;
    pwiaChart.data = wiaChart.data;    
    pwiaChart.draw(1000);    
         
     wiaChart.draw(1000);
     
 };
        
window.dataSwapi2 = function () {
    //y2.tickFormat = ',f';
  
  
	var e71 = document.getElementById("btn18");
    var e102 = document.getElementById("btn102");
  var strUser712 = e71.options[e71.selectedIndex].text;
  var strUser101 = e102.options[e102.selectedIndex].text;
    sepy2.title = strUser101;
   if(strUser712 == "2016-Q1"){
        
       if(strUser101 == "Industry"){
           //y2.tickFormat = '$,f';
           chart61.data = isepdata1;
       }
       if(strUser101 == "Gender"){
           chart61.data = gsepdata1;
       }
       if(strUser101 == "Education"){
          chart61.data = esepdata1;
       }
       if(strUser101 == "Age"){
          chart61.data = asepdata1;
       }
       
        
   }
            
   if(strUser712 == "2016-Q2"){
        
       if(strUser101 == "Industry"){
           //y2.tickFormat = '$,f';
           chart61.data = isepdata2;
       }
       if(strUser101 == "Gender"){
           chart61.data = gsepdata2;
       }
       if(strUser101 == "Education"){
          chart61.data = esepdata2;
       }
       if(strUser101 == "Age"){
          chart61.data = asepdata2;
       }
   }
            
  if(strUser712 == "2016-Q3"){
        
       if(strUser101 == "Industry"){
           //y2.tickFormat = '$,f';
           chart61.data = isepdata3;
       }
       if(strUser101 == "Gender"){
           chart61.data = gsepdata3;
       }
       if(strUser101 == "Education"){
          chart61.data = esepdata3;
       }
       if(strUser101 == "Age"){
          chart61.data = asepdata3;
        }
   }
    
if(strUser712 == "2016-Q4"){
        
       if(strUser101 == "Industry"){
           //y2.tickFormat = '$,f';
           chart61.data = isepdata4;
       }
       if(strUser101 == "Gender"){
           chart61.data = gsepdata4;
       }
       if(strUser101 == "Education"){
          chart61.data = esepdata4;
       }
       if(strUser101 == "Age"){
          chart61.data = asepdata4;
        }
   }
            
if(strUser712 == "2017-Q1"){
        
       if(strUser101 == "Industry"){
           //y2.tickFormat = '$,f';
           chart61.data = isepdata5;
       }
       if(strUser101 == "Gender"){
           chart61.data = gsepdata5;
       }
       if(strUser101 == "Education"){
          chart61.data = esepdata5;
       }
       if(strUser101 == "Age"){
          chart61.data = asepdata5;
        }
   }
            
if(strUser712 == "2017-Q2"){
        
       if(strUser101 == "Industry"){
           //y2.tickFormat = '$,f';
           chart61.data = isepdata6;
       }
       if(strUser101 == "Gender"){
           chart61.data = gsepdata6;
       }
       if(strUser101 == "Education"){
          chart61.data = esepdata6;
       }
       if(strUser101 == "Age"){
          chart61.data = asepdata6;
        }
   }
            
if(strUser712 == "2017-Q3"){
        
       if(strUser101 == "Industry"){
           //y2.tickFormat = '$,f';
           chart61.data = isepdata7;
       }
       if(strUser101 == "Gender"){
           chart61.data = gsepdata7;
       }
       if(strUser101 == "Education"){
          chart61.data = esepdata7;
       }
       if(strUser101 == "Age"){
          chart61.data = asepdata7;
        }
   }
    
    if(strUser712 == "2017-Q4"){
        
       if(strUser101 == "Industry"){
           //y2.tickFormat = '$,f';
           chart61.data = isepdata8;
       }
       if(strUser101 == "Gender"){
           chart61.data = gsepdata8;
       }
       if(strUser101 == "Education"){
          chart61.data = esepdata8;
       }
       if(strUser101 == "Age"){
          chart61.data = asepdata8;
        }
   }
    
  /**  if(strUser7 == "2018-Q1"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           wiaChart.data = avgdata9;
       }
       if(strUser10 == "Job Net Changes"){
           wiaChart.data = netdata9;
       }
       if(strUser10 == "New Hires"){
           wiaChart.data = hiredata9;
       }
       if(strUser10 == "Turnover Rate"){
           y2.tickFormat ='.1%';
           wiaChart.data = turndata9;
       }
       if(strUser10 == "Workers"){
           wiaChart.data = wdata9;
       }
        
   }
    
    if(strUser7 == "2016Q4"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           wiaChart.data = avgdata10;
       }
       if(strUser10 == "Job Net Changes"){
           wiaChart.data = netdata10;
       }
       if(strUser10 == "New Hires"){
           wiaChart.data = hiredata10;
       }
       if(strUser10 == "Turnover Rate"){
           y2.tickFormat ='.1%';
           wiaChart.data = turndata10;
       }
       if(strUser10 == "Workers"){
           wiaChart.data = wdata10;
       }
        
        
   }
    
    if(strUser7 == "2017Q1"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           wiaChart.data = avgdata10;
       }
       if(strUser10 == "Job Net Changes"){
           wiaChart.data = netdata10;
       }
       if(strUser10 == "New Hires"){
           wiaChart.data = hiredata01;
       }
       if(strUser10 == "Turnover Rate"){
           y2.tickFormat ='.1%';
           wiaChart.data = turndata10;
       }
       if(strUser10 == "Workers"){
           wiaChart.data = wdata01;
       }
        
   }
    
    if(strUser7 == "2017Q2"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           wiaChart.data = avgdata10;
       }
       if(strUser10 == "Job Net Changes"){
           wiaChart.data = netdata10;
       }
       if(strUser10 == "New Hires"){
           wiaChart.data = hiredata02;
       }
       if(strUser10 == "Turnover Rate"){
           y2.tickFormat =',.1';
           wiaChart.data = turndata10;
       }
       if(strUser10 == "Workers"){
           wiaChart.data = wdata02;
       }
        
   } **/
    psepy2.tickFormat = sepy2.tickFormat;
    pchart61.data = chart61.data;    
    pchart61.draw(1000);    
         
     chart61.draw(1000);
     
 };
        
        

       
        
                
                    window.onresize = function () {
                      
                        

                                wChart.draw(0, true);
                                avgChart.draw(0, true);
                                jc.draw(0, true);
                                newHireChart.draw(0, true);
                                turnChart.draw(0, true);
                                
                                wiaChart.draw(0, true);
                                vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                            }; 
        
        
    window.dataSwap101 = function () {
            var e3 = document.getElementById("btn13");
            var strUser3 = e3.options[e3.selectedIndex].text;
            var e31 = document.getElementById("btn131");
            var strUser31 = e31.options[e31.selectedIndex].text;
            if (strUser3 == "2016-Q1") {
                if (strUser31 == "By Education") {
                    wChart.data = workData1;
                    avgChart.data = averageData1;
                    jc.data = jobData1;
                    newHireChart.data = newHireData1;
                    turnChart.data = turnOverData1;
                     turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                }
                if (strUser31 == "By Age") {
                    wChart.data = workData1;
                    avgChart.data = averageData1;
                    jc.data = jobData1;
                    newHireChart.data = newHireData1;
                    turnChart.data = turnOverData1;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData11;
                    avgChart.data = averageData11;
                    jc.data = jobData11;
                    newHireChart.data = newHireData11;
                    turnChart.data = turnOverData11;
                    turnChart.draw(1000);
                }
            } if (strUser3 == "2016-Q2") {
                if (strUser31 == "By Education") {
                    wChart.data = workData2;
                    avgChart.data = averageData2;
                    jc.data = jobData2;
                    newHireChart.data = newHireData2;
                    turnChart.data = turnOverData2;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Age") {
                    wChart.data = workData2;
                    avgChart.data = averageData2;
                    jc.data = jobData2;
                    newHireChart.data = newHireData2;
                    turnChart.data = turnOverData2;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData21;
                    avgChart.data = averageData21;
                    jc.data = jobData21;
                    newHireChart.data = newHireData21;
                    turnChart.data = turnOverData21;
                    turnChart.draw(1000);
                }
            } if (strUser3 == "2016-Q3") {
                if (strUser31 == "By Education") {
                    wChart.data = workData3;
                    avgChart.data = averageData3;
                    jc.data = jobData3;
                    newHireChart.data = newHireData3;
                    turnChart.data = turnOverData3;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Age") {
                    wChart.data = workData3;
                    avgChart.data = averageData3;
                    jc.data = jobData3;
                    newHireChart.data = newHireData3;
                    turnChart.data = turnOverData3;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData31;
                    avgChart.data = averageData31;
                    jc.data = jobData31;
                    newHireChart.data = newHireData31;
                    turnChart.data = turnOverData31;
                    turnChart.draw(1000);
                }
            } if (strUser3 == "2016-Q4") {
                if (strUser31 == "By Education") {
                    wChart.data = workData4;
                    avgChart.data = averageData4;
                    jc.data = jobData4;
                    newHireChart.data = newHireData4;
                    turnChart.data = turnOverData4;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Age") {
                    wChart.data = workData4;
                    avgChart.data = averageData4;
                    jc.data = jobData4;
                    newHireChart.data = newHireData4;
                    turnChart.data = turnOverData4;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData41;
                    avgChart.data = averageData41;
                    jc.data = jobData41;
                    newHireChart.data = newHireData41;
                    turnChart.data = turnOverData41;
                    turnChart.draw(1000);
                }
            } if (strUser3 == "2017-Q1") {
                if (strUser31 == "By Education") {
                    wChart.data = workData5;
                    avgChart.data = averageData5;
                    jc.data = jobData5;
                    newHireChart.data = newHireData5;
                    turnChart.data = turnOverData5;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Age") {
                    wChart.data = workData5;
                    avgChart.data = averageData5;
                    jc.data = jobData5;
                    newHireChart.data = newHireData5;
                    turnChart.data = turnOverData5;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData51;
                    avgChart.data = averageData51;
                    jc.data = jobData51;
                    newHireChart.data = newHireData51;
                    turnChart.data = turnOverData51;
                    turnChart.draw(1000);
                }
            } if (strUser3 == "2017-Q2") {
                if (strUser31 == "By Education") {
                    wChart.data = workData6;
                    avgChart.data = averageData6;
                    jc.data = jobData6;
                    newHireChart.data = newHireData6;
                    turnChart.data = turnOverData6;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Age") {
                    wChart.data = workData6;
                    avgChart.data = averageData6;
                    jc.data = jobData6;
                    newHireChart.data = newHireData6;
                    turnChart.data = turnOverData6;
                     turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData61;
                    avgChart.data = averageData61;
                    jc.data = jobData61;
                    newHireChart.data = newHireData61;
                    turnChart.data = turnOverData61;
                    turnChart.draw(1000);
                }
            } if (strUser3 == "2017-Q3") {
                if (strUser31 == "By Education") {
                    wChart.data = workData7;
                    avgChart.data = averageData7;
                    jc.data = jobData7;
                    newHireChart.data = newHireData7;
                    turnChart.data = turnOverData7;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Age") {
                    wChart.data = workData7;
                    avgChart.data = averageData7;
                    jc.data = jobData7;
                    newHireChart.data = newHireData7;
                    turnChart.data = turnOverData7;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData71;
                    avgChart.data = averageData71;
                    jc.data = jobData71;
                    newHireChart.data = newHireData71;
                    turnChart.data = turnOverData71;
                    turnChart.draw(1000);
                }



            }
           
           if (strUser3 == "2017-Q4") {
                if (strUser31 == "By Education") {
                    wChart.data = workData8;
                    avgChart.data = averageData8;
                    jc.data = jobData8;
                    newHireChart.data = newHireData8;
                    turnChart.data = turnOverData8;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Age") {
                    wChart.data = workData8;
                    avgChart.data = averageData8;
                    jc.data = jobData8;
                    newHireChart.data = newHireData8;
                    turnChart.data = turnOverData8;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData81;
                    avgChart.data = averageData81;
                    jc.data = jobData81;
                    newHireChart.data = newHireData81;
                    //turnChart.data = turnOverData81;
                    turnChart.draw(1000);
                }



            }
           
           if (strUser3 == "2018-Q1") {
                if (strUser31 == "By Education") {
                    wChart.data = workData9;
                    avgChart.data = averageData9;
                    jc.data = jobData9;
                    newHireChart.data = newHireData9;
                    turnChart.data = turnOverData9;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Age") {
                    wChart.data = workData9;
                    avgChart.data = averageData9;
                    jc.data = jobData9;
                    newHireChart.data = newHireData9;
                    turnChart.data = turnOverData9;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData82;
                    avgChart.data = averageData82;
                    jc.data = jobData82;
                    newHireChart.data = newHireData82;
                    turnChart.data = turnOverData82;
                    turnChart.draw(1000);
                }



            }
           
           if (strUser3 == "2016Q4") {
                if (strUser31 == "By Education") {
                    wChart.data = workData10;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData10;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Age") {
                    wChart.data = workData10;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData10;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData83;
                    avgChart.data = averageData83;
                    jc.data = jobData83;
                    newHireChart.data = newHireData83;
                    turnChart.data = turnOverData83;
                    turnChart.draw(1000);
                }



            }
           
           if (strUser3 == "2017Q1") {
                if (strUser31 == "By Education") {
                    wChart.data = workData01;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData01;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Age") {
                    wChart.data = workData01;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData01;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData84;
                    avgChart.data = averageData83;
                    jc.data = jobData83;
                    newHireChart.data = newHireData84;
                    turnChart.data = turnOverData83;
                    turnChart.draw(1000);
                }



            }
           
           if (strUser3 == "2017Q2") {
                if (strUser31 == "By Education") {
                    wChart.data = workData02;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData02;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Age") {
                    wChart.data = workData02;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData02;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData85;
                    avgChart.data = averageData83;
                    jc.data = jobData83;
                    newHireChart.data = newHireData85;
                    turnChart.data = turnOverData83;
                    turnChart.draw(1000);
                }



            }
            
             wChart.draw(1000);
             avgChart.draw(1000);
             jc.draw(1000);
             newHireChart.draw(1000);
             
        };
        
    window.dataSwap102 = function () {
            var e3 = document.getElementById("btn14");
            var strUser3 = e3.options[e3.selectedIndex].text;
            var e31 = document.getElementById("btn141");
            var strUser31 = e31.options[e31.selectedIndex].text;
            if (strUser3 == "2016-Q1") {
                if (strUser31 == "By Education") {
                    wChart.data = workData1;
                    avgChart.data = averageData1;
                    jc.data = jobData1;
                    newHireChart.data = newHireData1;
                    turnChart.data = turnOverData1;
                     turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                }
                if (strUser31 == "By Age") {
                    wChart.data = workData1;
                    avgChart.data = averageData1;
                    jc.data = jobData1;
                    newHireChart.data = newHireData1;
                    turnChart.data = turnOverData1;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData11;
                    avgChart.data = averageData11;
                    jc.data = jobData11;
                    newHireChart.data = newHireData11;
                    turnChart.data = turnOverData11;
                    turnChart.draw(1000);
                }
            } if (strUser3 == "2016-Q2") {
                if (strUser31 == "By Education") {
                    wChart.data = workData2;
                    avgChart.data = averageData2;
                    jc.data = jobData2;
                    newHireChart.data = newHireData2;
                    turnChart.data = turnOverData2;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Age") {
                    wChart.data = workData2;
                    avgChart.data = averageData2;
                    jc.data = jobData2;
                    newHireChart.data = newHireData2;
                    turnChart.data = turnOverData2;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData21;
                    avgChart.data = averageData21;
                    jc.data = jobData21;
                    newHireChart.data = newHireData21;
                    turnChart.data = turnOverData21;
                    turnChart.draw(1000);
                }
            } if (strUser3 == "2016-Q3") {
                if (strUser31 == "By Education") {
                    wChart.data = workData3;
                    avgChart.data = averageData3;
                    jc.data = jobData3;
                    newHireChart.data = newHireData3;
                    turnChart.data = turnOverData3;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Age") {
                    wChart.data = workData3;
                    avgChart.data = averageData3;
                    jc.data = jobData3;
                    newHireChart.data = newHireData3;
                    turnChart.data = turnOverData3;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData31;
                    avgChart.data = averageData31;
                    jc.data = jobData31;
                    newHireChart.data = newHireData31;
                    turnChart.data = turnOverData31;
                    turnChart.draw(1000);
                }
            } if (strUser3 == "2016-Q4") {
                if (strUser31 == "By Education") {
                    wChart.data = workData4;
                    avgChart.data = averageData4;
                    jc.data = jobData4;
                    newHireChart.data = newHireData4;
                    turnChart.data = turnOverData4;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Age") {
                    wChart.data = workData4;
                    avgChart.data = averageData4;
                    jc.data = jobData4;
                    newHireChart.data = newHireData4;
                    turnChart.data = turnOverData4;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData41;
                    avgChart.data = averageData41;
                    jc.data = jobData41;
                    newHireChart.data = newHireData41;
                    turnChart.data = turnOverData41;
                    turnChart.draw(1000);
                }
            } if (strUser3 == "2017-Q1") {
                if (strUser31 == "By Education") {
                    wChart.data = workData5;
                    avgChart.data = averageData5;
                    jc.data = jobData5;
                    newHireChart.data = newHireData5;
                    turnChart.data = turnOverData5;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Age") {
                    wChart.data = workData5;
                    avgChart.data = averageData5;
                    jc.data = jobData5;
                    newHireChart.data = newHireData5;
                    turnChart.data = turnOverData5;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData51;
                    avgChart.data = averageData51;
                    jc.data = jobData51;
                    newHireChart.data = newHireData51;
                    turnChart.data = turnOverData51;
                    turnChart.draw(1000);
                }
            } if (strUser3 == "2017-Q2") {
                if (strUser31 == "By Education") {
                    wChart.data = workData6;
                    avgChart.data = averageData6;
                    jc.data = jobData6;
                    newHireChart.data = newHireData6;
                    turnChart.data = turnOverData6;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Age") {
                    wChart.data = workData6;
                    avgChart.data = averageData6;
                    jc.data = jobData6;
                    newHireChart.data = newHireData6;
                    turnChart.data = turnOverData6;
                     turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData61;
                    avgChart.data = averageData61;
                    jc.data = jobData61;
                    newHireChart.data = newHireData61;
                    turnChart.data = turnOverData61;
                    turnChart.draw(1000);
                }
            } if (strUser3 == "2017-Q3") {
                if (strUser31 == "By Education") {
                    wChart.data = workData7;
                    avgChart.data = averageData7;
                    jc.data = jobData7;
                    newHireChart.data = newHireData7;
                    turnChart.data = turnOverData7;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Age") {
                    wChart.data = workData7;
                    avgChart.data = averageData7;
                    jc.data = jobData7;
                    newHireChart.data = newHireData7;
                    turnChart.data = turnOverData7;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData71;
                    avgChart.data = averageData71;
                    jc.data = jobData71;
                    newHireChart.data = newHireData71;
                    turnChart.data = turnOverData71;
                    turnChart.draw(1000);
                }



            }
           
           if (strUser3 == "2017-Q4") {
                if (strUser31 == "By Education") {
                    wChart.data = workData8;
                    avgChart.data = averageData8;
                    jc.data = jobData8;
                    newHireChart.data = newHireData8;
                    turnChart.data = turnOverData8;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Age") {
                    wChart.data = workData8;
                    avgChart.data = averageData8;
                    jc.data = jobData8;
                    newHireChart.data = newHireData8;
                    turnChart.data = turnOverData8;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData81;
                    avgChart.data = averageData81;
                    jc.data = jobData81;
                    newHireChart.data = newHireData81;
                    //turnChart.data = turnOverData81;
                    turnChart.draw(1000);
                }



            }
           
           if (strUser3 == "2018-Q1") {
                if (strUser31 == "By Education") {
                    wChart.data = workData9;
                    avgChart.data = averageData9;
                    jc.data = jobData9;
                    newHireChart.data = newHireData9;
                    turnChart.data = turnOverData9;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Age") {
                    wChart.data = workData9;
                    avgChart.data = averageData9;
                    jc.data = jobData9;
                    newHireChart.data = newHireData9;
                    turnChart.data = turnOverData9;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData82;
                    avgChart.data = averageData82;
                    jc.data = jobData82;
                    newHireChart.data = newHireData82;
                    turnChart.data = turnOverData82;
                    turnChart.draw(1000);
                }



            }
           
           if (strUser3 == "2016Q4") {
                if (strUser31 == "By Education") {
                    wChart.data = workData10;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData10;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Age") {
                    wChart.data = workData10;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData10;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData83;
                    avgChart.data = averageData83;
                    jc.data = jobData83;
                    newHireChart.data = newHireData83;
                    turnChart.data = turnOverData83;
                    turnChart.draw(1000);
                }



            }
           
           if (strUser3 == "2017Q1") {
                if (strUser31 == "By Education") {
                    wChart.data = workData01;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData01;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Age") {
                    wChart.data = workData01;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData01;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData84;
                    avgChart.data = averageData83;
                    jc.data = jobData83;
                    newHireChart.data = newHireData84;
                    turnChart.data = turnOverData83;
                    turnChart.draw(1000);
                }



            }
           
           if (strUser3 == "2017Q2") {
                if (strUser31 == "By Education") {
                    wChart.data = workData02;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData02;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Age") {
                    wChart.data = workData02;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData02;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData85;
                    avgChart.data = averageData83;
                    jc.data = jobData83;
                    newHireChart.data = newHireData85;
                    turnChart.data = turnOverData83;
                    turnChart.draw(1000);
                }



            }
            
             wChart.draw(1000);
             avgChart.draw(1000);
             jc.draw(1000);
             newHireChart.draw(1000);
             
        };
        
    window.dataSwap103 = function () {
            var e3 = document.getElementById("btn15");
            var strUser3 = e3.options[e3.selectedIndex].text;
            var e31 = document.getElementById("btn151");
            var strUser31 = e31.options[e31.selectedIndex].text;
            if (strUser3 == "2016-Q1") {
                if (strUser31 == "By Education") {
                    wChart.data = workData1;
                    avgChart.data = averageData1;
                    jc.data = jobData1;
                    newHireChart.data = newHireData1;
                    turnChart.data = turnOverData1;
                     turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                }
                if (strUser31 == "By Age") {
                    wChart.data = workData1;
                    avgChart.data = averageData1;
                    jc.data = jobData1;
                    newHireChart.data = newHireData1;
                    turnChart.data = turnOverData1;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData11;
                    avgChart.data = averageData11;
                    jc.data = jobData11;
                    newHireChart.data = newHireData11;
                    turnChart.data = turnOverData11;
                    turnChart.draw(1000);
                }
            } if (strUser3 == "2016-Q2") {
                if (strUser31 == "By Education") {
                    wChart.data = workData2;
                    avgChart.data = averageData2;
                    jc.data = jobData2;
                    newHireChart.data = newHireData2;
                    turnChart.data = turnOverData2;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Age") {
                    wChart.data = workData2;
                    avgChart.data = averageData2;
                    jc.data = jobData2;
                    newHireChart.data = newHireData2;
                    turnChart.data = turnOverData2;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData21;
                    avgChart.data = averageData21;
                    jc.data = jobData21;
                    newHireChart.data = newHireData21;
                    turnChart.data = turnOverData21;
                    turnChart.draw(1000);
                }
            } if (strUser3 == "2016-Q3") {
                if (strUser31 == "By Education") {
                    wChart.data = workData3;
                    avgChart.data = averageData3;
                    jc.data = jobData3;
                    newHireChart.data = newHireData3;
                    turnChart.data = turnOverData3;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Age") {
                    wChart.data = workData3;
                    avgChart.data = averageData3;
                    jc.data = jobData3;
                    newHireChart.data = newHireData3;
                    turnChart.data = turnOverData3;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData31;
                    avgChart.data = averageData31;
                    jc.data = jobData31;
                    newHireChart.data = newHireData31;
                    turnChart.data = turnOverData31;
                    turnChart.draw(1000);
                }
            } if (strUser3 == "2016-Q4") {
                if (strUser31 == "By Education") {
                    wChart.data = workData4;
                    avgChart.data = averageData4;
                    jc.data = jobData4;
                    newHireChart.data = newHireData4;
                    turnChart.data = turnOverData4;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Age") {
                    wChart.data = workData4;
                    avgChart.data = averageData4;
                    jc.data = jobData4;
                    newHireChart.data = newHireData4;
                    turnChart.data = turnOverData4;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData41;
                    avgChart.data = averageData41;
                    jc.data = jobData41;
                    newHireChart.data = newHireData41;
                    turnChart.data = turnOverData41;
                    turnChart.draw(1000);
                }
            } if (strUser3 == "2017-Q1") {
                if (strUser31 == "By Education") {
                    wChart.data = workData5;
                    avgChart.data = averageData5;
                    jc.data = jobData5;
                    newHireChart.data = newHireData5;
                    turnChart.data = turnOverData5;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Age") {
                    wChart.data = workData5;
                    avgChart.data = averageData5;
                    jc.data = jobData5;
                    newHireChart.data = newHireData5;
                    turnChart.data = turnOverData5;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData51;
                    avgChart.data = averageData51;
                    jc.data = jobData51;
                    newHireChart.data = newHireData51;
                    turnChart.data = turnOverData51;
                    turnChart.draw(1000);
                }
            } if (strUser3 == "2017-Q2") {
                if (strUser31 == "By Education") {
                    wChart.data = workData6;
                    avgChart.data = averageData6;
                    jc.data = jobData6;
                    newHireChart.data = newHireData6;
                    turnChart.data = turnOverData6;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Age") {
                    wChart.data = workData6;
                    avgChart.data = averageData6;
                    jc.data = jobData6;
                    newHireChart.data = newHireData6;
                    turnChart.data = turnOverData6;
                     turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData61;
                    avgChart.data = averageData61;
                    jc.data = jobData61;
                    newHireChart.data = newHireData61;
                    turnChart.data = turnOverData61;
                    turnChart.draw(1000);
                }
            } if (strUser3 == "2017-Q3") {
                if (strUser31 == "By Education") {
                    wChart.data = workData7;
                    avgChart.data = averageData7;
                    jc.data = jobData7;
                    newHireChart.data = newHireData7;
                    turnChart.data = turnOverData7;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Age") {
                    wChart.data = workData7;
                    avgChart.data = averageData7;
                    jc.data = jobData7;
                    newHireChart.data = newHireData7;
                    turnChart.data = turnOverData7;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData71;
                    avgChart.data = averageData71;
                    jc.data = jobData71;
                    newHireChart.data = newHireData71;
                    turnChart.data = turnOverData71;
                    turnChart.draw(1000);
                }



            }
           
           if (strUser3 == "2017-Q4") {
                if (strUser31 == "By Education") {
                    wChart.data = workData8;
                    avgChart.data = averageData8;
                    jc.data = jobData8;
                    newHireChart.data = newHireData8;
                    turnChart.data = turnOverData8;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Age") {
                    wChart.data = workData8;
                    avgChart.data = averageData8;
                    jc.data = jobData8;
                    newHireChart.data = newHireData8;
                    turnChart.data = turnOverData8;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData81;
                    avgChart.data = averageData81;
                    jc.data = jobData81;
                    newHireChart.data = newHireData81;
                  //  turnChart.data = turnOverData81;
                    turnChart.draw(1000);
                }



            }
           
           if (strUser3 == "2018-Q1") {
                if (strUser31 == "By Education") {
                    wChart.data = workData9;
                    avgChart.data = averageData9;
                    jc.data = jobData9;
                    newHireChart.data = newHireData9;
                    turnChart.data = turnOverData9;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Age") {
                    wChart.data = workData9;
                    avgChart.data = averageData9;
                    jc.data = jobData9;
                    newHireChart.data = newHireData9;
                    turnChart.data = turnOverData9;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData82;
                    avgChart.data = averageData82;
                    jc.data = jobData82;
                    newHireChart.data = newHireData82;
                    turnChart.data = turnOverData82;
                    turnChart.draw(1000);
                }



            }
           
           if (strUser3 == "2016Q4") {
                if (strUser31 == "By Education") {
                    wChart.data = workData10;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData10;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Age") {
                    wChart.data = workData10;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData10;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData83;
                    avgChart.data = averageData83;
                    jc.data = jobData83;
                    newHireChart.data = newHireData83;
                    turnChart.data = turnOverData83;
                    turnChart.draw(1000);
                }



            }
           
           if (strUser3 == "2017Q1") {
                if (strUser31 == "By Education") {
                    wChart.data = workData01;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData01;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Age") {
                    wChart.data = workData01;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData01;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData84;
                    avgChart.data = averageData83;
                    jc.data = jobData83;
                    newHireChart.data = newHireData84;
                    turnChart.data = turnOverData83;
                    turnChart.draw(1000);
                }



            }
           
           if (strUser3 == "2017Q2") {
                if (strUser31 == "By Education") {
                    wChart.data = workData02;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData02;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Age") {
                    wChart.data = workData02;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData02;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
           vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
                } if (strUser31 == "By Gender") {
                    wChart.data = workData85;
                    avgChart.data = averageData83;
                    jc.data = jobData83;
                    newHireChart.data = newHireData85;
                    turnChart.data = turnOverData83;
                    turnChart.draw(1000);
                }



            }
            
             wChart.draw(1000);
             avgChart.draw(1000);
             jc.draw(1000);
             newHireChart.draw(1000);
             
        };
        
       d3.select("#btn13").on("change", function () {
           dataSwap101();
            });
        
  d3.select("#btn131").on("change", function() { 
      dataSwap101();
    });
        
        d3.select("#btn14").on("change", function () {
           dataSwap102();
            });
        
  d3.select("#btn141").on("change", function() { 
      dataSwap102();
    });
        
  d3.select("#btn15").on("change", function () {
           dataSwap103();
            });
        
  d3.select("#btn151").on("change", function() { 
      dataSwap103();
    });
        
                                
d3.select("#btn6").on("click", function(){
            if(togNum1 == 1)
                {
                    togNum1 = 0;
                    qLegend.shapes.style("visibility", "hidden");
                    
                    
                }else if(togNum1 == 0)
                {
                    togNum1 = 1;
                    qLegend.shapes.style("visibility", "visible");
                }
        });
         
        window.drawAll = function () {
                                chart0.draw(0, true);
                                chart01.draw(0, true);
                        
                                chart1.draw(0, true);
                    //            chart2.draw(0, true);
                                chart3.draw(0, true);
                                chart4.draw(0, true);
                                chart5.draw(0, true);

                                chart7.draw(0, true);
                                
                                chart9.draw(0, true);
                                chart10.draw(0, true);
                                chart11.draw(0, true);
                                chart12.draw(0, true);
                                chart13.draw(0, true);
                                chart14.draw(0, true);
                                chart15.draw(0, true);
                                chart61.draw(0, true);
                                aprogChart.draw(0, true);
                                aNewChart.draw(0, true);
                                
                                wChart.draw(0, true);
                                avgChart.draw(0, true);
                                jc.draw(0, true);
                                newHireChart.draw(0, true);
                                turnChart.draw(0, true);
                                
                                wiaChart.draw(0, true);
                                vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
            
                                pchart0.draw(0, true);
                                pchart01.draw(0, true);
                        
                                pchart1.draw(0, true);
                    //            chart2.draw(0, true);
                                pchart3.draw(0, true);
                                pchart4.draw(0, true);
                                pchart5.draw(0, true);

                                pchart7.draw(0, true);
                                
                                pchart9.draw(0, true);
                                pchart10.draw(0, true);
                                pchart11.draw(0, true);
                                pchart12.draw(0, true);
                                pchart13.draw(0, true);
                                pchart14.draw(0, true);
                                pchart15.draw(0, true);
                                pchart61.draw(0, true);
                                pwChart.draw(0, true);
                                pavgChart.draw(0, true);
                                pjc.draw(0, true);
                                pnewHireChart.draw(0, true);
                                pturnChart.draw(0, true);
                                 paprogChart.draw(0, true);
                                paNewChart.draw(0, true);
                                
                                
                                pwiaChart.draw(0, true);
                                pvetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 0) rotate(0)";
    });
            
            
            
            
            
            
            
        };
                            

       window.onresize = function () {
                      drawAll();
                        }; 
        
        
    });


var whichChart = 1;

function hidePrint(){
    document.getElementById("Print0").style.display="none";
    document.getElementById("Print2").style.display="none";
    document.getElementById("Print3").style.display="none";
    document.getElementById("Print4").style.display="none";
    document.getElementById("PrintFive").style.display="none";
    document.getElementById("Print8").style.display="none";
    document.getElementById("Print9").style.display="none";
    document.getElementById("Print7").style.display="none";
    document.getElementById("Print10").style.display="none";
    document.getElementById("Print11").style.display="none";
    document.getElementById("Print12").style.display="none";
    document.getElementById("Print13").style.display="none";
    document.getElementById("Print14").style.display="none";
    document.getElementById("Print15").style.display="none";
    document.getElementById("Print17").style.display="none";
    document.getElementById("Print18").style.display="none";
    document.getElementById("Print19").style.display="none";
    
    drawAll();
}

function hideChart(){
    document.getElementById("Chart0").style.display="none";
    document.getElementById("Chart2").style.display="none";
    document.getElementById("Chart3").style.display="none";
    document.getElementById("Chart4").style.display="none";
    document.getElementById("ChartFive").style.display="none";
    document.getElementById("Chart8").style.display="none";
    document.getElementById("Chart9").style.display="none";
    document.getElementById("Chart7").style.display="none";
    document.getElementById("Chart10").style.display="none";
    document.getElementById("Chart11").style.display="none";
    document.getElementById("Chart12").style.display="none";
    document.getElementById("Chart13").style.display="none";
    document.getElementById("Chart14").style.display="none";
    document.getElementById("Chart15").style.display="none";
    document.getElementById("Chart17").style.display="none";
    document.getElementById("Chart18").style.display="none";
    document.getElementById("Chart19").style.display="none";
    drawAll();
}

function showChart(){
    document.getElementById("Chart0").style.display="inline";
    document.getElementById("Chart2").style.display="inline";
    document.getElementById("Chart3").style.display="inline";
    document.getElementById("Chart4").style.display="inline";
    document.getElementById("ChartFive").style.display="inline";
    document.getElementById("Chart8").style.display="inline";
    document.getElementById("Chart9").style.display="inline";
    document.getElementById("Chart7").style.display="inline";
    document.getElementById("Chart10").style.display="inline";
    document.getElementById("Chart11").style.display="inline";
    document.getElementById("Chart12").style.display="inline";
    document.getElementById("Chart13").style.display="inline";
    document.getElementById("Chart14").style.display="inline";
    document.getElementById("Chart15").style.display="inline";
    document.getElementById("Chart17").style.display="inline";
    document.getElementById("Chart18").style.display="inline";
    document.getElementById("Chart19").style.display="inline";
    drawAll();
}

function showPrint(){
    document.getElementById("Print0").style.display="inline";
    document.getElementById("Print2").style.display="inline";
    document.getElementById("Print3").style.display="inline";
    document.getElementById("Print4").style.display="inline";
    document.getElementById("PrintFive").style.display="inline";
    document.getElementById("Print8").style.display="inline";
    document.getElementById("Print9").style.display="inline";
    document.getElementById("Print7").style.display="inline";
    document.getElementById("Print10").style.display="inline";
    document.getElementById("Print11").style.display="inline";
    document.getElementById("Print12").style.display="inline";
    document.getElementById("Print13").style.display="inline";
    document.getElementById("Print14").style.display="inline";
    document.getElementById("Print15").style.display="inline";
    document.getElementById("Print17").style.display="inline";
    document.getElementById("Print18").style.display="inline";
    document.getElementById("Print19").style.display="inline";
    drawAll();
}


function collapse1() {
        document.getElementById("collapse1").style.display="inline";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        document.getElementById("collapse8").style.display="none";
        document.getElementById("collapse9").style.display="none";
        document.getElementById("collapse10").style.display="none";
        document.getElementById("collapse11").style.display="none";
        document.getElementById("collapse12").style.display="none";
        document.getElementById("collapse13").style.display="none";
        document.getElementById("collapse14").style.display="none";
        document.getElementById("collapse15").style.display="none";
        document.getElementById("pTitle").innerHTML = "Maryland";
        whichChart = 1;
        
        drawAll();
        hidePrint();
        
    }
function collapse2() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="inline";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        document.getElementById("collapse8").style.display="none";
        document.getElementById("collapse9").style.display="none";
        document.getElementById("collapse10").style.display="none";
        document.getElementById("collapse11").style.display="none";
        document.getElementById("collapse12").style.display="none";
        document.getElementById("collapse13").style.display="none";
        document.getElementById("collapse14").style.display="none";
        document.getElementById("collapse15").style.display="none";
        document.getElementById("collapse16").style.display="none";
        document.getElementById("collapse17").style.display="none";
        document.getElementById("pTitle").innerHTML = "Maryland";
        whichChart = 2;
        drawAll();
        hidePrint();
        
    }
function collapse3() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="inline";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        document.getElementById("collapse8").style.display="none";
        document.getElementById("collapse9").style.display="none";
        document.getElementById("collapse10").style.display="none";
        document.getElementById("collapse11").style.display="none";
        document.getElementById("collapse12").style.display="none";
        document.getElementById("collapse13").style.display="none";
        document.getElementById("collapse14").style.display="none";
        document.getElementById("collapse15").style.display="none";
        document.getElementById("collapse16").style.display="none";
        document.getElementById("collapse17").style.display="none";
        document.getElementById("pTitle").innerHTML = "Maryland";
        whichChart = 3;
        drawAll();
        hidePrint();
        
    }
function collapse4() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="inline";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        document.getElementById("collapse8").style.display="none";
        document.getElementById("collapse9").style.display="none";
        document.getElementById("collapse10").style.display="none";
        document.getElementById("collapse11").style.display="none";
        document.getElementById("collapse12").style.display="none";
        document.getElementById("collapse13").style.display="none";
        document.getElementById("collapse14").style.display="none";
        document.getElementById("collapse15").style.display="none";
        document.getElementById("collapse16").style.display="none";
        document.getElementById("collapse17").style.display="none";
        document.getElementById("pTitle").innerHTML = "Maryland";
        whichChart = 4;
        drawAll();
        hidePrint();
    }
function collapse5() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="inline";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        document.getElementById("collapse8").style.display="none";
        document.getElementById("collapse9").style.display="none";
        document.getElementById("collapse10").style.display="none";
        document.getElementById("collapse11").style.display="none";
        document.getElementById("collapse12").style.display="none";
        document.getElementById("collapse13").style.display="none";
        document.getElementById("collapse14").style.display="none";
        document.getElementById("collapse15").style.display="none";
        document.getElementById("collapse16").style.display="none";
        document.getElementById("collapse17").style.display="none";
        document.getElementById("pTitle").innerHTML = "Maryland";
        whichChart = 5;
        drawAll();
        hidePrint();
    }
function collapse6() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="inline";
        document.getElementById("collapse7").style.display="none";
        document.getElementById("collapse8").style.display="none";
        document.getElementById("collapse9").style.display="none";
        document.getElementById("collapse10").style.display="none";
        document.getElementById("collapse11").style.display="none";
        document.getElementById("collapse12").style.display="none";
        document.getElementById("collapse13").style.display="none";
        document.getElementById("collapse14").style.display="none";
        document.getElementById("collapse15").style.display="none";
        document.getElementById("collapse16").style.display="none";
        document.getElementById("collapse17").style.display="none";
        document.getElementById("pTitle").innerHTML = "Maryland";
        whichChart = 6;
        drawAll();
        hidePrint();
    }
function collapse7() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="inline";
        document.getElementById("collapse8").style.display="none";
        document.getElementById("collapse9").style.display="none";
        document.getElementById("collapse10").style.display="none";
        document.getElementById("collapse11").style.display="none";
        document.getElementById("collapse12").style.display="none";
        document.getElementById("collapse13").style.display="none";
        document.getElementById("collapse14").style.display="none";
        document.getElementById("collapse15").style.display="none";
        document.getElementById("collapse16").style.display="none";
        document.getElementById("collapse17").style.display="none";
        document.getElementById("pTitle").innerHTML = "Maryland";
        whichChart = 7;
        drawAll();
        hidePrint();
    }
function collapse8() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        document.getElementById("collapse8").style.display="inline";
        document.getElementById("collapse9").style.display="none";
        document.getElementById("collapse10").style.display="none";
        document.getElementById("collapse11").style.display="none";
        document.getElementById("collapse12").style.display="none";
        document.getElementById("collapse13").style.display="none";
        document.getElementById("collapse14").style.display="none";
        document.getElementById("collapse15").style.display="none";
        document.getElementById("collapse16").style.display="none";
        document.getElementById("collapse17").style.display="none";
        document.getElementById("pTitle").innerHTML = "Maryland";
        whichChart = 8;
        drawAll();
        hidePrint();
    }
function collapse9() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        document.getElementById("collapse8").style.display="none";
        document.getElementById("collapse9").style.display="inline";
        document.getElementById("collapse10").style.display="none";
        document.getElementById("collapse11").style.display="none";
        document.getElementById("collapse12").style.display="none";
        document.getElementById("collapse13").style.display="none";
        document.getElementById("collapse14").style.display="none";
        document.getElementById("collapse15").style.display="none";
        document.getElementById("collapse16").style.display="none";
        document.getElementById("collapse17").style.display="none";
        document.getElementById("pTitle").innerHTML = "Maryland";
        whichChart = 9;
        drawAll();
        hidePrint();
    }
function collapse10() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        document.getElementById("collapse8").style.display="none";
        document.getElementById("collapse9").style.display="none";
        document.getElementById("collapse10").style.display="inline";
        document.getElementById("collapse11").style.display="none";
        document.getElementById("collapse12").style.display="none";
        document.getElementById("collapse13").style.display="none";
        document.getElementById("collapse14").style.display="inline";
        document.getElementById("collapse15").style.display="none";
        document.getElementById("collapse16").style.display="none";
        document.getElementById("collapse17").style.display="none";
    
        document.getElementById("pTitle").innerHTML = "Maryland";
        whichChart = 10;
        
        drawAll();
        hidePrint();
    }
function collapse11() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        document.getElementById("collapse8").style.display="none";
        document.getElementById("collapse9").style.display="none";
        document.getElementById("collapse10").style.display="none";
        document.getElementById("collapse11").style.display="inline";
        document.getElementById("collapse12").style.display="none";
        document.getElementById("collapse13").style.display="none";
        document.getElementById("collapse14").style.display="inline";
        document.getElementById("collapse15").style.display="none";
        document.getElementById("collapse16").style.display="none";
        document.getElementById("collapse17").style.display="none";
    
        document.getElementById("pTitle").innerHTML = "Maryland";
        whichChart = 11;
        
        drawAll();
        hidePrint();
    }
function collapse12() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        document.getElementById("collapse8").style.display="none";
        document.getElementById("collapse9").style.display="none";
        document.getElementById("collapse10").style.display="none";
        document.getElementById("collapse11").style.display="none";
        document.getElementById("collapse12").style.display="inline";
        document.getElementById("collapse13").style.display="none";
        document.getElementById("collapse14").style.display="inline";
        document.getElementById("collapse15").style.display="none";
        document.getElementById("collapse16").style.display="none";
        document.getElementById("collapse17").style.display="none";
        document.getElementById("pTitle").innerHTML = "Maryland";
        whichChart = 12;
        
        drawAll();
        hidePrint();
    }
function collapse13() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        document.getElementById("collapse8").style.display="none";
        document.getElementById("collapse9").style.display="none";
        document.getElementById("collapse10").style.display="none";
        document.getElementById("collapse11").style.display="none";
        document.getElementById("collapse12").style.display="none";
        document.getElementById("collapse13").style.display="inline";
        document.getElementById("collapse14").style.display="inline";
        document.getElementById("collapse15").style.display="none";
        document.getElementById("collapse16").style.display="none";
        document.getElementById("collapse17").style.display="none";
        document.getElementById("pTitle").innerHTML = "Maryland";
        whichChart = 13;
        
        drawAll();
        hidePrint();
    }
function collapse14() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        document.getElementById("collapse8").style.display="none";
        document.getElementById("collapse9").style.display="none";
        document.getElementById("collapse10").style.display="none";
        document.getElementById("collapse11").style.display="none";
        document.getElementById("collapse12").style.display="none";
        document.getElementById("collapse13").style.display="none";
        document.getElementById("collapse14").style.display="inline";
        document.getElementById("collapse15").style.display="inline";
        document.getElementById("collapse16").style.display="none";
        document.getElementById("collapse17").style.display="none";
        document.getElementById("pTitle").innerHTML = "Maryland";
        whichChart = 14;
        
        drawAll();
        hidePrint();
    }
function collapse15() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        document.getElementById("collapse8").style.display="none";
        document.getElementById("collapse9").style.display="none";
        document.getElementById("collapse10").style.display="none";
        document.getElementById("collapse11").style.display="none";
        document.getElementById("collapse12").style.display="none";
        document.getElementById("collapse13").style.display="none";
        document.getElementById("collapse14").style.display="inline";
        document.getElementById("collapse15").style.display="none";
        document.getElementById("collapse16").style.display="inline";
        document.getElementById("collapse17").style.display="none";
        document.getElementById("pTitle").innerHTML = "Maryland";
        whichChart = 15;
        
        drawAll();
        hidePrint();
    }

function collapse16() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        document.getElementById("collapse8").style.display="none";
        document.getElementById("collapse9").style.display="none";
        document.getElementById("collapse10").style.display="none";
        document.getElementById("collapse11").style.display="none";
        document.getElementById("collapse12").style.display="none";
        document.getElementById("collapse13").style.display="none";
        document.getElementById("collapse14").style.display="inline";
        document.getElementById("collapse15").style.display="none";
        document.getElementById("collapse16").style.display="none";
        document.getElementById("collapse17").style.display="inline";
        document.getElementById("pTitle").innerHTML = "Maryland";
        whichChart = 16;
        
        drawAll();
        hidePrint();
    }

function showAll() {
        document.getElementById("collapse1").style.display="inline";
        document.getElementById("collapse2").style.display="inline";
        document.getElementById("collapse3").style.display="inline";
        document.getElementById("collapse4").style.display="inline";
        document.getElementById("collapse5").style.display="inline";
        document.getElementById("collapse6").style.display="inline";
        document.getElementById("collapse7").style.display="inline";
        document.getElementById("collapse8").style.display="inline";
        document.getElementById("collapse9").style.display="inline";
        document.getElementById("collapse10").style.display="inline";
        document.getElementById("collapse11").style.display="inline";
        document.getElementById("collapse12").style.display="inline";
        document.getElementById("collapse13").style.display="inline";
        document.getElementById("collapse14").style.display="inline";
        document.getElementById("collapse15").style.display="inline";
        document.getElementById("collapse16").style.display="inline";
        document.getElementById("collapse17").style.display="inline";
        
        document.getElementById("pTitle").innerHTML = "Maryland";
        
        hideChart();
        showPrint();
        drawAll();
        
    }

function hideAll() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        document.getElementById("collapse8").style.display="none";
        document.getElementById("collapse9").style.display="none";
        document.getElementById("collapse10").style.display="none";
        document.getElementById("collapse11").style.display="none";
        document.getElementById("collapse12").style.display="none";
        document.getElementById("collapse13").style.display="none";
        document.getElementById("collapse14").style.display="none";
        document.getElementById("collapse15").style.display="none";
        document.getElementById("collapse16").style.display="none";
        document.getElementById("collapse17").style.display="none";
        document.getElementById("pTitle").innerHTML = "Maryland";
        
        drawAll();
        
    }

window.printClick = function(){
    if(whichChart == 1){
        collapse1();
        document.getElementById("Chart0").style.display="none";
        document.getElementById("Print0").style.display="inline";
        drawAll();
        
    }else if(whichChart == 2){
        collapse2();
        document.getElementById("Chart2").style.display="none";
        document.getElementById("Print2").style.display="inline";
        drawAll();
        
    }else if(whichChart == 3){
        collapse3();
        document.getElementById("Chart3").style.display="none";
        document.getElementById("Print3").style.display="inline";
        drawAll();
        
    }else if(whichChart == 4){
        collapse4();
        document.getElementById("Chart4").style.display="none";
        document.getElementById("Print4").style.display="inline";
        drawAll();
        
    }else if(whichChart == 5){
        collapse5();
        document.getElementById("ChartFive").style.display="none";
        document.getElementById("PrintFive").style.display="inline";
        drawAll();
        
    }else if(whichChart == 6){
        collapse6();
        document.getElementById("Chart8").style.display="none";
        document.getElementById("Print8").style.display="inline";
        drawAll();
        
    }else if(whichChart == 7){
        collapse7();
        document.getElementById("Chart9").style.display="none";
        document.getElementById("Print9").style.display="inline";
        drawAll();
        
    }else if(whichChart == 8){
        collapse8();
        document.getElementById("Chart10").style.display="none";
        document.getElementById("Print10").style.display="inline";
        drawAll();
        
    }else if(whichChart == 9){
        collapse9();
        document.getElementById("Chart11").style.display="none";
        document.getElementById("Print11").style.display="inline";
        drawAll();
        
    }else if(whichChart == 10){
        collapse10();
        document.getElementById("Chart12").style.display="none";
        document.getElementById("Print12").style.display="inline";
        drawAll();
        
    }else if(whichChart == 11){
        collapse11();
        document.getElementById("Chart13").style.display="none";
        document.getElementById("Print13").style.display="inline";
        drawAll();
        
    }else if(whichChart == 12){
        collapse12();
        document.getElementById("Chart14").style.display="none";
        document.getElementById("Print14").style.display="inline";
        drawAll();
        
    }else if(whichChart == 13){
        collapse13();
        document.getElementById("Chart15").style.display="none";
        document.getElementById("Print15").style.display="inline";
        drawAll();
        
    }else if(whichChart == 14){
        collapse14();
        document.getElementById("Chart17").style.display="none";
        document.getElementById("Print17").style.display="inline";
        drawAll();
        
    }else if(whichChart == 15){
        collapse15();
        document.getElementById("Chart18").style.display="none";
        document.getElementById("Print18").style.display="inline";
        drawAll();
        
    }else if(whichChart == 16){
        collapse16();
        document.getElementById("Chart19").style.display="none";
        document.getElementById("Print19").style.display="inline";
        drawAll();
        
    }
window.print();
}

window.printAll = function() {
    
    showAll();
    drawAll();
    window.print();
};

window.onafterprint = function() {
   hideAll();
   showChart();
};