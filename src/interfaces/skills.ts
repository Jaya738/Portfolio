export interface Skills {
    title: string,
    skillsList: Array<Skill>
}

export interface Skill {
    name: string,
    percent : number
}

export const skillsData = {
    title: "Skills",
    skillsList: [
        {
            "name": "HTML",
            "percent": 90
        },
        {
            "name": "Java Script",
            "percent": 80
        },
        {
            "name": "css",
            "percent": 85
        }
    ]
}
export const languagesData = {
    title : "Languages",
    skillsList: [
        {
            "name": "Telugu",
            "percent": 80
        },
        {
            "name": "English",
            "percent": 70
        },
        {
            "name": "Hindi",
            "percent": 60
        }
    ]
}