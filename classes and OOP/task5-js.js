class Developer {
    constructor(fullName, age, position) {
        this.fullName = fullName
        this.age = age
        this.position = position
        this.technologies = []
    }
    code() {

    }
    learnNewTechnologies(technology) {
        this.technologies.push(technology)
        return this.technologies
    }
}
class JuniorDeveloper extends Developer {
    constructor(fullName, age, position = 'Junior'){
        super(fullName, age, position = 'Junior')
        this.technologies.push('HTML', 'CSS', 'JavaScript')
    }
    code() {
        console.log(`${this.position} - разработчик пишет код...`)
    }

}
class MiddleDeveloper  extends Developer {
    constructor(fullName, age, position = 'Middle'){
        super(fullName, age, position = 'Middle')
        this.technologies.push('HTML', 'CSS', 'JavaScript', 'React')
    }
    code() {
        console.log(`${this.position} - разработчик пишет код...`)
    }
}
class SeniorDeveloper extends Developer {
    constructor(fullName, age, position = 'Senior'){
        super(fullName, age, position = 'Senior')
        this.technologies.push('HTML', 'CSS', 'JavaScript', 'React', 'NodeJS')
    }
    code() {
        console.log(`${this.position} - разработчик пишет код...`)
    }    
}
const juniorDeveloper = new JuniorDeveloper('Анастасия', 20);
const middleDeveloper = new MiddleDeveloper('Игорь', 25);
const seniorDeveloper = new SeniorDeveloper('Максим', 30);

juniorDeveloper.code(); // Junior разработчик пишет код...
middleDeveloper.code(); // Middle разработчик пишет код...
seniorDeveloper.code(); // Senior разработчик пишет код...

seniorDeveloper.learnNewTechnologies('Docker');

console.log(juniorDeveloper.fullName, juniorDeveloper.age, juniorDeveloper.position, juniorDeveloper.technologies); 
// 'Анастасия' 20 'Junior' ['HTML', 'CSS', 'JavaScript']

console.log(middleDeveloper.fullName, middleDeveloper.age, middleDeveloper.position, middleDeveloper.technologies); 
// 'Игорь' 25 'Middle' ['HTML', 'CSS', 'JavaScript', 'React']

console.log(seniorDeveloper.fullName, seniorDeveloper.age, seniorDeveloper.position, seniorDeveloper.technologies); 
// 'Максим' 30 'Senior' ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS', 'Docker']