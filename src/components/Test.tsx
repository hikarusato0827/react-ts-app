import { Box, Button, Paper, Table, TableRow, Dialog, DialogTitle, DialogContent, DialogContentText, InputLabel, TextField } from '@mui/material';
import React, { useState } from 'react'
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { StringDecoder } from 'string_decoder';
import { v4 as uuidv4 } from "uuid";
import { FormAdd } from './FormAdd';
import './Form.css';
import { InitialUrl } from './InitialUrl';

export type Data = {
    fristName: string,
    lastName: string,
    age: number,
    id: string;
}

const inishalRows :Data[]= [];

export const Test = () => {
    const [open, setOpen] = useState(false);
    const [deletOpen, setDeletOpen] = useState(false)
    const [userList, setUserList] = useState(inishalRows);
    const [deletUserList, setDeletUserList] = useState([{fristName:'aaaa', lastName:'uuu', age: 22}]);
    const [dailog, setDailog] = useState<Data>({fristName: '', lastName: '', age: Number(), id: uuidv4()});



    //dialigのon/off
    const onClickDaialog = () => {
        setOpen(true);
    }
    const onCloseDaialog = () => {
        setOpen(false);
    }
    //dialog入力
    const onChangeFristNameDialog: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => setDailog({...dailog, fristName:event.target.value});
    const onChangeLastNameDialog: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => setDailog({...dailog, lastName:event.target.value});
    const onChangeAgeDialog: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => setDailog({...dailog, age: Number(event.target.value)});



    //dialig追加ボタン
    const onClickAdd = () => {
        const newUsers = [...userList, dailog];
        setUserList(newUsers);
        setDailog({fristName: '', lastName: '', age: Number(), id: uuidv4()})
        setOpen(false)
    }
    //dailog追加戻るボタン
    const onClickBackAdd = () => {
        setOpen(false);
    }

    //編集ボタンdailog開く
    const userEditDailog = () => {
        setDeletOpen(true);
    }
    
    //編集ボタン
    const onChangeUserEdit = () => {

    }

    //削除ボタン（削除したユーザーに追加）
    const userDelet = (id:number) => {
        alert(id);
        const newUsers = [...userList];
        newUsers.splice(id, 1);
        setUserList(newUsers)
        const newDeletUsers = [...deletUserList, userList[id]]
        setDeletUserList(newDeletUsers)
    }

    //完全に削除
    const userFinalDelet = (id:number) => {
        alert(id);
        const newDeletUsers = [...deletUserList];
        newDeletUsers.splice(id, 1);
        setDeletUserList(newDeletUsers);
    }

  return (
    <div>
        <Box border={1} m={15} padding={10} style={{width: '80%'}}>
            {String(open)}
            <h1 style={{textAlign: 'left'}}>ユーザー管理</h1>
            <Box style={{textAlign: 'right'}} mb={3}></Box>
            <Button variant="contained" onClick={onClickDaialog}>追加</Button>
            <Dialog
                open={open}
                onClose={onCloseDaialog}
                >
                <Box m={5}>
                    <DialogTitle className='user'>ユーザの追加</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <InputLabel>FristName</InputLabel>
                            <TextField value={dailog.fristName} onChange={onChangeFristNameDialog}></TextField>
                            <InputLabel>LastName</InputLabel>
                            <TextField value={dailog.lastName} onChange={onChangeLastNameDialog}></TextField>
                            <InputLabel>Age</InputLabel>
                            <TextField value={dailog.age} onChange={onChangeAgeDialog}></TextField>
                            <Button onClick={onClickAdd}>追加</Button>
                            <Button onClick={onClickBackAdd}>戻る</Button>
                        </DialogContentText>
                    </DialogContent>
                </Box>
            </Dialog>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">FirstName</TableCell>
                            <TableCell align="center">LastName</TableCell>
                            <TableCell align="center">Age</TableCell>
                            <TableCell align="center">操作</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userList.map((row, id) => {
                            return (
                            <TableRow>
                                <TableCell align="center">{row.fristName}</TableCell>
                                <TableCell align="center">{row.lastName}</TableCell>
                                <TableCell align="center">{row.age}</TableCell>
                                <Button variant="contained" onClick={() => userEditDailog()} onChange={onChangeUserEdit}>編集</Button>
                                <Button variant="contained"color='error' onClick={() => userDelet(id)}>削除</Button>
                            </TableRow>
                        )})}   
                        <Dialog
                            open={deletOpen}
                            onClose={onCloseDaialog}
                            >
                            <FormAdd userList={userList} setUserList={setUserList} setDeletOpen={setDeletOpen}/>
                        </Dialog>
                    </TableBody>
                </Table>
            </TableContainer>
            <h2 style={{textAlign: 'left'}}>削除したユーザー</h2>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">FirstName</TableCell>
                            <TableCell align="center">LastName</TableCell>
                            <TableCell align="center">Age</TableCell>
                            <TableCell align="center">操作</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {deletUserList.map((row, id) => (
                        <TableRow>
                            <TableCell align="center">{row.fristName}</TableCell>
                            <TableCell align="center">{row.lastName}</TableCell>
                            <TableCell align="center">{row.age}</TableCell>
                            <Button variant="contained"color='error' onClick={() => userFinalDelet(id)}>削除</Button>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    </div>  
  )
}
