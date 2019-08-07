
var togNum = 1;
var togNum1 = 1;
    d3.csv("../data/alleganydata.csv", function (data) {
        
        //chart 0
        
        var svg0 = dimple.newSvg("#Chart0", "100%", 650);
        
        pData = dimple.filterData(dimple.filterData(dimple.filterData(data, "Time", ["2007-2011","2012-2016"]), "Indicator", "Total Population"));
        
        wData = dimple.filterData(dimple.filterData(dimple.filterData(data, "Time", ["2007-2011","2012-2016"]), "Indicator", "Median Household Income"));
        
        
        var chart0 = new dimple.chart(svg0, pData);
                        chart0.setBounds("11%", 65, "35%", 500)
                        var x0 = chart0.addCategoryAxis("x", "Time");
                         var y0 = chart0.addMeasureAxis("y", "Amount");
                        y0.tickFormat = ',f';
                       var s0 = chart0.addSeries("Indicator", dimple.plot.bar);
                        s0.lineMarkers = true;
                        x0.addOrderRule(["2007-2011", "2012-2016"]);
                        chart0.draw();
        
        
        
        
        var chart01 = new dimple.chart(svg0, wData);
                            chart01.setBounds("56%", 65, "35%", 500)
                          var x01 = chart01.addCategoryAxis("x", "Time");
                            var pY = chart01.addMeasureAxis("y", "Amount");
                           var s01 = chart01.addSeries("Indicator", dimple.plot.bar);
               //            var ethLegend = chart5.addLegend("86%", "70%", "26%", "10%", "right");
        
                            s01.lineMarkers = true;
                            x01.addOrderRule(["2007-2011", "2012-2016"]);
                            pY.tickFormat = ',f';
                            chart01.draw();
        
        var svg = dimple.newSvg("#Chart1", "100%", 750);
        
        svg0.append("text")
                       .attr("x", (chart0._xPixels() + chart0._widthPixels() / 2)-200)
                       .attr("y", chart0._yPixels() - 20)
                       .style("text-anchor", "left")
                       .style("font-family", "sans-serif")
                       .text("Population")
        
        svg0.append("text")
                       .attr("x", (chart01._xPixels() + chart01._widthPixels() / 2)-200)
                       .attr("y", chart01._yPixels() - 20)
                       .style("text-anchor", "left")
                       .style("font-family", "sans-serif")
                       .text("Median Household Income")
        
        //chart 1
                    
             //       var County = "Allegany County, MD";
                    
             //       dataCounty = dimple.filterData(data, "Location", County);
        
                    Allegany = dimple.filterData(data, "Location", CountyName1);
        
                 /**   MonthYears = dimple.filterData(Allegany, "Time", ["Jan\n2014", "Feb\n2014", "Mar\n2014", "Apr\n2014", "May\n2014", "Jun\n2014", "Jul\n2014", "Aug\n2014", "Sep\n2014", "Oct\n2014", "Nov\n2014", "Dec\n2014", "Jan\n2015", "Feb\n2015", "Mar\n2015", "Apr\n2015", "May\n2015", "Jun\n2015", "Jul\n2015", "Aug\n2015", "Sep\n2015", "Oct\n2015", "Nov\n2015", "Dec\n2015"]);
                 
                 **/
        
                MonthYears = dimple.filterData(Allegany, "Time", ["Jan\n2014", "Feb\n2014", "Mar\n2014", "Apr\n2014", "May\n2014", "Jun\n2014", "Jul\n2014", "Aug\n2014", "Sep\n2014", "Oct\n2014", "Nov\n2014", "Dec\n2014", "Jan\n2015", "Feb\n2015", "Mar\n2015", "Apr\n2015", "May\n2015", "Jun\n2015", "Jul\n2015", "Aug\n2015", "Sep\n2015", "Oct\n2015", "Nov\n2015", "Dec\n2015", "Jan\n2016", "Feb\n2016", "Mar\n2016", "Apr\n2016", "May\n2016", "Jun\n2016", "Jul\n2016", "Aug\n2016", "Sep\n2016", "Oct\n2016", "Nov\n2016", "Dec\n2016"]);
        
        //2014-2015
        
                    LaborForce = dimple.filterData(MonthYears, "IndicatorValue", "Labor Force");
        
                    
        
                    Employed = dimple.filterData(MonthYears, "IndicatorValue", "Employed");
        
                    Unemployed = dimple.filterData(MonthYears, "IndicatorValue", "Unemployed");
        
                    UnemployRate = dimple.filterData(MonthYears, "IndicatorValue", "Unemployment Rate");
        
                    
                    
        
        //2014
                    
                    MonthYears2014 = dimple.filterData(Allegany, "Time", ["Jan\n2014", "Feb\n2014", "Mar\n2014", "Apr\n2014", "May\n2014", "Jun\n2014", "Jul\n2014", "Aug\n2014", "Sep\n2014", "Oct\n2014", "Nov\n2014", "Dec\n2014"]);
        
                    LaborForce2014 = dimple.filterData(MonthYears2014, "IndicatorValue", "Labor Force");
        
                    Employed2014 = dimple.filterData(MonthYears2014, "IndicatorValue", "Employed");
        
                    Unemployed2014 = dimple.filterData(MonthYears2014, "IndicatorValue", "Unemployed");
        
                    UnemployRate2014 = dimple.filterData(MonthYears2014, "IndicatorValue", "Unemployment Rate");
        
        
        //2015
                    MonthYears2015 = dimple.filterData(Allegany, "Time", ["Jan\n2015", "Feb\n2015", "Mar\n2015", "Apr\n2015", "May\n2015", "Jun\n2015", "Jul\n2015", "Aug\n2015", "Sep\n2015", "Oct\n2015", "Nov\n2015", "Dec\n2015"]);
        
                    LaborForce2015 = dimple.filterData(MonthYears2015, "IndicatorValue", "Labor Force");
        
                    Employed2015 = dimple.filterData(MonthYears2015, "IndicatorValue", "Employed");
        
                    Unemployed2015 = dimple.filterData(MonthYears2015, "IndicatorValue", "Unemployed");
        
                    UnemployRate2015 = dimple.filterData(MonthYears2015, "IndicatorValue", "Unemployment Rate");
        
        //2016
        
                    MonthYears2016 = dimple.filterData(Allegany, "Time", ["Jan\n2016", "Feb\n2016", "Mar\n2016", "Apr\n2016", "May\n2016", "Jun\n2016", "Jul\n2016", "Aug\n2016", "Sep\n2016", "Oct\n2016", "Nov\n2016", "Dec\n2016"]);
        
                    LaborForce2016 = dimple.filterData(MonthYears2016, "IndicatorValue", "Labor Force");
        
                    Employed2016 = dimple.filterData(MonthYears2016, "IndicatorValue", "Employed");
        
                    Unemployed2016 = dimple.filterData(MonthYears2016, "IndicatorValue", "Unemployed");
        
                    UnemployRate2016 = dimple.filterData(MonthYears2016, "IndicatorValue", "Unemployment Rate");
        
        
                    
                    

                    
        
                        var chart = new dimple.chart(svg, LaborForce);
                        chart.setBounds("13%", 50, "80%", 500)
                        var x = chart.addCategoryAxis("x", ["Time", "Location"]);
                         var y = chart.addMeasureAxis("y", "Amount");
                         var y0001 = chart.addMeasureAxis("y", "Unemployment Rate")
                            y.tickFormat = ',f';
                            y0001.tickFormat = '.1%';
                            //y0001.overrideMax = .30;
                           var lines = chart.addSeries("IndicatorValue", dimple.plot.bar, [x, y]);
                           var lines0001 = chart.addSeries(null, dimple.plot.line, [x, y0001]);
                            
                           
                            
                            x.addOrderRule(["Jan\n2014", "Feb\n2014", "Mar\n2014", "Apr\n2014", "May\n2014", "Jun\n2014", "Jul\n2014", "Aug\n2014", "Sep\n2014", "Oct\n2014", "Nov\n2014", "Dec\n2014", "Jan\n2015", "Feb\n2015", "Mar\n2015", "Apr\n2015", "May\n2015", "Jun\n2015", "Jul\n2015", "Aug\n2015", "Sep\n2015", "Oct\n2015", "Nov\n2015", "Dec\n2015", "Jan\n2016", "Feb\n2016", "Mar\n2016", "Apr\n2016", "May\n2016", "Jun\n2016", "Jul\n2016", "Aug\n2016", "Sep\n2016", "Oct\n2016", /**"Nov\n2016", "Dec\n2016"**/]);
                            lines.lineMarkers = true;
                            lines0001.lineMarkers = true;
                        //    chart.addLegend("23%", "1%", "50%", "50%", "right");
        
                         //   chart.assignColor("Labor Force", "blue", "blue", .2);
                            chart.draw();
        
                   /**         var chart001 = new dimple.chart(svg, UnemployRate);
                            chart001.setBounds("13%", 50, "85%", 500)
                            var x001 = chart.addCategoryAxis("x", "Time");
                            var y001 = chart.addMeasureAxis("y", "Amount");
                                y001.tickFormat = "p";
                            var lines001 = chart.addSeries("Location", dimple.plot.line);
        
                            x001.addOrderRule(["Maryland", "Allegany County, MD", "Anne Arundel County, MD", "Baltimore County, MD", "Calvert County, MD", "Caroline County, MD", "Carroll County, MD", "Cecil County, MD", "Charles County, MD", "Dorchester County, MD", "Frederick County, MD", "Garrett County, MD", "Harford County, MD", "Howard County, MD", "Kent County, MD", "Montgomery County, MD", "Prince George's County, MD", "Queen Anne's County, MD", "St. Mary's County, MD", "Somerset County, MD", "Talbot County, MD", "Washington County, MD", "Wicomico County, MD", "Worcester County, MD", "Baltimore city, MD"]);
        
                            lines001.lineMarkers = true;
                            chart001.draw();
                            
                            **/
                            
        
        //button 1
        
d3.select("#btn1").on("change", function() {
            
            
  
  
	var e = document.getElementById("btn1");
    var e2 = document.getElementById("btn2");
  var strUser = e.options[e.selectedIndex].text;
  var strUser2 = e2.options[e2.selectedIndex].text;
            
    if(strUser == "Labor Force"){
       if(strUser2 == "2014-2016")
           {
               chart.data = LaborForce;
       }else{
       if(strUser2 == "2014"){
        chart.data = LaborForce2014;
       }else{
       if(strUser2 == "2015"){
        chart.data = LaborForce2015;
       }else{
       if(strUser2 == "2016"){
        chart.data = LaborForce2016;
       }
       }
       }
       }
       
   }
    
            
    if(strUser == "Employment"){
       if(strUser2 == "2014-2016")
           {
               chart.data = Employed;
       }else{
       if(strUser2 == "2014"){
        chart.data = Employed2014;
       }else{
       if(strUser2 == "2015"){
        chart.data = Employed2015;
       }else{
       if(strUser2 == "2016"){
        chart.data = Employed2016;
       }
       }
       }
       }
       
   }
            
            
    if(strUser == "Unemployment"){
       if(strUser2 == "2014-2016")
           {
               chart.data = Unemployed;
       }else{
       if(strUser2 == "2014"){
        chart.data = Unemployed2014;
       }else{
       if(strUser2 == "2015"){
        chart.data = Unemployed2015;
       }else{
       if(strUser2 == "2016"){
        chart.data = Unemployed2016;
       }
       }
       }
       }
   }
  
   if(strUser == "Unemployment Rate"){
       if(strUser2 == "2014-2016")
           {
               chart.data = UnemployRate;
       }else{
       if(strUser2 == "2014"){
        chart.data = UnemployRate2014;
       }else{
       if(strUser2 == "2015"){
        chart.data = UnemployRate2015;
       }else{
       if(strUser2 == "2016"){
        chart.data = UnemployRate2016;
       }
       }
       }
       }
       
   }
            
  var lines = chart.addSeries("IndicatorValue", dimple.plot.bar, [x, y]);
  var lines0001 = chart.addSeries(null, dimple.plot.line, [x, y0001]);
  lines.lineMarkers = true;
  lines0001.lineMarkers = true;


   chart.draw(1000);

 //  x.titleShape.text("ACS, Race, " + strUser + " 2013");
});
   
        //button 2
        
        d3.select("#btn2").on("change", function() {
            
            
  
  
	var e = document.getElementById("btn1");
    var e2 = document.getElementById("btn2");
  var strUser = e.options[e.selectedIndex].text;
  var strUser2 = e2.options[e2.selectedIndex].text;
            
    if(strUser == "Labor Force"){
       if(strUser2 == "2014-2016")
           {
               chart.data = LaborForce;
       }else{
       if(strUser2 == "2014"){
        chart.data = LaborForce2014;
       }else{
       if(strUser2 == "2015"){
        chart.data = LaborForce2015;
       }else{
       if(strUser2 == "2016"){
        chart.data = LaborForce2016;
       }
       }
       }
       }
       
   }
    
            
    if(strUser == "Employment"){
       if(strUser2 == "2014-2016")
           {
               chart.data = Employed;
       }else{
       if(strUser2 == "2014"){
        chart.data = Employed2014;
       }else{
       if(strUser2 == "2015"){
        chart.data = Employed2015;
       }else{
       if(strUser2 == "2016"){
        chart.data = Employed2016;
       }
       }
       }
       }
       
   }
            
            
    if(strUser == "Unemployment"){
       if(strUser2 == "2014-2016")
           {
               chart.data = Unemployed;
       }else{
       if(strUser2 == "2014"){
        chart.data = Unemployed2014;
       }else{
       if(strUser2 == "2015"){
        chart.data = Unemployed2015;
       }else{
       if(strUser2 == "2016"){
        chart.data = Unemployed2016;
       }
       }
       }
       }
   }
  
   if(strUser == "Unemployment Rate"){
       if(strUser2 == "2014-2016")
           {
               chart.data = UnemployRate;
       }else{
       if(strUser2 == "2014"){
        chart.data = UnemployRate2014;
       }else{
       if(strUser2 == "2015"){
        chart.data = UnemployRate2015;
       }else{
       if(strUser2 == "2016"){
        chart.data = UnemployRate2016;
       }
       }
       }
       }
       
   }
            
   var lines = chart.addSeries("IndicatorValue", dimple.plot.bar, [x, y]);
  var lines0001 = chart.addSeries(null, dimple.plot.line, [x, y0001]);
  lines.lineMarkers = true;
  lines0001.lineMarkers = true;
   chart.draw(1000);

 //  x.titleShape.text("ACS, Race, " + strUser + " 2013");
});
        
        
         //end chart 1           
        
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
                
                var svg3 = dimple.newSvg("#Chart3", "100%", 900);
                            
                            
        
                            EduAttainment1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "IndicatorValue", ["Less than high school graduate", "High school graduate (includes equivalency)", "Some college or associate's degree", "Bachelor's degree or higher"]), "Location", CountyName2), "Employment Status", ["Unemployed", "Not in Labor Force", "Employed"]),"Time", "2007-2011");
        
                            EduAttainment = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "IndicatorValue", ["Less than high school graduate", "High school graduate (includes equivalency)", "Some college or associate's degree", "Bachelor's degree or higher"]), "Location", CountyName2), "Employment Status", ["Unemployed", "Not in Labor Force", "Employed"]),"Time", "2012-2016");
                            
        
                            var chart2 = new dimple.chart(svg3, EduAttainment);
                            chart2.setBounds("7%", 65, "40%", 500)
                            var edX = chart2.addCategoryAxis("x", "Employment Status");
                            var eduY = chart2.addMeasureAxis("y", "Amount");
                           var edSeries = chart2.addSeries("IndicatorValue", dimple.plot.bar);
                            edSeries.addOrderRule(["Less than high school graduate", "High school graduate (includes equivalency)", "Some college or associate's degree", "Bachelor's degree or higher"]);
        
                       //     edX.addOrderRule(["Less than high school graduate", "High school graduate (includes equivalency)", "Some college or associate's degree", "Bachelor's degree or higher"]);
                      var edLegend = chart2.addLegend("0%", "83%", "50%", "70%", "right");
        
                            edSeries.lineWeight = 0;
                            chart2.draw();
        
                            
                            
                            eduY.tickFormat = ',f';
                            
                            genderRate = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Time", "2012-2016"), "IndicatorValue", ["Male", "Female"]), "Location", CountyName2), "Indicator", "Unemplolyment Rate by Gender");
                            
                            genderRate1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Time", "2007-2011"), "IndicatorValue", ["Male", "Female"]), "Location", CountyName2), "Indicator", "Unemplolyment Rate by Gender");
        
                            var chart3 = new dimple.chart(svg3, genderRate);
                            chart3.setBounds("56%", 65, "40%", 500)
                            chart3.addCategoryAxis("x", "IndicatorValue");
                            var genY = chart3.addMeasureAxis("y", "Unemployment Rate");
                            //genY.overrideMax = .30;
                          //  genY.titleShape.text("Percentage");
        
                            chart3.addSeries("IndicatorValue", dimple.plot.bar);
                           // var genLegend = chart3.addLegend("38%", "10%", "50%", "70%", "right");
                            genY.tickFormat = '.1%';
        
                            
                            chart3.draw();
        
                            
        
                            

        
        
        svg3.append("text")
                       .attr("x", (chart2._xPixels() + chart2._widthPixels() / 2)-200)
                       .attr("y", chart2._yPixels() - 20)
                       .style("text-anchor", "left")
                       .style("font-family", "sans-serif")
                       .text("Educational Attainment")
        
        svg3.append("text")  
                       .attr("x", (chart3._xPixels() + chart3._widthPixels() / 2)-100)
                       .attr("y", chart3._yPixels() - 20)
                       .style("text-anchor", "left")
                       .style("font-family", "sans-serif")
                       .text("Gender")
        
                //chart 3 end
        
                //chart 4
        
                var svg4 = dimple.newSvg("#Chart4", "100%", 1050);
                            raceData = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Time", "2012-2016"), "Indicator", "Unemplolyment Rate by Race/Ethnicity"), "Location", CountyName2), "IndicatorValue", [ "White", "Black or African American", "Asian", "Hispanic or Latino origin (of any race)"]);
        
                            raceData1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Time", "2007-2011"), "Indicator", "Unemplolyment Rate by Race/Ethnicity"), "Location", CountyName2), "IndicatorValue", [ "White", "Black or African American", "Asian", "Hispanic or Latino origin (of any race)"]);
        
        
                            
                            var chart4 = new dimple.chart(svg4, raceData);
                            chart4.setBounds("7%", 65, "40%", 500)
                            chart4.addCategoryAxis("x", "IndicatorValue");
                            var raceY = chart4.addMeasureAxis("y", "Unemployment Rate");
                            raceY.overrideMax = .50;
                            var rSeries = chart4.addSeries("IndicatorValue", dimple.plot.bar);
                            rSeries.addOrderRule(["White", "Black or African American", "Asian", "Hispanic or Latino origin (of any race)"]);
                                
                     //       var raceLegend = chart4.addLegend("0%", "70%", "47%", "70%", "right");
        
                            raceY.tickFormat = '.1%';
        
                            
                            chart4.draw();
                            
                            
                            ethData = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Time", "2012-2016"), "Indicator", "Unemplolyment Rate by Race/Ethnicity"), "Location", CountyName2), "IndicatorValue", ["White", "Hispanic or Latino origin (of any race)"]);
        
        
                            ethData1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Time", "2007-2011"), "Indicator", "Unemplolyment Rate by Race/Ethnicity"), "Location", CountyName2), "IndicatorValue", ["White", "Hispanic or Latino origin (of any race)"]);
        
                            var chart5 = new dimple.chart(svg4, ethData);
                            chart5.setBounds("56%", 65, "40%", 500)
                            chart5.addCategoryAxis("x", "IndicatorValue")
                            var ethY = chart5.addMeasureAxis("y", "Unemployment Rate");
                            //ethY.overrideMax = .30;
                    
                            chart5.addSeries("IndicatorValue", dimple.plot.bar);
               //            var ethLegend = chart5.addLegend("86%", "70%", "26%", "10%", "right");
                            
                            ethY.tickFormat = '.1%';
                            chart5.draw();
        
        svg4.append("text")
                       .attr("x", (chart4._xPixels() + chart4._widthPixels() / 2)-200)
                       .attr("y", chart4._yPixels() - 20)
                       .style("text-anchor", "left")
                       .style("font-family", "sans-serif")
                       .text("Race")
        
        svg4.append("text")  
                       .attr("x", (chart5._xPixels() + chart5._widthPixels() / 2)-200)
                       .attr("y", chart5._yPixels() - 20)
                       .style("text-anchor", "left")
                       .style("font-family", "sans-serif")
                       .text("Ethnicity")
        
                //chart 4 end
        
        //chart 5
        
                var svg5 = dimple.newSvg("#ChartFive", "100%", 650);        
                            
                            vetData = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Unemplolyment Rate by Veteran Status"), "Location", CountyName2), "Time", "2012-2016");
        
        
                            vetData1 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Unemplolyment Rate by Veteran Status"), "Location", CountyName2), "Time", "2007-2011");
        
                            var chart7 = new dimple.chart(svg5, vetData);
                            chart7.setBounds("9%", 65, "80%", 500)
                            var vetX = chart7.addCategoryAxis("x", "IndicatorValue")
                           
                            
                            var vetY = chart7.addMeasureAxis("y", "Unemployment Rate");
                            //vetY.overrideMax = .30;
                            chart7.addSeries("IndicatorValue", dimple.plot.bar);
                             vetX.addOrderRule(["Veteran, Non Veteran"]);
                            vetY.tickFormat = '.1%';
                       //     var vetLegend = chart7.addLegend("16%", "90%", "50%", "70%", "right");
                            chart7.draw();
                            
                            
                            
        
        svg5.append("text")  
                       .attr("x", (chart7._xPixels() + chart7._widthPixels() / 2)-200)
                       .attr("y", chart7._yPixels() - 20)
                       .style("text-anchor", "left")
                       .style("font-family", "sans-serif")
                       .text("Veteran Status")
        
        
 d3.select("#btn3").on("change", function() {
  
  
	var e3 = document.getElementById("btn3");
  var strUser3 = e3.options[e3.selectedIndex].text;
  
   if(strUser3 == "2012-2016"){
        chart2.data = EduAttainment;
        chart3.data = genderRate;
        chart4.data = raceData;
        chart5.data = ethData;
        chart7.data = vetData;
       edSeries.lineWeight = 0;
        
   }
        
    if(strUser3 == "2007-2011"){
        chart2.data = EduAttainment1;
        chart3.data = genderRate1;
        chart4.data = raceData1;
        chart5.data = ethData1;
        chart7.data = vetData1;
        edSeries.lineWeight = 0;
    }
         
     chart2.draw(1000);
     chart3.draw(1000);
     chart4.draw(1000);
     chart5.draw(1000);
     chart7.draw(1000);
     
 });
        
  d3.select("#btn4").on("change", function() {  
  
    var e4 = document.getElementById("btn4");
  var strUser4 = e4.options[e4.selectedIndex].text;
  
    if(strUser4 == "2013"){
      
      document.getElementById("commutePic").src = "../commute/" + CountyName + "%202013%20map.png";
    }
      if(strUser4 == "2014"){
      
      document.getElementById("commutePic").src = "../commute/" + CountyName + "%202014%20map.png";
          
    }
  
  
  
  });    
       
       
            
  Unemploy = dimple.filterData(MonthYears, "IndicatorValue", "Unemployment Rate");
  chart2.addSeries("Location", dimple.plot.line);


   chart.draw(1000);

                            
                           
        
        //chart 5 end
        
        //Chart 6 - QCEW
        
        var svg6 = dimple.newSvg("#Chart6", "100%", 650);        
                            
                            Qdata1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Employment by Industry Annual Average"), "IndicatorValue", ["Accommodation and food services", "Administrative and waste services", "Agriculture, forestry, fishing and hunting", "Arts, entertainment, and recreation", "Construction", "Educational services", "Finance and insurance", "Health care and social assistance", "Information", "Management of companies and enterprises", "Manufacturing", "Mining, quarrying, and oil and gas extraction", "Other services, except public administration", "Professional and technical services", "Public administration", "Real eMaryland State and rental and leasing", "Retail trade", "Transportation and warehousing", "Utilities", "Wholesale trade"]), "Location", CountyName2), "Time", "2014"  );
        
                            Qdata2 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Employment by Industry Annual Average"), "IndicatorValue", ["Accommodation and food services", "Administrative and waste services", "Agriculture, forestry, fishing and hunting", "Arts, entertainment, and recreation", "Construction", "Educational services", "Finance and insurance", "Health care and social assistance", "Information", "Management of companies and enterprises", "Manufacturing", "Mining, quarrying, and oil and gas extraction", "Other services, except public administration", "Professional and technical services", "Public administration", "Real eMaryland State and rental and leasing", "Retail trade", "Transportation and warehousing", "Utilities", "Wholesale trade"]), "Location", CountyName2), "Time", "2015"  );
        
                            Qdata3 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Employment by Industry Annual Average"), "IndicatorValue", ["Accommodation and food services", "Administrative and waste services", "Agriculture, forestry, fishing and hunting", "Arts, entertainment, and recreation", "Construction", "Educational services", "Finance and insurance", "Health care and social assistance", "Information", "Management of companies and enterprises", "Manufacturing", "Mining, quarrying, and oil and gas extraction", "Other services, except public administration", "Professional and technical services", "Public administration", "Real eMaryland State and rental and leasing", "Retail trade", "Transportation and warehousing", "Utilities", "Wholesale trade"]), "Location", CountyName2), "Time", "2016"  );
        
                             Qdata11 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Over-the-Year Employment Change by Industry"), "IndicatorValue", ["Accommodation and food services", "Administrative and waste services", "Agriculture, forestry, fishing and hunting", "Arts, entertainment, and recreation", "Construction", "Educational services", "Finance and insurance", "Health care and social assistance", "Information", "Management of companies and enterprises", "Manufacturing", "Mining, quarrying, and oil and gas extraction", "Other services, except public administration", "Professional and technical services", "Public administration", "Real eMaryland State and rental and leasing", "Retail trade", "Transportation and warehousing", "Utilities", "Wholesale trade"]), "Location", CountyName2), "Time", "2014"  );
        
                            Qdata21 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Over-the-Year Employment Change by Industry"), "IndicatorValue", ["Accommodation and food services", "Administrative and waste services", "Agriculture, forestry, fishing and hunting", "Arts, entertainment, and recreation", "Construction", "Educational services", "Finance and insurance", "Health care and social assistance", "Information", "Management of companies and enterprises", "Manufacturing", "Mining, quarrying, and oil and gas extraction", "Other services, except public administration", "Professional and technical services", "Public administration", "Real eMaryland State and rental and leasing", "Retail trade", "Transportation and warehousing", "Utilities", "Wholesale trade"]), "Location", CountyName2), "Time", "2015"  );
        
                            Qdata31 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Over-the-Year Employment Change by Industry"), "IndicatorValue", ["Accommodation and food services", "Administrative and waste services", "Agriculture, forestry, fishing and hunting", "Arts, entertainment, and recreation", "Construction", "Educational services", "Finance and insurance", "Health care and social assistance", "Information", "Management of companies and enterprises", "Manufacturing", "Mining, quarrying, and oil and gas extraction", "Other services, except public administration", "Professional and technical services", "Public administration", "Real eMaryland State and rental and leasing", "Retail trade", "Transportation and warehousing", "Utilities", "Wholesale trade"]), "Location", CountyName2), "Time", "2016"  );
        
                            var chart8 = new dimple.chart(svg6, Qdata3);
                            chart8.setBounds("12%", 65, "30%", 500)
                            var x2 = chart8.addCategoryAxis("x", ["Time", "IndicatorValue"]);
                            var y2 = chart8.addMeasureAxis("y", "Amount");
                            y2.tickFormat = ',f';
                            chart8.addSeries("IndicatorValue", dimple.plot.bar);
                            var qLegend = chart8.addLegend(375,55,300,500);
                            qLegend.fontSize = "1px";
                            chart8.draw();
        
        
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
         
     chart8.draw(1000);
     
 });
        
        //Chart 6 - end
        
        //chart 9 OTM
        
        
         var svg7 = dimple.newSvg("#Chart7", "100%", 650);
        
        Cdata = dimple.filterData(dimple.filterData(dimple.filterData(data, "Location", CountyName1), "Time", ["2014", "2015"]), "Indicator", ["Out-Commuters", "In-Commuters"]);
        
        var chart9 = new dimple.chart(svg7, Cdata);
                            chart9.setBounds("9%", 50, "80%", 500)
                         var x3 = chart9.addCategoryAxis("x", "Time");
                         var y3 = chart9.addMeasureAxis("y", "Amount");
                            
                           var lines3 = chart9.addSeries("Indicator", dimple.plot.line);
                            
                            lines3.lineMarkers = true;
                            y3.tickFormat = ',f';
                            chart9.addLegend("10%", "5%", "50%", "50%", "right");
        
                            chart9.draw();
        
        var svg8 = dimple.newSvg("#Chart8", "100%", 900);
                            
                            
        
                            DisAttainment1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Unemplolyment Rate by Disability Status"), "Location", CountyName2), "Employment Status", ["Unemployed", "Labor Force", "Employed"]),"Time", "2008-2011");
        
                            DisAttainment = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Unemplolyment Rate by Disability Status"), "Location", CountyName2), "Employment Status", ["Unemployed", "Labor Force", "Employed"]),"Time", "2012-2016");
                            
        
                            var chart10 = new dimple.chart(svg8, DisAttainment);
                            chart10.setBounds("7%", 65, "40%", 500)
                            var disX = chart10.addCategoryAxis("x", "Employment Status");
                            var disY = chart10.addMeasureAxis("y", "Amount");
                           var disSeries = chart10.addSeries("IndicatorValue", dimple.plot.bar);
                            //disSeries.addOrderRule(["Labor Force", "Employed", "Unemployed"]);
        
                       //     edX.addOrderRule(["Less than high school graduate", "High school graduate (includes equivalency)", "Some college or associate's degree", "Bachelor's degree or higher"]);
                     // var disLegend = chart10.addLegend("0%", "83%", "50%", "70%", "right");
        
                            disSeries.lineWeight = 0;
                            chart10.draw();
        
                            disY.tickFormat = ',f';
                            
                            povRate = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Unemplolyment Rate by Poverty Status"), "Location", CountyName2), "Employment Status", ["Unemployed", "Labor Force", "Employed"]),"Time", "2012-2016");
                            
                            povRate1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Unemplolyment Rate by Poverty Status"), "Location", CountyName2), "Employment Status", ["Unemployed", "Labor Force", "Employed"]),"Time", "2007-2011");
        
                            var chart11 = new dimple.chart(svg8, povRate);
                            chart11.setBounds("56%", 65, "40%", 500)
                            chart11.addCategoryAxis("x", "Employment Status");
                            var povY = chart11.addMeasureAxis("y", "Amount");
                           // povY.overrideMax = .30;
                          //  genY.titleShape.text("Percentage");
        
                            chart11.addSeries("IndicatorValue", dimple.plot.bar);
                           // var genLegend = chart3.addLegend("38%", "10%", "50%", "70%", "right");
        
                            
                            chart11.draw();
                            povY.tickFormat = ',f';
        
        d3.select("#btn9").on("change", function() {
  
  
	var e7 = document.getElementById("btn9");
  var strUser7 = e7.options[e7.selectedIndex].text;
  
   if(strUser7 == "2008-2011/2007-2011"){
        chart10.data = DisAttainment1;
        chart11.data = povRate1;
        
   }
        
    if(strUser7 == "2012-2016"){
        chart10.data = DisAttainment;
        chart11.data = povRate;
    }
         
     chart10.draw(1000);
     chart11.draw(1000);
     
 });
        
                            
        
                            

        
        
        svg8.append("text")
                       .attr("x", (chart10._xPixels() + chart10._widthPixels() / 2)-200)
                       .attr("y", chart10._yPixels() - 20)
                       .style("text-anchor", "left")
                       .style("font-family", "sans-serif")
                       .text("Disability Status")
        
        svg8.append("text")  
                       .attr("x", (chart11._xPixels() + chart11._widthPixels() / 2)-100)
                       .attr("y", chart11._yPixels() - 20)
                       .style("text-anchor", "left")
                       .style("font-family", "sans-serif")
                       .text("Poverty Status")
        
        var svg9 = dimple.newSvg("#Chart9", "100%", 900);
                            
                            TanfAttainment2 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Number of TANF Recipient Workers"), "Location", CountyName2), "Employment Status", "Employed"),"Time", ["2015Q1", "2015Q2","2015Q3","2015Q4","2016Q1", "2016Q2"]);
        
                            TanfAttainment1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Number of TANF Recipient Workers"), "Location", CountyName2), "Employment Status", "Employed"),"Time", ["2015Q1", "2015Q2","2015Q3","2015Q4"]);
        
                            TanfAttainment = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Number of TANF Recipient Workers"), "Location", CountyName2), "Employment Status", "Employed"),"Time", ["2016Q1", "2016Q2","2016Q3", "2016Q4"]);
                            
        
                            var chart12 = new dimple.chart(svg9, TanfAttainment2);
                            chart12.setBounds("7%", 65, "40%", 500)
                            var tanfX = chart12.addCategoryAxis("x", "Time");
                            var tanfY = chart12.addMeasureAxis("y", "Amount");
                           var tanfSeries = chart12.addSeries("Indicator", dimple.plot.line);
                            tanfX.addOrderRule(["2015Q1", "2015Q2", "2015Q3", "2015Q4", "2016Q1", "2016Q2"]);
        
                       //     edX.addOrderRule(["Less than high school graduate", "High school graduate (includes equivalency)", "Some college or associate's degree", "Bachelor's degree or higher"]);
                  //    var disLegend = chart12.addLegend("0%", "83%", "50%", "70%", "right");
        
                            tanfSeries.lineMarkers = true;
                            chart12.draw();
        
                            
                            
                            tanfY.tickFormat = ',f';
        
                            pTanfRate2 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Percentage of Workforce Training Program/Service Participants in TANF"), "Location", CountyName2), "Employment Status", "Employed"),"Time", ["2015Q1", "2015Q2","2015Q3","2015Q4", "2016Q1", "2016Q2"]);
                            
                            pTanfRate1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Percentage of Workforce Training Program/Service Participants in TANF"), "Location", CountyName2), "Employment Status", "Employed"),"Time", ["2015Q1", "2015Q2","2015Q3","2015Q4"]);
                            
                            pTanfRate = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Percentage of Workforce Training Program/Service Participants in TANF"), "Location", CountyName2), "Employment Status", "Employed"),"Time", ["2016Q1", "2016Q2"]);
        
                            var chart13 = new dimple.chart(svg9, pTanfRate2);
                            chart13.setBounds("56%", 65, "40%", 500)
                            var ptanfX = chart13.addCategoryAxis("x", "Time");
                            var pTanfY = chart13.addMeasureAxis("y", "Amount");
                            //pTanfY.overrideMax = .30;
                          //  genY.titleShape.text("Percentage");
        
                            var pTanfseries = chart13.addSeries("Indicator", dimple.plot.line);
                           ptanfX.addOrderRule(["2015Q1", "2015Q2", "2015Q3", "2015Q4", "2016Q1", "2016Q2"]);
                            
                           // var genLegend = chart3.addLegend("38%", "10%", "50%", "70%", "right");
                            pTanfY.tickFormat = '.1%';
        
                            pTanfseries.lineMarkers = true;
                            chart13.draw();
        
                            
        
                            

        
        
        svg9.append("text")
                       .attr("x", (chart10._xPixels() + chart10._widthPixels() / 2)-200)
                       .attr("y", chart10._yPixels() - 20)
                       .style("text-anchor", "left")
                       .style("font-family", "sans-serif")
                       .text("TANF Recipient Workers")
        
        svg9.append("text")  
                       .attr("x", (chart11._xPixels() + chart11._widthPixels() / 2)-100)
                       .attr("y", chart11._yPixels() - 20)
                       .style("text-anchor", "left")
                       .style("font-family", "sans-serif")
                       .text("TANF Recipient Percentage")
        
 d3.select("#btn8").on("change", function() {
  
  
	var e7 = document.getElementById("btn8");
  var strUser7 = e7.options[e7.selectedIndex].text;
   if(strUser7 == "All"){
        chart12.data = TanfAttainment2;
        chart13.data = pTanfRate2;
        
   }
     
  if(strUser7 == "All"){
        chart12.data = TanfAttainment2;
        chart13.data = pTanfRate2;
        
   }
     
   if(strUser7 == "2015"){
        chart12.data = TanfAttainment1;
        chart13.data = pTanfRate1;
        
   }
        
    if(strUser7 == "2016"){
        chart12.data = TanfAttainment;
        chart13.data = pTanfRate;
    }
         
     chart12.draw(1000);
     chart13.draw(1000);
     
 });
       
        
                
                    window.onresize = function () {
                      
                        chart0.draw(0, true);
                        chart01.draw(0, true);
                        chart.draw(0, true);
                            //    chart001.draw(0, true);
                                chart2.draw(0, true);
                                chart3.draw(0, true);
                                chart4.draw(0, true);
                                chart5.draw(0, true);

                                chart7.draw(0, true);
                                chart8.draw(0, true);
                                chart9.draw(0, true);
                                chart10.draw(0, true);
                                chart11.draw(0, true);
                                chart12.draw(0, true);
                                chart13.draw(0, true);
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

window.onload = function() {
    $(document).ready(
    function(){
        $("button[class=button]").each( //add more selector here if you want
            function(){
                if($(this).attr("disabled"))
                    $(this).attr("disabled", false); //enable button again
            }
        );
    }
);
    
}