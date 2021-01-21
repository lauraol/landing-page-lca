function enviaEmail(){
  document.getElementById('sendmail').addEventListener('click', function(event){
    event.preventDefault();
      document.location.href = 'mailto:lauraoliveirape@gmail.com';
      console.log("e-mail enviado!")
  });
}

enviaEmail();

