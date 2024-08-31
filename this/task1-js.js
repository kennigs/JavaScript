const student = { 
    stack: ['HTML'],
    level: 1,
    improveLevel() {
        if(this.level === 2) {
            this.stack.push('CSS')
            this.level++
            return this
        }
        else if(this.level === 3) {
            this.stack.push('JavaScript')
            this.level++
            return this
        }
        else if(this.level === 4) {
            this.stack.push('React')
            this.level++
            return this
        }
        else if(this.level === 5) {
            this.stack.push('NodeJS')
            this.level++
            return this
        }
        else if(this.level >= 6) {
            alert(`Студент выучил все технологии!`)
            this.level++
            return this
        }
        return this.level++
    }
}
student.improveLevel()
student.improveLevel()
student.improveLevel()
student.improveLevel()
student.improveLevel()
console.log(student.stack)
console.log(student.level)