//display script

var togNum = 1;
var togNum1 = 1;
    d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vTeWmkeAYMcZdUOeH7sA4N4ES0EAgaVTwRQDP_DzKuPH6i2sL9SFjGQQ1mbpipglwTfyFZMO-07NEHr/pub?gid=1539635495&single=true&output=csv", function (data) {
        
        //chart 0
        
        var svg0 = dimple.newSvg("#Chart0", "100%", 400);
        var print0 = dimple.newSvg("#Print0", 750, 400);
        
        pData = dimple.filterData(dimple.filterData(dimple.filterData(data, "Time", ["2016", "2017"]), "Indicator", "Total Population"), "Location", CountyName2);
        
        wData = dimple.filterData(dimple.filterData(dimple.filterData(data, "Time", ["2016", "2017"]), "Indicator", "Median Household Income"), "Location", CountyName2);
        
        
        var chart0 = new dimple.chart(svg0, pData);
                        chart0.setBounds("11%", "12%", "35%", "65%")
                        var x0 = chart0.addCategoryAxis("x", "Time");
                         var y0 = chart0.addMeasureAxis("y", "Amount");
                        y0.tickFormat = ',f';
                       var s0 = chart0.addSeries("Indicator", dimple.plot.bar);
                        s0.lineMarkers = true;
                        x0.addOrderRule(["2016", "2017"]);
                        chart0.draw();
                        x0.title = "Years";
                        y0.title = "Total Population";
        
         
        
        
        var chart01 = new dimple.chart(svg0, wData);
                            chart01.setBounds("56%", "12%", "35%", "65%")
                          var x01 = chart01.addCategoryAxis("x", "Time");
                            var Y01 = chart01.addMeasureAxis("y", "Amount");
                           var s01 = chart01.addSeries("Indicator", dimple.plot.bar);
               //            var ethLegend = chart5.addLegend("86%", "70%", "26%", "10%", "right");
        
                            s01.lineMarkers = true;
                            x01.addOrderRule(["2016", "2017"]);
                            Y01.tickFormat = '$,f';
                            chart01.draw();
                            Y01.title = "Median Household Income";
                            x01.title = "Years";
        
        var pchart0 = new dimple.chart(print0, pData);
                        pchart0.setBounds("14%", "12%", "32%", 300)
                        var px0 = pchart0.addCategoryAxis("x", "Time");
                         var py0 = pchart0.addMeasureAxis("y", "Amount");
                        py0.tickFormat = ',f';
                       var ps0 = pchart0.addSeries("Indicator", dimple.plot.bar);
                        ps0.lineMarkers = true;
                        px0.addOrderRule(["2016", "2017"]);
                        //px0.title = "C1";
                        py0.title = "Total Population";
                        pchart0.draw();
        
         
        
        
        var pchart01 = new dimple.chart(print0, wData);
                            pchart01.setBounds("62%", "12%", "32%", 300)
                          var px01 = pchart01.addCategoryAxis("x", "Time");
                            var pY01 = pchart01.addMeasureAxis("y", "Amount");
                           var ps01 = pchart01.addSeries("Indicator", dimple.plot.bar);
               //            var ethLegend = chart5.addLegend("86%", "70%", "26%", "10%", "right");
        
                            ps01.lineMarkers = true;
                            px01.addOrderRule(["2016", "2017"]);
                            pY01.tickFormat = '$,f';
                            pY01.title = "Median Household Income";
                            //px01.title = "C2";
                            pchart01.draw();
        
       
        
        
        
       
        
        //chart 1
                    
             //       var County = "Allegany County, MD";
                    
             //       dataCounty = dimple.filterData(data, "Location", County);
        
                    Allegany = dimple.filterData(data, "Location", CountyName1);
        
                
        
                MonthYears = dimple.filterData(Allegany, "Time", ["Jan\n2015", "Feb\n2015", "Mar\n2015", "Apr\n2015", "May\n2015", "Jun\n2015", "Jul\n2015", "Aug\n2015", "Sep\n2015", "Oct\n2015", "Nov\n2015", "Dec\n2015", "Jan\n2016", "Feb\n2016", "Mar\n2016", "Apr\n2016", "May\n2016", "Jun\n2016", "Jul\n2016", "Aug\n2016", "Sep\n2016", "Oct\n2016", "Nov\n2016", "Dec\n2016", "Jan\n2017", "Feb\n2017", "Mar\n2017", "Apr\n2017", "May\n2017", "Jun\n2017", "Jul\n2017", "Aug\n2017", "Sep\n2017", "Oct\n2017", "Nov\n2017", "Dec\n2017"]);
   
                    
                    MonthYears2014 = dimple.filterData(Allegany, "Time", ["Jan\n2015", "Feb\n2015", "Mar\n2015", "Apr\n2015", "May\n2015", "Jun\n2015", "Jul\n2015", "Aug\n2015", "Sep\n2015", "Oct\n2015", "Nov\n2015", "Dec\n2015"]);
        
                  
                    MonthYears2015 = dimple.filterData(Allegany, "Time", ["Jan\n2016", "Feb\n2016", "Mar\n2016", "Apr\n2016", "May\n2016", "Jun\n2016", "Jul\n2016", "Aug\n2016", "Sep\n2016", "Oct\n2016", "Nov\n2016", "Dec\n2016"]);
        
                   
        
                    MonthYears2016 = dimple.filterData(Allegany, "Time", ["Jan\n2017", "Feb\n2017", "Mar\n2017", "Apr\n2017", "May\n2017", "Jun\n2017", "Jul\n2017", "Aug\n2017", "Sep\n2017", "Oct\n2017", "Nov\n2017", "Dec\n2017"]);
        
                  
        
                    
                    

                    
        
                     
        //Chart 2 -hidden
        
        /**
                            var svg1 = dimple.newSvg("#Chart2", "100%", 650);
                            
                            years = dimple.filterData(data, "Time", ["2013", "2014"]);
                            longTermLocation = dimple.filterData(years, "Indicator", "Long Term Unemployed");
                            
                            
                            var chart1 = new dimple.chart(svg1, longTermLocation);
                            chart1.setBounds("9%", 65, "90%", 500)
                            var x1 = chart1.addCategoryAxis("x", ["Time", "Location"]);
                            var y1 = chart1.addMeasureAxis("y", "Amount");
                            
                        
                           var lines2 = chart1.addSeries("Location", dimple.plot.line);
        
                            lines2.aggregate = dimple.aggregateMethod.min;
        
                           y1.tickFormat = ',.1f'; 
                           
                            lines2.lineMarkers = true;
                            chart1.addLegend("20%", "1%", "50%", "50%", "right");
                            chart1.draw();
        **/
        
                  //chart 2 end
        
                //chart 3 
                
                var svg3 = dimple.newSvg("#Chart3", "100%", 400);
                var print3 = dimple.newSvg("#Print3", 750, 400);
                            
                            
        
                            EduAttainment1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator Status", ["Less than Highschool", "Highschool", "Some College", "Bachelor's or Higher"]), "Location", CountyName2), "Employment Status", ["Unemployed", "NIL", "Employed"]),"Time", "2017");
        
                            EduAttainment = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator Status", ["Less than Highschool", "Highschool", "Some College", "Bachelor's or Higher"]), "Location", CountyName2), "Employment Status", ["Unemployed", "NIL", "Employed"]),"Time", "2016");
        
        /**  var chart10 = new dimple.chart(svg8, DisAttainment);
                            chart10.setBounds("7%", 65, "40%", 500)
                            var disX = chart10.addCategoryAxis("x", "Employment Status");
                            var disY = chart10.addMeasureAxis("y", "Amount");
                           var disSeries = chart10.addSeries("Indicator Status", dimple.plot.bar);**/
                            
        
                            var chart2 = new dimple.chart(svg3, EduAttainment);
                            chart2.setBounds("11%", "12%", "35%", "65%")
                            var edX = chart2.addCategoryAxis("x", "Employment Status");
                            var eduY = chart2.addMeasureAxis("y", "Amount");
                           var edSeries = chart2.addSeries("Indicator Status", dimple.plot.bar);
                            edSeries.addOrderRule(["Less than Highschool", "Highschool", "Some College", "Bachelor's or Higher"]);
        
                      edX.addOrderRule(["Less than Highschool", "Highschool", "Some College", "Bachelor's or Higher"]);
                     // var edLegend = chart2.addLegend("0%", "5%", "55%", "70%", "right");
                       //edLegend.fontSize = "5px";
        
                            chart2.draw();
                            
                            eduY.tickFormat = ',';
                            eduY.title = "Totals";
        
        //print version
            var pchart2 = new dimple.chart(print3, EduAttainment);
                            pchart2.setBounds("14%", "12%", "32%", 250)
                            var pedX = pchart2.addCategoryAxis("x", "Employment Status");
                            var peduY = pchart2.addMeasureAxis("y", "Amount");
                           var pedSeries = pchart2.addSeries("Indicator Status", dimple.plot.bar);
                            pedSeries.addOrderRule(["Less than Highschool", "Highschool", "Some College", "Bachelor's or Higher"]);
        
                      pedX.addOrderRule(["Less than Highschool", "Highschool", "Some College", "Bachelor's or Higher"]);
                     // var pedLegend = chart2.addLegend("0%", "5%", "55%", "70%", "right");
                    //   pedLegend.fontSize = "5px";
        
                            pchart2.draw();
                            
                            peduY.tickFormat = ',';
                            peduY.title = "Totals";
        
        
        //gender chart
                            
                            genderRate = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Time", "2017"), "Indicator Status", ["Male", "Female"]), "Location", CountyName2), "Indicator", "Unemployment By Gender");
                            
                            genderRate1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Time", "2016"), "Indicator Status", ["Male", "Female"]), "Location", CountyName2), "Indicator", "Unemployment By Gender");
        
                            var chart3 = new dimple.chart(svg3, genderRate);
                            chart3.setBounds("58%", "12%", "35%", "65%")
                            var genX = chart3.addCategoryAxis("x", "Indicator Status");
                            var genY = chart3.addMeasureAxis("y", "Unemployment Rate");
                            //genY.overrideMax = .30;
                          //  genY.titleShape.text("Percentage");
        
                            chart3.addSeries("Indicator Status", dimple.plot.bar);
                           // var genLegend = chart3.addLegend("38%", "10%", "50%", "70%", "right");
                            genY.tickFormat = '.1%';
                            genX.title = "Totals";
        
                            chart3.assignColor("Male", "#3366ff","black", 0.7);
                            chart3.assignColor("Female", "pink","black", 0.7);
        
                            
                            chart3.draw();
        
        
                //chart 3 end
        
                //chart 3 print
        
                var pchart3 = new dimple.chart(print3, genderRate);
                            pchart3.setBounds("62%", "12%", "32%", 300)
                            var pgenX = pchart3.addCategoryAxis("x", "Indicator Status");
                            var pgenY = pchart3.addMeasureAxis("y", "Unemployment Rate");
                            //genY.overrideMax = .30;
                          //  genY.titleShape.text("Percentage");
        
                            pchart3.addSeries("Indicator Status", dimple.plot.bar);
                           // var genLegend = chart3.addLegend("38%", "10%", "50%", "70%", "right");
                            pgenY.tickFormat = '.1%';
                            pgenX.title = "Gender";
                            
        
                            pchart3.assignColor("Male", "#3366ff","black", 0.7);
                            pchart3.assignColor("Female", "pink","black", 0.7);
                            
                            pchart3.draw();
        
                //chart 4
        
                var svg4 = dimple.newSvg("#Chart4", "100%", 400);
                var print4 = dimple.newSvg("#Print4", 750, 400);
        
        
                            raceData = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Time", "2017"), "Indicator", "Unemployment By Race"), "Location", CountyName2), "Indicator Status", [ "White", "Black", "Asian", "Hispanic"]);
        
                            raceData1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Time", "2016"), "Indicator", "Unemployment By Race"), "Location", CountyName2), "Indicator Status", [ "White", "Black", "Asian", "Hispanic"]);
        
        
                            
                            var chart4 = new dimple.chart(svg4, raceData);
                            chart4.setBounds("11%", "12%", "35%", "65%")
                            var raceX = chart4.addCategoryAxis("x", "Indicator Status");
                            var raceY = chart4.addMeasureAxis("y", "Unemployment Rate");
                            //raceY.overrideMax = .50;
                            var rSeries = chart4.addSeries("Indicator Status", dimple.plot.bar);
                            raceX.addOrderRule(["White", "Black", "Asian", "Hispanic"]);
        
                            raceX.title = " ";
                                
                     //       var raceLegend = chart4.addLegend("0%", "70%", "47%", "70%", "right");
        
                            raceY.tickFormat = '.1%';
        
                            chart4.assignColor("White", "#99ccff","black", 0.7);
                            chart4.assignColor("Black", "#ff8566","black", 0.7);
                            chart4.assignColor("Asian", "#4dffa6","black", 0.7);
                            chart4.assignColor("Hispanic", "#a366ff","black", 0.7);
        
                            
                            chart4.draw();
        
                            var pchart4 = new dimple.chart(print4, raceData);
                            pchart4.setBounds("14%", "12%", "32%", 250)
                            var praceX = pchart4.addCategoryAxis("x", "Indicator Status");
                            var praceY = pchart4.addMeasureAxis("y", "Unemployment Rate");
                            //praceY.overrideMax = .50;
                            var prSeries = pchart4.addSeries("Indicator Status", dimple.plot.bar);
                            praceX.addOrderRule(["White", "Black", "Asian", "Hispanic"]);
        
                            praceX.title = " ";
                                
                     //       var raceLegend = chart4.addLegend("0%", "70%", "47%", "70%", "right");
        
                            praceY.tickFormat = '.1%';
        
                            pchart4.assignColor("White", "#99ccff","black", 0.7);
                            pchart4.assignColor("Black", "#ff8566","black", 0.7);
                            pchart4.assignColor("Asian", "#4dffa6","black", 0.7);
                            pchart4.assignColor("Hispanic", "#a366ff","black", 0.7);
        
                            
                            pchart4.draw();
                            
                            
                            ethData = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Time", "2017"), "Indicator", "Unemployment By Race"), "Location", CountyName2), "Indicator Status", ["White", "Hispanic"]);
        
        
                            ethData1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Time", "2016"), "Indicator", "Unemployment By Race"), "Location", CountyName2), "Indicator Status", ["White", "Hispanic"]);
        
                            var chart5 = new dimple.chart(svg4, ethData);
                            chart5.setBounds("58%", "12%", "35%", "65%")
                            var ethX = chart5.addCategoryAxis("x", "Indicator Status")
                            var ethY = chart5.addMeasureAxis("y", "Unemployment Rate");
                            ethX.addOrderRule(["White", "Hispanic"]);
        
                            ethX.title = " ";
                            //ethY.overrideMax = .30;
                    
                            chart5.addSeries("Indicator Status", dimple.plot.bar);
               //            var ethLegend = chart5.addLegend("86%", "70%", "26%", "10%", "right");
                            
                            ethY.tickFormat = '.1%';
        
                            chart5.assignColor("White", "#99ccff","black", 0.7);
                            chart5.assignColor("Hispanic", "#a366ff","black", 0.7);
                            chart5.draw();
        
                            var pchart5 = new dimple.chart(print4, ethData);
                            pchart5.setBounds("62%", "12%", "32%", 300)
                            var pethX = pchart5.addCategoryAxis("x", "Indicator Status")
                            var pethY = pchart5.addMeasureAxis("y", "Unemployment Rate");
        
                            pethX.title = " ";
                            pethX.addOrderRule(["White", "Hispanic"]);
                            //ethY.overrideMax = .30;
                    
                            pchart5.addSeries("Indicator Status", dimple.plot.bar);
               //            var ethLegend = chart5.addLegend("86%", "70%", "26%", "10%", "right");
                            
                            pethY.tickFormat = '.1%';
        
                            pchart5.assignColor("White", "#99ccff","black", 0.7);
                            pchart5.assignColor("Hispanic", "#a366ff","black", 0.7);
                            pchart5.draw();
        
        
        
                //chart 4 end
        
        //chart 5
        
                var svg5 = dimple.newSvg("#ChartFive", "100%", 400);
                var print5 = dimple.newSvg("#PrintFive", 750, 400);
                            
                            vetData = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Unemployment By Veteran Status"), "Location", CountyName2), "Time", "2017");
        
        
                            vetData1 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Unemployment By Veteran Status"), "Location", CountyName2), "Time", "2016");
        
                            var chart7 = new dimple.chart(svg5, vetData);
                            chart7.setBounds("9%", "12%", "80%", "65%")
                            var vetX = chart7.addCategoryAxis("x", "Indicator Status");
                           
                            
                            var vetY = chart7.addMeasureAxis("y", "Unemployment Rate");
                            //vetY.overrideMax = .30;
                            var vetSeries = chart7.addSeries("Indicator Status", dimple.plot.bar);
                            vetY.tickFormat = '.1%';
                       //     var vetLegend = chart7.addLegend("16%", "90%", "50%", "70%", "right");
                            chart7.assignColor("Veteran", "#248f24","black", 0.7);
                            chart7.assignColor("Non Veteran", "#33cccc","black", 0.7);
                            
                            chart7.draw();
                            vetX.addOrderRule(["Veteran", "Non Veteran"]);
        
                            vetX.title = " ";
                            
                            var pchart7 = new dimple.chart(print5, vetData);
                            pchart7.setBounds("13%", "12%", "80%", "65%")
                            var pvetX = pchart7.addCategoryAxis("x", "Indicator Status");
                           
                            
                            var pvetY = pchart7.addMeasureAxis("y", "Unemployment Rate");
                            //vetY.overrideMax = .30;
                            var pvetSeries = pchart7.addSeries("Indicator Status", dimple.plot.bar);
                            pvetX.addOrderRule(["Veteran", "Non Veteran"]);
                            pvetY.tickFormat = '.1%';
                       //     var vetLegend = chart7.addLegend("16%", "90%", "50%", "70%", "right");
        
                            pchart7.assignColor("Veteran", "#248f24","black", 0.7);
                            pchart7.assignColor("Non Veteran", "#33cccc","black", 0.7);                    
        
                            pchart7.draw();
        
                            pvetX.title = " ";
        
        
                            
                            
        
      
        
        
 d3.select("#btn3").on("change", function() {
  
  
	var e3 = document.getElementById("btn3");
  var strUser3 = e3.options[e3.selectedIndex].text;
  
   if(strUser3 == "2017"){
        chart2.data = EduAttainment;
        chart3.data = genderRate;
        chart4.data = raceData;
        chart5.data = ethData;
        chart7.data = vetData;
       
        pchart2.data = EduAttainment;
        pchart3.data = genderRate;
        pchart4.data = raceData;
        pchart5.data = ethData;
        pchart7.data = vetData;
        
   }
        
    if(strUser3 == "2016"){
        chart2.data = EduAttainment1;
        chart3.data = genderRate1;
        chart4.data = raceData1;
        chart5.data = ethData1;
        chart7.data = vetData1;
            
        pchart2.data = EduAttainment1;
        pchart3.data = genderRate1;
        pchart4.data = raceData1;
        pchart5.data = ethData1;
        pchart7.data = vetData1;
    }
     
//edSeries.lineWeight = 0;
     chart2.draw(1000);
     chart3.draw(1000);
     chart4.draw(1000);
     chart5.draw(1000);
     chart7.draw(1000);
     
     pchart2.draw(1000);
     pchart3.draw(1000);
     pchart4.draw(1000);
     pchart5.draw(1000);
     pchart7.draw(1000);
     
    
     
     
     
 });
        
 d3.select("#btn31").on("change", function() {
  
  
	var e3 = document.getElementById("btn31");
  var strUser3 = e3.options[e3.selectedIndex].text;
  
   if(strUser3 == "2017"){
        chart2.data = EduAttainment;
        chart3.data = genderRate;
        chart4.data = raceData;
        chart5.data = ethData;
        chart7.data = vetData;
       
        pchart2.data = EduAttainment;
        pchart3.data = genderRate;
        pchart4.data = raceData;
        pchart5.data = ethData;
        pchart7.data = vetData;
        
   }
        
    if(strUser3 == "2016"){
        chart2.data = EduAttainment1;
        chart3.data = genderRate1;
        chart4.data = raceData1;
        chart5.data = ethData1;
        chart7.data = vetData1;
        
        pchart2.data = EduAttainment1;
        pchart3.data = genderRate1;
        pchart4.data = raceData1;
        pchart5.data = ethData1;
        pchart7.data = vetData1;
    }
     
//edSeries.lineWeight = 0;
     chart2.draw(1000);
     chart3.draw(1000);
     chart4.draw(1000);
     chart5.draw(1000);
     chart7.draw(1000);
     
     pchart2.draw(1000);
     pchart3.draw(1000);
     pchart4.draw(1000);
     pchart5.draw(1000);
     pchart7.draw(1000);
     
     
     
     
     
 });
        
 d3.select("#btn32").on("change", function() {
  
  
	var e3 = document.getElementById("btn32");
  var strUser3 = e3.options[e3.selectedIndex].text;
  
   if(strUser3 == "2017"){
        chart2.data = EduAttainment;
        chart3.data = genderRate;
        chart4.data = raceData;
        chart5.data = ethData;
        chart7.data = vetData;
       
        pchart2.data = EduAttainment;
        pchart3.data = genderRate;
        pchart4.data = raceData;
        pchart5.data = ethData;
        pchart7.data = vetData;
        
   }
        
    if(strUser3 == "2016"){
        chart2.data = EduAttainment1;
        chart3.data = genderRate1;
        chart4.data = raceData1;
        chart5.data = ethData1;
        chart7.data = vetData1;
        
        pchart2.data = EduAttainment1;
        pchart3.data = genderRate1;
        pchart4.data = raceData1;
        pchart5.data = ethData1;
        pchart7.data = vetData1;
    }
     
//edSeries.lineWeight = 0;
     chart2.draw(1000);
     chart3.draw(1000);
     chart4.draw(1000);
     chart5.draw(1000);
     chart7.draw(1000);
     
     pchart2.draw(1000);
     pchart3.draw(1000);
     pchart4.draw(1000);
     pchart5.draw(1000);
     pchart7.draw(1000);
     
     
     
     
     
 });
    
   
       
       
            
 

                            
                           
        
        //chart 5 end
        
        //Chart 6 - QCEW
        
       
        
        var svg8 = dimple.newSvg("#Chart8", "100%", 400);
        var print8 = dimple.newSvg("#Print8", 750, 400);
                            
                            
        
                            DisAttainment1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Employment Status By Disability Status"), "Location", CountyName2), "Employment Status", ["Unemployed", "Labor Force", "Employed"]),"Time", "2016");
        
                            DisAttainment = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Employment Status By Disability Status"), "Location", CountyName2), "Employment Status", ["Unemployed", "Labor Force", "Employed"]),"Time", "2017");
                            
        
                            var chart10 = new dimple.chart(svg8, DisAttainment);
                            chart10.setBounds("8%", "12%", "35%", "65%")
                            var disX = chart10.addCategoryAxis("x", "Employment Status");
                            var disY = chart10.addMeasureAxis("y", "Amount");
                           var disSeries = chart10.addSeries("Indicator Status", dimple.plot.bar);
                            disY.title = "Disability Status";
                            //disSeries.addOrderRule(["Labor Force", "Employed", "Unemployed"]);
        
                       //     edX.addOrderRule(["Less than high school graduate", "High school graduate (includes equivalency)", "Some college or associate's degree", "Bachelor's degree or higher"]);
                     // var disLegend = chart10.addLegend("0%", "83%", "50%", "70%", "right");
        
                            disSeries.lineWeight = 0;
                            chart10.draw();
        
                            disY.tickFormat = ',f';
        
                            var pchart10 = new dimple.chart(print8, DisAttainment);
                            pchart10.setBounds("8%", "12%", "35%", "65%")
                            var pdisX = pchart10.addCategoryAxis("x", "Employment Status");
                            var pdisY = pchart10.addMeasureAxis("y", "Amount");
                           var pdisSeries = pchart10.addSeries("Indicator Status", dimple.plot.bar);
                            pdisY.title = "Disability Status";
                            //disSeries.addOrderRule(["Labor Force", "Employed", "Unemployed"]);
        
                       //     edX.addOrderRule(["Less than high school graduate", "High school graduate (includes equivalency)", "Some college or associate's degree", "Bachelor's degree or higher"]);
                     // var disLegend = chart10.addLegend("0%", "83%", "50%", "70%", "right");
        
                            pdisSeries.lineWeight = 0;
                            pchart10.draw();
        
                            pdisY.tickFormat = ',f';
                            
                            povRate = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Employment Status By Poverty Status"), "Location", CountyName2), "Employment Status", ["Unemployed", "Labor Force", "Employed"]),"Time", "2017");
                            
                            povRate1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Employment Status By Poverty Status"), "Location", CountyName2), "Employment Status", ["Unemployed", "Labor Force", "Employed"]),"Time", "2016");
        
                            var chart11 = new dimple.chart(svg8, povRate);
                            chart11.setBounds("58%", "12%", "35%", "65%")
                            var povX = chart11.addCategoryAxis("x", "Employment Status");
                            var povY = chart11.addMeasureAxis("y", "Amount");
                           // povY.overrideMax = .30;
                          //  genY.titleShape.text("Percentage");
        
                            chart11.addSeries("Indicator Status", dimple.plot.bar);
                           // var genLegend = chart3.addLegend("38%", "10%", "50%", "70%", "right");
        
                            
                            chart11.draw();
                            povY.tickFormat = ',f';
                            povY.title = "Poverty Status";
        
                            var pchart11 = new dimple.chart(print8, povRate);
                            pchart11.setBounds("58%", "12%", "35%", "65%")
                            var ppovX = pchart11.addCategoryAxis("x", "Employment Status");
                            var ppovY = pchart11.addMeasureAxis("y", "Amount");
                           // povY.overrideMax = .30;
                          //  genY.titleShape.text("Percentage");
        
                            pchart11.addSeries("Indicator Status", dimple.plot.bar);
                           // var genLegend = chart3.addLegend("38%", "10%", "50%", "70%", "right");
        
                            
                            pchart11.draw();
                            ppovY.tickFormat = ',f';
                            ppovY.title = "Poverty Status";
        
         
        
        d3.select("#btn9").on("change", function() {
  
  
	var e7 = document.getElementById("btn9");
  var strUser7 = e7.options[e7.selectedIndex].text;
  
   if(strUser7 == "2016"){
        chart10.data = DisAttainment1;
        chart11.data = povRate1;
        pchart10.data = DisAttainment1;
        pchart11.data = povRate1;
        
   }
        
    if(strUser7 == "2017"){
        chart10.data = DisAttainment;
        chart11.data = povRate;
        pchart10.data = DisAttainment;
        pchart11.data = povRate;
    }
         
     chart10.draw(1000);
     chart11.draw(1000);
     pchart10.draw(1000);
     pchart11.draw(1000);
     
 });
        
                            
        
                            

        
        
       
        
        var svg9 = dimple.newSvg("#Chart9", "100%", 400);
        var print9 = dimple.newSvg("#Print9", 750, 400);
                            
                            TanfAttainment2 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Number of TANF Recipient Workers"), "Location", CountyName2), "Employment Status", "Employed"),"Time", ["2015Q3", "2015Q4","2016Q1","2016Q2","2016Q3", "2016Q4", "2017Q1", "2017Q2"]);
        
                            TanfAttainment1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Number of TANF Recipient Workers"), "Location", CountyName2), "Employment Status", "Employed"),"Time", ["2015Q3", "2015Q4","2016Q1","2015Q2"]);
        
                            TanfAttainment = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Number of TANF Recipient Workers"), "Location", CountyName2), "Employment Status", "Employed"),"Time", ["2016Q3", "2016Q4","2017Q1", "2017Q2"]);
                            
        
                            var chart12 = new dimple.chart(svg9, TanfAttainment2);
                            chart12.setBounds("9%", "12%", "37%", "65%")
                            var tanfX = chart12.addCategoryAxis("x", "Time");
                            var tanfY = chart12.addMeasureAxis("y", "Amount");
                           var tanfSeries = chart12.addSeries("Indicator", dimple.plot.line);
                            tanfX.addOrderRule(["2015Q3", "2015Q4","2016Q1","2016Q2","2016Q3", "2016Q4", "2017Q1", "2017Q2"]);
                            tanfY.title = "TANF Workers";
        
                       //     edX.addOrderRule(["Less than high school graduate", "High school graduate (includes equivalency)", "Some college or associate's degree", "Bachelor's degree or higher"]);
                  //    var disLegend = chart12.addLegend("0%", "83%", "50%", "70%", "right");
        
                            tanfSeries.lineMarkers = true;
                            chart12.draw();
        
                            
                            
                            tanfY.tickFormat = ',f';
        
        //print chart
        
         var p1chart12 = new dimple.chart(print9, TanfAttainment2);
                            p1chart12.setBounds("9%", "12%", "37%", "60%")
                            var p1tanfX = p1chart12.addCategoryAxis("x", "Time");
                            var p1tanfY = p1chart12.addMeasureAxis("y", "Amount");
                           var p1tanfSeries = p1chart12.addSeries("Indicator", dimple.plot.line);
                            p1tanfX.addOrderRule(["2015Q3", "2015Q4","2016Q1","2016Q2","2016Q3", "2016Q4", "2017Q1", "2017Q2"]);
                            p1tanfY.title = "TANF Workers";
        
                       //     edX.addOrderRule(["Less than high school graduate", "High school graduate (includes equivalency)", "Some college or associate's degree", "Bachelor's degree or higher"]);
                  //    var disLegend = chart12.addLegend("0%", "83%", "50%", "70%", "right");
        
                            p1tanfSeries.lineMarkers = true;
                            p1chart12.draw();
        
                            
                            
                            p1tanfY.tickFormat = ',f';
        
        //end print
        
                            pTanfRate2 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Percentage of Workforce Training Program/Service Participants in TANF"), "Location", CountyName2), "Employment Status", "Employed"),"Time", ["2015Q3", "2015Q4","2016Q1","2016Q2","2016Q3", "2016Q4", "2017Q1", "2017Q2"]);
                            
                            pTanfRate1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Percentage of Workforce Training Program/Service Participants in TANF"), "Location", CountyName2), "Employment Status", "Employed"),"Time", ["2015Q3", "2015Q4","2016Q1","2016Q2"]);
                            
                            pTanfRate = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Percentage of Workforce Training Program/Service Participants in TANF"), "Location", CountyName2), "Employment Status", "Employed"),"Time", ["2016Q3", "2016Q4", "2017Q1", "2017Q2"]);
        
                            var chart13 = new dimple.chart(svg9, pTanfRate2);
                            chart13.setBounds("58%", "12%", "37%", "65%")
                            var ptanfX = chart13.addCategoryAxis("x", "Time");
                            var pTanfY = chart13.addMeasureAxis("y", "Amount");
                            //pTanfY.overrideMax = .30;
                          //  genY.titleShape.text("Percentage");
        
                            var pTanfseries = chart13.addSeries("Indicator", dimple.plot.line);
                           ptanfX.addOrderRule(["2015Q3", "2015Q4","2016Q1","2016Q2","2016Q3", "2016Q4", "2017Q1", "2017Q2"]);
        
                            pTanfY.title = "Workforce/Service in TANF";
                            
                           // var genLegend = chart3.addLegend("38%", "10%", "50%", "70%", "right");
                            
        pTanfY.tickFormat = '.2%';
        
                            pTanfseries.lineMarkers = true;
                            chart13.draw();
        
        //print chart
        
                            var p2chart13 = new dimple.chart(print9, pTanfRate2);
                            p2chart13.setBounds("58%", "12%", "37%", "60%")
                            var p2ptanfX = p2chart13.addCategoryAxis("x", "Time");
                            var p2pTanfY = p2chart13.addMeasureAxis("y", "Amount");
                            //pTanfY.overrideMax = .30;
                          //  genY.titleShape.text("Percentage");
        
                            var p2pTanfseries = p2chart13.addSeries("Indicator", dimple.plot.line);
                           p2ptanfX.addOrderRule(["2015Q3", "2015Q4","2016Q1","2016Q2","2016Q3", "2016Q4", "2017Q1", "2017Q2"]);
        
                            p2pTanfY.title = "Workforce/Service in TANF";
                            
                           // var genLegend = chart3.addLegend("38%", "10%", "50%", "70%", "right");
                            p2pTanfY.tickFormat = '.2%';
        
                            p2pTanfseries.lineMarkers = true;
                            p2chart13.draw();
        
        //end print
        
                            
        
                            

        
        
        
        
 d3.select("#btn8").on("change", function() {
  
  
	var e7 = document.getElementById("btn8");
  var strUser7 = e7.options[e7.selectedIndex].text;
   if(strUser7 == "All"){
        chart12.data = TanfAttainment2;
        chart13.data = pTanfRate2;
        
        p1chart12.data = TanfAttainment2;
        p2chart13.data = pTanfRate2;
        
   }
     
  if(strUser7 == "All"){
        chart12.data = TanfAttainment2;
        chart13.data = pTanfRate2;
      
        p1chart12.data = TanfAttainment2;
        p2chart13.data = pTanfRate2;
        
   }
     
   if(strUser7 == "2015Q3-2016Q2"){
        chart12.data = TanfAttainment1;
        chart13.data = pTanfRate1;
       
        p1chart12.data = TanfAttainment1;
        p2chart13.data = pTanfRate1;
        
   }
        
    if(strUser7 == "2016Q3-2017Q2"){
        chart12.data = TanfAttainment;
        chart13.data = pTanfRate;
        
        p1chart12.data = TanfAttainment;
        p2chart13.data = pTanfRate;
        
    }
         
     chart12.draw(1000);
     chart13.draw(1000);
     
    p1chart12.draw(1000);
     p2chart13.draw(1000);
     
 });
        
        
var svg10 = dimple.newSvg("#Chart10", "100%", 400);
var print10 = dimple.newSvg("#Print10", 750, 400);
        
                            mTanfData2 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Percentage of TANF Recipients among Maryland Workers"), "Location", CountyName2), "Time", ["2016Q2","2016Q3", "2016Q4", "2017Q1", "2017Q2"]);
                            
                            mTanfData1 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Percentage of TANF Recipients among Maryland Workers"), "Location", CountyName2), "Time", ["2015Q3", "2015Q4", "2016Q1", "2016Q2"]);
        
        
                            mTanfData = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Percentage of TANF Recipients among Maryland Workers"), "Location", CountyName2), "Time", ["2016Q3", "2016Q4", "2017Q1", "2017Q2"]);
        
                            var chart14 = new dimple.chart(svg10, mTanfData2);
                            chart14.setBounds("11%", "12%", "80%", "65%")
                            var mTanfX = chart14.addCategoryAxis("x", "Time")
                            var mTanfY = chart14.addMeasureAxis("y", "Amount");
                            //mTanfY.overrideMax = .003;
                            var mTanfLine = chart14.addSeries("Indicator", dimple.plot.line);
                            mTanfY.tickFormat = '.2%';
                            mTanfLine.lineMarkers = true;
                            mTanfX.addOrderRule(["2015Q3", "2015Q4", "2016Q1", "2016Q2","2016Q3", "2016Q4", "2017Q1", "2017Q2"]);
        
                       //     var vetLegend = chart7.addLegend("16%", "90%", "50%", "70%", "right");
                            chart14.draw();
        
                            var pchart14 = new dimple.chart(print10, mTanfData2);
                            pchart14.setBounds("11%", "12%", "80%", "65%")
                            var pmTanfX = pchart14.addCategoryAxis("x", "Time")
                            var pmTanfY = pchart14.addMeasureAxis("y", "Amount");
                            //mTanfY.overrideMax = .003;
                            var pmTanfLine = pchart14.addSeries("Indicator", dimple.plot.line);
                            pmTanfY.tickFormat = '.2%';
                            pmTanfLine.lineMarkers = true;
                            pmTanfX.addOrderRule(["2015Q3", "2015Q4", "2016Q1", "2016Q2","2016Q3", "2016Q4", "2017Q1", "2017Q2"]);
        
                       //     var vetLegend = chart7.addLegend("16%", "90%", "50%", "70%", "right");
                            pchart14.draw();
        
        var svg11 = dimple.newSvg("#Chart11", "100%", 500);
var print11 = dimple.newSvg("#Print11", 750, 400);
        
                            workerDatag1 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Work Experience by Gender"), "Location", CountyName2), "Time", "2015");
        
                            workerDatag2 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Work Experience by Gender"), "Location", CountyName2), "Time", "2016");
        
                            workerDatag3 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Work Experience by Gender"), "Location", CountyName2), "Time", "2017");
        
        //education
        
                             workerDatae1 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Work Experience by Education"), "Location", CountyName2), "Time", "2015");
        
                            workerDatae2 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Work Experience by Education"), "Location", CountyName2), "Time", "2016");
        
                            workerDatae3 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Work Experience by Education"), "Location", CountyName2), "Time", "2017");
        
        //race
        
                             workerDatar1 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Work Experience by Race"), "Location", CountyName2), "Time", "2015");
        
                            workerDatar2 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Work Experience by Race"), "Location", CountyName2), "Time", "2016");
        
                            workerDatar3 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Work Experience by Race"), "Location", CountyName2), "Time", "2017");
        
        //poverty
        
                             workerDatap1 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Work Experience by Poverty"), "Location", CountyName2), "Time", "2015");
        
                            workerDatap2 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Work Experience by Poverty"), "Location", CountyName2), "Time", "2016");
        
                            workerDatap3 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Work Experience by Poverty"), "Location", CountyName2), "Time", "2017");
                            
                            
        
                            var chart15 = new dimple.chart(svg11, workerDatag1);
                            chart15.setBounds("11%", "12%", "80%", "65%")
                            var workX = chart15.addCategoryAxis("x", "Indicator Status")
                            var workY = chart15.addMeasureAxis("y", "Amount");
                            //mTanfY.overrideMax = .003;
                            var workLine = chart15.addSeries("Employment Status", dimple.plot.bar);
        
                            chart15.addLegend("26%", "5%", "50%", "70%", "right");
                           
                            
        
                       //     var vetLegend = chart7.addLegend("16%", "90%", "50%", "70%", "right");
                            chart15.draw();
        
                            var pchart15 = new dimple.chart(print11, workerDatag1);
                            pchart15.setBounds("11%", "12%", "80%", "65%")
                            var workX = pchart15.addCategoryAxis("x", "Indicator Status")
                            var workY = pchart15.addMeasureAxis("y", "Amount");
                            //mTanfY.overrideMax = .003;
                            var workLine = pchart15.addSeries("Employment Status", dimple.plot.bar);
        
                       //     var vetLegend = chart7.addLegend("16%", "90%", "50%", "70%", "right");
                            pchart15.draw();
        
        
        window.WorkerChart = function () {
            
            var e7 = document.getElementById("btn10");
  var strUser7 = e7.options[e7.selectedIndex].text;
            
            var e8 = document.getElementById("btn11");
  var strUser8 = e8.options[e8.selectedIndex].text;
  
   if(strUser7 == "2015"){
       if(strUser8 == "Gender"){
           chart15.data = workerDatag1;
       }else if(strUser8 == "Race"){
           chart15.data = workerDatar1;
       }else if(strUser8 == "Education"){
           chart15.data = workerDatae1;
       }else if(strUser8 == "Poverty"){
           chart15.data = workerDatap1;
       }
        
   }
        
    if(strUser7 == "2016"){
        if(strUser8 == "Gender"){
           chart15.data = workerDatag2;
       }else if(strUser8 == "Race"){
           chart15.data = workerDatar2;
       }else if(strUser8 == "Education"){
           chart15.data = workerDatae2;
       }else if(strUser8 == "Poverty"){
           chart15.data = workerDatap2;
       }
    }
            
    if(strUser7 == "2017"){
        if(strUser8 == "Gender"){
           chart15.data = workerDatag3;
       }else if(strUser8 == "Race"){
           chart15.data = workerDatar3;
       }else if(strUser8 == "Education"){
           chart15.data = workerDatae3;
       }else if(strUser8 == "Poverty"){
           chart15.data = workerDatap3;
       }
    }
         
     chart15.draw(1000);
     pchart15.draw(1000);

            
        }
        
        d3.select("#btn10").on("change", function() {
        
        WorkerChart();
	
     
 });
        
        d3.select("#btn11").on("change", function() {
        
        WorkerChart();
	
     
 });
        
        
        var svg12 = dimple.newSvg("#Chart12", "100%", 400);
var print12 = dimple.newSvg("#Print12", 750, 400);
        
                            SnapData1 = dimple.filterData(dimple.filterData(data, "Indicator", "Snap Recipient Workers"), "Location", CountyName2);
        
                            SnapDatap1 = dimple.filterData(dimple.filterData(data, "Indicator", "Snap Recipient Workers by Percentage"), "Location", CountyName2);
        
                            
                            
                            
        
        
                    
                    var chart16 = new dimple.chart(svg12, SnapData1);
                            chart16.setBounds("11%", "12%", "35%", "65%")
                            var workX = chart16.addCategoryAxis("x", "Time")
                            var workY = chart16.addMeasureAxis("y", "Amount");
        
                            workY.tickFormat= ',f';
                            //mTanfY.overrideMax = .003;
                            var workLine = chart16.addSeries("Indicator", dimple.plot.bar);
        
                           // chart16.addLegend("26%", "5%", "50%", "70%", "right");
        
                            var chart17 = new dimple.chart(svg12, SnapDatap1);
                            chart17.setBounds("58%", "12%", "35%", "65%")
                            var workX = chart17.addCategoryAxis("x", "Time")
                            var workY = chart17.addMeasureAxis("y", "Amount");
        
                            workY.tickFormat = '.2%';
                            //mTanfY.overrideMax = .003;
                            var workLine = chart17.addSeries("Indicator", dimple.plot.bar);
        
                            //chart17.addLegend("26%", "5%", "50%", "70%", "right");
        
                            chart16.draw();
                            chart17.draw();
        
                var pchart16 = new dimple.chart(print12, SnapData1);
                            pchart16.setBounds("14%", "12%", "32%", 250)
                            var workX = pchart16.addCategoryAxis("x", "Time")
                            var workY = pchart16.addMeasureAxis("y", "Amount");
        
                            workX.tickFormat = ',f';
                            //mTanfY.overrideMax = .003;
                            var workLine = pchart16.addSeries("Indicator", dimple.plot.bar);
        
                           // pchart16.addLegend("26%", "5%", "50%", "70%", "right");
        
                            var pchart17 = new dimple.chart(print12, SnapDatap1);
                            pchart17.setBounds("62%", "12%", "32%", 300)
                            var workX = pchart17.addCategoryAxis("x", "Time")
                            var workY = pchart17.addMeasureAxis("y", "Amount");
        
                            workY.tickFormat = '.2%';
                            //mTanfY.overrideMax = .003;
                            var workLine = pchart17.addSeries("Indicator", dimple.plot.bar);
        
                            //pchart17.addLegend("26%", "5%", "50%", "70%", "right");
        
                            pchart16.draw();
                            pchart17.draw();
        
            //"14%", "12%", "32%", 250
            //"62%", "12%", "32%", 300
       
        
                
                    window.onresize = function () {
                      
                       drawAll();
                            }; 
        
        
        window.drawAll = function(){
            chart0.draw(0, true);
                        chart01.draw(0, true);
                       // chart.draw(0, true);
                            //    chart001.draw(0, true);
                                chart2.draw(0, true);
                                chart3.draw(0, true);
                                chart4.draw(0, true);
                                chart5.draw(0, true);

                                chart7.draw(0, true);
                               // chart8.draw(0, true);
                                //chart9.draw(0, true);
                                chart10.draw(0, true);
                                chart11.draw(0, true);
                                chart12.draw(0, true);
                                chart13.draw(0, true);
                                chart14.draw(0, true);
                                chart15.draw(0, true);
                                chart16.draw(0, true);
                                chart17.draw(0, true);
            
            
                            pchart0.draw(0, true);
                            pchart01.draw(0, true);
                            pchart2.draw(0, true);
                            pchart3.draw(0, true);
                            pchart4.draw(0, true);
                            pchart5.draw(0, true);
                            pchart7.draw(0, true);
                            pchart10.draw(0, true);
                            pchart11.draw(0, true);
                            p1chart12.draw(0, true);
                            p2chart13.draw(0, true);
                            pchart14.draw(0, true);
                            pchart15.draw(0, true);
                            pchart16.draw(0, true);
                            pchart17.draw(0, true);
                            
                            }; 
       
        
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
        
        
       
        
        
        
    });

var whichChart = 1;

function hidePrint(){
    document.getElementById("Print0").style.display="none";
    document.getElementById("Print3").style.display="none";
    document.getElementById("Print4").style.display="none";
    document.getElementById("PrintFive").style.display="none";
    document.getElementById("Print8").style.display="none";
    document.getElementById("Print9").style.display="none";
    document.getElementById("Print10").style.display="none";
    document.getElementById("Print11").style.display="none";
    document.getElementById("Print12").style.display="none";
}

function hideChart(){
    document.getElementById("Chart0").style.display="none";
    document.getElementById("Chart3").style.display="none";
    document.getElementById("Chart4").style.display="none";
    document.getElementById("ChartFive").style.display="none";
    document.getElementById("Chart8").style.display="none";
    document.getElementById("Chart9").style.display="none";
    document.getElementById("Chart10").style.display="none";
    document.getElementById("Chart11").style.display="none";
    document.getElementById("Chart12").style.display="none";
}

function showChart(){
    document.getElementById("Chart0").style.display="inline";
    document.getElementById("Chart3").style.display="inline";
    document.getElementById("Chart4").style.display="inline";
    document.getElementById("ChartFive").style.display="inline";
    document.getElementById("Chart8").style.display="inline";
    document.getElementById("Chart9").style.display="inline";
    document.getElementById("Chart10").style.display="inline";
    document.getElementById("Chart11").style.display="inline";
    document.getElementById("Chart12").style.display="inline";
}

function showPrint(){
    document.getElementById("Print0").style.display="inline";
    document.getElementById("Print3").style.display="inline";
    document.getElementById("Print4").style.display="inline";
    document.getElementById("PrintFive").style.display="inline";
    document.getElementById("Print8").style.display="inline";
    document.getElementById("Print9").style.display="inline";
    document.getElementById("Print10").style.display="inline";
    document.getElementById("Print11").style.display="inline";
    document.getElementById("Print12").style.display="inline";
}

    function popchart() {
        document.getElementById("collapse1").style.display="inline";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        
        document.getElementById("collapse8").style.display="none";
        
        document.getElementById("collapse9").style.display="none";
        
        whichChart = 1;
        
        drawAll();
        hidePrint();
        
    }
    
    function educhart() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="inline";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        
        document.getElementById("collapse8").style.display="none";
        
        document.getElementById("collapse9").style.display="none";
        
        
        whichChart = 2;
        
        drawAll();
        hidePrint();
        
    }
    
    function racechart() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="inline";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        
        document.getElementById("collapse8").style.display="none";
        
        document.getElementById("collapse9").style.display="none";
        
        whichChart = 3;
        
        drawAll();
        hidePrint();
        
    }
    
    function vetchart() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="inline";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        
        document.getElementById("collapse8").style.display="none";
        
        document.getElementById("collapse9").style.display="none";
        
        whichChart = 4;
        
        drawAll();
        hidePrint();
        
    }
    
    function dischart() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="inline";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        
            document.getElementById("collapse8").style.display="none";
        
        document.getElementById("collapse9").style.display="none";
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
    whichChart = 9;
        
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
    
    
        drawAll();
        
    }

window.printClick = function(){
    if(whichChart == 1){
        popchart();
        document.getElementById("Chart0").style.display="none";
        document.getElementById("Print0").style.display="inline";
        drawAll();
        
    }else if(whichChart ==2){
        educhart();
        document.getElementById("Chart3").style.display="none";
        document.getElementById("Print3").style.display="inline";
        drawAll();
    }else if(whichChart ==3){
        racechart();
        document.getElementById("Chart4").style.display="none";
        document.getElementById("Print4").style.display="inline";
        drawAll();
    }else if(whichChart ==4){
        vetchart();
        document.getElementById("ChartFive").style.display="none";
        document.getElementById("PrintFive").style.display="inline";
        drawAll();
    }else if(whichChart ==5){
        dischart();
        document.getElementById("Chart8").style.display="none";
        document.getElementById("Print8").style.display="inline";
        drawAll();
    }else if(whichChart ==6){
        collapse6();
        document.getElementById("Chart9").style.display="none";
        document.getElementById("Print9").style.display="inline";
        drawAll();
    }else if(whichChart ==7){
        collapse7();
        document.getElementById("Chart10").style.display="none";
        document.getElementById("Print10").style.display="inline";
        drawAll();
    }else if(whichChart ==8){
        collapse8();
        document.getElementById("Chart11").style.display="none";
        document.getElementById("Print11").style.display="inline";
        drawAll();
    }else if(whichChart == 9){
        collapse9();
        document.getElementById("Chart12").style.display="none";
        document.getElementById("Print12").style.display="inline";
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