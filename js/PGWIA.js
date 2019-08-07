var togNum = 1;
var togNum1 = 1;
    d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vQQgvpdjjJOT1Qimncl9wiGDcHRCvs2Q_w0YDAqqQ_y_JYkQ_miplZKJ7D75VwyvHqPMRN2D5azQzfb/pub?gid=414287731&single=true&output=csv", function (data) {

                //chart 3 
                
                var svg3 = dimple.newSvg("#Chart3", "100%", 400);
                var svg4 = dimple.newSvg("#Chart4", "100%", 400);
                var svg5 = dimple.newSvg("#ChartFive", "100%", 400); 
                var svg6 = dimple.newSvg("#Chart6", "100%", 450); 
                //var svg7 = dimple.newSvg("#Chart61", "100%", 450); 
        
                var print3 = dimple.newSvg("#Print3", 750, 400);
                var print4 = dimple.newSvg("#Print4", 750, 400);
                var print5 = dimple.newSvg("#PrintFive", 750, 400); 
                var print6 = dimple.newSvg("#Print6", 750, 450); 
        
                var svg71 = dimple.newSvg("#Chart17", "100%", 400);
               /* var svg81 = dimple.newSvg("#Chart18", "100%", 400);
                var svg91 = dimple.newSvg("#Chart19", "100%", 400);*/
                var print71 = dimple.newSvg("#Print17", 750, 400);
                /*var print81 = dimple.newSvg("#Print18", 750, 400);
                var print91 = dimple.newSvg("#Print19", 750, 400);*/
                            
        
                            workData = dimple.filterData(dimple.filterData(dimple.filterData(data, "Time", ["2016-Q1","2016-Q2","2016-Q3","2016-Q4","2017-Q1","2017-Q2","2017-Q3", "2017-Q4", "2018-Q1"]), "Indicator", ["Maryland Workers by Age", "Maryland Workers by Gender", "Maryland Workers by Industry"]), "Location", CountyName2);
        
                            workData1 = dimple.filterData(dimple.filterData(workData, "Time", "2016-Q1"), "Indicator", "Maryland Workers by Age");

                            workData2 = dimple.filterData(dimple.filterData(workData, "Time", "2016-Q2"), "Indicator", "Maryland Workers by Age");

                            workData3 = dimple.filterData(dimple.filterData(workData, "Time", "2016-Q3"), "Indicator", "Maryland Workers by Age");

                            workData4 = dimple.filterData(dimple.filterData(workData, "Time", "2016-Q4"), "Indicator", "Maryland Workers by Age");

                            workData5 = dimple.filterData(dimple.filterData(workData, "Time", "2017-Q1"), "Indicator", "Maryland Workers by Age");

                            workData6 = dimple.filterData(dimple.filterData(workData, "Time", "2017-Q2"), "Indicator", "Maryland Workers by Age");
                        
                            workData7 = dimple.filterData(dimple.filterData(workData, "Time", "2017-Q3"), "Indicator", "Maryland Workers by Age");
        
                            workData8 = dimple.filterData(dimple.filterData(workData, "Time", "2017-Q4"), "Indicator", "Maryland Workers by Age");

                            workData9 = dimple.filterData(dimple.filterData(workData, "Time", "2018-Q1"), "Indicator", "Maryland Workers by Age");

                            /*workData10 = dimple.filterData(dimple.filterData(workData, "Time", "2016Q4"), "Indicator", "Maryland Workers by Age");

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

                        
        
                            var wChart = new dimple.chart(svg3, workData8);
                            wChart.setBounds("11%", "12%", "35%", "65%")
                            var edX = wChart.addCategoryAxis("x", "Indicator Value");
                            var eduY = wChart.addMeasureAxis("y", "Amount");
                           var edSeries = wChart.addSeries("Indicator Value", dimple.plot.bar);
                            eduY.title = "Number of Workers";
                            edX.title = " ";
                            
        
                          edX.addOrderRule(["14-18", "19-21", "22-24", "25-34", "35-44", "45-54", "55-64", "65-99", "Female", "Male"]);
                     // var edLegend = wChart.addLegend("0%", "83%", "50%", "70%", "right");
        
                            wChart.assignColor("14-18", "#4dc3ff", "black", 0.7);
                            wChart.assignColor("19-21", "#ff5c33", "black", 0.7);
                            wChart.assignColor("22-24", "#66ff66", "black", 0.7);
                            wChart.assignColor("25-34", "#ffdb4d", "black", 0.7);
                            wChart.assignColor("35-44", "#ffb84d", "black", 0.7);
                            wChart.assignColor("45-54", "#00cccc", "black", 0.7);
                            wChart.assignColor("55-64", "#6666ff", "black", 0.7);
                            wChart.assignColor("65-99", "#ffcc99", "black", 0.7);
                            wChart.assignColor("Male", "#3366ff","black", 0.7);
                            wChart.assignColor("Female", "pink","black", 0.7);
                            
        
                            //edSeries.lineWeight = 0;
                            wChart.draw();
        
                            
                            
                            eduY.tickFormat = ',f';
        
                        var pwChart = new dimple.chart(print3, workData8);
                            pwChart.setBounds("13%", "12%", "35%", 250)
                            var pedX = pwChart.addCategoryAxis("x", "Indicator Value");
                            var peduY = pwChart.addMeasureAxis("y", "Amount");
                           var pedSeries = pwChart.addSeries("Indicator Value", dimple.plot.bar);
                            peduY.title = "Number of Workers";
                            pedX.title = " ";
        
                            pedX.addOrderRule(["14-18", "19-21", "22-24", "25-34", "35-44", "45-54", "55-64", "65-99", "Female", "Male"]);
        
                            pwChart.assignColor("14-18", "#4dc3ff", "black", 0.7);
                            pwChart.assignColor("19-21", "#ff5c33", "black", 0.7);
                            pwChart.assignColor("22-24", "#66ff66", "black", 0.7);
                            pwChart.assignColor("25-34", "#ffdb4d", "black", 0.7);
                            pwChart.assignColor("35-44", "#ffb84d", "black", 0.7);
                            pwChart.assignColor("45-54", "#00cccc", "black", 0.7);
                            pwChart.assignColor("55-64", "#6666ff", "black", 0.7);
                            pwChart.assignColor("65-99", "#ffcc99", "black", 0.7);
                            pwChart.assignColor("Male", "#3366ff","black", 0.7);
                            pwChart.assignColor("Female", "pink","black", 0.7);
                            
                            pwChart.draw();
        
                            
                            
                            peduY.tickFormat = ',f';

                            averageData = dimple.filterData(dimple.filterData(dimple.filterData(data, "Time", ["2016-Q1", "2016-Q2", "2016-Q3", "2016-Q4", "2017-Q1", "2017-Q2", "2017-Q3", "2017-Q4", "2018-Q1"]), "Indicator", ["Maryland Average Monthly Earnings by Age", "Maryland Average Monthly Earnings by Gender", "Maryland Workers by Industry"]), "Location", CountyName2);
                            
                            averageData1 = dimple.filterData(dimple.filterData(averageData, "Time", "2016-Q1"), "Indicator", "Maryland Average Monthly Earnings by Age");
                            
                            averageData2 = dimple.filterData(dimple.filterData(averageData, "Time", "2016-Q2"), "Indicator", "Maryland Average Monthly Earnings by Age");

                            averageData3 = dimple.filterData(dimple.filterData(averageData, "Time", "2016-Q3"), "Indicator", "Maryland Average Monthly Earnings by Age");

                            averageData4 = dimple.filterData(dimple.filterData(averageData, "Time", "2016-Q4"), "Indicator", "Maryland Average Monthly Earnings by Age");

                            averageData5 = dimple.filterData(dimple.filterData(averageData, "Time", "2017-Q1"), "Indicator", "Maryland Average Monthly Earnings by Age");

                            averageData6 = dimple.filterData(dimple.filterData(averageData, "Time", "2017-Q2"), "Indicator", "Maryland Average Monthly Earnings by Age");

                            averageData7 = dimple.filterData(dimple.filterData(averageData, "Time", "2017-Q3"), "Indicator", "Maryland Average Monthly Earnings by Age");
        
                            averageData8 = dimple.filterData(dimple.filterData(averageData, "Time", "2017-Q4"), "Indicator", "Maryland Average Monthly Earnings by Age");
        
                            averageData9 = dimple.filterData(dimple.filterData(averageData, "Time", "2018-Q1"), "Indicator", "Maryland Average Monthly Earnings by Age");
        
                            /*averageData10 = dimple.filterData(dimple.filterData(averageData, "Time", "2016Q4"), "Indicator", "Maryland Average Monthly Earnings by Age");
*/
                            averageData11 = dimple.filterData(dimple.filterData(averageData, "Time", "2016-Q1"), "Indicator", "Maryland Average Monthly Earnings by Gender");

                            averageData21 = dimple.filterData(dimple.filterData(averageData, "Time", "2016-Q2"), "Indicator", "Maryland Average Monthly Earnings by Gender");

                            averageData31 = dimple.filterData(dimple.filterData(averageData, "Time", "2016-Q3"), "Indicator", "Maryland Average Monthly Earnings by Gender");

                            averageData41 = dimple.filterData(dimple.filterData(averageData, "Time", "2016-Q4"), "Indicator", "Maryland Average Monthly Earnings by Gender");

                            averageData51 = dimple.filterData(dimple.filterData(averageData, "Time", "2017-Q1"), "Indicator", "Maryland Average Monthly Earnings by Gender");

                            averageData61 = dimple.filterData(dimple.filterData(averageData, "Time", "2017-Q2"), "Indicator", "Maryland Average Monthly Earnings by Gender");

                            averageData71 = dimple.filterData(dimple.filterData(averageData, "Time", "2017-Q3"), "Indicator", "Maryland Average Monthly Earnings by Gender");
        
                            averageData81 = dimple.filterData(dimple.filterData(averageData, "Time", "2017-Q4"), "Indicator", "Maryland Average Monthly Earnings by Gender");
        
                            averageData82 = dimple.filterData(dimple.filterData(averageData, "Time", "2018-Q1"), "Indicator", "Maryland Average Monthly Earnings by Gender");
        
                            /*averageData83 = dimple.filterData(dimple.filterData(averageData, "Time", "2016Q4"), "Indicator", "Maryland Average Monthly Earnings by Gender");*/
        
                            var avgChart = new dimple.chart(svg3, averageData8);
                            avgChart.setBounds("56%", "12%", "35%", "65%")
                            var genX = avgChart.addCategoryAxis("x", "Indicator Value");
                            var genY = avgChart.addMeasureAxis("y", "Amount");
                        
                          //  genY.titleShape.text("Percentage");
        
                            avgChart.addSeries("Indicator Value", dimple.plot.bar);
                           // var genLegend = avgChart.addLegend("38%", "10%", "50%", "70%", "right");
        
                            avgChart.assignColor("14-18", "#4dc3ff", "black", 0.7);
                            avgChart.assignColor("19-21", "#ff5c33", "black", 0.7);
                            avgChart.assignColor("22-24", "#66ff66", "black", 0.7);
                            avgChart.assignColor("25-34", "#ffdb4d", "black", 0.7);
                            avgChart.assignColor("35-44", "#ffb84d", "black", 0.7);
                            avgChart.assignColor("45-54", "#00cccc", "black", 0.7);
                            avgChart.assignColor("55-64", "#6666ff", "black", 0.7);
                            avgChart.assignColor("65-99", "#ffcc99", "black", 0.7);
                            avgChart.assignColor("Male", "#3366ff","black", 0.7);
                            avgChart.assignColor("Female", "pink","black", 0.7);
        
                            
                            avgChart.draw();
                            genX.addOrderRule(["14-18", "19-21", "22-24", "25-34", "35-44", "45-54", "55-64", "65-99", "Female", "Male"]);
        
                            genX.title = " ";
                            genY.tickFormat = '$,f';
                            genY.title = "Average Monthly Earnings";
        
                             var pavgChart = new dimple.chart(print3, averageData8);
                            pavgChart.setBounds("61%", "12%", "35%", 250)
                            var pgenX = pavgChart.addCategoryAxis("x", "Indicator Value");
                            var pgenY = pavgChart.addMeasureAxis("y", "Amount");
                            pavgChart.addSeries("Indicator Value", dimple.plot.bar);
        
                            pavgChart.assignColor("14-18", "#4dc3ff", "black", 0.7);
                            pavgChart.assignColor("19-21", "#ff5c33", "black", 0.7);
                            pavgChart.assignColor("22-24", "#66ff66", "black", 0.7);
                            pavgChart.assignColor("25-34", "#ffdb4d", "black", 0.7);
                            pavgChart.assignColor("35-44", "#ffb84d", "black", 0.7);
                            pavgChart.assignColor("45-54", "#00cccc", "black", 0.7);
                            pavgChart.assignColor("55-64", "#6666ff", "black", 0.7);
                            pavgChart.assignColor("65-99", "#ffcc99", "black", 0.7);
                            pavgChart.assignColor("Male", "#3366ff","black", 0.7);
                            pavgChart.assignColor("Female", "pink","black", 0.7);
                            pavgChart.draw();

                            pgenX.title = " ";
                            pgenY.tickFormat = '$,f';
                            pgenY.title = "Average Monthly Earnings";
                            pgenX.addOrderRule(["14-18", "19-21", "22-24", "25-34", "35-44", "45-54", "55-64", "65-99", "Female", "Male"]);
                            

        
        
       /* svg3.append("text")
                       .attr("x", (wChart._xPixels() + wChart._widthPixels() / 2)-200)
                       .attr("y", wChart._yPixels() - 20)
                       .style("text-anchor", "left")
                       .style("font-family", "sans-serif")
                       .text("Number of Workers")
        
        svg3.append("text")  
                       .attr("x", (avgChart._xPixels() + avgChart._widthPixels() / 2)-100)
                       .attr("y", avgChart._yPixels() - 20)
                       .style("text-anchor", "left")
                       .style("font-family", "sans-serif")
                       .text("Average Monthly Earnings")*/
        
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
        
                            /*jobData10 = dimple.filterData(dimple.filterData(jobData, "Time", "2016Q4"), "Indicator", "Maryland Job Net Change by Education");
*/
                            jobData11 = dimple.filterData(dimple.filterData(jobData, "Time", "2016-Q1"), "Indicator", "Maryland Job Net Change by Gender");

                            jobData21 = dimple.filterData(dimple.filterData(jobData, "Time", "2016-Q2"), "Indicator", "Maryland Job Net Change by Gender");

                            jobData31 = dimple.filterData(dimple.filterData(jobData, "Time", "2016-Q3"), "Indicator", "Maryland Job Net Change by Gender");

                            jobData41 = dimple.filterData(dimple.filterData(jobData, "Time", "2016-Q4"), "Indicator", "Maryland Job Net Change by Gender");

                            jobData51 = dimple.filterData(dimple.filterData(jobData, "Time", "2017-Q1"), "Indicator", "Maryland Job Net Change by Gender");

                            jobData61 = dimple.filterData(dimple.filterData(jobData, "Time", "2017-Q2"), "Indicator", "Maryland Job Net Change by Gender");

                            jobData71 = dimple.filterData(dimple.filterData(jobData, "Time", "2017-Q3"), "Indicator", "Maryland Job Net Change by Gender");
        
                            jobData81 = dimple.filterData(dimple.filterData(jobData, "Time", "2017-Q4"), "Indicator", "Maryland Job Net Change by Gender");
        
                            jobData82 = dimple.filterData(dimple.filterData(jobData, "Time", "2018-Q1"), "Indicator", "Maryland Job Net Change by Gender");
        
                            /*jobData83 = dimple.filterData(dimple.filterData(jobData, "Time", "2016Q4"), "Indicator", "Maryland Job Net Change by Gender");*/
        
        
                            
                            var jc = new dimple.chart(svg4, jobData8);
                            jc.setBounds("56%", "8%", "35%", "45%")
                            
                            
                            var raceX = jc.addCategoryAxis("x", "Indicator Value");
                            var raceY = jc.addMeasureAxis("y", "Amount");
                            var rSeries = jc.addSeries("Indicator Value", dimple.plot.bar);
                            raceX.addOrderRule(["Less than High school", "High school", "Some college", "Bachelor's or Higher", "N/A", "Female", "Male"]);
        
        
                            jc.assignColor("Less than High school", "#4dc3ff", "black", 0.7);
                            jc.assignColor("High school", "#ff5c33", "black", 0.7);
                            jc.assignColor("Some college", "#66ff66", "black", 0.7);
                            jc.assignColor("Bachelor's or Higher", "#ffdb4d", "black", 0.7);
                            jc.assignColor("N/A", "#919191", "black", 0.7);
                            
                            jc.assignColor("Male", "#3366ff","black", 0.7);
                            jc.assignColor("Female", "pink","black", 0.7);
                            
                     //       var raceLegend = jc.addLegend("0%", "70%", "47%", "70%", "right");
        
                            
                            jc.draw();
                            raceY.title = "Job Net Change";
                            raceX.title = " ";
        
                            raceY.tickFormat = ',f';
        
                            var pjc = new dimple.chart(print4, jobData8);
                            pjc.setBounds("59%", "8%", "35%", 175)
                            
                            
                            var praceX = pjc.addCategoryAxis("x", "Indicator Value");
                            var praceY = pjc.addMeasureAxis("y", "Amount");
                            var prSeries = pjc.addSeries("Indicator Value", dimple.plot.bar);
        
                            pjc.assignColor("Less than High school", "#4dc3ff", "black", 0.7);
                            pjc.assignColor("High school", "#ff5c33", "black", 0.7);
                            pjc.assignColor("Some college", "#66ff66", "black", 0.7);
                            pjc.assignColor("Bachelor's or Higher", "#ffdb4d", "black", 0.7);
                            pjc.assignColor("N/A", "#919191", "black", 0.7);
                            
                            pjc.assignColor("Male", "#3366ff","black", 0.7);
                            pjc.assignColor("Female", "pink","black", 0.7);
                            pjc.draw();
        
                            praceY.title = "Job Net Change";
                            praceX.title = " ";
        
                            praceY.tickFormat = ',f';
                            praceX.addOrderRule(["Less than High school", "High school", "Some college", "Bachelor's or Higher", "N/A", "Female", "Male"]);
                            
                            
                            newHireData = dimple.filterData(dimple.filterData(dimple.filterData(data, "Time", ["2016-Q1", "2016-Q2", "2016-Q3", "2016-Q4", "2017-Q1", "2017-Q2", "2017-Q3", "2017-Q4", "2018-Q1", "2016Q4", "2017Q1", "2017Q2"]), "Indicator", ["Maryland New Hires by Education", "Maryland New Hires by Gender", "Maryland Workers by Industry"]), "Location", CountyName2);

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
        
                            newHireData02 = dimple.filterData(dimple.filterData(newHireData, "Time", "2017Q2"), "Indicator", "Maryland New Hires by Education");*/

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
        
                            var newHireChart = new dimple.chart(svg4, newHireData8);
                            newHireChart.setBounds("11%", "8%", "35%", "45%")
                            var ethX = newHireChart.addCategoryAxis("x", "Indicator Value");
                            var ethY = newHireChart.addMeasureAxis("y", "Amount");
                          //  ethY.overrideMax = .30;
                    
                            newHireChart.addSeries("Indicator Value", dimple.plot.bar);
               //            var ethLegend = newHireChart.addLegend("86%", "70%", "26%", "10%", "right");
                            
                            ethY.tickFormat = ',f';
                            ethY.title = "New Hires";
                            ethX.title = " ";
        
                            newHireChart.assignColor("Less than High school", "#4dc3ff", "black", 0.7);
                            newHireChart.assignColor("High school", "#ff5c33", "black", 0.7);
                            newHireChart.assignColor("Some college", "#66ff66", "black", 0.7);
                            newHireChart.assignColor("Bachelor's or Higher", "#ffdb4d", "black", 0.7);
                            newHireChart.assignColor("N/A", "#919191", "black", 0.7);
                            
                            newHireChart.assignColor("Male", "#3366ff","black", 0.7);
                            newHireChart.assignColor("Female", "pink","black", 0.7);
                            newHireChart.draw();
                            ethX.addOrderRule(["Less than High school", "High school", "Some college", "Bachelor's or Higher", "N/A", "Female", "Male"]);
        
                            var pnewHireChart = new dimple.chart(print4, newHireData8);
                            pnewHireChart.setBounds("11%", "8%", "35%", 175)
                            var pethX = pnewHireChart.addCategoryAxis("x", "Indicator Value");
                            var pethY = pnewHireChart.addMeasureAxis("y", "Amount");
                            pnewHireChart.addSeries("Indicator Value", dimple.plot.bar);
                            pethY.tickFormat = ',f';
                            pethY.title = "New Hires";
                            pethX.title = " ";
        
                            pnewHireChart.assignColor("Less than High school", "#4dc3ff", "black", 0.7);
                            pnewHireChart.assignColor("High school", "#ff5c33", "black", 0.7);
                            pnewHireChart.assignColor("Some college", "#66ff66", "black", 0.7);
                            pnewHireChart.assignColor("Bachelor's or Higher", "#ffdb4d", "black", 0.7);
                            pnewHireChart.assignColor("N/A", "#919191", "black", 0.7);
                            
                            pnewHireChart.assignColor("Male", "#3366ff","black", 0.7);
                            pnewHireChart.assignColor("Female", "pink","black", 0.7);
                            pnewHireChart.draw();
        
                            pethX.addOrderRule(["Less than High school", "High school", "Some college", "Bachelor's or Higher", "N/A", "Female", "Male"]);
       /* 
        svg4.append("text")
                       .attr("x", (jc._xPixels() + jc._widthPixels() / 2)-200)
                       .attr("y", jc._yPixels() - 20)
                       .style("text-anchor", "left")
                       .style("font-family", "sans-serif")
                       .text("Job Net Changes")
        
        svg4.append("text")  
                       .attr("x", (newHireChart._xPixels() + newHireChart._widthPixels() / 2)-200)
                       .attr("y", newHireChart._yPixels() - 20)
                       .style("text-anchor", "left")
                       .style("font-family", "sans-serif")
                       .text("New Hires")*/
        
                //chart 4 end
        
        //chart 5
        
                        
                            
                            turnOverData = dimple.filterData(dimple.filterData(dimple.filterData(data, "Time", ["2016-Q1", "2016-Q2", "2016-Q3", "2016-Q4", "2017-Q1", "2017-Q2", "2017-Q3", "2017-Q4", "2018-Q1", "2016Q4"]), "Indicator", ["Maryland Turnover Rate by Education", "Maryland Turnover Rate by Gender", "Maryland Workers by Industry"]), "Location", CountyName2);

                            turnOverData1 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2016-Q1"), "Indicator", "Maryland Turnover Rate by Education");

                            turnOverData2 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2016-Q2"), "Indicator", "Maryland Turnover Rate by Education");

                            turnOverData3 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2016-Q3"), "Indicator", "Maryland Turnover Rate by Education");

                            turnOverData4 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2016-Q4"), "Indicator", "Maryland Turnover Rate by Education");

                            turnOverData5 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2017-Q1"), "Indicator", "Maryland Turnover Rate by Education");

                            turnOverData6 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2017-Q2"), "Indicator", "Maryland Turnover Rate by Education");

                            turnOverData7 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2017-Q3"), "Indicator", "Maryland Turnover Rate by Education");
        
                            turnOverData8 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2017-Q4"), "Indicator", "Maryland Turnover Rate by Education");
        
                            turnOverData9 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2018-Q1"), "Indicator", "Maryland Turnover Rate by Education");
        
                            turnOverData10 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2016Q4"), "Indicator", "Maryland Turnover Rate by Education");

                            turnOverData11 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2016-Q1"), "Indicator", "Maryland Turnover Rate by Gender");

                            turnOverData21 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2016-Q2"), "Indicator", "Maryland Turnover Rate by Gender");

                            turnOverData31 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2016-Q3"), "Indicator", "Maryland Turnover Rate by Gender");

                            turnOverData41 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2016-Q4"), "Indicator", "Maryland Turnover Rate by Gender");

                            turnOverData51 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2017-Q1"), "Indicator", "Maryland Turnover Rate by Gender");

                            turnOverData61 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2017-Q2"), "Indicator", "Maryland Turnover Rate by Gender");

                            turnOverData71 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2017-Q3"), "Indicator", "Maryland Turnover Rate by Gender");
        
                            turnOverData81 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2017-Q4"), "Indicator", "Maryland Turnover Rate by Gender");
        
                            turnOverData82 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2018-Q1"), "Indicator", "Maryland Turnover Rate by Gender");
        
                            turnOverData83 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2016Q4"), "Indicator", "Maryland Turnover Rate by Gender");
        
                            var turnChart = new dimple.chart(svg5, turnOverData7);
                            turnChart.setBounds("12%", "12%", "80%", "45%")
                            var vetX = turnChart.addCategoryAxis("x", "Indicator Value")
                           
                            
                            var vetY = turnChart.addMeasureAxis("y", "Amount");
                           // vetY.overrideMax = .30;
                            turnChart.addSeries("Indicator Value", dimple.plot.bar);
                       //      vetX.addOrderRule(["Veteran, Non Veteran"]);
                            vetY.tickFormat = '.1%';
                            vetY.title = " ";
                       //     var vetLegend = turnChart.addLegend("16%", "90%", "50%", "70%", "right");
                            turnChart.assignColor("Less than High school", "#4dc3ff", "black", 0.7);
                            turnChart.assignColor("High school", "#ff5c33", "black", 0.7);
                            turnChart.assignColor("Some college", "#66ff66", "black", 0.7);
                            turnChart.assignColor("Bachelor's or Higher", "#ffdb4d", "black", 0.7);
                            turnChart.assignColor("N/A", "#919191", "black", 0.7);
                            
                            turnChart.assignColor("Male", "#3366ff","black", 0.7);
                            turnChart.assignColor("Female", "pink","black", 0.7);
        
                            turnChart.draw();
                
                            vetX.addOrderRule(["Less than High school", "High school", "Some college", "Bachelor's or Higher", "N/A", "Female", "Male"]);
                            vetX.title = "Turnover Rate";
        
                            var pturnChart = new dimple.chart(print5, turnOverData7);
                            pturnChart.setBounds("12%", "12%", "75%", 175)
                            var pvetX = pturnChart.addCategoryAxis("x", "Indicator Value")
                            var pvetY = pturnChart.addMeasureAxis("y", "Amount");
                            pturnChart.addSeries("Indicator Value", dimple.plot.bar);
                            pvetY.tickFormat = '.1%';
                            pvetY.title = "Turnover Rate";
        
                            pturnChart.assignColor("Less than High school", "#4dc3ff", "black", 0.7);
                            pturnChart.assignColor("High school", "#ff5c33", "black", 0.7);
                            pturnChart.assignColor("Some college", "#66ff66", "black", 0.7);
                            pturnChart.assignColor("Bachelor's or Higher", "#ffdb4d", "black", 0.7);
                            pturnChart.assignColor("N/A", "#919191", "black", 0.7);
                            
                            pturnChart.assignColor("Male", "#3366ff","black", 0.7);
                            pturnChart.assignColor("Female", "pink","black", 0.7);
        
                            pturnChart.draw();
        
                            pvetX.addOrderRule(["Less than High school", "High school", "Some college", "Bachelor's or Higher", "N/A", "Female", "Male"]);
                            pvetX.title = " ";
        
        
                            /** vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                            
                            
        
       /* svg5.append("text")  
                       .attr("x", (turnChart._xPixels() + turnChart._widthPixels() / 2)-200)
                       .attr("y", turnChart._yPixels() - 20)
                       .style("text-anchor", "left")
                       .style("font-family", "sans-serif")
                       .text("Turnover Rate")*/
        
                
        
        
       
       
            
  
  //wChart.addSeries("Location", dimple.plot.line);


   

                            
                           
        
        //chart 5 end
        
        //Chart 6 - QCEW
        
               
                            
                            wdata1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Workers by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016-Q1"  );
        
                            wdata2 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Workers by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016-Q2"  );
        
                            wdata3 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Workers by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016-Q3"  );
        
                            wdata4 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Workers by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016-Q4"  );
        
                            wdata5 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Workers by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017-Q1"  );
        
                            wdata6 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Workers by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017-Q2"  );
                    
                            wdata7 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Workers by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017-Q3"  );
                    
                    
                            wdata8 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Workers by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017-Q4"  );
                    
                            wdata9 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Workers by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2018-Q1"  );
                    
                            /*wdata10 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Workers by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016Q4"  );*/
                    
                            /*wdata01 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Workers by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017Q1"  );
                    */
                            /*wdata02 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Workers by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017Q2"  );*/
        
                            avgdata1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Average Monthly Earnings by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016-Q1"  );
        
                            avgdata2 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Average Monthly Earnings by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016-Q2"  );
        
                            avgdata3 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Average Monthly Earnings by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016-Q3"  );
        
                            avgdata4 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Average Monthly Earnings by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016-Q4"  );
        
                            avgdata5 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Average Monthly Earnings by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017-Q1"  );
        
                            avgdata6 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Average Monthly Earnings by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017-Q2"  );
                    
                            avgdata7 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Average Monthly Earnings by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017-Q3"  );
                    
                            avgdata8 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Average Monthly Earnings by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017-Q4"  );
                    
                            avgdata9 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Average Monthly Earnings by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2018-Q1"  );
                    
                            /*avgdata10 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Average Monthly Earnings by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016Q4"  );*/

                            
        
                            netdata1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Job Net Change by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016-Q1"  );
        
                            netdata2 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Job Net Change by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016-Q2"  );
        
                            netdata3 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Job Net Change by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016-Q3"  );
        
                            netdata4 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Job Net Change by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016-Q4"  );
        
                            netdata5 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Job Net Change by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017-Q1"  );
        
                            netdata6 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Job Net Change by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017-Q2"  );
                    
                            netdata7 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Job Net Change by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017-Q3"  );
                    
                            netdata8 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Job Net Change by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017-Q4"  );
                    
                            netdata9 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Job Net Change by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2018-Q1"  );
                    
                            /*netdata10 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Job Net Change by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016Q4"  );*/
        
                            turndata1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Turnover Rate by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016-Q1"  );
        
                            turndata2 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Turnover Rate by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016-Q2"  );
        
                            turndata3 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Turnover Rate by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016-Q3"  );
        
                            turndata4 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Turnover Rate by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016-Q4"  );
        
                            turndata5 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Turnover Rate by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017-Q1"  );
        
                            turndata6 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Turnover Rate by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017-Q2"  );
                    
                            turndata7 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Turnover Rate by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017-Q3"  );
                    
                            turndata8 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Turnover Rate by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017-Q4"  );
                    
                            turndata9 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Turnover Rate by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2018-Q1"  );
                    
                            /*turndata10 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Turnover Rate by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016Q4"  );*/
        
                            hiredata1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland New Hires by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016-Q1"  );
        
                            hiredata2 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland New Hires by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016-Q2"  );
        
                            hiredata3 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland New Hires by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016-Q3"  );
        
                            hiredata4 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland New Hires by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016-Q4"  );
        
                            hiredata5 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland New Hires by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017-Q1"  );
        
                            hiredata6 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland New Hires by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017-Q2"  );
                    
                            hiredata7 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland New Hires by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017-Q3"  );
                    
                            hiredata8 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland New Hires by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017-Q4"  );
                    
                            hiredata9 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland New Hires by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2018-Q1"  );
                    
                           /* hiredata10 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland New Hires by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016Q4"  );*/
                    
                            /*hiredata01 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland New Hires by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017Q1"  );*/
                    
                           /* hiredata02 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland New Hires by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017Q2"  );*/
        
                            
        
                            var chart8 = new dimple.chart(svg6, wdata8);
                            chart8.setBounds("9%", "12%", "55%", "55%")
                            var x2 = chart8.addCategoryAxis("x", ["Time", "Indicator Value"]);
                            var y2 = chart8.addMeasureAxis("y", "Amount");
                            y2.tickFormat = ',f';
                            var series8 = chart8.addSeries("Indicator Value", dimple.plot.bar);
                            var qLegend = chart8.addLegend("65%", "5%", "40%", "95%");
                            qLegend.fontSize = "1px";
                            series8.addOrderRule(true);
                            chart8.assignColor("Accommodation and Food Services", "red", "black", 0.8);
                            chart8.assignColor("Administrative and Support and Waste Management and Remediation Services", "Green", "black", 0.8);
                            chart8.assignColor("Agriculture, Forestry, Fishing and Hunting", "Yellow", "black", 0.8);
                            chart8.assignColor("Arts, Entertainment, and Recreation", "blue", "black", 0.8);
                            chart8.assignColor("Construction", "Orange", "black", 0.8);
                            chart8.assignColor("Educational Services", "Purple", "black", 0.8);
                            chart8.assignColor("Finance and Insurance", "Cyan", "black", 0.8);
                            chart8.assignColor("Health Care and Social Assistance", "Magenta", "black", 0.8);
        
        //needs new colors
                            chart8.assignColor("Information", "Lime","black", 0.8);
                            chart8.assignColor("Management of Companies and Enterprises", "Pink","black", 0.8);
        
        
                            chart8.assignColor("Manufacturing", "Teal", "black", 0.8);
                            chart8.assignColor("Mining, Quarrying, and Oil and Gas Extraction", "Lavender", "black", 0.8);
                            chart8.assignColor("Other Services (except Public Administration)", "Brown", "black", 0.8);
                            chart8.assignColor("Professional, Scientific, and Technical Services", "Beige", "black", 0.8);
                            chart8.assignColor("Public Administration", "Maroon", "black", 0.8);
                            chart8.assignColor("Real Estate and Rental and Leasing", "#aaffc3", "black", 0.8);
                            chart8.assignColor("Retail Trade", "Olive", "black", 0.8);
                            chart8.assignColor("Transportation and Warehousing", "Coral", "black", 0.8);
                            chart8.assignColor("Utilities", "Navy","black", 0.8);
                            chart8.assignColor("Wholesale Trade", "Grey","black", 0.8);
        
                            chart8.draw();
                            var e71 = document.getElementById("btn10");
                            var strUser71 = e71.options[e71.selectedIndex].text;
                            y2.title = strUser71;
                            x2.title = " ";
        
                            var pchart8 = new dimple.chart(print6, wdata8);
                            pchart8.setBounds("14%", "12%", "45%", 250)
                            var px2 = pchart8.addCategoryAxis("x", ["Time", "Indicator Value"]);
                            var py2 = pchart8.addMeasureAxis("y", "Amount");
                            py2.tickFormat = ',.1f';
                            var pseries8 = pchart8.addSeries("Indicator Value", dimple.plot.bar);
                            var pqLegend = pchart8.addLegend("65%", "5%", "40%", "95%");
                            pqLegend.fontSize = "1px";
                            pseries8.addOrderRule(true);
        
                            pchart8.assignColor("Accommodation and Food Services", "red", "black", 0.8);
                            pchart8.assignColor("Administrative and Support and Waste Management and Remediation Services", "Green", "black", 0.8);
                            pchart8.assignColor("Agriculture, Forestry, Fishing and Hunting", "Yellow", "black", 0.8);
                            pchart8.assignColor("Arts, Entertainment, and Recreation", "blue", "black", 0.8);
                            pchart8.assignColor("Construction", "Orange", "black", 0.8);
                            pchart8.assignColor("Educational Services", "Purple", "black", 0.8);
                            pchart8.assignColor("Finance and Insurance", "Cyan", "black", 0.8);
                            pchart8.assignColor("Health Care and Social Assistance", "Magenta", "black", 0.8);
        
        //needs new colors
                            pchart8.assignColor("Information", "Lime","black", 0.8);
                            pchart8.assignColor("Management of Companies and Enterprises", "Pink","black", 0.8);
        
        
                            pchart8.assignColor("Manufacturing", "Teal", "black", 0.8);
                            pchart8.assignColor("Mining, Quarrying, and Oil and Gas Extraction", "Lavender", "black", 0.8);
                            pchart8.assignColor("Other Services (except Public Administration)", "Brown", "black", 0.8);
                            pchart8.assignColor("Professional, Scientific, and Technical Services", "Beige", "black", 0.8);
                            pchart8.assignColor("Public Administration", "Maroon", "black", 0.8);
                            pchart8.assignColor("Real Estate and Rental and Leasing", "#aaffc3", "black", 0.8);
                            pchart8.assignColor("Retail Trade", "Olive", "black", 0.8);
                            pchart8.assignColor("Transportation and Warehousing", "Coral", "black", 0.8);
                            pchart8.assignColor("Utilities", "Navy","black", 0.8);
                            pchart8.assignColor("Wholesale Trade", "Grey","black", 0.8);
                            pchart8.draw();
                            var pe71 = document.getElementById("btn10");
                            var pstrUser71 = pe71.options[pe71.selectedIndex].text;
                            py2.title = pstrUser71;
                            px2.title = " ";
        
        //seperation
        
                         /*  sepdata1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation Rate by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016-Q1"  );
        
                           sepdata2 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation Rate by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016-Q2"  );

                           sepdata3 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation Rate by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016-Q3"  );

                           sepdata4 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation Rate by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016-Q4"  );

                           sepdata5 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation Rate by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017-Q1"  );

                           sepdata6 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation Rate by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017-Q2"  );

                           sepdata7 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation Rate by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017-Q3"  );

                           sepdata8 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation Rate by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017-Q4"  );

                           sepdata9 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Seperation Rate by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016-Q1"  );

        
                             var chart61 = new dimple.chart(svg7, sepdata8);
                            pchart8.setBounds("14%", "12%", "45%", 250)
                            var px2 = chart61.addCategoryAxis("x", ["Time", "Indicator Value"]);
                            var py2 = chart61.addMeasureAxis("y", "Amount");
                            py2.tickFormat = ',.1f';
                            var pseries8 = chart61.addSeries("Indicator Value", dimple.plot.bar);
                            var pqLegend = chart61.addLegend("65%", "5%", "40%", "95%");
                            pqLegend.fontSizechart61 = "1px";
                            pseries8.addOrderRule(true);
        */
        
        //chart 8 button
        
        //seperation
        
                          isepdata1 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016-Q1"  );
        
                           isepdata2 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016-Q2"  );

                           isepdata3 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016-Q3"  );

                           isepdata4 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2016-Q4"  );

                           isepdata5 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017-Q1"  );

                           isepdata6 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017-Q2"  );

                           isepdata7 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017-Q3"  );

                           isepdata8 = dimple.filterData(dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Industry"), "Indicator Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Location", CountyName2), "Time", "2017-Q4"  );
        
                           asepdata1 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Age"), "Location", CountyName2), "Time", "2016-Q1");
        
                           asepdata2 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Age"), "Location", CountyName2), "Time", "2016-Q2");

                           asepdata3 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Age"), "Location", CountyName2), "Time", "2016-Q3");

                           asepdata4 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Age"), "Location", CountyName2), "Time", "2016-Q4");

                           asepdata5 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Age"), "Location", CountyName2), "Time", "2017-Q1");
                           asepdata6 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Age"), "Location", CountyName2), "Time", "2017-Q2");

                           asepdata7 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Age"), "Location", CountyName2), "Time", "2017-Q3");

                           asepdata8 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Age"), "Location", CountyName2), "Time", "2017-Q4");
        
                           gsepdata1 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Gender"), "Location", CountyName2), "Time", "2016-Q1");
        
                           gsepdata2 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Gender"), "Location", CountyName2), "Time", "2016-Q2");

                           gsepdata3 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Gender"), "Location", CountyName2), "Time", "2016-Q3");

                           gsepdata4 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Gender"), "Location", CountyName2), "Time", "2016-Q4");

                           gsepdata5 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Gender"), "Location", CountyName2), "Time", "2017-Q1");
                           gsepdata6 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Gender"), "Location", CountyName2), "Time", "2017-Q2");

                           gsepdata7 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Gender"), "Location", CountyName2), "Time", "2017-Q3");

                           gsepdata8 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Gender"), "Location", CountyName2), "Time", "2017-Q4");
        
                           esepdata1 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Education"), "Location", CountyName2), "Time", "2016-Q1");
        
                           esepdata2 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Education"), "Location", CountyName2), "Time", "2016-Q2");

                           esepdata3 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Education"), "Location", CountyName2), "Time", "2016-Q3");

                           esepdata4 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Education"), "Location", CountyName2), "Time", "2016-Q4");

                           esepdata5 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Education"), "Location", CountyName2), "Time", "2017-Q1");
                           esepdata6 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Education"), "Location", CountyName2), "Time", "2017-Q2");

                           esepdata7 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Education"), "Location", CountyName2), "Time", "2017-Q3");

                           esepdata8 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Education"), "Location", CountyName2), "Time", "2017-Q4");

                          

        
                             var chart61 = new dimple.chart(svg71, isepdata8);
                            chart61.setBounds("9%", "12%", "55%", "55%")
                            var px2 = chart61.addCategoryAxis("x", ["Time", "Indicator Value"]);
                            var sepy2 = chart61.addMeasureAxis("y", "Amount");
                            sepy2.tickFormat = ',f';
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
                            chart61.assignColor("14-18", "#4dc3ff", "black", 0.7);
                            chart61.assignColor("19-21", "#ff5c33", "black", 0.7);
                            chart61.assignColor("22-24", "#66ff66", "black", 0.7);
                            chart61.assignColor("25-34", "#ffdb4d", "black", 0.7);
                            chart61.assignColor("35-44", "#ffb84d", "black", 0.7);
                            chart61.assignColor("45-54", "#00cccc", "black", 0.7);
                            chart61.assignColor("55-64", "#6666ff", "black", 0.7);
                            chart61.assignColor("65-99", "#ffcc99", "black", 0.7);
                            
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
                            psepy2.tickFormat = ',f';
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
                            pchart61.assignColor("14-18", "#4dc3ff", "black", 0.7);
                            pchart61.assignColor("19-21", "#ff5c33", "black", 0.7);
                            pchart61.assignColor("22-24", "#66ff66", "black", 0.7);
                            pchart61.assignColor("25-34", "#ffdb4d", "black", 0.7);
                            pchart61.assignColor("35-44", "#ffb84d", "black", 0.7);
                            pchart61.assignColor("45-54", "#00cccc", "black", 0.7);
                            pchart61.assignColor("55-64", "#6666ff", "black", 0.7);
                            pchart61.assignColor("65-99", "#ffcc99", "black", 0.7);
                            
                            pchart61.assignColor("Male", "#3366ff","black", 0.7);
                            pchart61.assignColor("Female", "pink","black", 0.7);
                            
                            var pe712 = document.getElementById("btn102");
                            var pstrUser712 = pe712.options[pe712.selectedIndex].text;
                            psepy2.title = pstrUser712;
                            px2.title = " ";
        
                            pchart61.draw();
        
        
        //chart 8 button
        
        //new apprenticeship programs
        
        aprog1 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "New Maryland Apprenticeship Programs"), "Location", CountyName2), "Time", "2016");
        
        aprog2 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "New Maryland Apprenticeship Programs"), "Location", CountyName2), "Time", "2017");
        
        aprog3 = dimple.filterData(dimple.filterData(data, "Indicator", "New Maryland Apprenticeship Programs"), "Location", CountyName2);
        
                            /*var aprogChart = new dimple.chart(svg81, aprog3);
                            aprogChart.setBounds("9%", "12%", "80%", "60%")
                            var px2 = aprogChart.addCategoryAxis("x", ["Time", "Indicator Value"]);
                            var py2 = aprogChart.addMeasureAxis("y", "Amount");
                            py2.tickFormat = ',.1f';
                            var pseries8 = aprogChart.addSeries("Indicator Value", dimple.plot.bar);
                            //var pqLegend = aprogChart.addLegend("65%", "5%", "40%", "95%");
                            pqLegend.fontSizechart61 = "1px";
                            pseries8.addOrderRule(true);
        
                            aprogChart.draw();
        
                            var paprogChart = new dimple.chart(print81, aprog3);
                            paprogChart.setBounds("10%", "12%", "50%", 300)
                            var px2 = paprogChart.addCategoryAxis("x", ["Time", "Indicator Value"]);
                            var py2 = paprogChart.addMeasureAxis("y", "Amount");
                            py2.tickFormat = ',f';
                            var pseries8 = paprogChart.addSeries("Indicator Value", dimple.plot.bar);
                            //var pqLegend = paprogChart.addLegend("65%", "5%", "40%", "95%");
                            pqLegend.fontSize = "1px";
                            pseries8.addOrderRule(true);
        
                            paprogChart.draw();*/

        //Maryland Apprentices
        
         aNew1 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Apprentices"), "Location", CountyName2), "Time", "2016");
        
        aNew2 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Apprentices"), "Location", CountyName2), "Time", "2017");
        
        aNew3 = dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Apprentices"), "Location", CountyName2)
        
                            /*var aNewChart = new dimple.chart(svg91, aNew3);
                            aNewChart.setBounds("10%", "12%", "80%", "60%")
                            var px2 = aNewChart.addCategoryAxis("x", ["Time", "Indicator Value"]);
                            var py2 = aNewChart.addMeasureAxis("y", "Amount");
                            py2.tickFormat = ',.1f';
                            var pseries8 = aNewChart.addSeries("Indicator Value", dimple.plot.bar);
                            //var pqLegend = aNewChart.addLegend("65%", "5%", "40%", "95%");
                            pqLegend.fontSizechart61 = "1px";
                            pseries8.addOrderRule(true);
        
                            aNewChart.draw();
        
                             var paNewChart = new dimple.chart(print91, aNew3);
                            paNewChart.setBounds("9%", "12%", "50%", "50%")
                            var px2 = paNewChart.addCategoryAxis("x", ["Time", "Indicator Value"]);
                            var py2 = paNewChart.addMeasureAxis("y", "Amount");
                            py2.tickFormat = ',.1f';
                            var pseries8 = paNewChart.addSeries("Indicator Value", dimple.plot.bar);
                            //var pqLegend = paNewChart.addLegend("65%", "5%", "40%", "95%");
                            pqLegend.fontSizechart61 = "1px";
                            pseries8.addOrderRule(true);
        
                            paNewChart.draw();*/
        
d3.select("#btn7").on("change", function() {
   y2.tickFormat = ',f';
  
	var e7 = document.getElementById("btn7");
    var e10 = document.getElementById("btn10");
  var strUser7 = e7.options[e7.selectedIndex].text;
  var strUser10 = e10.options[e10.selectedIndex].text;
    y2.title = strUser10;
   if(strUser7 == "2016-Q1"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           chart8.data = avgdata1;
       }
       if(strUser10 == "Job Net Changes"){
           chart8.data = netdata1;
       }
       if(strUser10 == "New Hires"){
           chart8.data = hiredata1;
       }
       if(strUser10 == "Turnover Rate"){
           y2.tickFormat = '.1%';
           chart8.data = turndata1;
       }
       if(strUser10 == "Workers"){
           chart8.data = wdata1;
       }
        
   }
            
   if(strUser7 == "2016-Q2"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           chart8.data = avgdata2;
       }
       if(strUser10 == "Job Net Changes"){
           chart8.data = netdata2;
       }
       if(strUser10 == "New Hires"){
           chart8.data = hiredata2;
       }
       if(strUser10 == "Turnover Rate"){
           y2.tickFormat = '.1%';
           chart8.data = turndata2;
       }
       if(strUser10 == "Workers"){
           chart8.data = wdata2;
       }
        
   }
            
  if(strUser7 == "2016-Q3"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           chart8.data = avgdata3;
       }
       if(strUser10 == "Job Net Changes"){
           chart8.data = netdata3;
       }
       if(strUser10 == "New Hires"){
           chart8.data = hiredata3;
       }
       if(strUser10 == "Turnover Rate"){
           y2.tickFormat = '.1%';
           chart8.data = turndata3;
       }
       if(strUser10 == "Workers"){
           chart8.data = wdata3;
       }
        
   }
    
if(strUser7 == "2016-Q4"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           chart8.data = avgdata4;
       }
       if(strUser10 == "Job Net Changes"){
           chart8.data = netdata4;
       }
       if(strUser10 == "New Hires"){
           chart8.data = hiredata4;
       }
       if(strUser10 == "Turnover Rate"){
           y2.tickFormat = '.1%';
           chart8.data = turndata4;
       }
       if(strUser10 == "Workers"){
           chart8.data = wdata4;
       }
        
   }
            
if(strUser7 == "2017-Q1"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           chart8.data = avgdata5;
       }
       if(strUser10 == "Job Net Changes"){
           chart8.data = netdata5;
       }
       if(strUser10 == "New Hires"){
           chart8.data = hiredata5;
       }
       if(strUser10 == "Turnover Rate"){
           y2.tickFormat = '.1%';
           chart8.data = turndata5;
       }
       if(strUser10 == "Workers"){
           chart8.data = wdata5;
       }
        
   }
            
if(strUser7 == "2017-Q2"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           chart8.data = avgdata6;
       }
       if(strUser10 == "Job Net Changes"){
           chart8.data = netdata6;
       }
       if(strUser10 == "New Hires"){
           chart8.data = hiredata6;
       }
       if(strUser10 == "Turnover Rate"){
           y2.tickFormat = '.1%';
           chart8.data = turndata6;
       }
       if(strUser10 == "Workers"){
           chart8.data = wdata6;
       }
        
   }
            
if(strUser7 == "2017-Q3"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           chart8.data = avgdata7;
       }
       if(strUser10 == "Job Net Changes"){
           chart8.data = netdata7;
       }
       if(strUser10 == "New Hires"){
           chart8.data = hiredata7;
       }
       if(strUser10 == "Turnover Rate"){
           y2.tickFormat = '.1%';
           chart8.data = turndata7;
       }
       if(strUser10 == "Workers"){
           chart8.data = wdata7;
       }
        
   }
    
    if(strUser7 == "2017-Q4"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           chart8.data = avgdata8;
       }
       if(strUser10 == "Job Net Changes"){
           chart8.data = netdata8;
       }
       if(strUser10 == "New Hires"){
           chart8.data = hiredata8;
       }
       if(strUser10 == "Turnover Rate"){
           y2.tickFormat = '.1%';
           chart8.data = turndata7;
       }
       if(strUser10 == "Workers"){
           chart8.data = wdata8;
       }
        
   }
    
    if(strUser7 == "2018-Q1"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           chart8.data = avgdata9;
       }
       if(strUser10 == "Job Net Changes"){
           chart8.data = netdata9;
       }
       if(strUser10 == "New Hires"){
           chart8.data = hiredata9;
       }
       if(strUser10 == "Turnover Rate"){
           chart8.data = turndata9;
       }
       if(strUser10 == "Workers"){
           chart8.data = wdata9;
       }
        
   }
    
    if(strUser7 == "2016Q4"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           chart8.data = avgdata10;
       }
       if(strUser10 == "Job Net Changes"){
           chart8.data = netdata10;
       }
       if(strUser10 == "New Hires"){
           chart8.data = hiredata10;
       }
       if(strUser10 == "Turnover Rate"){
           chart8.data = turndata10;
       }
       if(strUser10 == "Workers"){
           chart8.data = wdata10;
       }
        
        
   }
    
    if(strUser7 == "2017Q1"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           chart8.data = avgdata10;
       }
       if(strUser10 == "Job Net Changes"){
           chart8.data = netdata10;
       }
       if(strUser10 == "New Hires"){
           chart8.data = hiredata01;
       }
       if(strUser10 == "Turnover Rate"){
           chart8.data = turndata10;
       }
       if(strUser10 == "Workers"){
           chart8.data = wdata01;
       }
        
   }
    
    if(strUser7 == "2017Q2"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           chart8.data = avgdata10;
       }
       if(strUser10 == "Job Net Changes"){
           chart8.data = netdata10;
       }
       if(strUser10 == "New Hires"){
           chart8.data = hiredata02;
       }
       if(strUser10 == "Turnover Rate"){
           chart8.data = turndata10;
       }
       if(strUser10 == "Workers"){
           chart8.data = wdata02;
       }
        
   }


    
    
        
    
         
     chart8.draw(1000);
     
 });
        
d3.select("#btn10").on("change", function() {
    y2.tickFormat = ',f';
  
	var e7 = document.getElementById("btn7");
    var e10 = document.getElementById("btn10");
  var strUser7 = e7.options[e7.selectedIndex].text;
  var strUser10 = e10.options[e10.selectedIndex].text;
    y2.title = strUser10;
   if(strUser7 == "2016-Q1"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           chart8.data = avgdata1;
       }
       if(strUser10 == "Job Net Changes"){
           chart8.data = netdata1;
       }
       if(strUser10 == "New Hires"){
           chart8.data = hiredata1;
       }
       if(strUser10 == "Turnover Rate"){
           y2.tickFormat = '.1%';
           chart8.data = turndata1;
       }
       if(strUser10 == "Workers"){
           chart8.data = wdata1;
       }
        
   }
            
   if(strUser7 == "2016-Q2"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           chart8.data = avgdata2;
       }
       if(strUser10 == "Job Net Changes"){
           chart8.data = netdata2;
       }
       if(strUser10 == "New Hires"){
           chart8.data = hiredata2;
       }
       if(strUser10 == "Turnover Rate"){
           y2.tickFormat = '.1%';
           chart8.data = turndata2;
       }
       if(strUser10 == "Workers"){
           chart8.data = wdata2;
       }
        
   }
            
  if(strUser7 == "2016-Q3"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           chart8.data = avgdata3;
       }
       if(strUser10 == "Job Net Changes"){
           chart8.data = netdata3;
       }
       if(strUser10 == "New Hires"){
           chart8.data = hiredata3;
       }
       if(strUser10 == "Turnover Rate"){
           y2.tickFormat = '.1%';
           chart8.data = turndata3;
       }
       if(strUser10 == "Workers"){
           chart8.data = wdata3;
       }
        
   }
    
if(strUser7 == "2016-Q4"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           chart8.data = avgdata4;
       }
       if(strUser10 == "Job Net Changes"){
           chart8.data = netdata4;
       }
       if(strUser10 == "New Hires"){
           chart8.data = hiredata4;
       }
       if(strUser10 == "Turnover Rate"){
           y2.tickFormat = '.1%';
           chart8.data = turndata4;
       }
       if(strUser10 == "Workers"){
           chart8.data = wdata4;
       }
        
   }
            
if(strUser7 == "2017-Q1"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           chart8.data = avgdata5;
       }
       if(strUser10 == "Job Net Changes"){
           chart8.data = netdata5;
       }
       if(strUser10 == "New Hires"){
           chart8.data = hiredata5;
       }
       if(strUser10 == "Turnover Rate"){
           y2.tickFormat = '.1%';
           chart8.data = turndata5;
       }
       if(strUser10 == "Workers"){
           chart8.data = wdata5;
       }
        
   }
            
if(strUser7 == "2017-Q2"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           chart8.data = avgdata6;
       }
       if(strUser10 == "Job Net Changes"){
           chart8.data = netdata6;
       }
       if(strUser10 == "New Hires"){
           chart8.data = hiredata6;
       }
       if(strUser10 == "Turnover Rate"){
           y2.tickFormat = '.1%';
           chart8.data = turndata6;
       }
       if(strUser10 == "Workers"){
           chart8.data = wdata6;
       }
        
   }
            
if(strUser7 == "2017-Q3"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           chart8.data = avgdata7;
       }
       if(strUser10 == "Job Net Changes"){
           chart8.data = netdata7;
       }
       if(strUser10 == "New Hires"){
           chart8.data = hiredata7;
       }
       if(strUser10 == "Turnover Rate"){
           y2.tickFormat = '.1%';
           chart8.data = turndata7;
       }
       if(strUser10 == "Workers"){
           chart8.data = wdata7;
       }
        
   }
    
    if(strUser7 == "2017-Q4"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           chart8.data = avgdata8;
       }
       if(strUser10 == "Job Net Changes"){
           chart8.data = netdata8;
       }
       if(strUser10 == "New Hires"){
           chart8.data = hiredata8;
       }
       if(strUser10 == "Turnover Rate"){
           y2.tickFormat = '.1%';
           chart8.data = turndata7;
       }
       if(strUser10 == "Workers"){
           chart8.data = wdata8;
       }
        
   }
    
    if(strUser7 == "2018-Q1"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           chart8.data = avgdata9;
       }
       if(strUser10 == "Job Net Changes"){
           chart8.data = netdata9;
       }
       if(strUser10 == "New Hires"){
           chart8.data = hiredata9;
       }
       if(strUser10 == "Turnover Rate"){
           chart8.data = turndata9;
       }
       if(strUser10 == "Workers"){
           chart8.data = wdata9;
       }
        
   }
    
    if(strUser7 == "2016Q4"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           chart8.data = avgdata10;
       }
       if(strUser10 == "Job Net Changes"){
           chart8.data = netdata10;
       }
       if(strUser10 == "New Hires"){
           chart8.data = hiredata10;
       }
       if(strUser10 == "Turnover Rate"){
           chart8.data = turndata10;
       }
       if(strUser10 == "Workers"){
           chart8.data = wdata10;
       }
        
        
   }
    
    if(strUser7 == "2017Q1"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           chart8.data = avgdata10;
       }
       if(strUser10 == "Job Net Changes"){
           chart8.data = netdata10;
       }
       if(strUser10 == "New Hires"){
           chart8.data = hiredata01;
       }
       if(strUser10 == "Turnover Rate"){
           chart8.data = turndata10;
       }
       if(strUser10 == "Workers"){
           chart8.data = wdata01;
       }
        
   }
    
    if(strUser7 == "2017Q2"){
        
       if(strUser10 == "Average Monthly Earnings"){
           y2.tickFormat = '$,f';
           chart8.data = avgdata10;
       }
       if(strUser10 == "Job Net Changes"){
           chart8.data = netdata10;
       }
       if(strUser10 == "New Hires"){
           chart8.data = hiredata02;
       }
       if(strUser10 == "Turnover Rate"){
           chart8.data = turndata10;
       }
       if(strUser10 == "Workers"){
           chart8.data = wdata02;
       }
        
   }
        
    
         
     chart8.draw(1000);
     
 });
        
        //Chart 6 - end
        
        //chart 9 OTM
        
        
        
        
        d3.select("#btn9").on("change", function() {
  
  
	var e7 = document.getElementById("btn9");
  var strUser7 = e7.options[e7.selectedIndex].text;
  
   
 });
        
 d3.select("#btn18").on("change", function() {
    dataSwapi2();
});
        
        d3.select("#btn102").on("change", function() {
    dataSwapi2();
});
        
window.dataSwapi2 = function () {
    sepy2.tickFormat = ',f';
  
  
	var e7 = document.getElementById("btn18");
    var e10 = document.getElementById("btn102");
  var strUser7 = e7.options[e7.selectedIndex].text;
  var strUser10 = e10.options[e10.selectedIndex].text;
    sepy2.title = strUser10;
   if(strUser7 == "2016-Q1"){
        
       if(strUser10 == "Industry"){
           //y2.tickFormat = '$,f';
           chart61.data = isepdata1;
       }
       if(strUser10 == "Gender"){
           chart61.data = gsepdata1;
       }
       if(strUser10 == "Education"){
          chart61.data = esepdata1;
       }
       if(strUser10 == "Age"){
          chart61.data = asepdata1;
       }
       
        
   }
            
   if(strUser7 == "2016-Q2"){
        
       if(strUser10 == "Industry"){
           //y2.tickFormat = '$,f';
           chart61.data = isepdata2;
       }
       if(strUser10 == "Gender"){
           chart61.data = gsepdata2;
       }
       if(strUser10 == "Education"){
          chart61.data = esepdata2;
       }
       if(strUser10 == "Age"){
          chart61.data = asepdata2;
       }
   }
            
  if(strUser7 == "2016-Q3"){
        
       if(strUser10 == "Industry"){
           //y2.tickFormat = '$,f';
           chart61.data = isepdata3;
       }
       if(strUser10 == "Gender"){
           chart61.data = gsepdata3;
       }
       if(strUser10 == "Education"){
          chart61.data = esepdata3;
       }
       if(strUser10 == "Age"){
          chart61.data = asepdata3;
        }
   }
    
if(strUser7 == "2016-Q4"){
        
       if(strUser10 == "Industry"){
           //y2.tickFormat = '$,f';
           chart61.data = isepdata4;
       }
       if(strUser10 == "Gender"){
           chart61.data = gsepdata4;
       }
       if(strUser10 == "Education"){
          chart61.data = esepdata4;
       }
       if(strUser10 == "Age"){
          chart61.data = asepdata4;
        }
   }
            
if(strUser7 == "2017-Q1"){
        
       if(strUser10 == "Industry"){
           //y2.tickFormat = '$,f';
           chart61.data = isepdata5;
       }
       if(strUser10 == "Gender"){
           chart61.data = gsepdata5;
       }
       if(strUser10 == "Education"){
          chart61.data = esepdata5;
       }
       if(strUser10 == "Age"){
          chart61.data = asepdata5;
        }
   }
            
if(strUser7 == "2017-Q2"){
        
       if(strUser10 == "Industry"){
           //y2.tickFormat = '$,f';
           chart61.data = isepdata6;
       }
       if(strUser10 == "Gender"){
           chart61.data = gsepdata6;
       }
       if(strUser10 == "Education"){
          chart61.data = esepdata6;
       }
       if(strUser10 == "Age"){
          chart61.data = asepdata6;
        }
   }
            
if(strUser7 == "2017-Q3"){
        
       if(strUser10 == "Industry"){
           //y2.tickFormat = '$,f';
           chart61.data = isepdata7;
       }
       if(strUser10 == "Gender"){
           chart61.data = gsepdata7;
       }
       if(strUser10 == "Education"){
          chart61.data = esepdata7;
       }
       if(strUser10 == "Age"){
          chart61.data = asepdata7;
        }
   }
    
    if(strUser7 == "2017-Q4"){
        
       if(strUser10 == "Industry"){
           //y2.tickFormat = '$,f';
           chart61.data = isepdata8;
       }
       if(strUser10 == "Gender"){
           chart61.data = gsepdata8;
       }
       if(strUser10 == "Education"){
          chart61.data = esepdata8;
       }
       if(strUser10 == "Age"){
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
           y2.tickFormat =',.1';
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
           y2.tickFormat =',.1';
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
           y2.tickFormat =',.1';
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
        
        
        
        
 d3.select("#btn8").on("change", function() {
  
  
	var e7 = document.getElementById("btn8");
  var strUser7 = e7.options[e7.selectedIndex].text;
  
     
 });
       
        
                
                    window.onresize = function () {
                      
                        drawAll();
                    };
        
        window.dataSwap1 = function () {
            var e3 = document.getElementById("btn3");
            var strUser3 = e3.options[e3.selectedIndex].text;
            var e31 = document.getElementById("btn31");
            var strUser31 = e31.options[e31.selectedIndex].text;
            if (strUser3 == "2016-Q1") {
                if (strUser31 == "By Education") {
                    wChart.data = workData1;
                    avgChart.data = averageData1;
                    jc.data = jobData1;
                    newHireChart.data = newHireData1;
                    turnChart.data = turnOverData1;
                     turnChart.draw(1000);
     /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                }
                if (strUser31 == "By Age") {
                    wChart.data = workData1;
                    avgChart.data = averageData1;
                    jc.data = jobData1;
                    newHireChart.data = newHireData1;
                    turnChart.data = turnOverData1;
                    turnChart.draw(1000);
    /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
      /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData2;
                    avgChart.data = averageData2;
                    jc.data = jobData2;
                    newHireChart.data = newHireData2;
                    turnChart.data = turnOverData2;
                    turnChart.draw(1000);
        /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
          /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData3;
                    avgChart.data = averageData3;
                    jc.data = jobData3;
                    newHireChart.data = newHireData3;
                    turnChart.data = turnOverData3;
                    turnChart.draw(1000);
          /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
    /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData4;
                    avgChart.data = averageData4;
                    jc.data = jobData4;
                    newHireChart.data = newHireData4;
                    turnChart.data = turnOverData4;
                    turnChart.draw(1000);
  /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
     /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData5;
                    avgChart.data = averageData5;
                    jc.data = jobData5;
                    newHireChart.data = newHireData5;
                    turnChart.data = turnOverData5;
                    turnChart.draw(1000);
          /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
           /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData6;
                    avgChart.data = averageData6;
                    jc.data = jobData6;
                    newHireChart.data = newHireData6;
                    turnChart.data = turnOverData6;
                     turnChart.draw(1000);
          /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
         /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData7;
                    avgChart.data = averageData7;
                    jc.data = jobData7;
                    newHireChart.data = newHireData7;
                    turnChart.data = turnOverData7;
                    turnChart.draw(1000);
           /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
                    turnChart.data = turnOverData7;
                    turnChart.draw(1000);
          /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
    
                } if (strUser31 == "By Age") {
                    wChart.data = workData8;
                    avgChart.data = averageData8;
                    jc.data = jobData8;
                    newHireChart.data = newHireData8;
                    turnChart.data = turnOverData7;
                    turnChart.draw(1000);
           /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Gender") {
                    wChart.data = workData81;
                    avgChart.data = averageData81;
                    jc.data = jobData81;
                    newHireChart.data = newHireData81;
                    turnChart.data = turnOverData71;
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
          /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData9;
                    avgChart.data = averageData9;
                    jc.data = jobData9;
                    newHireChart.data = newHireData9;
                    turnChart.data = turnOverData9;
                    turnChart.draw(1000);
      /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
        /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData10;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData10;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
       /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
        /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData01;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData01;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
      /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
       /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData02;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData02;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
        /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Gender") {
                    wChart.data = workData85;
                    avgChart.data = averageData83;
                    jc.data = jobData83;
                    newHireChart.data = newHireData85;
                    turnChart.data = turnOverData83;
                    turnChart.draw(1000);
                }



            }
            
             pwChart.data = wChart.data;
             pavgChart.data = avgChart.data;
             pjc.data = jc.data;
             pnewHireChart.data = newHireChart.data;
             pturnChart.data = turnChart.data;
             pturnChart.draw(1000);
             pwChart.draw(1000);
             pavgChart.draw(1000);
             pjc.draw(1000);
             pnewHireChart.draw(1000);
            
            
            
             turnChart.draw(1000);
             wChart.draw(1000);
             avgChart.draw(1000);
             jc.draw(1000);
             newHireChart.draw(1000);
           };

 window.dataSwap12 = function () {
            var e3 = document.getElementById("btn4");
            var strUser3 = e3.options[e3.selectedIndex].text;
            var e31 = document.getElementById("btn41");
            var strUser31 = e31.options[e31.selectedIndex].text;
            if (strUser3 == "2016-Q1") {
                if (strUser31 == "By Education") {
                    wChart.data = workData1;
                    avgChart.data = averageData1;
                    jc.data = jobData1;
                    newHireChart.data = newHireData1;
                    turnChart.data = turnOverData1;
                     turnChart.draw(1000);
         /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                }
                if (strUser31 == "By Age") {
                    wChart.data = workData1;
                    avgChart.data = averageData1;
                    jc.data = jobData1;
                    newHireChart.data = newHireData1;
                    turnChart.data = turnOverData1;
                    turnChart.draw(1000);
           /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
         /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData2;
                    avgChart.data = averageData2;
                    jc.data = jobData2;
                    newHireChart.data = newHireData2;
                    turnChart.data = turnOverData2;
                    turnChart.draw(1000);
          /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
         /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData3;
                    avgChart.data = averageData3;
                    jc.data = jobData3;
                    newHireChart.data = newHireData3;
                    turnChart.data = turnOverData3;
                    turnChart.draw(1000);
        /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
        /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData4;
                    avgChart.data = averageData4;
                    jc.data = jobData4;
                    newHireChart.data = newHireData4;
                    turnChart.data = turnOverData4;
                    turnChart.draw(1000);
        /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
          /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData5;
                    avgChart.data = averageData5;
                    jc.data = jobData5;
                    newHireChart.data = newHireData5;
                    turnChart.data = turnOverData5;
                    turnChart.draw(1000);
         /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
         /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData6;
                    avgChart.data = averageData6;
                    jc.data = jobData6;
                    newHireChart.data = newHireData6;
                    turnChart.data = turnOverData6;
                     turnChart.draw(1000);
         /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
         /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData7;
                    avgChart.data = averageData7;
                    jc.data = jobData7;
                    newHireChart.data = newHireData7;
                    turnChart.data = turnOverData7;
                    turnChart.draw(1000);
          /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
                    turnChart.data = turnOverData7;
                    turnChart.draw(1000);
        /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData8;
                    avgChart.data = averageData8;
                    jc.data = jobData8;
                    newHireChart.data = newHireData8;
                    turnChart.data = turnOverData7;
                    turnChart.draw(1000);
         /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Gender") {
                    wChart.data = workData81;
                    avgChart.data = averageData81;
                    jc.data = jobData81;
                    newHireChart.data = newHireData81;
                    turnChart.data = turnOverData71;
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
        /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData9;
                    avgChart.data = averageData9;
                    jc.data = jobData9;
                    newHireChart.data = newHireData9;
                    turnChart.data = turnOverData9;
                    turnChart.draw(1000);
          /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
          /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData10;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData10;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
         /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
         /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData01;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData01;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
         /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
         /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData02;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData02;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
         /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Gender") {
                    wChart.data = workData85;
                    avgChart.data = averageData83;
                    jc.data = jobData83;
                    newHireChart.data = newHireData85;
                    turnChart.data = turnOverData83;
                    turnChart.draw(1000);
                }



            }
     
             pwChart.data = wChart.data;
             pavgChart.data = avgChart.data;
             pjc.data = jc.data;
             pnewHireChart.data = newHireChart.data;
             pturnChart.data = turnChart.data;
             pturnChart.draw(1000);
             pwChart.draw(1000);
             pavgChart.draw(1000);
             pjc.draw(1000);
             pnewHireChart.draw(1000);
            
             wChart.draw(1000);
             avgChart.draw(1000);
             jc.draw(1000);
             newHireChart.draw(1000);
           };

 window.dataSwap13 = function () {
            var e3 = document.getElementById("btn5");
            var strUser3 = e3.options[e3.selectedIndex].text;
            var e31 = document.getElementById("btn51");
            var strUser31 = e31.options[e31.selectedIndex].text;
            if (strUser3 == "2016-Q1") {
                if (strUser31 == "By Education") {
                    wChart.data = workData1;
                    avgChart.data = averageData1;
                    jc.data = jobData1;
                    newHireChart.data = newHireData1;
                    turnChart.data = turnOverData1;
                     turnChart.draw(1000);
          /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                }
                if (strUser31 == "By Age") {
                    wChart.data = workData1;
                    avgChart.data = averageData1;
                    jc.data = jobData1;
                    newHireChart.data = newHireData1;
                    turnChart.data = turnOverData1;
                    turnChart.draw(1000);
         /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
         /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData2;
                    avgChart.data = averageData2;
                    jc.data = jobData2;
                    newHireChart.data = newHireData2;
                    turnChart.data = turnOverData2;
                    turnChart.draw(1000);
        /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
         /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData3;
                    avgChart.data = averageData3;
                    jc.data = jobData3;
                    newHireChart.data = newHireData3;
                    turnChart.data = turnOverData3;
                    turnChart.draw(1000);
        /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
         /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData4;
                    avgChart.data = averageData4;
                    jc.data = jobData4;
                    newHireChart.data = newHireData4;
                    turnChart.data = turnOverData4;
                    turnChart.draw(1000);
       /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
          /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData5;
                    avgChart.data = averageData5;
                    jc.data = jobData5;
                    newHireChart.data = newHireData5;
                    turnChart.data = turnOverData5;
                    turnChart.draw(1000);
         /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
          /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData6;
                    avgChart.data = averageData6;
                    jc.data = jobData6;
                    newHireChart.data = newHireData6;
                    turnChart.data = turnOverData6;
                     turnChart.draw(1000);
          /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
         /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData7;
                    avgChart.data = averageData7;
                    jc.data = jobData7;
                    newHireChart.data = newHireData7;
                    turnChart.data = turnOverData7;
                    turnChart.draw(1000);
          /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
                    turnChart.data = turnOverData7;
                    turnChart.draw(1000);
          /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData8;
                    avgChart.data = averageData8;
                    jc.data = jobData8;
                    newHireChart.data = newHireData8;
                    turnChart.data = turnOverData7;
                    turnChart.draw(1000);
        /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Gender") {
                    wChart.data = workData81;
                    avgChart.data = averageData81;
                    jc.data = jobData81;
                    newHireChart.data = newHireData81;
                    turnChart.data = turnOverData71;
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
        /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData9;
                    avgChart.data = averageData9;
                    jc.data = jobData9;
                    newHireChart.data = newHireData9;
                    turnChart.data = turnOverData9;
                    turnChart.draw(1000);
         /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
         /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData10;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData10;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
          /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
          /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData01;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData01;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
         /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
           /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData02;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData02;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
          /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Gender") {
                    wChart.data = workData85;
                    avgChart.data = averageData83;
                    jc.data = jobData83;
                    newHireChart.data = newHireData85;
                    turnChart.data = turnOverData83;
                    turnChart.draw(1000);
                }



            }
     
            pwChart.data = wChart.data;
             pavgChart.data = avgChart.data;
             pjc.data = jc.data;
             pnewHireChart.data = newHireChart.data;
             pturnChart.data = turnChart.data;
             pturnChart.draw(1000);
             pwChart.draw(1000);
             pavgChart.draw(1000);
             pjc.draw(1000);
             pnewHireChart.draw(1000);
            
             wChart.draw(1000);
             avgChart.draw(1000);
             jc.draw(1000);
             newHireChart.draw(1000);
           };



        window.dataSwap2 = function () { 
      var e3 = document.getElementById("btn3");
      var strUser3 = e3.options[e3.selectedIndex].text;
      var e31 = document.getElementById("btn31");
      var strUser31 = e31.options[e31.selectedIndex].text;
  
      if (strUser3 == "2016-Q1") {
          if (strUser31 == "By Education") {
              wChart.data = workData1;
              avgChart.data = averageData1;
              jc.data = jobData1;
              newHireChart.data = newHireData1;
              turnChart.data = turnOverData1;
              turnChart.draw(1000);
        /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
          } if (strUser31 == "By Age") {
              wChart.data = workData1;
              avgChart.data = averageData1;
              jc.data = jobData1;
              newHireChart.data = newHireData1;
              turnChart.data = turnOverData1;
              turnChart.draw(1000);
         /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
         /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
          } if (strUser31 == "By Age") {
              wChart.data = workData2;
              avgChart.data = averageData2;
              jc.data = jobData2;
              newHireChart.data = newHireData2;
              turnChart.data = turnOverData2;
              turnChart.draw(1000);
          /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
          /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
          } if (strUser31 == "By Age") {
              wChart.data = workData3;
              avgChart.data = averageData3;
              jc.data = jobData3;
              newHireChart.data = newHireData3;
              turnChart.data = turnOverData3;
              turnChart.draw(1000);
          /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
           /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
          } if (strUser31 == "By Age") {
              wChart.data = workData4;
              avgChart.data = averageData4;
              jc.data = jobData4;
              newHireChart.data = newHireData4;
              turnChart.data = turnOverData4;
              turnChart.draw(1000);
         /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
          /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
          } if (strUser31 == "By Age") {
              wChart.data = workData5;
              avgChart.data = averageData5;
              jc.data = jobData5;
              newHireChart.data = newHireData5;
              turnChart.data = turnOverData5;
              turnChart.draw(1000);
         /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
          /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
          } if (strUser31 == "By Age") {
              wChart.data = workData6;
              avgChart.data = averageData6;
              jc.data = jobData6;
              newHireChart.data = newHireData6;
              turnChart.data = turnOverData6;
              turnChart.draw(1000);
          /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
         /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
          } if (strUser31 == "By Age") {
              wChart.data = workData7;
              avgChart.data = averageData7;
              jc.data = jobData7;
              newHireChart.data = newHireData7;
              turnChart.data = turnOverData7;
              turnChart.draw(1000);
          /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
              turnChart.data = turnOverData7;
              turnChart.draw(1000);
          /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
          } if (strUser31 == "By Age") {
              wChart.data = workData8;
              avgChart.data = averageData8;
              jc.data = jobData8;
              newHireChart.data = newHireData8;
              turnChart.data = turnOverData7;
              turnChart.draw(1000);
          /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
          } if (strUser31 == "By Gender") {
              wChart.data = workData81;
              avgChart.data = averageData81;
              jc.data = jobData81;
              newHireChart.data = newHireData81;
              turnChart.data = turnOverData71;
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
          /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData9;
                    avgChart.data = averageData9;
                    jc.data = jobData9;
                    newHireChart.data = newHireData9;
                    turnChart.data = turnOverData9;
                    turnChart.draw(1000);
          /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
           /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData10;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData10;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
       /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
   /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData01;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData01;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
   /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
     /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData02;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData02;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
   /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Gender") {
                    wChart.data = workData85;
                    avgChart.data = averageData83;
                    jc.data = jobData83;
                    newHireChart.data = newHireData85;
                    turnChart.data = turnOverData83;
                    turnChart.draw(1000);
                }



            }
            
            pwChart.data = wChart.data;
             pavgChart.data = avgChart.data;
             pjc.data = jc.data;
             pnewHireChart.data = newHireChart.data;
             pturnChart.data = turnChart.data;
             pturnChart.draw(1000);
             pwChart.draw(1000);
             pavgChart.draw(1000);
             pjc.draw(1000);
             pnewHireChart.draw(1000);
      
      wChart.draw(1000);
      avgChart.draw(1000);
      jc.draw(1000);
      newHireChart.draw(1000);};

window.dataSwap22 = function () { 
      
      var e3 = document.getElementById("btn4");
      var strUser3 = e3.options[e3.selectedIndex].text;
      var e31 = document.getElementById("btn41");
      var strUser31 = e31.options[e31.selectedIndex].text;
  
      if (strUser3 == "2016-Q1") {
          if (strUser31 == "By Education") {
              wChart.data = workData1;
              avgChart.data = averageData1;
              jc.data = jobData1;
              newHireChart.data = newHireData1;
              turnChart.data = turnOverData1;
              turnChart.draw(1000);
      /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
          } if (strUser31 == "By Age") {
              wChart.data = workData1;
              avgChart.data = averageData1;
              jc.data = jobData1;
              newHireChart.data = newHireData1;
              turnChart.data = turnOverData1;
              turnChart.draw(1000);
        /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
         /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
          } if (strUser31 == "By Age") {
              wChart.data = workData2;
              avgChart.data = averageData2;
              jc.data = jobData2;
              newHireChart.data = newHireData2;
              turnChart.data = turnOverData2;
              turnChart.draw(1000);
       /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
      /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
          } if (strUser31 == "By Age") {
              wChart.data = workData3;
              avgChart.data = averageData3;
              jc.data = jobData3;
              newHireChart.data = newHireData3;
              turnChart.data = turnOverData3;
              turnChart.draw(1000);
     /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
    /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
          } if (strUser31 == "By Age") {
              wChart.data = workData4;
              avgChart.data = averageData4;
              jc.data = jobData4;
              newHireChart.data = newHireData4;
              turnChart.data = turnOverData4;
              turnChart.draw(1000);
   /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
   /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
          } if (strUser31 == "By Age") {
              wChart.data = workData5;
              avgChart.data = averageData5;
              jc.data = jobData5;
              newHireChart.data = newHireData5;
              turnChart.data = turnOverData5;
              turnChart.draw(1000);
  /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
    /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
          } if (strUser31 == "By Age") {
              wChart.data = workData6;
              avgChart.data = averageData6;
              jc.data = jobData6;
              newHireChart.data = newHireData6;
              turnChart.data = turnOverData6;
              turnChart.draw(1000);
   /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
    /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
          } if (strUser31 == "By Age") {
              wChart.data = workData7;
              avgChart.data = averageData7;
              jc.data = jobData7;
              newHireChart.data = newHireData7;
              turnChart.data = turnOverData7;
              turnChart.draw(1000);
    /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
              turnChart.data = turnOverData7;
              turnChart.draw(1000);
     /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
          } if (strUser31 == "By Age") {
              wChart.data = workData8;
              avgChart.data = averageData8;
              jc.data = jobData8;
              newHireChart.data = newHireData8;
              turnChart.data = turnOverData7;
              turnChart.draw(1000);
    /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
          } if (strUser31 == "By Gender") {
              wChart.data = workData81;
              avgChart.data = averageData81;
              jc.data = jobData81;
              newHireChart.data = newHireData81;
              turnChart.data = turnOverData71;
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
     /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData9;
                    avgChart.data = averageData9;
                    jc.data = jobData9;
                    newHireChart.data = newHireData9;
                    turnChart.data = turnOverData9;
                    turnChart.draw(1000);
    /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
    /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData10;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData10;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
   /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
    /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData01;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData01;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
     /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
    /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData02;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData02;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
    /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Gender") {
                    wChart.data = workData85;
                    avgChart.data = averageData83;
                    jc.data = jobData83;
                    newHireChart.data = newHireData85;
                    turnChart.data = turnOverData83;
                    turnChart.draw(1000);
                }



            }
    
            pwChart.data = wChart.data;
             pavgChart.data = avgChart.data;
             pjc.data = jc.data;
             pnewHireChart.data = newHireChart.data;
             pturnChart.data = turnChart.data;
             pturnChart.draw(1000);
             pwChart.draw(1000);
             pavgChart.draw(1000);
             pjc.draw(1000);
             pnewHireChart.draw(1000);
      
      wChart.draw(1000);
      avgChart.draw(1000);
      jc.draw(1000);
      newHireChart.draw(1000);};

window.dataSwap23 = function () { 
      
      var e3 = document.getElementById("btn5");
      var strUser3 = e3.options[e3.selectedIndex].text;
      var e31 = document.getElementById("btn51");
      var strUser31 = e31.options[e31.selectedIndex].text;
  
      if (strUser3 == "2016-Q1") {
          if (strUser31 == "By Education") {
              wChart.data = workData1;
              avgChart.data = averageData1;
              jc.data = jobData1;
              newHireChart.data = newHireData1;
              turnChart.data = turnOverData1;
              turnChart.draw(1000);
    /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
          } if (strUser31 == "By Age") {
              wChart.data = workData1;
              avgChart.data = averageData1;
              jc.data = jobData1;
              newHireChart.data = newHireData1;
              turnChart.data = turnOverData1;
              turnChart.draw(1000);
    /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
    /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
          } if (strUser31 == "By Age") {
              wChart.data = workData2;
              avgChart.data = averageData2;
              jc.data = jobData2;
              newHireChart.data = newHireData2;
              turnChart.data = turnOverData2;
              turnChart.draw(1000);
   /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
    /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
          } if (strUser31 == "By Age") {
              wChart.data = workData3;
              avgChart.data = averageData3;
              jc.data = jobData3;
              newHireChart.data = newHireData3;
              turnChart.data = turnOverData3;
              turnChart.draw(1000);
     /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
    /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
          } if (strUser31 == "By Age") {
              wChart.data = workData4;
              avgChart.data = averageData4;
              jc.data = jobData4;
              newHireChart.data = newHireData4;
              turnChart.data = turnOverData4;
              turnChart.draw(1000);
    /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
    /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
          } if (strUser31 == "By Age") {
              wChart.data = workData5;
              avgChart.data = averageData5;
              jc.data = jobData5;
              newHireChart.data = newHireData5;
              turnChart.data = turnOverData5;
              turnChart.draw(1000);
    /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
    /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
          } if (strUser31 == "By Age") {
              wChart.data = workData6;
              avgChart.data = averageData6;
              jc.data = jobData6;
              newHireChart.data = newHireData6;
              turnChart.data = turnOverData6;
              turnChart.draw(1000);
    /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
    /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
          } if (strUser31 == "By Age") {
              wChart.data = workData7;
              avgChart.data = averageData7;
              jc.data = jobData7;
              newHireChart.data = newHireData7;
              turnChart.data = turnOverData7;
              turnChart.draw(1000);
     /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
              turnChart.data = turnOverData7;
              turnChart.draw(1000);
     /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
          } if (strUser31 == "By Age") {
              wChart.data = workData8;
              avgChart.data = averageData8;
              jc.data = jobData8;
              newHireChart.data = newHireData8;
              turnChart.data = turnOverData7;
              turnChart.draw(1000);
    /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
          } if (strUser31 == "By Gender") {
              wChart.data = workData81;
              avgChart.data = averageData81;
              jc.data = jobData81;
              newHireChart.data = newHireData81;
              turnChart.data = turnOverData71;
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
     /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData9;
                    avgChart.data = averageData9;
                    jc.data = jobData9;
                    newHireChart.data = newHireData9;
                    turnChart.data = turnOverData9;
                    turnChart.draw(1000);
    /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
    /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData10;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData10;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
    /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
     /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData01;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData01;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
    /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
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
    /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Age") {
                    wChart.data = workData02;
                    avgChart.data = averageData10;
                    jc.data = jobData10;
                    newHireChart.data = newHireData02;
                    turnChart.data = turnOverData10;
                    turnChart.draw(1000);
   /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                } if (strUser31 == "By Gender") {
                    wChart.data = workData85;
                    avgChart.data = averageData83;
                    jc.data = jobData83;
                    newHireChart.data = newHireData85;
                    turnChart.data = turnOverData83;
                    turnChart.draw(1000);
                }



            }
    pwChart.data = wChart.data;
             pavgChart.data = avgChart.data;
             pjc.data = jc.data;
             pnewHireChart.data = newHireChart.data;
             pturnChart.data = turnChart.data;
             pturnChart.draw(1000);
             pwChart.draw(1000);
             pavgChart.draw(1000);
             pjc.draw(1000);
             pnewHireChart.draw(1000);
      
      wChart.draw(1000);
      avgChart.draw(1000);
      jc.draw(1000);
      newHireChart.draw(1000);};




                        

             window.drawAll = function(){
                 
                                wChart.draw(0, true);
                                avgChart.draw(0, true);
                                jc.draw(0, true);
                                newHireChart.draw(0, true);
                                turnChart.draw(0, true);
                                
                                chart8.draw(0, true);
                                chart61.draw(0, true);
                                //aprogChart.draw(0, true);
                                //aNewChart.draw(0, true);
                 
                                pwChart.draw(0, true);
                                pavgChart.draw(0, true);
                                pjc.draw(0, true);
                                pnewHireChart.draw(0, true);
                                pturnChart.draw(0, true);
                                
                                pchart8.draw(0, true);
                                pchart61.draw(0, true);
                               // paprogChart.draw(0, true);
                                //paNewChart.draw(0, true);
                 
                                 edX.shapes.selectAll("text").attr("transform",
                                function (d) {
                                  return d3.select(this).attr("transform") + " translate(0, -10) rotate(-45)";
                                });
                 
                                
                 
                                genX.shapes.selectAll("text").attr("transform",
                                function (d) {
                                  return d3.select(this).attr("transform") + " translate(0, -10) rotate(-45)";
                                });
                                
                                /**     vetX.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(5, 15) rotate(-30)";
    }); **/
                            }; 
        
       d3.select("#btn3").on("change", function () {
                dataSwap1();
       });

       d3.select("#btn4").on("change", function () {
                dataSwap12();
       });
        
        d3.select("#btn5").on("change", function () {
                dataSwap13();
       });
        
  d3.select("#btn31").on("change", function() {  
            dataSwap2();
    });

    d3.select("#btn41").on("change", function() {  
            dataSwap22();
    });
        
    d3.select("#btn51").on("change", function() {  
            dataSwap23();
    });
        
                                
d3.select("#btn6").on("click", function(){
            if(togNum1 == 1)
                {
                    togNum1 = 0;
                    qLegend.shapes.style("visibility", "hidden");
                    pqLegend.shapes.style("visibility", "hidden");
                    
                    
                }else if(togNum1 == 0)
                {
                    togNum1 = 1;
                    qLegend.shapes.style("visibility", "visible");
                    pqLegend.shapes.style("visibility", "visible");
                }
        });
         
        
  });  

var whichChart = 1;

function hidePrint(){
    document.getElementById("Print3").style.display="none";
    document.getElementById("Print4").style.display="none";
    document.getElementById("PrintFive").style.display="none";
    document.getElementById("Print6").style.display="none";
    document.getElementById("Print17").style.display="none";
    //document.getElementById("Print18").style.display="none";
    //document.getElementById("Print19").style.display="none";
    
}

function hideChart(){  
    document.getElementById("Chart3").style.display="none";
    document.getElementById("Chart4").style.display="none";
    document.getElementById("ChartFive").style.display="none";
    document.getElementById("Chart6").style.display="none";
    document.getElementById("Chart17").style.display="none";
    //document.getElementById("Chart18").style.display="none";
    //document.getElementById("Chart19").style.display="none";
    
}

function showChart(){
    document.getElementById("Chart3").style.display="inline";
    document.getElementById("Chart4").style.display="inline";
    document.getElementById("ChartFive").style.display="inline";
    document.getElementById("Chart6").style.display="inline";
    document.getElementById("Chart17").style.display="inline";
    //document.getElementById("Chart18").style.display="inline";
    //document.getElementById("Chart19").style.display="inline";
}

function showPrint(){
    document.getElementById("Print3").style.display="inline";
    document.getElementById("Print4").style.display="inline";
    document.getElementById("PrintFive").style.display="inline";
    document.getElementById("Print6").style.display="inline";
    document.getElementById("Print17").style.display="inline";
    //document.getElementById("Print18").style.display="inline";
    //document.getElementById("Print19").style.display="inline";
    
}



function popchart() {
        document.getElementById("collapse1").style.display="inline";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        //document.getElementById("collapse41").style.display="none";
        document.getElementById("collapse5").style.display="inline";
     document.getElementById("collapse15").style.display="none"; //document.getElementById("collapse16").style.display="none"; //document.getElementById("collapse17").style.display="none";
        whichChart = 1;
        
        drawAll();
        hidePrint();
        
    }
    
    function educhart() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="inline";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
       // document.getElementById("collapse41").style.display="none";
        document.getElementById("collapse5").style.display="inline";
        
        document.getElementById("collapse15").style.display="none"; //document.getElementById("collapse16").style.display="none"; //document.getElementById("collapse17").style.display="none";
        
        
        whichChart = 2;
        
        drawAll();
        hidePrint();
        
    }
    
    function racechart() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="inline";
        document.getElementById("collapse4").style.display="none";
        //document.getElementById("collapse41").style.display="none";
        document.getElementById("collapse5").style.display="inline";
        
        document.getElementById("collapse15").style.display="none"; //document.getElementById("collapse16").style.display="none"; //document.getElementById("collapse17").style.display="none";
        whichChart = 3;
        
        drawAll();
        hidePrint();
    }
    
    function vetchart() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="inline";
        //document.getElementById("collapse41").style.display="none";
        document.getElementById("collapse5").style.display="inline";
        
        document.getElementById("collapse15").style.display="none"; //document.getElementById("collapse16").style.display="none"; //document.getElementById("collapse17").style.display="none";
        whichChart = 4;
        
        drawAll();
        hidePrint();
    }

    function sepchart() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="inline";
        
        document.getElementById("collapse15").style.display="inline"; //document.getElementById("collapse16").style.display="none"; //document.getElementById("collapse17").style.display="none";
        whichChart = 5;
        
        drawAll();
        hidePrint();
    }

     function appchart() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="inline";
        
        document.getElementById("collapse15").style.display="none"; //document.getElementById("collapse16").style.display="inline"; //document.getElementById("collapse17").style.display="none";
        whichChart = 6;
        
        drawAll();
        hidePrint();
    }

     function progchart() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="inline";
        
        document.getElementById("collapse15").style.display="none"; //document.getElementById("collapse16").style.display="none"; //document.getElementById("collapse17").style.display="inline";
        whichChart = 7;
        
        drawAll();
        hidePrint();
    }
    
   

function showAll() {
        document.getElementById("collapse1").style.display="inline";
        document.getElementById("collapse2").style.display="inline";
        document.getElementById("collapse3").style.display="inline";
        document.getElementById("collapse4").style.display="inline";
       // document.getElementById("collapse41").style.display="inline";
        document.getElementById("collapse5").style.display="inline";
    
        document.getElementById("collapse15").style.display="inline"; //document.getElementById("collapse16").style.display="inline"; //document.getElementById("collapse17").style.display="inline";
        
        hideChart();
        showPrint();
        drawAll();
        
    }

function hideAll() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
       // document.getElementById("collapse41").style.display="none";
        document.getElementById("collapse5").style.display="none"; 
    
         document.getElementById("collapse15").style.display="none"; //document.getElementById("collapse16").style.display="none"; //document.getElementById("collapse17").style.display="none";
        
        
        drawAll();
        
    }

window.printClick = function(){
    if(whichChart == 1){
        popchart();
        document.getElementById("Chart3").style.display="none";
        document.getElementById("Print3").style.display="inline";
        drawAll();
        
    }else if(whichChart ==2){
        educhart();
        document.getElementById("Chart4").style.display="none";
        document.getElementById("Print4").style.display="inline";
        drawAll();
    }else if(whichChart ==3){
        racechart();
        document.getElementById("ChartFive").style.display="none";
        document.getElementById("PrintFive").style.display="inline";
        drawAll();
    }else if(whichChart ==4){
        vetchart();
        document.getElementById("Chart6").style.display="none";
        document.getElementById("Print6").style.display="inline";
        drawAll();
    }else if(whichChart ==5){
        sepchart();
        document.getElementById("Chart17").style.display="none";
        document.getElementById("Print17").style.display="inline";
        drawAll();
    }/*else if(whichChart ==6){
        progchart();
        document.getElementById("Chart18").style.display="none";
        document.getElementById("Print18").style.display="inline";
        drawAll();
    }else if(whichChart ==7){
        appchart();
        document.getElementById("Chart19").style.display="none";
        document.getElementById("Print19").style.display="inline";
        drawAll();
    }*/
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