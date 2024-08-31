class Dictionary {
    constructor(name) {
        this.name = name
        this.words = {}
    }
        add(word, description) {
        if(!this.words.hasOwnProperty(word)) {
            this.words[word] = { word, description }
        }
        }
        remove(word) {
            delete  this.words[word]
        }
        get(word) {
            return this.words[word]
        }
        showAllWords() {
            for(let key of Object.keys(this.words)) {
                console.log(`${key} - ${this.words[key].description}`)
            }
        }
    }
class HardWordsDictionary extends Dictionary {
    constructor(name, Dictionary ) {
        super(Dictionary)
    }
    add(word, description) {
        if(!this.words.hasOwnProperty(word)) {
            this.words[word] = { word, description, isDifficult: true }
        }
    }
}
const dictionary = new Dictionary('Толковый словарь')
dictionary.add('JavaScript', 'популярный язык программирования')
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие')
dictionary.remove('JavaScript')
dictionary.showAllWords()
console.log(dictionary.words)
const hardWordsDictionary = new HardWordsDictionary('Сложные слова')
    
hardWordsDictionary.add('дилетант', `Тот, кто занимается наукой или искусством без 
специальной подготовки, обладая только поверхностными знаниями.`)
    
hardWordsDictionary.add('неологизм', `Новое слово или выражение, а также новое 
значение старого слова.`)
    
hardWordsDictionary.add('квант', `Неделимая часть какой-либо величины в физике.`)
    
hardWordsDictionary.remove('неологизм')
    
hardWordsDictionary.showAllWords()

// дилетант - Тот, кто занимается наукой или искусством // без специальной подготовки, обладая только поверхностными знаниями.// квант - Неделимая часть какой-либо величины в физике.
console.log(hardWordsDictionary.words)