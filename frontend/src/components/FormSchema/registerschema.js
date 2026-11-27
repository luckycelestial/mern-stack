import z from "zod";
export const registerschema = z.object({
    name: z.string().min(3, "Name atleast 3 char"),
    email:z.string().email("Enter valid email"),
    password: z.string().min(8, "Min 8 char password"),
    age: z.coerce.number().min(18,"Age min 18")
})