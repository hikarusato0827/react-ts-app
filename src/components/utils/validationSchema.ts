import { z } from "zod";

export const validationSchema = z.object({
    name: z.string()
    .nonempty('入力は必須です')
    .min(4, '4文字以上で入力してください'),
    email: z.string()
    .nonempty('入力は必須です')
    .email('正しいメールアドレスを入力してください'),
    authority: z.string()
    .nonempty('入力は必須です'),
})