export default function cutOff(origin: string, maxLength: number) {
    if (!Number.isInteger(maxLength) || maxLength <= 0)
        throw new Error("Invalid maxLength arugment");
    return origin.length >= maxLength
        ? `${origin.slice(0, maxLength - 1)}…`
        : origin;
}
