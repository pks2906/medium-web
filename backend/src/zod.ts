import z from "zod";

export  const sighnupInput = z.object({
  username: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
});

//type inferences in zod
export type SignupInput = z.infer<typeof sighnupInput>