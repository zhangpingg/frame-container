import { Input, Button } from 'antd';

const Index = () => {
  return (
    <div style={{width: '300px'}}>
      账号：<Input /> <br />
      密码：<Input /> <br />
      <Button type='primary'>登录</Button>
    </div>
  )
}

export default Index;
