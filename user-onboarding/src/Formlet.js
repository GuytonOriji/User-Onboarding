import React, { useState, useEffect } from 'react';
import {withFormik,Form,Field}  from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
import Axios from 'axios';


const Frame = styled.div`

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
height:100%;


`;

const fofo = {
    display:"flex",
    flexDirection:"column",
    backgroundColor:"rgba(0,0,0,.5)",
    width:"700px",
    minHeight:"500px",
    justifyContent:"space-between",
    alignItems:"center",
    fontSize:"2rem",
    color:"azure",
    padding:"3%",
    borderRadius:"20px",
    margin:"10px 0px"
}

const DisplayTeam = styled.div`
	flex: 1;
	display: flex;
	height: 100%;
	width: 100%;
	overflow-x:auto;
`

const Row = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border: double 7px azure;
	width: 500px;
	height: 300px;
	border-radius: 20px;
	box-shadow: 0 0 10px azure;
    color:azure;
    background-color:rgba(0,0,0,.4)
`

const Name = styled.h2`
	text-shadow: 0 0 10px red;
	flex: 1;
	border-bottom: double azure;
	font-size: 3rem;
`

const ConSkill = styled.div`
	flex: 1;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1.5rem;
	text-align:center;
`

const Con = styled.h3`
	text-shadow: 0 0 10px blue;
	text-align:center;
	flex: 1;
`

const Skill = styled.h3`
	text-shadow: 0 0 10px blue;
	flex: 1;
	text-align:center;
`

const Remove = styled.button`
	flex: 0.6;
	color: red;
	border: double red;
	background-color: rgba(250, 250, 250, 0.2);
	font-size:2.5rem;
`


const Btn = styled.button`
	flex: 0.6;
	color: green;
	border: double 4px azure;
	background-color: #000;
	padding:5px 10px;
	font-size:2.5rem;
	text-shadow:0 0 10px azure;
	box-shadow:0 0 10px azure;
	-webkit-text-stroke:.8px azure;
	cursor:pointer;
`



const Chill = (e) =>{
        let keyy = e.which

        if(keyy > 47 && keyy < 58 || keyy === 8){
            return true
        }else{
            e.preventDefault()
        }
}


const MatchMe = (e) =>{
    let wordSoFar = e.target.value

        
    if(wordSoFar===e.target.parentNode.parentNode.children[5].children[1].value){
        e.target.parentNode.children[2].innerHTML = "Matches"
    }else{
        e.target.parentNode.children[2].innerHTML = "not Matching"
    }
}


const IsThisEmail = (e) =>{
    let emailzio = e.target.value


        
    if("waffle@syrup.com"===emailzio){
        e.target.parentNode.children[2].innerHTML = "Email Already Taken"
        return false
    }else{
        e.target.parentNode.children[2].innerHTML = "Email up 4 grabs"
    }
}


const RemoveThis = (card_to_remove) =>{
	console.log(card_to_remove.target.parentNode.remove());

}



const JustOneMin = (e) =>{
    
    e.preventDefault()

   if( e.target.parentNode.parentNode.children[3].children[1].value.slice(g.indexOf("@")
        ,-1)===/@syrup.com/i &&  e.target.parentNode.parentNode.children[3].children[1].value.slice(0,g.indexOf("@")
        )===/waffle/i )
   e.target.parentNode.parentNode.reset()
   e.target.parentNode.parentNode.children[3].children[1].value="CANT USE waffle@syrup.com"
    return false;
}




 function Formlet ({values,errors,touched,status}){



    const [user,setUser] = useState([])


    useEffect(()=>{


        status&&
        setUser(user=>[...user, status])

    },[status])


   

    return(
        <Frame>
            
        <Form style={fofo}>
        <label htmlFor="name">Name <br />
            <Field as="input" id="name" type="text" maxLength="10" name="name"/>
            {
                touched.name && errors.name &&(
                <p>{errors.name}</p>
                )
            }
        </label>


        <label htmlFor="name">username <br />
            <Field as="input" id="username" type="text" maxLength="6" minLength="2" name="username"/>
            {
                touched.username && errors.username &&(
                <p>{errors.username}</p>
                )
            }
        </label>


        <label htmlFor="number">Number <br />
            <Field as="input" id="number" type="phone" maxLength="10" minLength="10" name="number" onKeyDown={Chill}/>
            {
                touched.number && errors.number &&(
                <p>{errors.number}</p>
                )
            }
        </label>


        <label htmlFor="email">Email <br />
            <Field as="input" id="email" type="email" name="email" onBlur={IsThisEmail}/>
            {
                touched.email && errors.email &&(
                <p>{errors.email}</p>
                )
            }
            <span></span>
        </label>


        <label htmlFor="role">Role <br />
            <Field as="select" id="role"  name="role">
                <option disabled>Role</option>
                <option value="Ui Dev">Ui Dev</option>
                <option value="Graphic Des">Graphic Des</option>
                <option value="UX Dev">UX Dev</option>
                <option value="Node.js">Node.js</option>
                <option value="Python">Python</option>
                

            </Field>
        </label>


        <label htmlFor="password">Password <br />
            <Field as="input" id="password" type="password" name="password" />
            {
                touched.password && errors.password &&(
                <p>{errors.password}</p>
                )
            }
        </label>

        <label htmlFor="repassword">Re-Type Password <br />
            <Field as="input" id="repassword" type="password" name="repassword" onBlur={MatchMe}/>
            {
                touched.repassword && errors.repassword &&(
                <p>{errors.repassword}</p>
                )
            }
            <span></span>
        </label>

        <label htmlFor="check">Terms & Services <br />
            <Field as="input" id="check" type="checkbox" name="check"/>
        </label>

        <div className="btnBox">
            <Btn onClick={JustOneMin} type='submit'>Confirm</Btn>
        </div>
        </Form>
    {user.map(perp=>{
        return(
            <DisplayTeam key={perp.id} className='member-list'>

                <Row className='member' >
            <Card>
                <ConSkill>
                    <Name>{perp.name}</Name>
                    <Name>as</Name>
                    <Name>{perp.username}</Name>
                </ConSkill>

                <ConSkill>
                    <Con>{perp.email}</Con>
                    <Skill>{perp.number}</Skill>
                </ConSkill>
                <Remove onClick={RemoveThis}>Remove</Remove>
            </Card>

        </Row>
            </DisplayTeam>
            
        )
    })}
        </Frame>
    )
        
}



const SuperFormlet = withFormik({

   

            mapPropsToValues(props){

                 

                return{
                    name:props.name || "",
                    username:props.username || "",
                    number:props.number || "",
                    email:props.email || "" || !"waffle@syrup.com",
                    password:props.password || "",
                    repassword:props.repassword || "",
                    check:props.check || false
                }
            },



            validationSchema: Yup.object().shape({
                name: Yup.string().required(
                    "Wheres the name bro..."
                ),

                username: Yup.string().required(
                    "username..."
                ),

                number: Yup.number().required(
                    "busines Number please..."
                ),

                email: Yup.string().required(
                    "ehhh not so good fr..."
                ),

                password: Yup.string().required(
                    "You need the Password"
                ),

                
            }),
        

            handleSubmit(values, {setStatus , resetForm}){
                

                Axios.post("https://reqres.in/api/users" , values)
                .then(res=>{
                    console.log(res.data)

                    setStatus(res.data)
                    resetForm()
                })
                .catch(err=>{
                    throw new Error(err)
                })
            }
        
        
        })(Formlet);


        export default  SuperFormlet;
