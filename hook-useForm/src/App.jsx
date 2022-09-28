// import reactLogo from './assets/react.svg'
import {React, useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import { InputCheckbox } from './components';
import { Api } from './api';
import './styles/App.css';

let renderCount = 0;

/*
  Modelo de dados enviados para a api
  {
    id: 1,
    title: 'sla',
    description: 'ASdjb asdnsçad  asduiwç.sabd ad',
    idServices: ["eba88199-39a1-4f95-959e-094bbca6ca23", "eba88199-39a1-4f95-959e-094bbca6ca23"],
    appointmentDate: '12-03-2022',
    appointmentTime: '12:30'
  }
*/

export default function App() {
  const [statePage, setStatePage] = useState(true);
  const [services, setServices] = useState(); // dados recebidos pela api
  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });

  //dados api
  useEffect(() => {
      findServices();
      async function findServices(){
        const sla = await Api.get('/services');
        
        setServices(sla.data);
      }
    }, []);

  //Envia para a API
  const onSubmit = async data => { 
    let resService = [];
    for(const [key, value] of Object.entries(data.services)){
      if(value){
        resService.push(key);
      }
    }

    const res = {
      appointmentDate: data.date,
      appointmentTime: data.hour,
      idServices: resService,
      description: data.description
    }

    setStatePage(false);
    await Api.post('/agendamentos', res)
      .then(res => {
        setStatePage(true);
        console.log(res);
      })
      .catch(err => console.log('error', err));

    console.log(resService, res);
  };
  
  // console.log('render', renderCount);
  // console.log('services => ', services);
  renderCount++;

  return (
    <>
      <div>
        <h2 style={{color: 'var(--text--place--input)',}}>Render Count: {renderCount}</h2>
      </div>
      <section>
        <h1>Faça seu Agendamento</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{display: 'flex', flexDirection: "column", placeItems: 'flex-start center', gap: '10px', padding: '20px 10px'}}>
            <input 
              className="inputForm"
              type="date"
              {...register("date", { required: "Please enter your date" })} // custom message
              placeholder="Data - ex: 2022-01-01"
              />

            <input
              className="inputForm"
              type="time"
              {...register("hour", { required: "Please enter your hour" })} // custom message
              placeholder="Horario - ex: 12:00"
              />

            <div className="container-inputs-checkbox">
              {
                services != undefined ? (
                  services.map((serviceInput) => {
                    return <InputCheckbox key={serviceInput.id} name={serviceInput.name} objNameValue={`services.${serviceInput.name}`} registerValue={register}/>
                  })
                ) : (<p>Loading...</p>)
              }
            </div>

            {/* <InputCheckbox name="Maquiagem Completa" objNameValue={'services.maquiagem_completa'} registerValue={register}/>
            <InputCheckbox name="Cabelo" objNameValue={'services.cabelo'} registerValue={register}/> */}
            <textarea  className="inputForm textArea" {...register('description')} cols="30" rows="10" placeholder="Observação ou Descrição sobre os serviços..." />
            <input id="btn-form" type="submit" />
          </div>
        </form>
      </section>
      {
        !statePage && (
          <div style={{width: '100%', height: '100vh', position: 'absolute', top: '0', zIndex: '3', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#9191916f'}}>
            <p>Enviando dados...</p>
          </div>
        )
      }
    </>
  );
}

function result () {
  return (
    <>
      <div>Result</div>
    </>
  );
}