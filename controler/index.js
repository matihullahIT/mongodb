import student_scheema from '../Modle/studentschems.js';

export async function EnterData(req, res) {
    const { name, email, section, semester } = req.body; // Destructure fields from req.body
    const student = new student_scheema({
        name,
        email,
        section,
        semester,
    });

    try {
        const data = await student.save();
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err); // Send proper error response
    }
}