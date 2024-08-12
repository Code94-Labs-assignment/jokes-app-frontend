import * as z from "zod";

const setupSchema = z.string().min(1, {
  message: "Setup is required",
});

const punchlineSchema = z.string().min(1, {
  message: "Punchline is required",
});

const typeSchema = z.string().min(1, {
  message: "Type is required",
});

const authorSchema = z.string().min(1, {
  message: "Author is required",
});

const emailSchema = z.string().email({
  message: "Invalid email",
});

const passwordSchema = z.string().min(8, {
  message: "Password must be at least 8 characters long",
});

// Insert Joke Schema
export const InsertJokeSchema = z.object({
  setup: setupSchema,
  punchline: punchlineSchema,
  type: typeSchema,
  author: authorSchema,
});

// Edit Joke Schema
export const EditJokeSchema = z.object({
  setup: setupSchema,
  punchline: punchlineSchema,
  type: typeSchema,
  author: authorSchema,
});

// Login Schema
export const LoginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});
