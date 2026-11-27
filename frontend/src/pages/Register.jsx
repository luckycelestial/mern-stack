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
            <div className="flex justify-center items-center h-screen">
            <form className="border-3 bg-green-200 shadow-2xl p-3 shadow-yellow-500 flex flex-col gap-2 items-center justify-around rounded-lg h-120 w-80" onSubmit={handleSubmit(onsubmit1)}>
                <div className="font-bold">REGISTERATION FORM</div>
                <div className="flex flex-row gap-2">
                <br/>
                <input className="border-2 rounded-full p-2" type="text" placeholder="Enter name"  {...register("name")}/>
                <p>{errors.name?.message}</p>
                </div>

                <input className="border-2 rounded-full p-2" type="email" placeholder="Enter email"  {...register("email")}/>
                <p>{errors.email?.message}</p>
                <input className="border-2 rounded-full p-2" type="text" placeholder="Enter password"  {...register("password")}/>
                <p>{errors.password?.message}</p>
                <input className="border-2 rounded-full p-2"  type="number" placeholder="Enter age"  {...register("age")}/>
                <p>{errors.age?.message}</p>
                <button className="font-bold w-40 text-white bg-violet-900 border-black border-2 p-2 rounded-3xl" type="submit">Submit</button>
            </form>
            </div>
    );
}