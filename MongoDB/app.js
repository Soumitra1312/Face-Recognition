const express = require('express')
const app = express()
const userModel = require("./models/user")
const postModel = require("./models/post")
const cookieParser = require('cookie-parser');
// const multer = require('multer')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const path = require("path")
const upload = require("./utils/multer")


app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './publlic/images/uploads')
//     },
//     filename: function (req, file, cb) {
//       const fn = crypto.randomBytes(12,(err,bytes)=>{
//         const fn = bytes.toString("hex") + path.extname(file.originalname)
//         cb(null, fn)
//       })
//     }
//   })

//   const upload = multer({ storage: storage })

app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/login", (req,res)=>{
    res.render("login")
})

app.get("/profile",isloogedin, async (req,res)=>{
    let user = await userModel.findOne({email: req.user.email}).populate("posts")
    res.render("profile",{user})
})

app.post("/post",isloogedin, async (req,res)=>{
    let user = await userModel.findOne({email: req.user.email})
    let {content} = req.body
    let post = await postModel.create({
        user:user._id,
        content:content
    });
    user.posts.push(post._id)
    await user.save()
    res.redirect("/profile")
});

app.get("/home", (req,res)=>{
    res.render("home")
})


app.post("/register",async (req,res)=>{
    let {email,password, username,name,age} = req.body
    let user = await userModel.findOne({email})
    if(user) return res.status(500).send("already registered");
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password, salt,async (err,hash)=>{
            let user = await userModel.create({
                username,
                email,
                age,
                password:hash,
                name
            });
            let token = jwt.sign({email:email, userid:user._id},"ashu")
            res.cookie("token",token);
            res.send("registered")
        })
    })
})

app.post("/login",async (req,res)=>{
    let {email,password} = req.body
    let user = await userModel.findOne({email})
    if(!user) return res.status(500).send("something went wrong");

    bcrypt.compare(password,user.password,(err,result)=>{
        if(result) {
        let token = jwt.sign({email:email, userid:user._id},"ashu")
        res.cookie("token",token);
        res.status(200).redirect("/profile")
        }
        else res.redirect("/login")
    })
});

app.get("/profile/upload",(req,res)=>{
    res.render("test")
});
app.post("/upload",isloogedin,upload.single("file"),async (req,res)=>{
   let user = await userModel.findOne({email:req.user.email})
   user.profilepic= req.file.filename
   await user.save()
   res.redirect("/profile");
});

app.get("/logout", (req, res) => {
    res.cookie("token", "", { expires: new Date(0) }); // or use maxAge: 0
    res.redirect("/login");
});




// app.get("/test",(req,res)=>{
//     res.render("test")
// })
// app.post("/upload",upload.single("file"),(req,res)=>{
//     console.log(req.file);
// })

function isloogedin(req,res,next){
    if(req.cookies.token==="") res.redirect("/login");
    else{
        let data = jwt.verify(req.cookies.token,"ashu")
        req.user = data
    }
    next()
}
app.post("/post", isloogedin, async (req, res) => {
    let user = await userModel.findOne({ email: req.user.email });

    // ✅ Destructure all the form fields
    let { content, section, subject, periods, roomNumber } = req.body;

    // ✅ Create the post with all fields
    let post = await postModel.create({
        user: user._id,
        content,
        section,
        subject,
        periods,
        roomNumber,
    });

    user.posts.push(post._id);
    await user.save();

    res.redirect("/profile");
});

app.listen(3000)