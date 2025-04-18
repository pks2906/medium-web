import z, { ParseStatus } from "zod";

export const signupInput = z.object({
  username: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
});

export const sighninInput = z.object({
  username: z.string().email(),
  password: z.string().min(6),
});

export const createBlogInput = z.object({
  title: z.string().email(),
  content: z.string(),
});

export const updateBlogInput = z.object({
  title: z.string().email(),
  content: z.string(),
  id: z.number(),
});

export type SignupInput = z.infer<typeof signupInput>;
export type SigninInput = z.infer<typeof sighninInput>;
export type CreateBlogInput = z.infer<typeof createBlogInput>;
export type UpdateBlogInput = z.infer<typeof updateBlogInput>;
