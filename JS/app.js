'use strict';
let Arr3=[];
let Arr2=['6am' ,'7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
function Cookies(name, maximum,minimum,avgCustomer){
  this.name = name;
  this.maximum= maximum;
  this.minimum=minimum;
  this.avgCustomer=avgCustomer;
  this.total = 0;
  this.arr1 = [];
  this.average=0;
  Arr3.push(this);
}
Cookies.prototype.getavg= function(min,max){
  this.average = Math.floor(getRandomNumber(min,max)*this.avgCustomer);
};
Cookies.prototype.render=function(){
  const dataRow = document.createElement('tr');
  h.appendChild(dataRow);
  const td1El = document.createElement('td');
  dataRow.appendChild(td1El);
  td1El.textContent=this.name;
  for(let i=0;i<Arr2.length ;i++)
  {
    this.getavg(this.minimum,this.maximum);
    this.arr1.push(this.average);
    const td2El = document.createElement('td');
    dataRow.appendChild(td2El);
    td2El.textContent=this.arr1[i];
    this.total=this.total+this.arr1[i];
  }
  const td3El = document.createElement('td');
  dataRow.appendChild(td3El);
  td3El.textContent=this.total;
};
let h = document.createElement('table');
document.body.appendChild(h);
let headerRow=document.createElement('th');
h.appendChild(headerRow);
for (let i=0 ; i<Arr2.length;i++)
{
  const th2El = document.createElement('th');
 h.appendChild(th2El);
  th2El.textContent=Arr2[i];
}
const th3El = document.createElement('th');
h.appendChild(th3El);
th3El.textContent='Daily Location Total';

function getfooter(){
  const headerRow = document.createElement('tr');
  h.appendChild(headerRow);
  const th1El = document.createElement('td');
  headerRow.appendChild(th1El);
  th1El.textContent='           ';
  let Arr4=[];
  let total=0;
  for (let i=0 ; i<Arr2.length;i++)
  { 
    let td2el = document.createElement('th');
    let total1=0;
    for(let y=0;y<Arr3.length;y++)
    {
      total1+=Arr3[y].arr1[i];
      total+=Arr3[y].arr1[i];
    }
    Arr4.push(total1);
    td2el.textContent=total1;
    headerRow.appendChild(td2el);
  }
  let td3el = document.createElement('th');
  headerRow.appendChild(td3el);
  td3el.textContent=total;
}

const Seatle = new Cookies ('SEATLE',65,23,6.3);
const tokyo = new Cookies('TOKYO',24,3,1.2);
const Dubai = new Cookies('DUBAI',38,11,3.7);
const Paris = new Cookies('PARIS',38,20,2.3);
const Lima = new Cookies('LIMA',16,2,4.6);
Seatle.getavg(Seatle.minimum,Seatle.minimum);
Seatle.render();
tokyo.getavg(tokyo.minimum,tokyo.minimum);
tokyo.render();
Dubai.getavg(Dubai.minimum,Dubai.minimum);
Dubai.render();
Paris.getavg(Paris.minimum,Paris.minimum);
Paris.render();
Lima.getavg(Lima.minimum,Lima.minimum);
Lima.render();
getfooter();

let form = document.getElementById('cooForm');

form.addEventListener('submit', addlocation);

function addlocation(event) {
  event.preventDefault();
  let Name = event.target.name.value;
  let minimum = event.target.minimum.value;
  let maximum = event.target.maximum.value;
  let avgCustomer = event.target.avgCustomer.value;
  let location = new Cookies(Name,maximum ,minimum ,avgCustomer )
  location.getavg(location.minimum,location.maximum);
  location.render();
  h.deleteRow(Arr3.length-1) ;
  getfooter();
}






/*'use strict';
const Seattle = {
  name:'SEATTLE',
  min:23,
  max:65,
  avg:6.3,
  randomAr1:[],
  timeAr2:['6am' ,'7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  average:0,
  sum:0,
  getAverage: function(min,max){
    this.average = Math.floor(getRandomNumber(min,max)*this.avg);
  },
  render: function(){
    const container = document.getElementById('cookie');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for(let i=0; i<this.timeAr2.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      this.getAverage(this.min,this.max);
      this.randomAr1.push(this.average);
      liEl.textContent = `${this.timeAr2[i]}: ${this.randomAr1[i]}  cookies `;
      this.sum+=this.randomAr1[i];
    }
    const liE2 =document.createElement('li');
    ulEl.appendChild(liE2);
    liE2.textContent=`Total cookies : ${this.sum}`;
  }
};


const Tokyo = {
    name:'Tokyo',
    min:3,
    max:24,
    avg:1.2,
    randomAr1:[],
    timeAr2:['6am' ,'7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
    average:0,
    sum:0,
    getAverage: function(min,max){
      this.average = Math.floor(getRandomNumber(min,max)*this.avg);
    },
    render: function(){
      const container = document.getElementById('cookie');
      const articleEl = document.createElement('article');
      container.appendChild(articleEl);
      const h2El = document.createElement('h2');
      articleEl.appendChild(h2El);
      h2El.textContent = this.name;
      const ulEl = document.createElement('ul');
      articleEl.appendChild(ulEl);
      for(let i=0; i<this.timeAr2.length; i++)
      {
        const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        this.getAverage(this.min,this.max);
        this.randomAr1.push(this.average);
        liEl.textContent = `${this.timeAr2[i]}: ${this.randomAr1[i]}  cookies `;
        this.sum+=this.randomAr1[i];
      }
      const liE2 =document.createElement('li');
      ulEl.appendChild(liE2);
      liE2.textContent=`Total cookies : ${this.sum}`;
    }
  };
  
  const Dubai = {
    name:'Dubai',
    min:11,
    max:38,
    avg:3.7,
    randomAr1:[],
    timeAr2:['6am' ,'7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
    average:0,
    sum:0,
    getAverage: function(min,max){
      this.average = Math.floor(getRandomNumber(min,max)*this.avg);
    },
    render: function(){
      const container = document.getElementById('cookie');
      const articleEl = document.createElement('article');
      container.appendChild(articleEl);
      const h2El = document.createElement('h2');
      articleEl.appendChild(h2El);
      h2El.textContent = this.name;
      const ulEl = document.createElement('ul');
      articleEl.appendChild(ulEl);
      for(let i=0; i<this.timeAr2.length; i++)
      {
        const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        this.getAverage(this.min,this.max);
        this.randomAr1.push(this.average);
        liEl.textContent = `${this.timeAr2[i]}: ${this.randomAr1[i]}  cookies `;
        this.sum+=this.randomAr1[i];
      }
      const liE2 =document.createElement('li');
      ulEl.appendChild(liE2);
      liE2.textContent=`Total cookies : ${this.sum}`;
    }
  };
 

  const Paris = {
    name:'Paris',
    min:20,
    max:38,
    avg:2.3,
    randomAr1:[],
  timeAr2:['6am' ,'7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  average:0,
  sum:0,
  getAverage: function(min,max){
    this.average = Math.floor(getRandomNumber(min,max)*this.avg);
  },
  render: function(){
    const container = document.getElementById('cookie');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for(let i=0; i<this.timeAr2.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      this.getAverage(this.min,this.max);
      this.randomAr1.push(this.average);
      liEl.textContent = `${this.timeAr2[i]}: ${this.randomAr1[i]}  cookies `;
      this.sum+=this.randomAr1[i];
    }
    const liE2 =document.createElement('li');
    ulEl.appendChild(liE2);
    liE2.textContent=`Total cookies : ${this.sum}`;
  }
  };
  

  const Lima = {
    name:'Lima',
    min:2,
    max:16,
    avg:4.6,
    randomAr1:[],
    timeAr2:['6am' ,'7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
    average:0,
    sum:0,
    getAverage: function(min,max){
      this.average = Math.floor(getRandomNumber(min,max)*this.avg);
    },
    render: function(){
      const container = document.getElementById('cookie');
      const articleEl = document.createElement('article');
      container.appendChild(articleEl);
      const h2El = document.createElement('h2');
      articleEl.appendChild(h2El);
      h2El.textContent = this.name;
      const ulEl = document.createElement('ul');
      articleEl.appendChild(ulEl);
      for(let i=0; i<this.timeAr2.length; i++)
      {
        const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        this.getAverage(this.min,this.max);
        this.randomAr1.push(this.average);
        liEl.textContent = `${this.timeAr2[i]}: ${this.randomAr1[i]}  cookies `;
        this.sum+=this.randomAr1[i];
      }
      const liE2 =document.createElement('li');
      ulEl.appendChild(liE2);
      liE2.textContent=`Total cookies : ${this.sum}`;
    }
  };
  Seattle.getAverage(Seattle.min,Seattle.max);
  Seattle.render();
  Tokyo.getAverage(Tokyo.min,Tokyo.max);
  Tokyo.render();
  Dubai.getAverage(Dubai.min,Dubai.max);
  Dubai.render();
  Paris.getAverage(Paris.min,Paris.max);
  Paris.render();
  Lima.getAverage(Lima.min,Lima.max);
  Lima.render();*/
 function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
