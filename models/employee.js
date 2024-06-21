//Child Schema that references parent by ID and also had embedded sub-document address object


const { Schema } = require('mongoose')

const Employee = new Schema(
    {
        company_id: { type: Schema.Types.ObjectId, ref: 'company_id' },
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        email: { type: String, required: true },
        job_title: { type: String, required: true },
        salary_in_usd: { type: Number, required: true },
    }
)
   
const subdocumentSchema = new Schema({
    address: new Schema({
            street: { type: String, required: true },
            city: { type: String, required: true },
            state: { type: String, required: true },
            zip: { type: Number, required: true }
        })
    },
    {timestamps: true}
)

//exporting 
module.exports = Employee
