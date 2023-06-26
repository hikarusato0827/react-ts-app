import { Box, Button, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, InputLabel, Pagination, Switch, TextField, alpha } from "@mui/material"
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import { Test } from "./Test";
import { UsersEdit } from "./UsersEdit";
import { v4 as uuidv4 } from "uuid";
import { Form } from "./Form";

export type Data = {
    id: string;
    name: string;
    email: string;
    authority: string;
    updatedDataTime: number | null;
    }
  
const inishalRows :Data[]= [];


const UserManagement = () => {
    const [isDisplay, setIsDisplay] = useState(true);  
    const [open, setOpen] = useState(false);
    const [rows, setRows] = useState(inishalRows);
    const [newUserForm, setNewUserForm] = useState<Data>({id: uuidv4(), name: '',email: '',authority: '',updatedDataTime: Number()})

    const handleChange = (index: boolean) => {
        setIsDisplay(index);
    }
    const handleClickDialog = () => {
        setOpen(true);
        
    };
    const handleClose = () => {
        setOpen(false);
    };
    const onCliskAdditionUser = () => {
        const newUsers = [...rows, newUserForm];
        setRows(newUsers);
        setOpen(false);
        setNewUserForm({id: uuidv4(),name: '',email: '',authority: '',updatedDataTime: Number(null)})
    }
    const onChangeNewUserName: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined = (event) => setNewUserForm({...newUserForm, name: event.target.value});
    const onChangeNewUserEmail: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined = (event) => setNewUserForm({...newUserForm, email: event.target.value});
    const onChangeNewUserAuthority: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined = (event) => setNewUserForm({...newUserForm, authority: event.target.value});
    const onChangeNewUserUpdatedDataTime: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined = (event) => setNewUserForm({...newUserForm, updatedDataTime: Number(event.target.value)});
    console.log(newUserForm)

    return (
        <Box border={1} m={15} padding={10} style={{width: '80%'}}>
            <h1 style={{textAlign: 'left'}}>ユーザー情報管理</h1>
            {String(open)}
            <Box style={{textAlign: 'right'}} mb={3}>
                <FormControlLabel control={<Switch defaultChecked size="small"  onChange={ (event) => handleChange(event.target.checked)}/>} label="無効なユーザーを含む"  />
                <Button variant="contained" onClick={handleClickDialog}>新規登録</Button>
                <Dialog 
                    open={open}
                    onClose={handleClose}
                    >
                    {/* <Box m={5}> 
                        <DialogTitle>ユーザーの新規登録</DialogTitle> */}
                        {/* <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description"> */}
                        <Form setRows={setRows} rows={rows} setOpen={setOpen}/>
                        {/* <InputLabel>氏名</InputLabel> 
                        <TextField id="demo-helper-text-misaligned-no-helper" size="small" fullWidth placeholder="入力" value={newUserForm.name} onChange={onChangeNewUserName} />   
                        <InputLabel>email</InputLabel> 
                        <TextField id="demo-helper-text-misaligned-no-helper" size="small" fullWidth placeholder="入力" value={newUserForm.email} onChange={onChangeNewUserEmail}/>   
                        <InputLabel>権限</InputLabel> 
                        <TextField id="demo-helper-text-misaligned-no-helper" size="small" fullWidth value={newUserForm.authority} onChange={onChangeNewUserAuthority}/>
                        <InputLabel>パスワード最終更新日</InputLabel> 
                        <TextField id="demo-helper-text-misaligned-no-helper" size="small" fullWidth placeholder="20230101" value={newUserForm.updatedDataTime} onChange={onChangeNewUserUpdatedDataTime}/>
                        <button onClick={onCliskAdditionUser}>登録</button>
                        <button onClick={handleClose}>戻る</button> */}
                        {/* </DialogContentText>
                        </DialogContent> */}
                    {/* </Box> */}
                </Dialog>         
            </Box>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">氏名</TableCell>
                                <TableCell align="center">メールアドレス</TableCell>
                                <TableCell align="center">権限</TableCell>
                                <TableCell align="center">パスワード最終更新日</TableCell>
                                <TableCell align="center">操作</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                            .map((row,index) => {
                                return !isDisplay && index % 2 !== 0? null: (
                                <UsersEdit editRow={row} key={row.id} setRows={setRows} rows={rows} setNewUserForm={setNewUserForm}/>
                                );
                            })}
                        </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
                <Box display='flex' justifyContent='right' mt={4}>
                    <Pagination count={10} color="primary"/>
                </Box>
        </Box>
    )
};


export {UserManagement}