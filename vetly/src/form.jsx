import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router';
import './form.css';


class Form extends React.Component {
  render() {


function cambiarLogin() {

      document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";
      document.querySelector('.cont_form_login').style.display = "block";
      document.querySelector('.cont_form_sign_up').style.opacity = "0";

      setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },400);

      setTimeout(function(){
      document.querySelector('.cont_form_sign_up').style.display = "none";
    },200);
  }

function cambiarSignUp(at) {

    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
    document.querySelector('.cont_form_sign_up').style.display = "block";
    document.querySelector('.cont_form_login').style.opacity = "0";

    setTimeout(function(){  document.querySelector('.cont_form_sign_up').style.opacity = "1";
  },100);

    setTimeout(function(){   document.querySelector('.cont_form_login').style.display = "none";
  },400);


}


function clickToggle() {
    var z = document.getElementById("toggleButton");
    var x = document.getElementById('signup');
    var y = document.getElementById('login');
    if (x.classList.contains('visible')) {
        x.classList.toggle('visible');
        y.classList.toggle('visible');
        z.style.marginTop = "58%";
        document.getElementById('toggleButton').textContent = "Vill du registrera ett nytt konto?";
    } else {
       y.classList.toggle('visible');
        x.classList.toggle('visible');
        z.style.marginTop = "43.4%";
        document.getElementById('toggleButton').textContent = "Har du redan ett konto?";
    }
}



function ocultarLoginSignUp() {

    document.querySelector('.cont_forms').className = "cont_forms";
    document.querySelector('.cont_form_sign_up').style.opacity = "0";
    document.querySelector('.cont_form_login').style.opacity = "0";

    setTimeout(function(){
    document.querySelector('.cont_form_sign_up').style.display = "none";
    document.querySelector('.cont_form_login').style.display = "none";
  },500);




  }



    return (

      <div className="wrapper">
      <div className="cotn_principal">
<div className="cont_centrar">

  <div className="cont_login">
<div className="cont_info_log_sign_up">
      <div className="col_md_login">
<div className="cont_ba_opcitiy">

        <h2>Logga In</h2>
  <p>Är du redan medlem?</p>
  <button className="btn_login" onClick={cambiarLogin}>Logga In</button>
  </div>
  </div>
<div className="col_md_sign_up">
<div className="cont_ba_opcitiy">
  <h2>Registrera Dig</h2>


  <p>Vill du registrera ett nytt konto?</p>

  <button className="btn_sign_up" onClick={cambiarSignUp}>Skapa Konto</button>
</div>
  </div>
       </div>


    <div className="cont_back_info">
       <div className="cont_img_back_grey">
       <img src="https://www.scienceabc.com/wp-content/uploads/2016/05/horse-running.jpg" alt="" />
       </div>

    </div>
<div className="cont_forms" >
    <div className="cont_img_back_">
       <img src="https://www.scienceabc.com/wp-content/uploads/2016/05/horse-running.jpg" alt="" />
       </div>
 <div className="cont_form_login">
<a href="#" onClick={ocultarLoginSignUp}><i className="material-icons">&#xE14C;</i></a>
   <h2>Logga In</h2>
 <input type="email" placeholder="Email" />
<input type="password" placeholder="Lösenord" />
<button className="btn_login" onClick={cambiarLogin}>Logga In</button>
<center><a href="#" className="passwordLink">Jag har glömt mitt lösenord</a></center>
  </div>

   <div className="cont_form_sign_up">
<a href="#" onClick={ocultarLoginSignUp}><i className="material-icons">&#xE14C;</i></a>
     <h2>Skapa Konto</h2>
<input type="email" placeholder="Email" />
<input type="password" placeholder="Lösenord" />
<input type="password" placeholder="Bekräfta Lösenord" />
<button className="btn_sign_up" onClick={cambiarSignUp}>Skapa Konto</button>


  </div>

    </div>

  </div>
 </div>



</div>


 <div className="form-div">
 
  <div id="login" className="formContainer visible">
  <h3 className="formh3">Logga In</h3> 
  <input type="email" placeholder="Email" />
  <input type="password" placeholder="Lösenord" />
  <button className="formButton">Logga In</button>
  </div>

  <div id="signup" className="formContainer">
  <h3 className="formh3">Kom Igång</h3> 
  <input type="email" placeholder="Email" />
  <input type="password" placeholder="Lösenord" />
  <input type="password" placeholder="Bekräfta Lösenord" />
  <button className="formButton">Skapa Konto</button>
  </div>
<a href="#" className="passwordLink">Jag har glömt mitt lösenord</a>

<button id="toggleButton" onClick={clickToggle}>Vill du registrera ett nytt konto?</button>
</div>


</div>


    );
  }
}
export default Form;



