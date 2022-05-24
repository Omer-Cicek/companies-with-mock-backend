import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

const Navbar = () => {
  return (
    <Header>
      <div className="container-fluid">
        <div className="header">
          <div className="logo" />
          <Menu mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key={'1'}>asdas1</Menu.Item>
            <Menu.Item key={'2'}>asdas2</Menu.Item>
            <Menu.Item key={'3'}>asdas3</Menu.Item>
          </Menu>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
