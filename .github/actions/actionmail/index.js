var nodemailer = require("nodemailer");
let core = require("@actions/core");

let AuthorMail = core.getInput("AuthorMail");
let AuthorPasswd = core.getInput("AuthorPasswd");
let RecipientMail = core.getInput("RecipientMail");
let SyntaxCheck = core.getInput("SyntaxCheck");
let TestExecution = core.getInput("TestExecution");
let BuildStatics = core.getInput("BuildStatics");
let Deploy = core.getInput("Deploy");

function check_skipped(job) {
    if (job == "") {
        job = "skipped";
    }
    return job;
}

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: AuthorMail,
        pass: AuthorPasswd
    }
});

var mailOptions = {
    from: AuthorMail,
    to: RecipientMail,
    subject: "Resultado del workflow ejecutado",
    text: `Se ha realizado un push en la rama githubActions_improvement que
  ha provocado la ejecución del workflow Bingo_Workflow con los
  siguientes resultados: \n 
  syntax_check_job: ${check_skipped(SyntaxCheck)}\n
  test_execution_job: ${check_skipped(TestExecution)}\n 
  build_statics_job: ${check_skipped(BuildStatics)}\n 
  deploy_job: ${check_skipped(Deploy)}`,
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    }
});
