var mysql = require('mysql');


var con = mysql.createConnection({
    host: "localhost",
    database: "profiles",
    user: "root",
    password: ""
});





exports.upload_image = async (req, res) => {


    console.log(req.body);
    console.log(req.file);
    
    const host = req.hostname;

    var file1 = req.protocol + "://" + host +':8080/images/' + req.file.filename;

    // var file = 'http://127.0.0.1:8080/images/' + req.file.filename;

    res.status(200).send({ message: "Successfully uploaded files", "file": file1 });
  

}

exports.get_profiles = async (req, res) => {



    let sql = `select * from profiles_data`;
    con.query(sql, (err, results) => {
        if (err) {
            throw err;
        }

        res.status(200).send({ results });
    })
}

exports.post_profiles = async (req, res) => {


    try {

        var name = req.body.name;
        var mobile = req.body.mobile;
        var dob = req.body.dob;
        var blood = req.body.blood;
        var email = req.body.email;
        var address = req.body.address;
        var avatar = req.body.avatar;
        var role = req.body.role;
        var id_number = req.body.id_number;


        


        let sql = `insert into profiles_data(name,mobile,dob,blood,email,address,avatar,role,id_number) values (?,?,?,?,?,?,?,?,?)`;

        con.query(sql, [name, mobile, dob, blood, email, address, avatar, role, id_number], (err, results) => {
            if (err) {
                throw err;
            }

            res.status(200).json({ status: 'Sucess', data: 'Data Saved' })

        })

    } catch (err) {
        console.log(err);
    }


}

exports.update_profile = async(req, res) => {


    
    try {

        var Name = req.body.name;
        var Mobile = req.body.mobile;
        var Dob = req.body.dob;
        var Blood = req.body.blood;
        var Email = req.body.email;
        var Address = req.body.address;
        var Avatar = req.body.avatar;


        let id = req.params.id;

        let sql = `update profiles_data set name=?,mobile=?,dob=?,blood=?,email=?,address=?,avatar=? where ID=?`;

        con.query(sql, [Name, Mobile, Dob, Blood, Email, Address, Avatar, id], (err, results) => {
            if (err) {
                throw err;
            }

            res.status(200).json({ status: 'Sucess', data: 'Data Updated' })

        })

    } catch (err) {
        console.log(err);
    }

}



exports.delete_profile = async(req, res) => {
    try {

       


        let id = req.params.id;

        let sql = `delete from profiles_data where ID=?`;

        con.query(sql, [id], (err, results) => {
            if (err) {
                throw err;
            }

            res.status(200).json({ status: 'Sucess', data: 'Data Deleted' })

        })

    } catch (err) {
        console.log(err);
    }
}
