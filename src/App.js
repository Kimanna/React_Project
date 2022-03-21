import React, { Component, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch, Link } from 'react-router-dom';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import { withStyles } from '@material-ui/core/styles';
import Main from './pages/Main';
import Home from './routes/Home';
import Detail from './routes/Detail';

// 통신 test 코드 (base64인코딩-> UTF8인코딩으로 결론)
// base64 (A-Z,a-z,0–9+/)
// console.log("🚀 ~ file: App.js ~ line 61 ~ objUrl", objUrl.get('q'))

// const value = '~!@#$%^&*()-_+english한글' %34
// const encodeValue = window.btoa(encodeURIComponent(value))
// const decodeValue = decodeURIComponent(window.atob(encodeValue))

// function sendData() {

//   // const url = 'https://www.studyday.co.kr/link?idx=71?pwd=~!@#$%^&*()-_+english'
//   const url = 'https://www.studyday.co.kr/link?idx=72?pwd=########'
//   console.log("🚀 ~ file: App.js ~ line 31 ~ sendData ~ url", url.length)
  
//   // const urlPwdIdx = url.indexOf('?pwd=') + 5
//   // const pwd = url.substring(urlPwdIdx, url.length)
//   // console.log("🚀 ~ file: App.js ~ line 32 ~ sendData ~ ", pwd)
  
//   const encodePwd = encodeURIComponent(window.btoa(url))
//   console.log("🚀 ~ file: App.js ~ line 41 ~ sendData ~ url", url)
//   console.log("🚀 ~ file: App.js ~ line 40 ~ sendData ~ base64 인코딩", window.btoa(url))
//   console.log("🚀 ~ file: App.js ~ line 41 ~ sendData ~ base64->utf8인코딩", encodePwd)


//   // console.log("🚀 ~ file: App.js ~ line 34 ~ sendData ~ encodePwd", encodePwd)
//   console.log("🚀 ~ file: App.js ~ line 4 ~ sendData ~ encodePwd", window.atob(decodeURIComponent(encodePwd)))


//   // const finalUrl = url.substring(urlPwdIdx, url.lastIndexOf)
//   // console.log("🚀 ~ file: App.js ~ line 36 ~ sendData ~ finalUrl", finalUrl)

//   // const finalUrl2 = finalUrl + encodePwd
//   // console.log("🚀 ~ file: App.js ~ line 38 ~ sendData ~ finalUrl2", finalUrl2)

//   const urlAws = 'http://ec2-13-209-169-218.ap-northeast-2.compute.amazonaws.com:12888/encode?test='
//   axios.get(urlAws + encodePwd)
//     .then(function (response) {
//       console.log(response)
//     })
  
  // axios.get('https://studydaytest.shop/test/uwer1?pwd=' + encodePwd)
  //   .then(function (response) {
  //     console.log(response)
  //   })
//   return(
//     <div></div>
//   )
// }

// function App() {

//   return (
//     <button onClick={sendData}>button</button> 
//   )
// }


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})
const customer = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': 'anna',
  'birthday': '961222',
  'gender': '남자',
  'job':'대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '홍길동',
  'birthday': '961111',
  'gender': '남자',
  'job':'대학생'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': 'hanna',
  'birthday': '961231',
  'gender': '남자',
  'job':'대학생'
}
]
// function Hello() {

//   // 한번만 실행되는 함수
//   useEffect(() => {
//     console.log('created :)') // 컴포넌트가 존재할때 실행됨
//     return () => console.log('destroyd :(') // 컴포넌트가 사라질때 실행됨
//   }, [])
//   return <h1>Hello</h1>
// }


// function Btn ({text, changeValue}) {
// console.log("🚀 ~ file: App.js ~ line 63 ~ Btn ~ text", text)
//   return (
//   <>
//     <button
//       onClick = {changeValue}
//       style={{
//         backgroundColor: 'tomato',
//         color: 'white'
//       }}
//     >{text}</button>
//   </>
// )
// }

// Btn.propTypes ={
//   text: PropTypes.string,
//   changeValue: PropTypes.func,
// }

// function App() {
//   const [todo, setTodo] = React.useState('')
//   const [todos, setTodos] = React.useState([])
//   const onChange = (event) => setTodo(event.target.value)
//   const onSubmit = (event) => {
//     event.preventDefault()
//     if(todo ==='') {
//       return
//     }
//     setTodos((currentArray) => [todo, ...currentArray])
//     setTodo('')
//   }
//   console.log("🚀 ~ file: App.js ~ line 98 ~ App ~ todos", todos)


//   return (
//     <>
//     <form onSubmit={onSubmit}>
//         <input
//           onChange={onChange}
//           value={todo}
//           type="text"
//           placeholder='write your to do...'>
//         </input>
//         <button>Add To Do</button>
//     </form>    
 
//     </>
    // <>
    //   <Btn text={value} changeValue={changeValue}/>
    //   <Btn text="Continue" />
    // </>
    // <>
    //   <h1>value : {objUrl}</h1>
    //   <h1>encodeValue : {encodeValue}</h1>
    //   <h1>decodeValue : {decodeValue}</h1>
    // </>
    // <Router>
    //   <Routes>
    //     {/* <Route path="/" component={Main} exact /> */}
    //     <Route path="/main" component={Main} exact />
    //     {/* <Route path="Main" component={Main} exact /> */}
    //   </Routes>
    // </Router>
//   )
// }

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
          
        <Route path='/movie/:id' element={<Detail />}/>
      </Routes>
  </Router>
)
}


export default App

// class App extends Component {
//   render() {
//     const { classes } = this.props;
//     return (
//       <Paper className={classes.root}>
//           <Table className={classes.table}>
//             <TableHead>
//               <TableRow>
//                 <TableCell>번호</TableCell>
//                 <TableCell>이미지</TableCell>
//                 <TableCell>이름</TableCell>
//                 <TableCell>성별</TableCell>
//                 <TableCell>직업</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>

//                 {
//                   customer.map(c => {
//                     return (
//                       <Customer
//                         key={c.id}
//                         id={c.id}
//                         image={c.image}
//                         name={c.name}
//                         birthday={c.birthday}
//                         gender={c.gender}
//                         job={c.job}
//                       />
//                     )
//                   })
//                 }

//             </TableBody>
//           </Table>
//       </Paper>
//     );
//   }
// }

// export default withStyles(styles)(App);
