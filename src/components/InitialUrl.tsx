import { useEffect, useState } from "react"
import TableHead from '@mui/material/TableHead';
import { Button, Paper, Table, TableBody, TableRow } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
}

export const InitialUrl = () => {
    const [data, setData] = useState<User[] | undefined>(undefined)

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setData(json))
        .catch(() => alert("error"));
    },[]);

    return (
        <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell>name</TableCell>
                        <TableCell>username</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody> 
                        {data?.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.username}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button>登録</Button>
        </div>
    );  
    } 