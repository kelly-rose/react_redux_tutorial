/**
 * Created by siri on 2017-06-23.
 */
const team={
    members :['Jane','Bill'],
    teamName :'Super Squad',
    teamSummary:function () {
        // let self = this;
        return this.members.map(member => `${member} is on team ${this.teamName}`);
    }
};

const sample=team.teamSummary();

console.log(sample);

const profile = {
    name: 'Alex',
    getName:function () {
        return this.name
    }
};

const fibonacci = n => {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
