window.onload = execute;
function execute() {
    document.getElementById("submit").addEventListener("click", dropmail);

    function dropmail() {
        var nodemailer = require('nodemailer');
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'ambaramsrivastava@gmail.com',
                pass: 'ambaramva2202'
            }
        });
        alert('hi');
        var name = document.getElementById("name").innerHTML;
        console.log(name);
        var domain = document.getElementById("service").innerHTML;
        console.log(domain);

        var mailOptions = {
            from: 'ambaramsrivastava@gmail.com',
            to: document.getElementById('email').textContent,
            subject: "Project opportunity",
            html: "<p>Dear " + name + ",</p><p>Thanks for your email.</p><p>I am really delighted to have the "
                + domain + "opportunity to work with you.</p><p>Please let me know your availability so that we can set up a google"
                + "meet to discuss this further.</p><p>Thanks,</p><p>Ambaram</p><p>Contact: +91-9456012695 </p><p>This email was sent"
                + "using node.js mailer</p>"
        }

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error)
            }
            else {
                console.log('Email Sent: ' + info.response);
            }
        })
    }
}

