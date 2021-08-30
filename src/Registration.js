import React, { Component } from 'react'

class Registration extends Component {
    render() {
        return (
            <div>
                <head >
                    <title>Registration Form</title>
                </head>
                <body align='center' bgcolor='black' />
                <h3>*STUDENT REGISTRATION FORM*</h3>
                <hr />
                <hr />
                <table align="center" cellpadding="5" />
                <tr>
                    <td>FIRST NAME :</td>
                    <td><input type="text" name="First_Name" maxlength="30" /></td>
                </tr>

                <tr>
                    <td>LAST NAME</td>
                    <td><input type="text" name="Last_Name" maxlength="30" /></td>
                </tr>

                <tr>
                    <td>EMAIL ID</td>
                    <td><input type="text" name="Email_Id" maxlength="100" /></td>
                </tr>

                <tr>
                    <td>MOBILE NUMBER</td>
                    <td><input type="text" name="Mobile_Number" maxlength="10" />
                    </td>
                </tr>
                <tr>
                    <td>GENDER</td>
                    <td>
                        <input type="radio" name="Gender" value="Male" />Male
                        <input type="radio" name="Gender" value="Female" />Female
                    </td>
                </tr>
                <tr>
                    <td>ADDRESS: </td>
                    <td><textarea name="Address" rows="4" cols="50"></textarea></td>
                </tr>
                <tr>
                    <td>CITY</td>
                    <td><input type="text" name="City" maxlength="30" /></td>
                </tr>
                <tr>
                    <td>PIN CODE</td>
                    <td><input type="text" name="Pin_Code" maxlength="6" /></td>
                </tr>
                <tr>
                    <td>STATE</td>
                    <td><input type="text" name="State" maxlength="30" /></td>
                </tr>
                <tr>
                    <td>COUNTRY</td>
                    <td><input type="text" name="Country" value="INDIA" readonly='readonly' /></td>
                </tr>
                <tr>
                    <td>COURSE:</td>
                    <input type="radio" name="Course" value="BCA" />BCA
                    <input type="radio" name="Course" value="B.Tech" />B.Tech
                    <input type="radio" name="Course" value="MCA" />MCA
                    <input type="radio" name="Course" value="M.Tech" />M.Tech
                    <td />
                </tr>
                <br />
                <tr>
                    <td align="center"><input type="submit" value="Submit" /></td>
                </tr>
                <table />
                <form />
                <body />
            </div>
        )
    }
}

export default Registration;