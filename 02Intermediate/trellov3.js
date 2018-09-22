let myTodos = {
    day: 'Monday',
    meeting: 0,
    meetDone: 0,

    addMeeting: function (num) {

        this.meeting = this.meeting + num
    },
    summary: function () {
        return `you have ${this.meeting = this.meeting + this.meetDone} meetings today`
    },
    addMeetingDone: function (num) {
        this.meetDone = this.meetDone - num

    },
    resetDay: function () {
        this.meeting = 0
        this.meetDone = 0
    }
}


myTodos.addMeeting(4)
myTodos.addMeetingDone(3)
console.log(myTodos.summary());


//Assignment
//Handle meeting done ----DONE
//Reset fxn




