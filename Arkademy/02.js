function requireEmail(email) {

    for (var a = 0; a < email.length; a++) {
      if (email[a] !== email[a].toLowerCase()) {
        return "Input E-mail anda salah!"; //statement return false
      }
    }
  
    var at = email.indexOf('@')
    if(at > 1){
      return 'Input E-mail anda benar' //statement return true
    } else {
      return 'Input Email anda salah! (tambahkan @)' //statement return false
    }
    
      var dom = email.indexOf('.')
    if(at > 2){
      return 'Input E-mail anda benar' //statement return true
    } else {
      return 'Input Email anda salah! (tambahkan domain min 2 karakter)' //statement return false
    }
    
  }
  console.log(requireEmail("wizanpratama98@gmailcom"))
  
  
  function requirePhoneNumber(phone){
  
    for(var a = 0; a < phone.length; a++){
      if(phone[a] === '+' || phone[a] === '62'){
        return 'Input Nomor telepon benar' //statement return true
      } else {
        return 'Input Nomor telephone salah (tambahkan +62 diawal)' //statement return false
      }
    }
  
  }
  console.log(requirePhoneNumber('+62 895 123 456'))
  
  
  function requireUserName(name){
    for (var a = 0; a < name.length; a++) {
      if (name[a] !== name[a].toLowerCase()) {
        return 'Input Username anda salah (harus lowercase)' //statement return false
      }
    }
    return 'Input Username anda benar'//statement return true
  }
  console.log(requireUserName('wizan pratama'))
   
  
  function requirePassword(password){
    var a = password;
      if(a.match(/^[a-z,A-Z,0-9]+$/)){
         return 'Input Password benar!'
       } else { return 'Input password anda salah!'()}
    
    var tag = password.indexOf('#')
        if(tag > 1){
      return 'Input Password benar' //statement return true
    } else {
      return 'Input Password anda salah! (tambahkan #)' //statement return false
    }
    
  }
  console.log(requirePassword('Wizan123'))
  
  
  