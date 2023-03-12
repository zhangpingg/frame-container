import { history } from 'umi';
import { Button } from 'antd';

const Index = () => {
  return (
    <div className={'global-box'}>
      <Button type='link' onClick={() => history.push('/xc-frame/xone-app1')}>子应用1</Button> <br />
      <Button type='link' onClick={() => history.push('/xc-frame/xone-app2')}>子应用2</Button>
    </div>
  )
}
export default Index;
