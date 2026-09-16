export function isValidTodoTitle(title) {
    if (typeof title !== 'string') {
        return false;
    }

    const trimmedTitle = title.trim();

    return (
        trimmedTitle.length > 0 &&
        trimmedTitle.length <= 200
    );
}