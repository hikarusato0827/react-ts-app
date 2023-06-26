import { z } from 'zod';

export const varidationTest = z.object({
    fristName: z.string()
    .nonempty("名前は必須です"),
    lastName: z.string()
    .nonempty("名前は必須です"),
    age: z.string()
    .nonempty("年齢は必須です")
    .min(2, "2文字以上入力してください")

})