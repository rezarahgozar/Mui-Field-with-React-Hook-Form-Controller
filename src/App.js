import { Button } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import './App.css';
import { StarField } from './components/StarField';

function App() {
  
  const{control,handleSubmit} = useForm({

    defaultValues:{
      rate:0
    }

  });

  const onSubmit = (values) => {
    console.log(values);
  }

  return (
    <div >
    <form onSubmit={handleSubmit(onSubmit)}>
    <Controller
    control={control}
    name="rate"
    render={({field})=>(
      <StarField {...field} />
    )}
    />
    <Button type="submit">Submit</Button>
    </form>
    </div>
  );
}

export default App;
