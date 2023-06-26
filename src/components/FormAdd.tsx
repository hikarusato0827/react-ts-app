import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, InputLabel, TextField } from '@mui/material';
import { type } from 'os';
import { useForm } from 'react-hook-form';
import { varidationTest } from './utils/varidationtest';
import { Data } from './Test';
import { useState } from 'react';
import { ZodNumber, number } from 'zod';


type UserEditProps = {
    userList: Data[],
    setUserList: React.Dispatch<React.SetStateAction<Data[]>>
    setDeletOpen: React.Dispatch<React.SetStateAction<boolean>>
}



const FormAdd = (props: UserEditProps) => {

    const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm<Data>({
            mode: "onBlur",
            resolver: zodResolver(varidationTest),
            defaultValues: {
                fristName: '',
                lastName: '',
                age: Number(),
            },
        });

        const onSubmit = (data: Data) => {
            console.log(data);
            const newUsers = [...props.userList,data];
            props.setUserList(newUsers);
            props.setDeletOpen(false);
    }


    return(
        
        <div className='form-container'>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Box m={20}>
                <h1>ユーザー管理</h1>
                <p>
                    <label htmlFor='fristName'>姓</label>
                    <TextField id='fristName' type='text' {...register("fristName")}></TextField>
                    <p>{errors.fristName?.message as React.ReactNode}</p>

                </p>
                <p>
                    <label htmlFor='lastName'>名</label>
                    <TextField id='lastName' type='text' {...register("lastName")}></TextField>
                    <p>{errors.lastName?.message as React.ReactNode}</p>

                </p>
                <p>
                    <label htmlFor='age'>年齢</label>
                    <TextField id='age' type='text' {...register("age")}></TextField>
                    <p>{errors.age?.message as React.ReactNode}</p>

                </p>   
                <p>
                    <Button type='submit'>登録</Button>
                    <Button>戻る</Button>
                </p>
                </Box>
            </form>
        </div>
        
    )
}

export {FormAdd}