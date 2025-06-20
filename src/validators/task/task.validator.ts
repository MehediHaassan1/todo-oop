import Joi from "joi";

class TaskValidator {
    public createTaskValidator = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().optional().allow(''),
        status: Joi.string().valid('pending', 'in-progress', 'completed').default('pending').optional(),
        due_date: Joi.date().optional().allow(null),
        priority: Joi.string().valid('low', 'medium', 'high').default('low').optional()
    })
}

export default TaskValidator;