class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = new Array(25).fill(undefined);
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    getAverageGrade() {
        if (this.grades.length === 0) {
            return 0;
        }
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return sum / this.grades.length;
    }

    present() {
        if (this.attendance.filter(Boolean).length < 25) {
            this.attendance.push(true);
        } else {
            console.log("Массив посещаемости уже содержит максимальное количество записей.");
        }
    }

    absent() {
        if (this.attendance.filter(Boolean).length < 25) {
            this.attendance.push(false);
        } else {
            console.log("Массив посещаемости уже содержит максимальное количество записей.");
        }
    }

    summary() {
        const averageGrade = this.getAverageGrade();
        const attendancePercentage = this.attendance.filter(Boolean).length / 25;

        if (averageGrade > 90 && attendancePercentage > 0.9) {
            return "Молодец!";
        } else if (averageGrade > 90 || attendancePercentage > 0.9) {
            return "Хорошо, но можно лучше!";
        } else {
            return "Редиска!";
        }
    }
}

const student1 = new Student("Артем", "Петров", 1995);
const student2 = new Student("Анастасия", "Іванова", 1997);

student1.grades = [90, 95, 85, 100];
student2.grades = [85, 88, 92, 90];

student1.present();
student1.present();
student1.absent();
student2.present();
student2.absent();
student2.present();
student2.present();
student2.present();

console.log("Студент 1:");
console.log("Возраст:", student1.getAge());
console.log("Середний бал:", student1.getAverageGrade());
console.log("Итоговая оценка:", student1.summary());

console.log("Студент 2:");
console.log("Возраст:", student2.getAge());
console.log("Середний бал:", student2.getAverageGrade());
console.log("Итоговая оценка:", student2.summary());