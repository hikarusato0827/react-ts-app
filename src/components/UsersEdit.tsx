import { Box, Button, Dialog, DialogContent, DialogContentText, DialogTitle, InputLabel, TableCell, TableRow, TextField } from "@mui/material";
import { type } from "os";
import { useState } from "react";
import { Data } from "./UserManagement";
  
type UsersEditProps = {
    editRow: Data,
    setRows: React.Dispatch<React.SetStateAction<Data[]>>
    rows :Data[]
    setNewUserForm:React.Dispatch<React.SetStateAction<Data>>

}
const UsersEdit = (props :UsersEditProps,) => {
    const [open, setOpen] = useState(false);
    const [editUserForm, seteditUserForm] = useState<Data>(props.editRow);
    const handleOpenDialog = () => {
        setOpen(true);
    };
    const handleCloseDialog = () => {
        setOpen(false);
    }
    const newEditUsers = () => {
        const editUsers = props.rows.map((row) => {
            return row.id === props.editRow.id ? editUserForm : row
        })
        props.setRows(editUsers)
        setOpen(false);
        console.log(editUsers)

    }
    //削除ボタン
    const onClickDelete = () => {
        const newDeret = [...props.rows, ];
        console.log(newDeret)
        const filtterUsers = newDeret.filter((value) => {
            return value.id !== props.editRow.id
        })
        props.setRows(filtterUsers)
    }

    const onChangeUdersEditName:React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined = (event) => seteditUserForm({...editUserForm, name: event.target.value})
    const onChangeUdersEditEmail:React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined = (event) => seteditUserForm({...editUserForm, email: event.target.value})
    const onChangeUdersEditAuthority:React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined = (event) => seteditUserForm({...editUserForm, authority: event.target.value})
    const onChangeUdersEditUpdatedDataTime:React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined = (event) => seteditUserForm({...editUserForm, updatedDataTime: Number(event.target.value)})
    //     setRows(prevState => {
    //         return prevState + Date
    // })

        return(        
            <TableRow hover role="checkbox" tabIndex={-1} key={props.editRow.id}>
            <TableCell align="center">{props.editRow.name}</TableCell>
            <TableCell align="center">{props.editRow.email}</TableCell>
            <TableCell align="center">{props.editRow.authority}</TableCell>
            <TableCell align="center">{props.editRow.updatedDataTime}</TableCell>
            <TableCell align= 'center'>
            <Button variant="contained" onClick={() => handleOpenDialog()}>編集</Button>
            <Button variant="contained" color="error" onClick={() => onClickDelete()}>削除</Button>
            </TableCell>
            <Dialog 
                open={open}
                onClose={handleCloseDialog}
                aria-labelledby="common-dialog-title">
            <Box m={5}>
            <DialogTitle>ユーザーの編集</DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
            <InputLabel >氏名</InputLabel> 
            <TextField id="demo-helper-text-misaligned-no-helper" size="small" fullWidth value={editUserForm.name} onChange={onChangeUdersEditName}/>   
            <InputLabel>email</InputLabel> 
            <TextField id="demo-helper-text-misaligned-no-helper" size="small" fullWidth value={editUserForm.email} onChange={onChangeUdersEditEmail}/>   
            <InputLabel>権限</InputLabel> 
            <TextField id="demo-helper-text-misaligned-no-helper" size="small" fullWidth value={editUserForm.authority} onChange={onChangeUdersEditAuthority}/>
            <InputLabel>パスワード最終更新日</InputLabel>
            <TextField id="demo-helper-text-misaligned-no-helper" size="small" fullWidth value={editUserForm.updatedDataTime} onChange={onChangeUdersEditUpdatedDataTime}/>
                <button onClick={newEditUsers}>登録</button>
                <button onClick={handleCloseDialog}>戻る</button>
            </DialogContentText>
            </DialogContent>
            </Box>    
            </Dialog>
        </TableRow>
        )
    
}



export {UsersEdit}