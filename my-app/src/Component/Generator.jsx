import React, {useState}  from 'react'
import AttachmentIcon from '@material-ui/icons/Attachment';
import {numbers, uppercase_letter, lowercase_letter, symbols } from './Character'
import {ToastContainer, toast} from  'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Copy_Success} from './Message'


const Generator = () => {

  //creating a useState hooks to store all our input type
  const [password, setPassword] = useState("")
  const [passwordlength, setpasswordlength] = useState(20)
  const [includeuppercase, setincludeuppercase] = useState(false)
  const [includelowercase, setincludelowercase] = useState(false)
  const [includenumber, setincludenumber] = useState(false)
  const [includesymbol, setincludesymbol] = useState(false)


  //writing a function to a function to  generate a random password

  const handle_generate_password = (e)=>{

    //conditionatal statement to notify if is not these options
    if(!includeuppercase && !includelowercase && !includenumber && !includesymbol){
      Notify("You must select atleast one option", true)
    }

    //writing a conditional statement that will output the characters when clicked 
        let characters_list = ""

        if (includelowercase){
          characters_list = characters_list + lowercase_letter
        }

        if(includeuppercase){
          characters_list = characters_list + uppercase_letter
        }

        if (includenumber){
          characters_list = characters_list + numbers
        }

        if (includesymbol) {
          characters_list = characters_list + symbols
        }
      
        setPassword(ramdom_password(characters_list))

  }

  //writing a function to generate random password
  const ramdom_password = (e) => {
      let password = ""
      //this variable hepls to know the length of the total characters 
      const characterslist_lenght = e.length
        
      //iterating through the password length and 
      //created a random number to multiple the of the character
      for(let i = 0; i < passwordlength; i++) {
           const characters_index = Math.round(Math.random() * characterslist_lenght)
           password = password + e.charAt(characters_index)
      }
      return password
  }

  //writing a function to copy a text
  const CopyToClipboard = () => {
      const newtextarea = document.createElement("textarea")
      newtextarea.innerText = password
      document.body.appendChild(newtextarea)
      newtextarea.select()
      document.execCommand("copy")
      newtextarea.remove()
  }

  //functon for the notification or message
  const Notify = (e, hasError = false)=>{

    //conditinal statement for the css styling
    //show the error style
    if(hasError){
      toast( e, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
    } else(
      toast( e , {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })   
    )
    
  }
  
  //created a function to handle the copy
  const handle_copy_password = (e) =>{

    //conditional statement to show a notification if a it's an empty string
    if(password === ""){
      Notify("nothing to copy", true)
    } else{
      CopyToClipboard()
      Notify(Copy_Success)
    }
      
  }



    return (
        <div className="container">

            <div className="generator">

              <h2 className="generator_header">Password Generator</h2>
              <div className="generator_password">
                  <h3  data-testid="password1">{password}</h3>
                  <button className="copy_btn" onClick={handle_copy_password}>< AttachmentIcon /></button>
              </div>
              <div className="form_group">
                <label className="password_length">Password length</label>
                <input  type="number"  data-testid="input_a" defaultValue ={passwordlength} onChange={(e)=> setpasswordlength(e.target.value)}  id="password_str" name="passworr_str" max="20" min="8" />
              </div>

              <div className="form_group">
                <label className="uppercase_letter">Include Uppercase letter</label>
                <input type="checkbox" data-testid="input_b" checked={includeuppercase} onChange={(e)=> setincludeuppercase(e.target.checked)}  id="uppercase_letter" name="uppercase" max="20" min="8" />
              </div>

              <div className="form_group">
                <label className="lowercase_letter">Include Lowercase letter</label>
                <input type="checkbox" data-testid="input_c" checked={includelowercase} onChange={(e)=> setincludelowercase(e.target.checked)} id="uppercase_letter" name="lowercase" max="20" min="8" />
              </div>

              <div className="form_group">
                <label className="uppercase_letter">Include Number</label>
                <input type="checkbox" data-testid="input_d" checked={includenumber} onChange={(e)=> setincludenumber(e.target.checked)} id="uppercase_letter" name="number" max="20" min="8" />
              </div>

              <div className="form_group">
                <label className="uppercase_letter">Include Symbols</label>
                <input type="checkbox"  data-testid="input_e" checked={includesymbol} onChange={(e)=> setincludesymbol(e.target.checked)} id="uppercase_letter" name="symbols" max="20" min="8" />
              </div>
              
              <button data-testid="generate_pw" className="generate_btn" onClick={handle_generate_password}>Generate Password</button>

              <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              />
            </div>

        </div>
        
    )
}

export default Generator

