export const fromUnixTimestamp = (timestamp: number) : Date => {
    return new Date(timestamp * 1000);
};
