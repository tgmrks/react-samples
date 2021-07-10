import './App.css';
import {useForm} from 'react-hook-form';

function App() {

  const {handleSubmit, register, formState: { errors }} = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" placeholder="Email" {...register("email", {
        required: true,
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "invalid email address"
        }
      })} />
      {errors.email && <p>{errors.email.message}</p>}
      <input type="password" placeholder="Password" {...register("password", {
        required: true, minLength: 8
      })}/>
      {errors.password && <p>password is invalid</p>}
      <input type="submit" />
    </form>
  );
}

export default App;
