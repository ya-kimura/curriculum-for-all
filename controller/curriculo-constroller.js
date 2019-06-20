const curriculoModel = require('../models/curriculo-model')

exports.getData = () => {
    return curriculoModel
}

exports.getName = () => {
    return curriculoModel.name
}

exports.getTitle = () => {
    return curriculoModel.title
}

exports.getProfession = () => {
    return curriculoModel.profession
}

exports.getDescription = () => {
    return curriculoModel.description
}

exports.getExperience = () => {
    return curriculoModel.experience
}

exports.getName = () => {
    return curriculoModel.education
}

exports.getSkills = () => {
    return curriculoModel.skils
}

