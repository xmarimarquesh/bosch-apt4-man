
import style from './components/Menu.module.css';
import {Menu} from './components/Menu'
// import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const data = [
  {
    name: 'Mariana',
    altura: 1.73,
    idade: 18
  },
  {
    name: 'Ingrid',
    altura: 1.70,
    idade: 19
  },
  {
    name: 'Helena',
    altura: 1.62,
    idade: 18
  },
  {
    name: 'Milena',
    altura: 1.78,
    idade: 18
  },
  {
    name: 'Juliana',
    altura: 1.73,
    idade: 21
  },
  {
    name: 'Kauane',
    altura: 1.56,
    idade: 20
  },
  {
    name: 'Amilton',
    altura: 1.82,
    idade: 19
  },
  {
    name: 'Sabrina',
    altura: 1.68,
    idade: 19
  },
  {
    name: 'Matias',
    altura: 1.71,
    idade: 19
  },
  {
    name: 'Nicolle',
    altura: 1.61,
    idade: 18
  },
  {
    name: 'Fernando',
    altura: 1.70,
    idade: 19
  },
  {
    name: 'Juan',
    altura: 1.80,
    idade: 19
  },
  {
    name: 'Cristian',
    altura: 1.69,
    idade: 17
  },
  {
    name: 'Adrian',
    altura: 1.90,
    idade: 18
  },
  {
    name: 'Walace',
    altura: 1.76,
    idade: 17
  },
  {
    name: 'Sampaio',
    altura: 1.78,
    idade: 19
  },
  {
    name: 'Ribeiro',
    altura: 1.70,
    idade: 19
  },
];

function Grafico() {
  return (
    <>
  <Menu/>
  <div className={style.graficos}>
    <h2>Idade DTA2</h2>
    <div className={style.chartContainer}>
      <LineChart
        width={800}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="idade" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>

    <h2>Altura DTA2</h2>
    <div className={style.chartContainer}>
      <LineChart
        width={800}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="altura" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  </div>
</>

    
  )
}

export default Grafico;