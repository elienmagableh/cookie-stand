'use strict';
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
  Tokyo.getAverage(Seattle.min,Seattle.max);
  Tokyo.render();
  Dubai.getAverage(Seattle.min,Seattle.max);
  Dubai.render();
  Paris.getAverage(Seattle.min,Seattle.max);
  Paris.render();
  Lima.getAverage(Seattle.min,Seattle.max);
  Lima.render();
 function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
