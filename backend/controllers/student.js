const Student =require ('../model/studentModel')

const createStudent = async (req, res) => {
    try {
        const { name, gender, dob, email, mobile, qualification, address, district, state, pin, course, status, certificateFileName } = req.body;

       
        const existingStudent = await Student.findOne({ email });
        if (existingStudent) {
            return res.status(400).json({ message: 'Email already registered' });
        }

  
        const newStudent = new Student({
            name,
            gender,
            dob,
            email,
            mobile,
            qualification,
            address,
            district,
            state,
            pin,
            course,
            status: status || 'Pending', 
            certificateFileName: certificateFileName || null
        });

        await newStudent.save();
        res.status(201).json({ message: 'Student registered successfully', student: newStudent });

    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};


const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();

        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};



module.exports = { createStudent,getAllStudents };



