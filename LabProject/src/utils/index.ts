export const getUserGreetingMessage = (userName: string): string => {
    const currentDate: Date = new Date();
    let greetingMessage: string = 'Good ';

    if (currentDate.getHours() < 12) {
        greetingMessage = greetingMessage.concat('morning');
    } else if (currentDate.getHours() < 18) {
        greetingMessage = greetingMessage.concat('afternoon');
    } else {
        greetingMessage = greetingMessage.concat('evening');
    }

    return `${greetingMessage}, ${userName}! | ${currentDate.toLocaleDateString()}`;
};
