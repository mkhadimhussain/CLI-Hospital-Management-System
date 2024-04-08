#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let patients: any[] = [];
let condition: boolean = true;

console.log("\n");
console.log(chalk.bgGray("                      "+(chalk.bgRed.bold("W")+" "+chalk.bgRed.bold("E")+" "+chalk.bgRed.bold("L")+" "+chalk.bgRed.bold("C")
+" "+chalk.bgRed.bold("O")+" "+chalk.bgRed.bold("M")+" "+chalk.bgRed.bold("E")+"        "+chalk.bgRed.bold("T")
+" "+chalk.bgRed.bold("O")+"                            ")));

console.log("\n");
console.log(chalk.bgRed.bold("K   K  ")+chalk.bgGray.bold(" H    H   OOO    SSSS   PPPP  IIIII TTTTT  A    L        ",chalk.bgRed("++++")+chalk.bgGray("     ")));
console.log(chalk.bgRed.bold("K  K   ")+chalk.bgGray.bold(" H    H  O   O  S       P   P   I     T   A A   L     ",chalk.bgRed("++++  ++++")+chalk.bgGray("  ")));
console.log(chalk.bgRed.bold("K K    ")+chalk.bgGray.bold(" HHHHHH  O   O   SSS    PPPP    I     T  AAAAA  L     ",chalk.bgRed("++++  ++++")+chalk.bgGray("  ")));  
console.log(chalk.bgRed.bold("K  K   ")+chalk.bgGray.bold(" H    H  O   O      S   P       I     T  A   A  L        ",chalk.bgRed("++++")+chalk.bgGray("     ")));
console.log(chalk.bgRed.bold("K   K  ")+chalk.bgGray.bold(" H    H   OOO    SSSS   P     IIIII   T  A   A  LLLLL              "));

console.log("\n");
console.log(chalk.bgGray("                     "+(chalk.bgRed.bold("HOSPITAL")+"    "+chalk.bgRed.bold("MANAGEMENT")+"    "+chalk.bgRed.bold("SYSTEM")+"                     ")));

// For Registeration
console.log(chalk.bgCyan.bold("\n*********REGISTERATION*********"));
let registeration = await inquirer.prompt(
    [   
        // for registeration name
        {
            name: "registerationName",
            message: "\nEnter Your Name:",
            type: "input",
            validate: (input:string) => {
                if (!input.trim()) {
                    return `Name cannot be Emptyt.`;
                }
                return true;
            },
        },  
        // for registeration password
        {
            name: "registerationpassword",
            message: "\nEnter Your Password:",
            type: "password",
            validate: (input:string) => {
                if (!input.trim()) {
                    return `Password Cannot be Empty.`;
                }
                return true;
            },
        }
    ]
);
console.log(chalk.bgGreen.bold("\nRegisterd Successfully!"));
console.log(("\n----------------------------------------------------"));

// for login
console.log(chalk.bgCyan.bold("\n***********LOGIN***********"));
let login = await inquirer.prompt(
    [
        {
            name: "loginName",
            message: "\nEnter Your Username:",
            type: "input",
            validate: (input:string) => {
                if (!input.trim()) {
                    return `Username Cannot be Empty.`;
                }
                return true;
            },
        },
        {
            name: "loginpassword",
            message: "\nEnter Your Password:",
            type: "password",
            validate: (input:string) => {
                if (!input.trim()) {
                    return `Password Cannot be Empty.`;
                }
                return true;
            },
        }
    ]
);
// for correct username & password

if (login.loginName === registeration.registerationName && login.loginpassword === registeration.registerationpassword) {
    console.log(chalk.bgGreen.bold("\nLogged In Successfully!"));
    console.log(("\n----------------------------------------------------"));
    
    while (condition) {
        let mainPage = await inquirer.prompt(
            [
                {
                    name: "main",
                    message: "\nSelect what do you want to do",
                    type: "list",
                    choices: [
                        "New Patient Record",
                        "View Patient Record",
                        "Modify Patient Record",
                        "Appointment Fee",
                        "About Us",
                        "Exit"
                    ]
                }
            ]
        );
    
        // for New Patient Record
        if (mainPage.main === "New Patient Record") {
            console.log("\n");
            console.log(chalk.bgCyan.bold(mainPage.main));
            console.log("\n");
    
            let newPatientRec = await inquirer.prompt(
                [
                    {
                        name: "patientName",
                        message: "Patient Name:",
                        type: "input",
                        validate: (input:string) => {
                            if (!input.trim()) {
                                return `Patient Name Cannot be Empty.`;
                            }
                            return true;
                        },
                    },
                    {
                        name: "patientAge",
                        message: "Patient Age:",
                        type: "number"
                    },
                    {
                        name: "patientGender",
                        message: "Patient Gender:",
                        type: "list",
                        choices: ["Male", "Female", "Ohters"]
                    },
                    {
                        name: "patientContact",
                        message: "Patient Contact:",
                        type: "number"
                    },
                    {
                        name: "patientDoctor",
                        message: "Patient Doctor:",
                        type: "input",
                        validate: (input:string) => {
                            if (!input.trim()) {
                                return `Patient Doctor Cannot be Empty.`;
                            }
                            return true;
                        },
                    },
                ]
            );
            patients.push(newPatientRec);
            console.log(chalk.bgGreen.bold("\nNew Paient Registerd Successfully!"));
            console.log(("\n----------------------------------------------------"));
    
        }
    
        // for View New Patient Record
        else if (mainPage.main === "View Patient Record") {
            console.log("\n");
            console.log(chalk.bgCyan.bold(mainPage.main));
    
            patients.forEach(patient => {
                console.log(`
                Patient Name: ${patient.patientName}
                Patient Age: ${patient.patientAge}
                Patient Gender: ${patient.patientGender}
                Patient Contact: ${patient.patientContact}
                Patient Doctor: ${patient.patientDoctor}
                `);
            });
            console.log(("\n----------------------------------------------------"));
                
    
        // for Modify Patient Record
        } else if (mainPage.main === "Modify Patient Record") {
            console.log("\n");
            console.log(chalk.bgCyan.bold(mainPage.main));
    
            let modifyRecord : any = await inquirer.prompt(
                [
                    {
                        name: "modifyAns",
                        message: "\nSelect what you want to modify.",
                        type: "list",
                        choices: [
                            "Patient Name",
                            "Patient Age",
                            "Patient Gender",
                            "Patient Contact",
                            "Patient Doctor"
                        ]
                    }
                ]
            );
    
            let modificationAns = await inquirer.prompt(
                [
                    {
                        name: "modification",
                        message: "\nEnter for Modification:",
                        type: "input"
                    }
                ]
            );
    
            // Find the index of the patient in the patients array
            let patientIndex = patients.findIndex(patient => patient.patientID === modifyRecord.patientID);
    
            if (patientIndex !== -1) {
            // Modify the patient record
    
            switch (modifyRecord.modifyAns) {
                case "Patien tName":
                    patients[patientIndex].patientName = modificationAns.modification;
                    break;
                case "Patient Age":
                    patients[patientIndex].patientAge = parseInt(modificationAns.modification);
                    break;
                case "Patient Gender":
                    patients[patientIndex].patientGender = modificationAns.modification;
                    break;
                case "Patient Contact":
                    patients[patientIndex].patientContact = modificationAns.modification;
                    break;
                case "Patient Doctor":
                    patients[patientIndex].patientDoctor = modificationAns.modification;
                    break;
                default:
                    console.log(chalk.bgRed.bold("\nInvalid modification option."));
            }
    
            patients.forEach(patients => {
                console.log(`
                Patient Name: ${patients.patientName}
                Patient Age: ${patients.patientAge}
                Patient Gender: ${patients.patientGender}
                Patient Contact: ${patients.patientContact}
                Patient Doctor: ${patients.patientDoctor}
                `);
    
            })
    
            console.log(chalk.bgGreenBright.bold("\nModification Process Completed Successfully!"));
    
            } else {
            console.log("\nPatient not found.");
            }
    
            console.log(("\n----------------------------------------------------"));
           
        // for Appointment Fee
        } else if (mainPage.main === "Appointment Fee") {
            console.log("\n");
            console.log(chalk.bgCyan.bold(mainPage.main));
    
            const fee: number = 800;
            console.log(chalk.underline("\nPlease Pay The Appointment Fee."));
            console.log(chalk.underline(`The Appointment Fee is ${fee}.`));
            let payFee = await inquirer.prompt(
                [
                    {
                        name: "amount",
                        message: "\nEnter the Amount for Paying the Fee:",
                        type: "number"
                    }
                ]
            );
            if (payFee.amount >= 800) {
                let remainingAmount: number = payFee.amount - fee;
                console.log(chalk.bgGray.underline.bold`Remainining Amount:`+`${chalk.bgCyan.bold(remainingAmount)}`);
                console.log(chalk.bgGreenBright.bold("\nFee is Submitted Successfully!"));
            } else {
                console.log(chalk.bgRed.bold("\nInsufficient Amount."));
                console.log(chalk.bgRed.bold("\nPlease Pay The Full Fee."));
            }
    
            console.log(("\n----------------------------------------------------"));
    
        } else if (mainPage.main === "About Us") {
            console.log("\n");
            console.log(chalk.bgCyan.bold(mainPage.main));
    
            let aboutUs = await inquirer.prompt(
                [
                    {
                        name: "aboutUsAns",
                        message: "\nSelect what do you want know about us:",
                        type: "list",
                        choices: ["Doctor's", "Nurse's", "Peon's", "Other Staff"]
                    }
                ]
            );
            if (aboutUs.aboutUsAns === "Doctor's") {
                console.log("\n");
                console.log(chalk.bgCyan.bold(aboutUs.aboutUsAns));
    
                console.log(chalk.bgGray.underline.bold("\nThere are Total 80 Highly Qulaified Doctor;s in Our Hospital, who are Specialist in their field."));
                console.log(chalk.underline("\nOur Top 10 most Senior Doctor's with Specializations are:"));
                console.log(`\n
                    1) Dr. Sarah Khalid - Pediatrics
                    2) Dr. Mehmood Naeem - Cardiology
                    3) Dr. Amir Saleem - Neurology
                    4) Dr. Saif Zafar - Orthopedics
                    5) Dr. Ayesha Riyaz - Dermatology
                    6) Dr. Hira Shahid - Psychiatry
                    7) Dr. Maria Khalil - Obstetrics and Gynecology
                    8) Dr. Nasir Zain - Oncology
                    9) Dr. Qaiser Rafiq - Endocrinology
                    10) Dr. Hikmat Jamal - Gastroenterology
                    `);
    
    
            } else if (aboutUs.aboutUsAns === "Nurse's") {
                console.log("\n");
                console.log(chalk.bgCyan.bold(aboutUs.aboutUsAns));
    
                console.log(chalk.bgGray.underline.bold("\nThere are Total 100 Qulaified Nurse's in Our Hospital, who taking care off Patients day and night."));
                console.log(chalk.underline("\nOur Top 10 most Senior Nurse's with Specializations are:"));
                console.log(`\n
                    1) Nurse Mehreen Danish - Pediatric Nursing
                    2) Nurse Asif Ahsan - Critical Care Nursing
                    3) Nurse Sania Irfan - Emergency Nursing
                    4) Nurse Shahzaib Ibrar - Surgical Nursing
                    5) Nurse Zoha Adnan - Mental Health Nursing
                    6) Nurse Hamza Arshad - Community Health Nursing
                    7) Nurse Nasreen Jamil - Oncology Nursing
                    8) Nurse Siraj Malook - Geriatric Nursing
                    9) Nurse Sajjal Raees - Obstetric Nursing
                    10) Nurse Hamid Azam - Cardiac Nursing
                `)
                
    
    
            } else if (aboutUs.aboutUsAns === "Peon's") {
                console.log("\n");
                console.log(chalk.bgCyan.bold(aboutUs.aboutUsAns));
    
                console.log(chalk.bgGray.underline.bold("\nThere are Total 150+ well mannered Peon's in Our Hospital, who are doing hard work for Patients day and night."));
                console.log(chalk.underline("\nOur Top 10 most Senior Peons's with Specializations are:"));
                console.log(`\n
                1) Adnan Amir - Hospital Maintenance
                2) Neha Saif - Patient Transport
                3) Jamil Jalil - Ward Support
                4) Sumbhul Sameer - Records Management
                5) Rajesh Patel - Hospital Security
                6) Shehnaz Moiz - Environmental Services
                7) Haroon Aqeel - Equipment Maintenance
                8) Mehwish Habib - Front Desk
                9) Nadeem Wali - Inventory Control
                10) Adeel Rizwan - Transport Coordination
                `)
    
                
            } else if (aboutUs.aboutUsAns === "Other Staff") {
                console.log("\n");
                console.log(chalk.bgCyan.bold(aboutUs.aboutUsAns));
                
                console.log(chalk.bgGray.underline.bold("\nThere are Total 100+ well mannered Other Staff in Our Hospital, who are doing hard work for Patients day and night."));
                console.log(chalk.underline("\nOur Top 10 most Senior Peons's with Specializations are:"));
                console.log(`\n
                1) Mr. Amjad Shaheer - Admin Manager
                2) Ms. Javeria Maqsood - HR Coordinator
                3) Mr. Arif Majeed - Finance Director
                4) Ms. Rimsha Nawaz - PR Specialist
                5) Mr. Babar Anas - IT Support
                6) Ms. Rabeeca Naveed - Billing Specialist
                7) Mr. Daniyal Ayaz - Facilities Manager
                8) Ms. Hafsa Salar - Quality Officer
                9) Mr. Yasir Fahad - Pharmacy Manager
                10) Ms. Kainat Asad - Nutritionist
                `)
    
                
            }
    
            console.log(("\n----------------------------------------------------"));
    
    
        // for Exit
        } else if (mainPage.main === "Exit") {
            console.log("\n");
            console.log(chalk.bgRed.bold(mainPage.main));
            condition = false;
        }


} // loop end here

// for Incorrext username
} else if (login.loginpassword === registeration.registerationpassword && login.loginName !== registeration.registerationName) {
    console.log(chalk.bgRed.bold("\nIncorrect Username!"));

// for incorrect password
} else if (login.loginName === registeration.registerationName && login.loginpassword !== registeration.registerationpassword) {
    console.log(chalk.bgRed.bold("\nIncorrect Password!"));

// for incorrect both username and password
} else {
    console.log(chalk.bgRed.bold("\nIncorrect Both Username & Password!"));
}


