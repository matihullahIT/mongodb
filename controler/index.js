import student_scheema from '../Modle/studentschems.js';

export async function getconection(res){
    res.send('connection is working'); // Send a response indicating connection
}
export async function EnterData(req, res) {
    const { name, email, section, semester } = req.body; // Destructure fields from req.body
    const student = new student_scheema({
        name,
        email,
        section,
        semester,
    });

    try {
        const data = await student.save(); // Save the student data
        res.status(200).json(data); // Send success response
    } catch (err) {
        console.error(err); // Log the error
        res.status(500).json({ error: 'Failed to save data' }); // Send error response
    }
}