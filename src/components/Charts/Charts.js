import React, { useRef, useLayoutEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import occupancy from './occupancy.json';
import './Charts.scss';

am4core.useTheme(am4themes_animated);

const Charts = () => {
    const chart = useRef(null);

    useLayoutEffect(() => {
        let x = am4core.create("chartdiv", am4charts.XYChart);
        
        x.paddingRight = 20;
    
        let data = [];
    
        for (let i = 1; i<13; i++) {
          let meridian = ' am';
          let hour = (new Date().getHours()+i) ;

          if(hour%24>11) {

            meridian = ' pm';
            hour = hour%12===0? 12: hour%12;
          }
          hour=hour%24+meridian;
          data.push({ hour, value: occupancy[i-1].today, value1: occupancy[i-1].previous });
        }
        console.log(data);

        x.data = data;
    
        let categoryAxis = x.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = 'hour';
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.grid.template.strokeWidth = 2;

    
        let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.minWidth = 10;
        valueAxis.extraMax = 0.5; 
    
        let series = x.series.push(new am4charts.ColumnSeries());
        series.dataFields.categoryX = "hour";
        series.dataFields.valueY = "value";
        series.tooltipText = "{valueY.value}";
        series.stacked = true;
        series.strokeWidth = 0.3;
        series.columns.template.fill = am4core.color("#000000");

        let previousSeries = x.series.push(new am4charts.ColumnSeries());
        previousSeries.dataFields.categoryX = "hour";
        previousSeries.dataFields.valueY = "value1";
        previousSeries.tooltipText = "{valueY.value}";
        previousSeries.strokeWidth = 0.3;
        previousSeries.stacked = true;
        previousSeries.columns.template.fill = am4core.color("lightgray");
        previousSeries.columns.template.stroke = am4core.color("lightgray");
        // valueAxis.renderer.grid.template.strokeWidth = 20;

        x.cursor = new am4charts.XYCursor();
    
        // let scrollbarX = new am4charts.XYChartScrollbar();
        // scrollbarX.series.push(series);
        // x.scrollbarX = scrollbarX;
    
        chart.current = x;
    
        return () => {
          x.dispose();
        };
      }, []);

    return (
        <div> 
             <div id="chartdiv" style={{ width: "100%", height: "250px" }}></div>
        </div>
    );
};

export default Charts;
