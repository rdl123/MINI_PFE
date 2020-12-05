import { Component, OnInit } from '@angular/core';
import {data} from 'src/assets/data/incidents';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { SingleDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { IncidentService } from '../services/Incident.service';
import { SecteurService } from '../services/Secteur.service';
import { HttpClient } from '@angular/common/http';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
sect_statistique: any;
  prov_statistique: any;
  type_statistique:any;
  Labels = [];
  Values = [];
  LabelsType = [];
  ValuesType = [];
  LabelsProv = [];
  ValuesProv = [];
  statut_statistique:any;
  LabelsStatut=[];
  ValuesStatut=[];
  constructor(private IncidentService: IncidentService, private SecteurService: SecteurService,
              private http: HttpClient) {
    this.http.get('http://localhost:9090/Incident/secteur/Statistique').subscribe(
      data => {
        this.sect_statistique = data;

        console.log(this.sect_statistique.length);
        for (let i = 0; i < this.sect_statistique.length; i++) {
          console.log(this.sect_statistique[i][0]);
          this.Labels.push(this.sect_statistique[i][0]);
          this.Values.push(this.sect_statistique[i][1]);

        }
      }
    );
    this.http.get('http://localhost:9090/Incident/province/Statistique').subscribe(
      data => {
        this.prov_statistique = data;
        for (let i = 0; i < this.prov_statistique.length; i++) {

          this.LabelsProv.push(this.prov_statistique[i][0]);
          this.ValuesProv.push(this.prov_statistique[i][1]);
          console.log(this.LabelsProv, this.ValuesProv);

        }
      }
    );
    this.http.get('http://localhost:9090/Incident/statut/Statistique').subscribe(
      data => {
        this.statut_statistique = data;
        for (let i = 0; i < this.statut_statistique.length; i++) {

          this.LabelsStatut.push(this.statut_statistique[i][0]);
          this.ValuesStatut.push(this.statut_statistique[i][1]);

        }
      }
    );
    this.http.get('http://localhost:9090/Incident/type/Statistique').subscribe(
      data => {
        this.type_statistique = data;
        for (let i = 0; i < this.type_statistique.length; i++) {
          console.log(this.type_statistique[i][0]);

          this.LabelsType.push(this.type_statistique[i][0]);
          this.ValuesType.push(this.type_statistique[i][1]);

        }
      }
    );


    // pie chart
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
   }
  // pie Chart
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = this.LabelsProv;
  public pieChartData: SingleDataSet = this.ValuesProv;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];


// secteur
  barChartOptions: ChartOptions = {
    responsive: true,
    
    scales: {
      yAxes: [{
          ticks: {
              suggestedMin: 0,
              suggestedMax: this.Labels.length +4,
          }
      }]
  }
  };
  barChartLabels: Label[] = this.Labels;
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  

  barChartData: ChartDataSets[] = [
    { data: this.Values, label: 'Nombre d incidents par secteur',
     backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"], }
  ];

// province
  ProvChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
          ticks: {
              suggestedMin: 0,
              suggestedMax: this.Labels.length +4,
          }
      }]
  }
  };
  ProvChartLabels: Label[] = this.LabelsProv;
  ProvbarChartType: ChartType = 'bar';
  ProvChartLegend = true;
  ProvChartPlugins = [];
  //color = [red];

  ProvChartData: ChartDataSets[] = [
    {
      data: this.ValuesProv, label: 'Nombre d incidents par province',
      backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"], }
  ];
// statut
  StatutChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
          ticks: {
              suggestedMin: 0,
              suggestedMax: this.Labels.length +4,
          }
      }]
  }
  };
  StatutChartLabels: Label[] = this.LabelsStatut;
  StatutbarChartType: ChartType = 'bar';
  StatutChartLegend = true;
  StatutChartPlugins = [];

  StatutChartData: ChartDataSets[] = [
    {
      data: this.ValuesStatut, label: 'Nombre d incidents par statut',
      backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"], }
  ];
  // type
  TypeChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
          ticks: {
              suggestedMin: 0,
              suggestedMax: this.Labels.length +4,
          }
      }]
  }
  };
  TypeChartLabels: Label[] = this.LabelsType;
  TypebarChartType: ChartType = 'bar';
  TypeChartLegend = true;
  TypeChartPlugins = [];

  TypeChartData: ChartDataSets[] = [
    {
      data: this.ValuesType, label: 'Nombre d incidents par type',
      backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"], }
  ];
  ngOnInit() {

  }


}
