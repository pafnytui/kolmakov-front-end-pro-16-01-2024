function getUserInfo() {
    let yearOfBirth = +prompt('Введите ваш год рождения');

    if(Number.isNaN(yearOfBirth)){
        alert('Ошибка, перезагрузите страницу и введите год рождения числом');
        return;
    }

    let city = prompt('В каком городе вы живете?');

    let country = '';

    let sport = prompt('Введите Ваш любимый вид спорта');

    let sportsChampions = {
        'баскетбол': 'Майклом Джорданом',
        'футбол': 'Криштину Роналду',
        'бокс': 'Майком Тайсоном',
    };

    if ((yearOfBirth && city) || sport) {
        let currentYear = new Date().getFullYear();

        let age = currentYear - yearOfBirth;

        let message = `Возраст: ${age}\n`;

        if (city === "Киeв" || city === "Вашингтон" || city === "Лондон") {

            switch (city) {
                case "Киев":
                    country = "Украины";
                    break;
                case "Вашингтон":
                    country = "США";
                    break;
                case "Лондон":
                    country = "Великобритании";
                    break;
                default:
                    break;
            }

            message += `Ты живешь в столице ${country}\n`;
        } else {
            message += `Ты живешь в городе ${city}\n`;
        }

        if (sportsChampions[sport]) {
            message += `Круто! Хочешь стать ${sportsChampions[sport]}?`;
        } else if(sport.trim() === '') {
            message += 'Жаль что вы не увлекаитесь спортом :(';
        } else {
            message += `Ваш любимый вид спорта ${sport}`;
        }

        return alert(message);
    } else {
        return alert('Жаль что вы не захотели ввести Ваш год рождения, город или вид спорта');
    }
}

getUserInfo();