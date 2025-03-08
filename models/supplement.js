const exp = require("constants");
const mongoose = require("mongoose");
const { type } = require("os");

const categoryExcercise = {
    "Better Sleep": ["5-HTP", "Ashwagandha", "Chamomile Extract", "GABA", "L-Theanine", "Magnesium Bisglycinate", "Magnolia Bark", "Melatonin"],
    "Fiber": ["Flohsamen", "Leinsamen (Gold)", "Leinsamen (normal)"],
    "Flüssigkeit": ["Hafermilch", "Mandelmilch", "Milch (1.5% Fett)", "Milch (Vollmilch)"],
    "Gut Health & Digestion": ["Aloe Vera Juice", "Apple Cider Vinegar", "Artichoke Extract", "Berberine", "Bromelain"],

}
const supplementSch = mongoose.Schema({
    category: {
        type: String, required: true,
        enum: {
            values: ["Better Sleep", "Fiber", "Flüssigkeit", "Gut Health & Digestion"],
            message: "category must be one of the predifined values"
        }
        
    },
    supplement: {
        type: String, required: true,
        validate: {
            validator: function (supplement) {
                return categoryExcercise[this.category]?.includes(supplement)
                
            },
             message: "supplement must be one of the predifined values"
           
        }
    },
    Time: {

        StartDate: {
            type: String,
            required: true,
            // min: [0, 'Hours cannot be less than 0'],
            // max: [23, 'Hours cannot be more than 23']
        },
        Type: {
            type: String,
            required: true,
            enum: {
                values: ["Pills", "Liquid", "Powder", "Sachet"],
                message: "Type must be one of the predifined values"
            },

            // min: [0, 'Seconds cannot be less than 0'],
            // max: [59, 'Seconds cannot be more than 59']
        }
    },
    Intake: {
        Amount: {
            type: Number, required: true
        },
        Daily: {
            type: Number, required: true
        }
    },
    company: {
        type: String, required: true
    },
    Source: {
        type: String, required: true
    }
});
const Supplement = mongoose.model("Supplement", supplementSch);
module.exports = Supplement;