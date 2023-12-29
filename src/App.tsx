import './App.css';
import styled, {keyframes} from 'styled-components';

const Navigation = () => {
    return (
        <nav>
            <Menu role={'menu'} aria-label={'меню в заголовке'}>
                <MenuItem role={'menuitem'}><a href={'#'} tabIndex={1}>Item 1</a></MenuItem>
                <MenuItem role={'menuitem'}><a href={'#'} tabIndex={2}>Item 2</a></MenuItem>
                <MenuItem role={'menuitem'}><a href={'#'} tabIndex={3}>Item 3</a></MenuItem>
            </Menu>
        </nav>
    );
};

function App() {
    return (
        <div className="App">
            <Header>
                <Navigation/>
                <LoginBtn>LOGIN</LoginBtn>
                <LoginBtn aria-label={'закрыть'} accessKey={'x'}>X</LoginBtn>
            </Header>
            <Block>
                <Title>Accessibility</Title>
                <Form>
                    <div>
                        <Label htmlFor="1" aria-labelledby={'1'}>Label for field 1</Label>
                        <Field type={'text'} id="1" placeholder="Login" aria-placeholder={'Поле для логина'}/>
                    </div>

                    <div>
                        <Label htmlFor="2" aria-labelledby={'2'}>Label for field 2</Label>
                        <Field type={'email'} id="2" placeholder="Email" aria-placeholder={'Поле для почты'}/>
                    </div>

                    <div>
                        <Label htmlFor="3" aria-labelledby={'3'}>Label for field 3</Label>
                        <Field type={'password'} id="3" placeholder="Password" aria-placeholder={'Поле 3 для пароля'}/>
                    </div>
                </Form>
            </Block>
        </div>
    );
}

export default App;


const Bouncing = keyframes`
  50% {
    transform: translateY(20%);
  }
`

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  margin: 60px 0;
  animation: ${Bouncing} 1s linear infinite alternate;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

`;

const Header = styled.header`
  height: 80px;
  background-color: #163dd0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Menu = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
`;

const MenuItem = styled.li`
  a {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }
`;

const LoginBtn = styled.button`
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  border: 2px solid;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
`;

const Block = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px
`;

const Label = styled.label`
  font-size: 1rem;
  line-height: 2rem;
`;

const Field = styled.input.attrs(({type}) => ({
    type
}))`
  padding: 5px 15px;
  width: 100%;
  font-size: 1rem;
`;


// const Field2 = styled.input.attrs(({type, placeholder}) => ({
//     type,
//     placeholder,
// }))`
//   padding: 5px 15px;
//   margin: 10px 0;
//   width: 100%;
//   font-size: 1rem;
// `;