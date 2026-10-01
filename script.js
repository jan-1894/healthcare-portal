// =====================================================
// HEALTHCARE APPOINTMENT & PATIENT PORTAL
// =====================================================


// Get the form

const patientForm =
    document.getElementById("patientForm");


// Appointment counter

let appointmentNumber = 1001;


// =====================================================
// FORM SUBMIT
// =====================================================

patientForm.addEventListener(
    "submit",
    function (event) {

        // Prevent page refresh

        event.preventDefault();


        // Check HTML5 validation

        if (!patientForm.checkValidity()) {

            patientForm.classList.add(
                "was-validated"
            );

            return;

        }


        // =================================================
        // GET PATIENT DETAILS
        // =================================================

        const patientName =
            document.getElementById(
                "patientName"
            ).value.trim();


        const email =
            document.getElementById(
                "email"
            ).value.trim();


        const mobile =
            document.getElementById(
                "mobile"
            ).value.trim();


        const dob =
            document.getElementById(
                "dob"
            ).value;


        const bloodGroup =
            document.getElementById(
                "bloodGroup"
            ).value;


        const department =
            document.getElementById(
                "department"
            ).value;


        const doctor =
            document.getElementById(
                "doctor"
            ).value;


        const appointmentDate =
            document.getElementById(
                "appointmentDate"
            ).value;


        const appointmentTime =
            document.getElementById(
                "appointmentTime"
            ).value;


        const address =
            document.getElementById(
                "address"
            ).value.trim();


        const symptoms =
            document.getElementById(
                "symptoms"
            ).value.trim();


        // =================================================
        // GET GENDER
        // =================================================

        const genderElement =
            document.querySelector(
                'input[name="gender"]:checked'
            );


        const gender =
            genderElement
                ? genderElement.value
                : "Not specified";


        // =================================================
        // CREATE APPOINTMENT ID
        // =================================================

        const appointmentId =
            "APT" + appointmentNumber;


        appointmentNumber++;


        // =================================================
        // ADD APPOINTMENT TO TABLE
        // =================================================

        const appointmentTable =
            document.getElementById(
                "appointmentTable"
            );


        // Remove "No appointments" message

        const noAppointment =
            document.getElementById(
                "noAppointment"
            );


        if (noAppointment) {

            noAppointment.remove();

        }


        // Create table row

        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>
                <strong>${appointmentId}</strong>
            </td>

            <td>
                ${patientName}
            </td>

            <td>
                ${department}
            </td>

            <td>
                ${doctor}
            </td>

            <td>
                ${appointmentDate}
            </td>

            <td>
                ${appointmentTime}
            </td>

            <td>

                <span class="status-badge">
                    Confirmed
                </span>

            </td>

        `;


        appointmentTable.appendChild(row);


        // =================================================
        // DISPLAY HEALTH INFORMATION
        // =================================================

        const healthInformation =
            document.getElementById(
                "healthInformation"
            );


        healthInformation.innerHTML = `

            <div class="col-12">

                <div class="card health-card">

                    <div class="card-body">

                        <div class="row g-3">

                            <div class="col-md-4">

                                <div class="health-item">

                                    <small>
                                        Patient Name
                                    </small>

                                    <strong>
                                        ${patientName}
                                    </strong>

                                </div>

                            </div>


                            <div class="col-md-4">

                                <div class="health-item">

                                    <small>
                                        Blood Group
                                    </small>

                                    <strong>
                                        ${bloodGroup}
                                    </strong>

                                </div>

                            </div>


                            <div class="col-md-4">

                                <div class="health-item">

                                    <small>
                                        Department
                                    </small>

                                    <strong>
                                        ${department}
                                    </strong>

                                </div>

                            </div>


                            <div class="col-md-4">

                                <div class="health-item">

                                    <small>
                                        Doctor
                                    </small>

                                    <strong>
                                        ${doctor}
                                    </strong>

                                </div>

                            </div>


                            <div class="col-md-4">

                                <div class="health-item">

                                    <small>
                                        Appointment Date
                                    </small>

                                    <strong>
                                        ${appointmentDate}
                                    </strong>

                                </div>

                            </div>


                            <div class="col-md-4">

                                <div class="health-item">

                                    <small>
                                        Appointment Time
                                    </small>

                                    <strong>
                                        ${appointmentTime}
                                    </strong>

                                </div>

                            </div>


                            <div class="col-md-6">

                                <div class="health-item">

                                    <small>
                                        Symptoms / Health Concern
                                    </small>

                                    <strong>
                                        ${symptoms}
                                    </strong>

                                </div>

                            </div>


                            <div class="col-md-6">

                                <div class="health-item">

                                    <small>
                                        Appointment Status
                                    </small>

                                    <strong class="text-success">

                                        Confirmed

                                    </strong>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        `;


        // =================================================
        // SHOW SUCCESS MESSAGE
        // =================================================

        const successMessage =
            document.getElementById(
                "successMessage"
            );


        successMessage.classList.add(
            "show"
        );


        // =================================================
        // SCROLL TO APPOINTMENTS
        // =================================================

        document
            .getElementById("appointments")
            .scrollIntoView({
                behavior: "smooth"
            });


        // =================================================
        // RESET FORM
        // =================================================

        patientForm.reset();

        patientForm.classList.remove(
            "was-validated"
        );

    }
);



// =====================================================
// RESET BUTTON
// =====================================================

document
    .getElementById("resetButton")
    .addEventListener(
        "click",
        function () {

            patientForm.classList.remove(
                "was-validated"
            );

        }
    );