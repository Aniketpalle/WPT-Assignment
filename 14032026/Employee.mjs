
  export class Employee {
  constructor(firstname, lastname,email,designation) {
    this.firstname = firstname;
    this.lastname = lastname;
     this.email = email;
    this.designation = designation;
    
  }

  //getter methods
  getFirstname()
  {
    return this.firstname;
  }

  getLastname()
  {
    return this.lastname;
  }


getEmail()
  {
    return this.email;
  }


getDesignation()
  {
    return this.designation;
  }

  //settefunction

  setFirstName(firstname)
  {
    this.firstname=firstname;
  }

  setLastName(lastname)
  {
    this.lastname=lastname;
  }

  setEmail(email)
  {
    this.email=email;
  }

  setDesignation(designation)
  {
    this.designation=designation;
  }
//display method

display()
{
    console.log("firstname:",this.firstname);
     console.log("Laststname:",this.lastname);
      console.log("Email:",this.email);
       console.log("Designation:",this.email);
}

 }
