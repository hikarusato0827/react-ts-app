import { Box, Button, TextField } from "@mui/material"
import InputLabel from '@mui/material/InputLabel';

const Login = () => {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' height='100vh'>
      <Box border={1} px={8} py={4} style={{width: '30%'}}>
        <h2>ログイン</h2>
        <Box mb={7}>
          <InputLabel style={{textAlign: 'left'}} htmlFor="component-simple">メールアドレス</InputLabel>
          <TextField id="demo-helper-text-misaligned-no-helper" size="small" fullWidth/>
        </Box>
        <Box mb={5}>
          <InputLabel style={{textAlign: 'left'}} htmlFor="component-simple">パスワード</InputLabel>
          <TextField id="demo-helper-text-misaligned-no-helper" size='small'fullWidth helperText="※パスワードを忘れた場合は管理者にお問い合わせください"/>
        </Box>
        <Box>
          <Button variant="contained" size="small">ログイン</Button>
        </Box>
      </Box>
    </Box>
  )
}

export { Login }