
import { useState } from 'react'
import '../index.css';
import { Studentdata } from './student-info'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const Adduser = () => {
    const [students, setStudents] = useState(Studentdata)
    const [username, setusername] = useState("")
    const [useremail, setuseremail] = useState("")
    const [roles, setroles] = useState("")
    const [extrapermission, setextrapermission] = useState("")
    const [errorMessage, setMessage] = useState("");
    const [updatedIndex, setUpdatedIndex] = useState(0)
    const [flag, setFlag] = useState(false);
    const classes = useStyles();
    const updateHandler = (student, index) => {
        setUpdatedIndex(index);
        setusername(student.username);
        setuseremail(student.username);
        setroles(student.roles);
        setextrapermission(student.extrapermission);
        setFlag(true);
    }
    const deletehandler = (index) => {
        let newstudent = students.filter((student, i) => {
            if (i !== index) {
                return student;
            }
        })
        setStudents([...newstudent])
    }
    const submit = () => {
        setMessage("")
        if (username != "" && useremail != "" && roles != "" && extrapermission != "") {
            let student2 = {
                username,
                useremail,
                roles,
                extrapermission
            }
            console.log("student", student2);
            setStudents([student2, ...students])
            setusername("");
            setuseremail("");
            setroles("");
            setextrapermission("")
            setFlag(true);
        } else {
            setMessage(" Found few of params empty! Params can't be empty.")
        }
    }
    const update = () => {
        setMessage("")

        if (username != "" && useremail != "" && roles != "" && extrapermission != "") {
            let student2 = {
                username,
                useremail,
                roles,
                extrapermission
            }
            console.log("student", student2);

            let updateStudents = students.map((stu,index) => {
                if (updatedIndex === index) {
                    return student2;
                }
            else {
            return stu;
        }
    })

    setStudents([...updateStudents]);
    setusername("");
    setuseremail("");
    setroles("");
    setextrapermission("");
    setFlag(false);

}
    else {
    setMessage(" Found few of params empty! Params can't be empty.")
}
    }


    return (
        <div style={{ marginLeft: '250px' }}>
            <h1>User Information:</h1>

            <input type="text"
                placeholder="Enter UserName"
                onChange={(e) => setusername(e.target.value)}
                name="username"
                value={username}

            >
            </input>
            <br />
            <input type="text"
                placeholder="Enter Email"
                onChange={(e) => setuseremail(e.target.value)}
                name="email"
                value={useremail}

            >

            </input>
            <br />
            <input type="text"
                placeholder="Enter Roles"
                onChange={(e) => setroles(e.target.value)}
                name="role"
                value={roles}

            >
            </input>
            <br />
            <input
                type="text"
                placeholder="Enter Extra Permision"
                onChange={(e) => setextrapermission(e.target.value)}
                name="permision"
                value={extrapermission}

            >
            </input>
            {flag ?
            <button type="submit" className='submitbutton' onClick={update}>Update</button>
                :
                <button type="submit" className='submitbutton' onClick={submit} >Submit</button>
            }
            <p style={{ backgroundColor: "red", color: 'white' }}>
            {
                errorMessage
            }
        </p>

            <Table stickyHeader aria-label="sticky table" style={{ width: '80em' }}>
                <TableHead>
                    <TableRow>
                        <TableCell>NO#</TableCell>
                        <TableCell>User Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Extrapermission</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {students.map((item, index) => (
                        <TableRow hover role="checkbox" >
                            <TableCell>{index}</TableCell>
                            <TableCell>{item.username}</TableCell>
                            <TableCell>{item.useremail}</TableCell>
                            <TableCell>{item.roles}</TableCell>
                            <TableCell>{item.extrapermission}</TableCell>
                            <TableCell>
                                <IconButton onClick={() => updateHandler(item, index)} aria-label="Edit" className={classes.margin}>
                                    <EditIcon fontSize="small" />
                                </IconButton>

                                <IconButton onClick={() => deletehandler(index)} >
                                    <DeleteIcon fontSize="small" />
                                </IconButton>
                            </TableCell>
                        </TableRow>))}

                </TableBody>

            </Table>


        </div>

    );
}
export default Adduser;