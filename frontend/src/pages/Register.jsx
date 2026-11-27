import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerschema } from "../components/FormSchema/registerschema";

export default function Register() {
     
        const navigate=useNavigate();
        const { register,handleSubmit,formState:{errors}}=useForm({
            resolver:zodResolver(registerschema)

        })
        function onsubmit1(data){
            console.log(data)
            alert("register success")
            navigate("/")
        }
        return ( 
            <>
            <form onSubmit={handleSubmit(onsubmit1)}>
                <label>Username</label><br/>
                <input type="text" placeholder="Enter name"  {...register("name")}/><br/><br/>
                <p>{errors.name?.message}</p>

                <input type="email" placeholder="Enter email"  {...register("email")}/><br/><br/>
                <p>{errors.email?.message}</p>
                <input type="text" placeholder="Enter password"  {...register("password")}/><br/><br/>
                <p>{errors.password?.message}</p>
                <input type="number" placeholder="Enter age"  {...register("age")}/><br/><br/>
                <p>{errors.age?.message}</p>
                <button type="submit">Submit</button>
            </form>
            </>
    );
}