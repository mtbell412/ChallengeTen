//create class for Engineer
class Engineer {
    constructor(name, id, email, github){
        this.name = name;
        this.id = id;
        this.email =email;
        this.github = github;
    }

    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getGetgithub(){
        this.github;
    }
    getRole(){
        return "Engineer";
    }

}

module.exports = Engineer;