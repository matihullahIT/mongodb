import mongoose from 'mongoose';
import mongooseSequence from 'mongoose-sequence'; // Import the plugin
const AutoIncrement = mongooseSequence(mongoose); // Pass mongoose to the plugin

const studentdata = mongoose.Schema;

const student = new studentdata(
    {
        id: {
            type: Number,
            unique: true,
            required: true,
            default: 0,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            validate: {
                validator: function (v) {
                    return v.includes('@');
                },
                message: (props) => `${props.value} is not a valid email!`,
            },
        },
        section: {
            type: String,
            enum: ['A', 'B'],
            required: true,
        },
        semester: {
            type: String,
            default: 'BSc',
        },
    },
    { timestamps: true }
);

student.plugin(AutoIncrement, { inc_field: 'id' }); // Use the plugin with the schema

const student_scheema = mongoose.model('newdbs', student);

export default student_scheema;