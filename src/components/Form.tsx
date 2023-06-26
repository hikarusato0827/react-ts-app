import { Box, Button, Input, TextField, InputLabel } from '@mui/material';
import React from "react";
import {useForm} from "react-hook-form";
// import "./Form.css";
import { v4 as uuidv4 } from 'uuid';
import { Data } from './UserManagement';
import { zodResolver } from '@hookform/resolvers/zod'
import { validationSchema } from './utils/validationSchema';

type FormProps = {
    rows :Data[]
    setRows: React.Dispatch<React.SetStateAction<Data[]>>
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Form= (props: FormProps) => {
    const {register,
            handleSubmit,
            formState: { errors },
        } = useForm<Data>({
            mode: "onChange",
            resolver: zodResolver(validationSchema),
            defaultValues: {
            id: uuidv4(),
            name: '',
            email: '',
            authority: '',
            updatedDataTime: null,
        }});

    const onSabmit = (data: Data) => {
        console.log(data);
        const newUser = [...props.rows,data];
        props.setRows(newUser);
        props.setOpen(false);
    }

    return(
        <Box m={15}>
            <div className="form-container">
            <form onSubmit={handleSubmit(onSabmit)}>
                <h1>新規登録</h1>
                <InputLabel htmlFor="name">氏名</InputLabel>
                <p><TextField id="name" type="text" {...register("name")}/></p>
                <p>{errors.name?.message as React.ReactNode}</p>
                <p><InputLabel htmlFor="email">メールアドレス</InputLabel></p>
                <TextField id="email" type="email" {...register("email")}/>
                <p>{errors.email?.message as React.ReactNode}</p>
                <p><InputLabel htmlFor="authority">権限</InputLabel></p>
                <TextField id="authority" type="text" {...register("authority")}/>
                <p>{errors.authority?.message as React.ReactNode}</p>
                <p><InputLabel htmlFor="updatedDataTime">パスワード最終更新日</InputLabel></p>
                <TextField id="updatedDataTime" type="text"{...register("updatedDataTime")}/>
                <p>{errors.updatedDataTime?.message as React.ReactNode}</p>
                <Button type="submit">新規作成</Button>
                <Button type="submit">戻る</Button>
            </form>
        </div>
        </Box>
        
    );
};

export {Form}