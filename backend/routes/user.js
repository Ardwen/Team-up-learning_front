const router = require("express").Router();
let Course = require("../model/Course.js");
var User = require("../model/User.js");
let Invitation = require("../model/Invitation.js");

router.route("/:username").get((req, res) => {
  User.findOne({ userName: req.params.username }
    ,function(err,user) {
      if(err){
        res.status(400).json("Error: " + err)
      }
      res.json(user); }
  );
    /*.then((user) => {
      /*for (var courseid in user.courses) {
        Course.findById(courseid)
          .then((course) => {
            currentcourse.push(course);
          })
          .catch((err) => res.status(400).json("Error: " + err));
      }*/
      //res.json({ courses: currentcourse, mailBox: user.mailBox });
      /*res.json(user);
    })
    .catch((err) => res.status(400).json("Error: " + err));*/
});

/*router.route("/:username/:courseId").get((req, res) => {
  User.findOneAndUpdate(
    { userName: req.params.username },
    { $pull: { courses: req.params.courseId } },
    function (error, success) {
      if (error) {
        res.status(400).json("Error: " + error);
        return;
      } else {
        res.json("sucessfully deleted");
      }
    }
  );
});*/

router.route("/invites/:username").get((req, res) => {
  const currentInvitation = [];
  User.findOne({ userName: req.params.username })
    .then((user) => {
      user.mailBox.forEach(function(inv){
        Course.findById(inv.courseID).then((course) => {
          //console.log(inv);
          const curinv = {
            _id: inv._id,
            courseId: inv.courseID,
            sendById: inv.sendByID,
            courseName: course.courseName,
            date: course.date,
            time: course.time
          };
          console.log(currentInvitation)
          currentInvitation.push(curinv);
        }).catch((err) => console.log(err));
      }).then(res.json({ mailBox: currentInvitation }));

    }).catch((err) => res.status(400).json("Error: " + err));
});

router.route("/register").post((req, res) => {
  const userName = req.body.userName;
  const userEmail = req.body.userEmail;
  const courses = [];
  const mailBox = [];

  const newUser = new User({
    userName,
    userEmail,
    courses,
    mailBox
  });
  newUser
    .save()
    .then(() => res.json("Register succesfully!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
