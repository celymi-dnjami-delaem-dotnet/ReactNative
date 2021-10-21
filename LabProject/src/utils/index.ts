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

export const formatPrice = (price: number): string =>
    `$${price.toLocaleString('en-US', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}`;

export const getTotalPrice = (...prices: number[]): string => {
    if (!prices || !prices.length) {
        return '';
    }

    const startPrice: number = 0;
    const totalPrice: number = prices.reduce((acc, x) => acc + x, startPrice);

    return formatPrice(totalPrice);
};
